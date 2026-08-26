import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth";
import { addProject, getProjects, type ProjectInput } from "@/lib/projects";

async function requireSession() {
  const store = await cookies();
  return isValidSessionToken(store.get(SESSION_COOKIE_NAME)?.value);
}

function validateInput(body: unknown): ProjectInput | null {
  if (!body || typeof body !== "object") return null;
  const { tag, title, description, problem, solution, result, stack, image, link } = body as Record<string, unknown>;
  if (typeof tag !== "string" || !tag.trim()) return null;
  if (typeof title !== "string" || !title.trim()) return null;
  if (typeof description !== "string" || !description.trim()) return null;
  if (typeof problem !== "string" || !problem.trim()) return null;
  if (typeof solution !== "string" || !solution.trim()) return null;
  if (typeof result !== "string" || !result.trim()) return null;
  if (typeof image !== "string" || !image.trim()) return null;
  const stackArr = Array.isArray(stack) ? stack.filter((s) => typeof s === "string") : [];
  return {
    tag,
    title,
    description,
    problem,
    solution,
    result,
    stack: stackArr,
    image,
    link: typeof link === "string" ? link : "",
  };
}

export async function GET() {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  if (!(await requireSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  const input = validateInput(body);
  if (!input) {
    return NextResponse.json({ error: "Invalid project data" }, { status: 400 });
  }
  const project = await addProject(input);
  return NextResponse.json({ project }, { status: 201 });
}
