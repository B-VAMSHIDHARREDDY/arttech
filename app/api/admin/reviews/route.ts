import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth";
import { addReview, getReviews, type ReviewInput } from "@/lib/reviews";

async function requireSession() {
  const store = await cookies();
  return isValidSessionToken(store.get(SESSION_COOKIE_NAME)?.value);
}

function validateInput(body: unknown): ReviewInput | null {
  if (!body || typeof body !== "object") return null;
  const { name, role, quote, rating } = body as Record<string, unknown>;
  if (typeof name !== "string" || !name.trim()) return null;
  if (typeof role !== "string" || !role.trim()) return null;
  if (typeof quote !== "string" || !quote.trim()) return null;
  const ratingNum = Number(rating);
  if (!Number.isFinite(ratingNum) || ratingNum < 1 || ratingNum > 5) return null;
  return { name, role, quote, rating: ratingNum };
}

export async function GET() {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const reviews = await getReviews();
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  const input = validateInput(body);
  if (!input) {
    return NextResponse.json({ error: "Invalid review data" }, { status: 400 });
  }
  const review = await addReview(input);
  return NextResponse.json({ review }, { status: 201 });
}
