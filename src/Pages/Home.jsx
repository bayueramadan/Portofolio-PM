import DataImage, { listProyek } from "../data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AuroraBackground from "../components/Aurora/Aurora";

function Home() {
  return (
    <>
      {/* New Hero Section  */}
      <section className="hero relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden pt-[72px]">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <AuroraBackground />
        </div>

        <div className="max-w-4xl w-full mx-auto text-center px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hello, I'm Bayu Erfan a Junior Product Manager.
          </h1>
          <h2 className="text-1xl md:text-3xl font-semibold text-aksen mb-6">
            Focused on learning and applying Product Management in real
            projects.
          </h2>
          <div className="gap-5 flex justify-center">
            <a
              href="#projects"
              className=" px-6 mt-10 py-2 border border-gray-900 rounded-full hover:bg-aksen hover:text-black bg-utama-down transform duration-400 ease-in-out hover:scale-105"
            >
              Download My Cv <i className="ri-profile-line"></i>
            </a>
            <a
              href="#projects"
              className=" px-6 mt-10 py-2 border border-gray-900 rounded-full hover:bg-cadangan hover:text-white bg-utama-down transform duration-400 ease-in-out hover:scale-105"
            >
              See My Projects <i className="ri-puzzle-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Proyek Section */}
      <div className="proyek py-10 container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-2">
          Highlight Project and Case Study
        </h1>
        <p className="max-w-2xl mx-auto text-base text-white/50 mb-8 text-center">
          Learning the ropes of Product Management through mobile and web
          projects. I thrive on understanding users, aligning teams, and
          crafting roadmaps for impactful solutions.
        </p>

        <div className="proyek-box mt-14 space-y-8">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="grid grid-cols-12 gap-6 p-6 bg-kiper rounded-lg items-center"
            >
              {/* Gambar */}
              <div className="col-span-12 md:col-span-4">
                <a href="#LinkProject">
                  <img
                    src={proyek.gambar}
                    alt="Proyek Image"
                    loading="lazy"
                    className="rounded-md w-full h-48 object-cover transform transition duration-300 ease-in-out hover:scale-110"
                  />
                </a>
              </div>

              {/* Konten */}
              <div className="col-span-12 md:col-span-8">
                <h1 className="text-2xl font-bold mb-3">{proyek.nama}</h1>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-utama rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                {/* Deskripsi */}
                <p className="text-base mb-4">{proyek.desk}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center grid-cols-12 pt-8">
          <a
            href="#projects"
            className="items-center gap-2 px-6 py-2 border border-gray-900 rounded-full bg-utama-down hover:text-white transition-colors hover:bg-cadangan"
          >
            See All Projects <i className="ri-puzzle-line"></i>
          </a>
        </div>
      </div>

      {/* Tentang Section */}
      <section className="w-full py-10 container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Kiri: Teks */}
            <div className="md:col-span-7 flex flex-col justify-center bg-aksen text-black p-6 rounded-l-lg h-auto md:h-[450px]">
              <p className="text-lg leading-relaxed mb-6 break-words text-justify">
                Detail-oriented professional with 2 years of experience in
                manufacturing operations at PT Denso Indonesia, where I focused
                on process efficiency and team coordination. Now transitioning
                into Product Management, I bring strong analytical thinking,
                collaboration skills, and a continuous improvement mindset.
                Skilled in tools like Figma and Notion, and passionate about
                solving user problems to create impactful products.
              </p>
              <div className="flex justify-center">
                <a
                  className="px-6 py-3 hover:bg-utama hover:text-white bg-cadangan border rounded-md  transition"
                  href="#"
                >
                  Get to Know Me &gt;
                </a>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="md:col-span-5 flex items-center justify-center text-black bg-aksen rounded-r-lg h-auto md:h-[450px]">
              <DotLottieReact
                src="https://lottie.host/198fa489-43ad-400e-b272-5668e10e1659/cfxs4z6ing.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <div className=" py-16 px-6 container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 bg-utama-down rounded-2xl shadow-xl/20 p-10 shadow-aksen">
          {/* Form Section */}
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Type Your Name.."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Type Your Email.."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                placeholder="Type Your Message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message <i className="ri-mail-send-line"></i>
              </button>
            </form>
          </div>

          {/* Contact Alternatives */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-5 text-white">
            <p className="text-lg">
              Interested in working together? Let’s connect. You can fill out
              the form or reach me directly via LinkedIn or email.
            </p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                bayueramadan@gmail.com
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span> Bayu Erfan
              </p>
              <p>
                <span className="font-semibold">Location:</span> Malang,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
