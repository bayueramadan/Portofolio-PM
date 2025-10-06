// src/components/CaseSection.jsx
import React from "react";

export default function CaseSection({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3 text-[var(--color-warna-hitam)]">
        {title}
      </h2>
      <div className="text-[var(--color-warna-hitam)]/90 leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </section>
  );
}
