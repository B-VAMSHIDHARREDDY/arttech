"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Review } from "@/lib/reviews";
import AdminNav from "./AdminNav";

type FormState = { name: string; role: string; quote: string; rating: number };

const EMPTY_FORM: FormState = { name: "", role: "", quote: "", rating: 5 };

export default function AdminDashboardPage() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [addForm, setAddForm] = useState<FormState>(EMPTY_FORM);
  const [adding, setAdding] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadReviews() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/reviews");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch {
      setError("Could not load reviews.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
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
      const res = await fetch("/api/admin/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addForm),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not add review.");
        return;
      }
      setAddForm(EMPTY_FORM);
      await loadReviews();
    } finally {
      setAdding(false);
    }
  }

  function startEdit(review: Review) {
    setEditingId(review.id);
    setEditForm({ name: review.name, role: review.role, quote: review.quote, rating: review.rating });
  }

  async function handleSaveEdit(e: FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/reviews/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not save review.");
        return;
      }
      setEditingId(null);
      await loadReviews();
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not delete review.");
        return;
      }
      await loadReviews();
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
          <h2 className="admin-section-title">Add a review</h2>
          <form onSubmit={handleAdd}>
            <div className="admin-form-grid">
              <div className="admin-field">
                <label htmlFor="add-name">Client name</label>
                <input
                  id="add-name"
                  value={addForm.name}
                  onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-role">Role / company</label>
                <input
                  id="add-role"
                  value={addForm.role}
                  onChange={(e) => setAddForm({ ...addForm, role: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field full">
                <label htmlFor="add-quote">Review text</label>
                <textarea
                  id="add-quote"
                  rows={3}
                  value={addForm.quote}
                  onChange={(e) => setAddForm({ ...addForm, quote: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="add-rating">Rating (1-5)</label>
                <input
                  id="add-rating"
                  type="number"
                  min={1}
                  max={5}
                  value={addForm.rating}
                  onChange={(e) => setAddForm({ ...addForm, rating: Number(e.target.value) })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="admin-btn" disabled={adding} style={{ marginTop: "0.5rem" }}>
              {adding ? "Adding…" : "Add review"}
            </button>
          </form>
        </div>

        <h2 className="admin-section-title">All reviews</h2>
        {loading ? (
          <div className="admin-empty">Loading…</div>
        ) : reviews.length === 0 ? (
          <div className="admin-empty">No reviews yet.</div>
        ) : (
          <div className="admin-review-list">
            {reviews.map((r) => (
              <div className="admin-review-card" key={r.id}>
                <div className="body">
                  <p className="quote">&quot;{r.quote}&quot;</p>
                  <div className="meta">
                    <b>{r.name}</b>
                    <span>· {r.role}</span>
                    <span className="stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                  </div>
                </div>
                <div className="admin-review-actions">
                  <button className="admin-btn ghost" onClick={() => startEdit(r)}>
                    Edit
                  </button>
                  <button
                    className="admin-btn danger"
                    disabled={deletingId === r.id}
                    onClick={() => handleDelete(r.id)}
                  >
                    {deletingId === r.id ? "Removing…" : "Remove"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {editingId && (
        <div className="admin-modal-backdrop" onClick={() => setEditingId(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit review</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="admin-field">
                <label htmlFor="edit-name">Client name</label>
                <input
                  id="edit-name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="edit-role">Role / company</label>
                <input
                  id="edit-role"
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="edit-quote">Review text</label>
                <textarea
                  id="edit-quote"
                  rows={3}
                  value={editForm.quote}
                  onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label htmlFor="edit-rating">Rating (1-5)</label>
                <input
                  id="edit-rating"
                  type="number"
                  min={1}
                  max={5}
                  value={editForm.rating}
                  onChange={(e) => setEditForm({ ...editForm, rating: Number(e.target.value) })}
                  required
                />
              </div>
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
