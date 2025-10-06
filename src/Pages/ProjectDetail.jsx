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

  if (!meta) {
    return (
      <div className="p-10 text-center">
        <p className="text-warna-abu">Project not found</p>
        <Link to="/project" className="text-[var(--color-warna-biru)]">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[var(--color-warna-terang)] min-h-screen px-6 md:px-20 py-16">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-warna-hitam)]">
          {meta.title}
        </h1>
        <p className="text-[var(--color-warna-abu)] mt-2">
          {meta.category} — {meta.company}
        </p>
      </div>

      {meta.cover && (
        <div className="max-w-4xl mx-auto mb-8">
          <img
            src={meta.cover}
            alt={meta.title}
            className="rounded-xl shadow-lg"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        {ProjectComponent ? (
          <ProjectComponent />
        ) : (
          <p className="text-center text-[var(--color-warna-abu)]">
            Content coming soon.
          </p>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <Link to="/project" className="text-[var(--color-warna-biru)]">
          ← Back to All Projects
        </Link>
      </div>
    </section>
  );
}
