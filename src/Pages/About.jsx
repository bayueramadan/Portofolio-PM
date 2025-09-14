import CustomCursor from "../components/CustomCursor";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const stations = [
  {
    id: 1,
    title: "Front-End Station 💻",
    description:
      "My first stop was in the world of coding. Even though I wasn’t in a professional role yet, I learned how digital products are built, the logic behind interfaces, and the joy (and frustration) of making things work on screen.",
  },
  {
    id: 2,
    title: "Manufacturing Station ⚙️",
    description:
      "Then I made a surprising turn into manufacturing. Here, I discovered process discipline, efficiency, teamwork, and problem-solving under pressure. I realized that building a product—whether physical or digital—shares the same.",
  },
  {
    id: 3,
    title: "Product Management Station 🚀",
    description:
      "Now, I’m bringing both worlds together. My coding background helps me communicate with developers, my manufacturing experience sharpens my eye for processes, and my curiosity pushes me to keep learning. Product Management feels like the perfect platform where these skills converge.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const trainRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const train = trainRef.current;

    if (!section || !train) return;

    const journey = document.getElementById("journey-line");

    // cari tinggi journey-line
    const journeyHeight = journey.offsetHeight;

    gsap.to(train, {
      y: journeyHeight - 100, // jarak tempuh (100px biar ga mentok)
      ease: "none",
      scrollTrigger: {
        trigger: journey,
        start: "top center", // mulai pas stasiun pertama kelihatan
        end: "bottom center", // selesai pas stasiun terakhir
        scrub: 1.2, // biar smooth
      },
    });
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-warna-terang text-center px-4">
        {/* Teks Hero */}
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed">
            Think of my career as a train line with a few interesting stops.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Each station taught me something valuable, and now all those lessons
            are fueling my journey toward Product Management.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="relative w-full bg-[#dde1e5]">
        {/* Wrapper untuk line + stations */}
        <div className="relative max-w-5xl mx-auto" id="journey-line">
          {/* Vertical line yang hanya sepanjang konten */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-black transform -translate-x-1/2" />

          {/* Train */}
          <div
            ref={trainRef}
            className="absolute left-1/2 -translate-x-1/2 w-28 h-28 z-20"
          >
            <DotLottieReact
              src="https://lottie.host/6f2bdb7e-1c54-4192-b8ae-e3787c14c4f9/fbK98voBZ8.lottie"
              loop
              autoplay
            />
          </div>

          {/* Stations */}
          {stations.map((s, i) => (
            <div
              key={s.id}
              className={`relative flex items-center min-h-[400px] ${
                i % 2 === 0 ? "justify-start pr-20" : "justify-end pl-20"
              }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-green-500 border-4 border-black rounded-full z-10" />
              <div
                className={`bg-white rounded-2xl shadow-lg p-6 max-w-sm z-10 ${
                  i % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
