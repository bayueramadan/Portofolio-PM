import CustomCursor from "../components/CustomCursor";
import { Link } from "react-router-dom";
import { projects } from "../Data/DataProject";

export default function Project() {
  const categories = [
    { title: "Web Apps", color: "bg-yellow-100", icon: "💻" },
    { title: "UI/UX Case Study", color: "bg-green-100", icon: "🎨" },
    { title: "Product Design", color: "bg-blue-100", icon: "🛠️" },
    { title: "Animation & Interaction", color: "bg-pink-100", icon: "✨" },
    { title: "Open Source", color: "bg-purple-100", icon: "🌍" },
  ];

  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />
      <section className="px-6 md:px-12 py-20">
        {/* Hero Text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-warna-gelap">
            Explore My Selected Projects
          </h1>
          <p className="text-gray-600 mt-4">
            Case studies & personal projects on Product Design, Web Development,
            and Creative Solutions — built with real-world impact.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`${cat.color} rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition`}
            >
              <span className="text-4xl mb-4">{cat.icon}</span>
              <h2 className="text-xl font-semibold text-gray-900">
                {cat.title}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* Daftar Case Study */}
      <section className="px-6 md:px-12 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-warna-hitam)]">
            Explore Product Case Studies
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Dive into case studies (RCA, Metrics, Product Improvement, Product
            Design) — process, decisions, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className={`block rounded-xl border-2 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200
        ${
          p.category === "Metrics"
            ? "border-green-500"
            : p.category === "Product Improvement"
            ? "border-orange-400"
            : p.category === "Product Design"
            ? "border-blue-400"
            : p.category === "RCA"
            ? "border-yellow-400"
            : "border-[var(--color-warna-abu)]/40"
        }
      `}
            >
              {/* Cover / Logo */}
              <div className="flex items-center justify-center h-32 mb-6">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="max-h-16 object-contain"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-[var(--color-warna-abu)]/20 text-[var(--color-warna-hitam)]">
                  {p.category}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-[var(--color-warna-hijau)]/10 text-[var(--color-warna-hijau)]">
                  {p.company}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[var(--color-warna-hitam)] leading-snug mb-2">
                {p.title}
              </h3>

              {/* Summary (optional, bisa sembunyiin kalau mau ringkas) */}
              {p.summary && (
                <p className="text-[var(--color-warna-abu)] text-sm line-clamp-2 mb-4">
                  {p.summary}
                </p>
              )}

              {/* CTA */}
              <div className="text-[var(--color-warna-biru)] font-medium hover:underline">
                Read Case Study →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
