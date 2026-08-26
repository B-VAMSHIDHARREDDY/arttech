"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="admin-tabnav" aria-label="Admin sections">
      <Link href="/admin" className={pathname === "/admin" ? "active" : ""}>
        Reviews
      </Link>
      <Link href="/admin/projects" className={pathname === "/admin/projects" ? "active" : ""}>
        Projects
      </Link>
    </nav>
  );
}
