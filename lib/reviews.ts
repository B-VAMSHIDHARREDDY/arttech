import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type Review = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  initials: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewInput = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  photo?: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "reviews.json");

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "seed-1",
    quote:
      "Artech understood our workflow before writing a single line of code. The final platform fit our business exactly, not a generic template.",
    name: "Ravi Kumar",
    role: "Founder, Placeholder Retail Co.",
    rating: 5,
    initials: "RK",
    photo: "",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    id: "seed-2",
    quote:
      "The mobile app they built handles thousands of bookings without a hitch. Communication throughout the project was clear and fast.",
    name: "Sanya Nair",
    role: "Ops Lead, Placeholder Bookings",
    rating: 5,
    initials: "SN",
    photo: "",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    id: "seed-3",
    quote:
      "We came in with a rough idea and Artech shaped it into a real product roadmap, then delivered it in phases we could actually budget for.",
    name: "Aman Verma",
    role: "Director, Placeholder Logistics",
    rating: 5,
    initials: "AV",
    photo: "",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
];

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(DEFAULT_REVIEWS, null, 2), "utf-8");
  }
}

export async function getReviews(): Promise<Review[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    const parsed = JSON.parse(raw) as Review[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function saveReviews(reviews: Review[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function sanitizeInput(input: ReviewInput) {
  const rating = Math.min(5, Math.max(1, Math.round(Number(input.rating) || 5)));
  return {
    name: String(input.name || "").trim().slice(0, 120),
    role: String(input.role || "").trim().slice(0, 160),
    quote: String(input.quote || "").trim().slice(0, 1000),
    rating,
    photo: String(input.photo || "").trim().slice(0, 500),
  };
}

export async function addReview(input: ReviewInput): Promise<Review> {
  const clean = sanitizeInput(input);
  const now = new Date().toISOString();
  const review: Review = {
    id: randomUUID(),
    ...clean,
    initials: initialsFromName(clean.name),
    createdAt: now,
    updatedAt: now,
  };
  const reviews = await getReviews();
  reviews.unshift(review);
  await saveReviews(reviews);
  return review;
}

export async function updateReview(id: string, input: ReviewInput): Promise<Review | null> {
  const clean = sanitizeInput(input);
  const reviews = await getReviews();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  const updated: Review = {
    ...reviews[idx],
    ...clean,
    initials: initialsFromName(clean.name),
    updatedAt: new Date().toISOString(),
  };
  reviews[idx] = updated;
  await saveReviews(reviews);
  return updated;
}

export async function deleteReview(id: string): Promise<boolean> {
  const reviews = await getReviews();
  const next = reviews.filter((r) => r.id !== id);
  if (next.length === reviews.length) return false;
  await saveReviews(next);
  return true;
}
