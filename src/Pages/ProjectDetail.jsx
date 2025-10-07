// src/Pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/DataProject";
import BankJago from "./Project/BankJago";
import KaiAccess from "./Project/KaiAccess";

const componentMap = {
  "bank-jago": BankJago,
  "kai-access": KaiAccess,
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const meta = projects.find((p) => p.slug === slug);
  const ProjectComponent = componentMap[slug];

  // --- Jika slug gak cocok ---
  if (!meta) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--color-warna-terang)] text-center">
        <p className="text-warna-abu mb-4">Project not found</p>
        <Link
          to="/projects"
          className="text-[var(--color-warna-biru)] hover:text-[var(--color-warna-hijau)] transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[var(--color-warna-terang)] min-h-screen">
      {/* ===== HERO / META HEADER ===== */}
      <header className="w-full px-6 md:px-30 py-20 text-center border-b border-[var(--color-warna-abu)]/20">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-warna-hitam)]">
          {meta.title}
        </h1>
        <p className="text-[var(--color-warna-abu)] mt-2 text-lg">
          {meta.category}
          {meta.company && ` — ${meta.company}`}
        </p>

        {meta.cover && (
          <div className="mt-10 flex justify-center">
            <img
              src={meta.cover}
              alt={meta.title}
              className="rounded-xl shadow-lg max-w-4xl w-full"
            />
          </div>
        )}
      </header>

      {/* ===== PROJECT CONTENT (INDEPENDEN + CONTAINER) ===== */}
      <section className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-0 pb-14 md:pt-0 md:pb-16">
          {ProjectComponent ? (
            <ProjectComponent />
          ) : (
            <div className="text-center text-[var(--color-warna-abu)] py-32">
              Content coming soon.
            </div>
          )}
        </div>
      </section>

      {/* ===== FOOTER / NAVIGASI KEMBALI ===== */}
      <footer className="py-16 text-center border-t border-[var(--color-warna-abu)]/20">
        <Link
          to="/projects"
          className="text-[var(--color-warna-biru)] font-medium hover:text-[var(--color-warna-hijau)] transition-colors"
        >
          ← Back to All Projects
        </Link>
      </footer>
    </main>
  );
}
