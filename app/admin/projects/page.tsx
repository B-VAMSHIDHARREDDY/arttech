"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/projects";
import AdminNav from "../AdminNav";
import ImageUploadField from "../ImageUploadField";

type FormState = {
  tag: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack: string;
  image: string;
  link: string;
};

const EMPTY_FORM: FormState = {
  tag: "",
  title: "",
  description: "",
  problem: "",
  solution: "",
  result: "",
  stack: "",
  image: "",
  link: "",
};

function toPayload(f: FormState) {
  return {
    tag: f.tag,
    title: f.title,
    description: f.description,
    problem: f.problem,
    solution: f.solution,
    result: f.result,
    stack: f.stack
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    image: f.image,
    link: f.link,
  };
}

function fromProject(p: Project): FormState {
  return {
    tag: p.tag,
    title: p.title,
    description: p.description,
    problem: p.problem,
    solution: p.solution,
    result: p.result,
    stack: p.stack.join(", "),
    image: p.image,
    link: p.link,
  };
}

export default function AdminProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [addForm, setAddForm] = useState<FormState>(EMPTY_FORM);
  const [adding, setAdding] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadProjects() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/projects");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setProjects(data.projects || []);
    } catch {
      setError("Could not load projects.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setAdding(true);
    setError("");
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(addForm)),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not add project.");
        return;
      }
      setAddForm(EMPTY_FORM);
      await loadProjects();
    } finally {
      setAdding(false);
    }
  }

  function startEdit(project: Project) {
    setEditingId(project.id);
    setEditForm(fromProject(project));
  }

  async function handleSaveEdit(e: FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/projects/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(editForm)),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not save project.");
        return;
      }
      setEditingId(null);
      await loadProjects();
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not delete project.");
        return;
      }
      await loadProjects();
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="admin-topbar">
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <h1>Admin</h1>
          <AdminNav />
        </div>
        <button className="admin-btn ghost" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="admin-main">
        {error && <div className="admin-error">{error}</div>}

        <div className="admin-panel">
          <h2 className="admin-section-title">Add a project</h2>
          <form onSubmit={handleAdd}>
            <div className="admin-form-grid">
              <div className="admin-field">
                <label htmlFor="add-title">Title</label>
                <input
                  id="add-title"
                  value={addForm.title}
                  onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-tag">Category tag</label>
                <input
                  id="add-tag"
                  placeholder="e.g. Mobile App, E-commerce"
                  value={addForm.tag}
                  onChange={(e) => setAddForm({ ...addForm, tag: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field full">
                <label htmlFor="add-description">Description</label>
                <textarea
                  id="add-description"
                  rows={2}
                  value={addForm.description}
                  onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-problem">Business problem</label>
                <input
                  id="add-problem"
                  value={addForm.problem}
                  onChange={(e) => setAddForm({ ...addForm, problem: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-solution">Solution</label>
                <input
                  id="add-solution"
                  value={addForm.solution}
                  onChange={(e) => setAddForm({ ...addForm, solution: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-result">Result</label>
                <input
                  id="add-result"
                  value={addForm.result}
                  onChange={(e) => setAddForm({ ...addForm, result: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-stack">Tags (comma-separated)</label>
                <input
                  id="add-stack"
                  placeholder="e.g. E-commerce, Live Inventory"
                  value={addForm.stack}
                  onChange={(e) => setAddForm({ ...addForm, stack: e.target.value })}
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-link">Website link (optional)</label>
                <input
                  id="add-link"
                  placeholder="https://example.com"
                  value={addForm.link}
                  onChange={(e) => setAddForm({ ...addForm, link: e.target.value })}
                />
              </div>
              <div className="admin-field full">
                <ImageUploadField
                  id="add-image"
                  label="Project image"
                  value={addForm.image}
                  onChange={(url) => setAddForm({ ...addForm, image: url })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="admin-btn" disabled={adding} style={{ marginTop: "0.8rem" }}>
              {adding ? "Adding…" : "Add project"}
            </button>
          </form>
        </div>

        <h2 className="admin-section-title">All projects</h2>
        {loading ? (
          <div className="admin-empty">Loading…</div>
        ) : projects.length === 0 ? (
          <div className="admin-empty">No projects yet.</div>
        ) : (
          <div className="admin-review-list">
            {projects.map((p) => (
              <div className="admin-project-card" key={p.id}>
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="body">
                  <div className="meta">
                    <b>{p.title}</b>
                    <span>· {p.tag}</span>
                  </div>
                  <p className="desc">{p.description}</p>
                </div>
                <div className="admin-review-actions">
                  <button className="admin-btn ghost" onClick={() => startEdit(p)}>
                    Edit
                  </button>
                  <button
                    className="admin-btn danger"
                    disabled={deletingId === p.id}
                    onClick={() => handleDelete(p.id)}
                  >
                    {deletingId === p.id ? "Removing…" : "Remove"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {editingId && (
        <div className="admin-modal-backdrop" onClick={() => setEditingId(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "640px" }}>
            <h2>Edit project</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="admin-form-grid">
                <div className="admin-field">
                  <label htmlFor="edit-title">Title</label>
                  <input
                    id="edit-title"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-tag">Category tag</label>
                  <input
                    id="edit-tag"
                    value={editForm.tag}
                    onChange={(e) => setEditForm({ ...editForm, tag: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field full">
                  <label htmlFor="edit-description">Description</label>
                  <textarea
                    id="edit-description"
                    rows={2}
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-problem">Business problem</label>
                  <input
                    id="edit-problem"
                    value={editForm.problem}
                    onChange={(e) => setEditForm({ ...editForm, problem: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-solution">Solution</label>
                  <input
                    id="edit-solution"
                    value={editForm.solution}
                    onChange={(e) => setEditForm({ ...editForm, solution: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-result">Result</label>
                  <input
                    id="edit-result"
                    value={editForm.result}
                    onChange={(e) => setEditForm({ ...editForm, result: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-stack">Tags (comma-separated)</label>
                  <input
                    id="edit-stack"
                    value={editForm.stack}
                    onChange={(e) => setEditForm({ ...editForm, stack: e.target.value })}
                  />
                </div>
                <div className="admin-field">
                  <label htmlFor="edit-link">Website link (optional)</label>
                  <input
                    id="edit-link"
                    value={editForm.link}
                    onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                  />
                </div>
              </div>
              <ImageUploadField
                id="edit-image"
                label="Project image"
                value={editForm.image}
                onChange={(url) => setEditForm({ ...editForm, image: url })}
                required
              />
              <div className="admin-modal-actions">
                <button type="button" className="admin-btn ghost" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn" disabled={saving}>
                  {saving ? "Saving…" : "Save changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
