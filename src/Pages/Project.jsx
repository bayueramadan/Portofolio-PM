import CustomCursor from "../components/CustomCursor";

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Explore My Selected Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
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
    </div>
  );
}
