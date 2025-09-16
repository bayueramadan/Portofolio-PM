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
    lottie:
      "https://lottie.host/690a9d28-8c06-443a-b185-63da4bb7edd9/Az3lcxCAYY.lottie",
  },
  {
    id: 2,
    title: "Manufacturing Station ⚙️",
    description:
      "Then I made a surprising turn into manufacturing. Here, I discovered process discipline, efficiency, teamwork, and problem-solving under pressure. I realized that building a product—whether physical or digital—shares the same.",
    lottie:
      "https://lottie.host/2cf7545d-d4a5-49fe-981a-8df61356925d/Eo1aUgusRM.lottie",
  },
  {
    id: 3,
    title: "Product Management Station 🚀",
    description:
      "Now, I’m bringing both worlds together. My coding background helps me communicate with developers, my manufacturing experience sharpens my eye for processes, and my curiosity pushes me to keep learning. Product Management feels like the perfect platform where these skills converge.",
    lottie:
      "https://lottie.host/bce4ed6d-ffd7-4a33-9458-e0f41f327a47/vbxePVPuD1.lottie",
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

      {/* Career Journey Section */}
      <section
        ref={sectionRef}
        className="relative w-full bg-warna-terang pb-5"
      >
        {/* Wrapper untuk line + stations */}
        <div className="relative max-w-5xl mx-auto" id="journey-line">
          {/* Vertical line yang hanya sepanjang konten */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[8px] bg-black transform -translate-x-1/2 rounded-full" />

          {/* Train */}
          <div
            ref={trainRef}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-28 h-28 z-20"
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
              className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-[400px] gap-6"
            >
              {/* Bullet */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-warna-hijau border-2 md:border-4 border-warna-gelap rounded-full z-10" />

              {/* Kolom teks */}
              <div
                className={`order-1 bg-white rounded-2xl shadow-lg p-6 max-w-sm z-10 
              transform transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl
              ${
                i % 2 === 0
                  ? "order-1 md:order-1 justify-self-start"
                  : "order-1 md:order-2 justify-self-end"
              }`}
              >
                <h3 className="text-warna-gelap text-lg font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-warna-gelap/60 text-sm">{s.description}</p>
              </div>

              {/* Kolom Lottie */}
              <div
                className={`w-full h-[180px] md:h-[300px] flex items-center justify-center rounded-2xl ${
                  i % 2 === 0
                    ? "order-2 md:order-2 justify-self-end md:ml-20"
                    : "order-2 md:order-1 justify-self-start md:mr-20"
                }`}
              >
                {/* Mobile: box abu + Lottie */}
                <div className="md:hidden w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  {s.lottie ? (
                    <DotLottieReact
                      src={s.lottie}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div className="text-gray-500">Placeholder</div>
                  )}
                </div>

                {/* Desktop: hanya Lottie */}
                <div className="hidden md:flex w-full h-full m-5">
                  {s.lottie ? (
                    <DotLottieReact
                      src={s.lottie}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Placeholder
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full py-20 bg-warna-abu">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transferable <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            My career may look non-linear, from front-end development to
            manufacturing, and now product management. But what connects these
            experiences are the transferable skills I bring along the way.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                📊
              </div>
              <h3 className="text-lg font-semibold mb-2">Study & Observe</h3>
              <p className="text-gray-600 text-sm">
                I pay close attention to patterns, behaviors, and small details
                others often miss. Whether in manufacturing or product
                discovery, this helps me uncover real user needs and spot
                opportunities for improvement.
              </p>
            </div>

            {/* Skill 2 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                🤝
              </div>
              <h3 className="text-lg font-semibold mb-2">Initiate & Lead</h3>
              <p className="text-gray-600 text-sm">
                I once stepped up as assistant line leader, learning every
                operator’s role so I could support the team fully. That
                experience shaped how I take initiative and lead with clarity in
                any environment.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-semibold mb-2">Coordinate</h3>
              <p className="text-gray-600 text-sm">
                On the production floor, coordination was survival — aligning
                operators, supply parts, and timelines every shift. Today, I
                bring the same mindset to cross-functional teams, ensuring
                smooth collaboration.
              </p>
            </div>

            {/* Skill 4 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mb-4">
                📅
              </div>
              <h3 className="text-lg font-semibold mb-2">Empathy & Warmth</h3>
              <p className="text-gray-600 text-sm">
                I believe trust is the core of collaboration. By listening with
                care and showing genuine empathy, I create an environment where
                people feel safe to share ideas and work their best.
              </p>
            </div>

            {/* Skill 5 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-600 rounded-full mb-4">
                💡
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Critical Thinking & Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                When machines stopped or supply delay, I had to think fast: find
                the root cause, find solutions, and act under pressure. This
                sharpened my problem-solving, which I now apply to product
                decisions.
              </p>
            </div>

            {/* Skill 6 */}
            <div className="bg-warna-terang hover:bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
                🛠️
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 text-sm">
                I rarely settle for the first version. From optimizing
                production methods (like shifting FILO to FIFO) to refining user
                flows, I’m always driven to make processes, products, and myself
                better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
