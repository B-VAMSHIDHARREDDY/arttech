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
      <svg viewBox="0 0 300 220" width="78%">
        <rect x="14" y="14" width="272" height="192" rx="12" fill="#ffffff0d" stroke="#ffffff26" />
        <rect x="14" y="14" width="272" height="26" rx="12" fill="#ffffff12" />
        <circle cx="28" cy="27" r="4" fill="#D8342A" />
        <circle cx="42" cy="27" r="4" fill="#ffffff55" />
        <circle cx="56" cy="27" r="4" fill="#ffffff33" />
        <rect x="92" y="22" width="110" height="10" rx="5" fill="#ffffff1f" />
        <rect x="14" y="40" width="54" height="166" fill="#ffffff08" />
        <rect x="26" y="58" width="30" height="6" rx="3" fill="#3B5FCC" />
        <rect x="26" y="78" width="30" height="6" rx="3" fill="#ffffff33" />
        <rect x="26" y="98" width="30" height="6" rx="3" fill="#ffffff33" />
        <rect x="26" y="118" width="30" height="6" rx="3" fill="#ffffff33" />
        <rect x="80" y="54" width="60" height="40" rx="8" fill="#ffffff14" />
        <rect x="90" y="64" width="24" height="6" rx="3" fill="#3B5FCC" />
        <rect x="90" y="76" width="36" height="8" rx="4" fill="#ffffff40" />
        <rect x="148" y="54" width="60" height="40" rx="8" fill="#ffffff14" />
        <rect x="158" y="64" width="24" height="6" rx="3" fill="#D8342A" />
        <rect x="158" y="76" width="36" height="8" rx="4" fill="#ffffff40" />
        <rect x="216" y="54" width="60" height="40" rx="8" fill="#ffffff14" />
        <rect x="226" y="64" width="24" height="6" rx="3" fill="#3B5FCC" />
        <rect x="226" y="76" width="36" height="8" rx="4" fill="#ffffff40" />
        <rect x="80" y="106" width="196" height="86" rx="8" fill="#ffffff0d" />
        <rect x="96" y="140" width="18" height="44" rx="4" fill="#3B5FCC" />
        <rect x="122" y="124" width="18" height="60" rx="4" fill="#ffffff33" />
        <rect x="148" y="150" width="18" height="34" rx="4" fill="#3B5FCC" />
        <rect x="174" y="112" width="18" height="72" rx="4" fill="#D8342A" />
        <rect x="200" y="134" width="18" height="50" rx="4" fill="#ffffff33" />
        <rect x="226" y="120" width="18" height="64" rx="4" fill="#3B5FCC" />
        <rect x="252" y="144" width="18" height="40" rx="4" fill="#ffffff33" />
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
      <svg viewBox="0 0 300 220" width="46%">
        <rect x="95" y="8" width="110" height="204" rx="22" fill="#ffffff0d" stroke="#ffffff26" />
        <rect x="130" y="8" width="40" height="10" rx="5" fill="#ffffff20" />
        <rect x="107" y="30" width="86" height="10" rx="5" fill="#3B5FCC" />
        <rect x="107" y="46" width="60" height="6" rx="3" fill="#ffffff33" />
        <rect x="107" y="60" width="86" height="16" rx="8" fill="#ffffff14" />
        <circle cx="118" cy="94" r="8" fill="#3B5FCC" />
        <rect x="132" y="90" width="50" height="5" rx="2.5" fill="#ffffff40" />
        <rect x="132" y="99" width="34" height="4" rx="2" fill="#ffffff20" />
        <circle cx="118" cy="120" r="8" fill="#ffffff33" />
        <rect x="132" y="116" width="50" height="5" rx="2.5" fill="#ffffff40" />
        <rect x="132" y="125" width="34" height="4" rx="2" fill="#ffffff20" />
        <circle cx="118" cy="146" r="8" fill="#3B5FCC" />
        <rect x="132" y="142" width="50" height="5" rx="2.5" fill="#ffffff40" />
        <rect x="132" y="151" width="34" height="4" rx="2" fill="#ffffff20" />
        <rect x="95" y="184" width="110" height="28" rx="14" fill="#ffffff12" />
        <circle cx="118" cy="198" r="5" fill="#3B5FCC" />
        <circle cx="140" cy="198" r="5" fill="#ffffff33" />
        <circle cx="162" cy="198" r="5" fill="#ffffff33" />
        <circle cx="184" cy="198" r="5" fill="#ffffff33" />
        <circle cx="185" cy="176" r="15" fill="#D8342A" />
        <path d="M185 170v12M179 176h12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
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
