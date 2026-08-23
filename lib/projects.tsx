import type { ReactNode } from "react";

export type ProjectItem = {
  tag: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  media: ReactNode;
};

export const projects: ProjectItem[] = [
  {
    tag: "Web Platform",
    title: "Retail Operations Platform",
    description: "A unified web platform replacing spreadsheet-based inventory tracking across multiple store locations.",
    problem: "Manual stock tracking caused frequent errors",
    solution: "Real-time sync with role-based dashboards",
    result: "Fewer stock discrepancies, faster reporting",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    media: (
      <svg viewBox="0 0 300 220" width="70%">
        <rect x="20" y="20" width="260" height="180" rx="14" fill="#ffffff10" stroke="#ffffff33" />
        <rect x="40" y="44" width="120" height="10" rx="5" fill="#3B5FCC" />
        <rect x="40" y="66" width="80" height="8" rx="4" fill="#ffffff33" />
        <rect x="40" y="96" width="220" height="60" rx="8" fill="#ffffff14" />
        <rect x="40" y="168" width="70" height="20" rx="10" fill="#D8342A" />
      </svg>
    ),
  },
  {
    tag: "Mobile App",
    title: "On-Demand Booking App",
    description: "A cross-platform mobile app that lets customers browse, book and pay for services in a few taps.",
    problem: "No easy way to book services on the go",
    solution: "Mobile app with live scheduling and payments",
    result: "Smoother booking flow, fewer missed slots",
    stack: ["React Native", "Firebase", "Stripe"],
    media: (
      <svg viewBox="0 0 300 220" width="55%">
        <rect x="105" y="14" width="90" height="192" rx="18" fill="#ffffff10" stroke="#ffffff33" />
        <rect x="120" y="34" width="60" height="8" rx="4" fill="#3B5FCC" />
        <rect x="120" y="52" width="60" height="60" rx="8" fill="#ffffff14" />
        <rect x="120" y="122" width="60" height="8" rx="4" fill="#ffffff33" />
        <circle cx="150" cy="170" r="16" fill="#D8342A" />
      </svg>
    ),
  },
  {
    tag: "AI Solution",
    title: "AI Support Assistant",
    description: "A trained AI assistant that resolves common support tickets automatically and routes the rest to the right team.",
    problem: "Support team overwhelmed by repetitive tickets",
    solution: "AI assistant trained on the support knowledge base",
    result: "Faster first response, lighter team workload",
    stack: ["Python", "Vector Search", "LLM API"],
    media: (
      <svg viewBox="0 0 300 220" width="65%">
        <circle cx="150" cy="110" r="60" fill="#ffffff10" stroke="#ffffff33" />
        <circle cx="150" cy="110" r="14" fill="#3B5FCC" />
        <circle cx="90" cy="70" r="7" fill="#D8342A" />
        <circle cx="210" cy="70" r="7" fill="#ffffff55" />
        <circle cx="90" cy="150" r="7" fill="#ffffff55" />
        <circle cx="210" cy="150" r="7" fill="#D8342A" />
        <line x1="150" y1="110" x2="90" y2="70" stroke="#ffffff40" />
        <line x1="150" y1="110" x2="210" y2="70" stroke="#ffffff40" />
        <line x1="150" y1="110" x2="90" y2="150" stroke="#ffffff40" />
        <line x1="150" y1="110" x2="210" y2="150" stroke="#ffffff40" />
      </svg>
    ),
  },
  {
    tag: "Custom Software",
    title: "Field Operations Management Suite",
    description: "A custom system for scheduling field teams, tracking job status and syncing with billing.",
    problem: "Disconnected spreadsheets across departments",
    solution: "One custom platform connecting scheduling & billing",
    result: "Fewer scheduling conflicts, faster invoicing",
    stack: ["Vue.js", "Django", "MySQL"],
    media: (
      <svg viewBox="0 0 240 200" width="70%">
        <rect x="10" y="10" width="100" height="80" rx="10" fill="#ffffff14" />
        <rect x="130" y="10" width="100" height="80" rx="10" fill="#ffffff10" />
        <rect x="10" y="110" width="100" height="80" rx="10" fill="#ffffff10" />
        <rect x="130" y="110" width="100" height="80" rx="10" fill="#ffffff14" />
        <circle cx="60" cy="50" r="14" fill="#3B5FCC" />
        <circle cx="180" cy="150" r="14" fill="#D8342A" />
      </svg>
    ),
  },
];
