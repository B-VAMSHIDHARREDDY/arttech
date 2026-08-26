import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth";
import { deleteReview, updateReview, type ReviewInput } from "@/lib/reviews";

async function requireSession() {
  const store = await cookies();
  return isValidSessionToken(store.get(SESSION_COOKIE_NAME)?.value);
}

function validateInput(body: unknown): ReviewInput | null {
  if (!body || typeof body !== "object") return null;
  const { name, role, quote, rating, photo } = body as Record<string, unknown>;
  if (typeof name !== "string" || !name.trim()) return null;
  if (typeof role !== "string" || !role.trim()) return null;
  if (typeof quote !== "string" || !quote.trim()) return null;
  const ratingNum = Number(rating);
  if (!Number.isFinite(ratingNum) || ratingNum < 1 || ratingNum > 5) return null;
  return { name, role, quote, rating: ratingNum, photo: typeof photo === "string" ? photo : "" };
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const input = validateInput(body);
  if (!input) {
    return NextResponse.json({ error: "Invalid review data" }, { status: 400 });
  }
  const review = await updateReview(id, input);
  if (!review) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }
  return NextResponse.json({ review });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const ok = await deleteReview(id);
  if (!ok) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
