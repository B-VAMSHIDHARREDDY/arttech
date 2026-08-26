import { NextResponse } from "next/server";
import { getReviews } from "@/lib/reviews";

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json({ reviews });
}
