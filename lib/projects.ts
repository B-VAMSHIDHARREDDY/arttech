import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  image: string;
  link: string;
  createdAt: string;
  updatedAt: string;
};

export type ProjectInput = {
  tag: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  image: string;
  link: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "projects.json");

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "seed-saha",
    tag: "Mobile App",
    title: "Saha — Home Services App",
    description:
      "A mobile app connecting customers with trusted home service professionals — cleaning, repairs, plumbing and electrical work — booked in a few taps.",
    problem: "Finding a reliable home service professional on short notice was slow and unpredictable.",
    solution: "An on-demand mobile app for browsing, booking and tracking home service professionals in real time.",
    result: "Faster bookings and a smoother experience for customers and service providers alike.",
    stack: ["Mobile App", "Live Scheduling", "In-App Payments"],
    image: "/assets/img/projects/saha-mobile.svg",
    link: "",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    id: "seed-livemurrel",
    tag: "E-commerce",
    title: "Livemurrel.com — Fresh Fish Delivery",
    description:
      "An online store for ordering farm-fresh live murrel fish, with category browsing and location-based delivery.",
    problem: "Customers had no reliable way to order fresh, live fish online for doorstep delivery.",
    solution: "A full e-commerce platform for browsing, ordering and delivering fresh fish by location.",
    result: "A live, functioning online fish delivery business reaching customers directly.",
    stack: ["E-commerce", "Live Inventory", "Location-based Delivery"],
    image: "/assets/img/projects/livemurrel-hero.jpg",
    link: "https://livemurrel.com/",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    id: "seed-villagecuts",
    tag: "E-commerce",
    title: "The Village Cuts — Fresh Meat Delivery",
    description: "An online store for ordering fresh, hygienically-packed meat with doorstep delivery.",
    problem: "Customers wanted premium, hygienically-packed meat without a trip to the butcher.",
    solution: "An e-commerce platform for browsing cuts, ordering online and scheduling doorstep delivery.",
    result: "A live online meat delivery business serving customers directly from the website.",
    stack: ["E-commerce", "Order Tracking", "Doorstep Delivery"],
    image: "/assets/img/projects/thevillagecuts-hero.jpg",
    link: "https://thevillagecuts.com/",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
];

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(DEFAULT_PROJECTS, null, 2), "utf-8");
  }
}

export async function getProjects(): Promise<Project[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function saveProjects(projects: Project[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2), "utf-8");
}

function sanitizeInput(input: ProjectInput): ProjectInput {
  return {
    tag: String(input.tag || "").trim().slice(0, 60),
    title: String(input.title || "").trim().slice(0, 140),
    description: String(input.description || "").trim().slice(0, 600),
    problem: String(input.problem || "").trim().slice(0, 300),
    solution: String(input.solution || "").trim().slice(0, 300),
    result: String(input.result || "").trim().slice(0, 300),
    stack: Array.isArray(input.stack)
      ? input.stack.map((s) => String(s).trim().slice(0, 40)).filter(Boolean).slice(0, 8)
      : [],
    image: String(input.image || "").trim().slice(0, 500),
    link: String(input.link || "").trim().slice(0, 500),
  };
}

export async function addProject(input: ProjectInput): Promise<Project> {
  const clean = sanitizeInput(input);
  const now = new Date().toISOString();
  const project: Project = {
    id: randomUUID(),
    ...clean,
    createdAt: now,
    updatedAt: now,
  };
  const projects = await getProjects();
  projects.unshift(project);
  await saveProjects(projects);
  return project;
}

export async function updateProject(id: string, input: ProjectInput): Promise<Project | null> {
  const clean = sanitizeInput(input);
  const projects = await getProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  const updated: Project = {
    ...projects[idx],
    ...clean,
    updatedAt: new Date().toISOString(),
  };
  projects[idx] = updated;
  await saveProjects(projects);
  return updated;
}

export async function deleteProject(id: string): Promise<boolean> {
  const projects = await getProjects();
  const next = projects.filter((p) => p.id !== id);
  if (next.length === projects.length) return false;
  await saveProjects(next);
  return true;
}
