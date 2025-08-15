// Ini adalah bagian Hero, Tentang Section

import DataImage, { listProyek } from "./data";
import { listTools } from "./data";
import SplitText from "./components/animation/SplitText";
import GradientText from "./components/animation/GradientText";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-aksen2 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Rajin Pangkal Pandai🔥</q>
          </div>
          <h1>
            <SplitText
              text="Hai, Saya Bayu Erfan Ramadani"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40, delay: 2.2 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={() => {}}
            />
          </h1>

          <p className="text-base/loose mb-6 opacity-50">
            Learning the ropes of Product Management through mobile and web
            projects. I thrive on understanding users, aligning teams, and
            crafting roadmaps for impactful solutions.
          </p>
          <div className="flex items-center md:gap-4 gap-2">
            <a
              href="https://flowcv.com/resume/m7plm8mhowp4"
              className="bg-aksen1 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download Cv <i className="ri-file-download-line"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-archive-drawer-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
      {/* Hero Section */}

      {/* Study Case section */}

      {/* Study Case section */}

      {/* Tentang Section */}
      <div className="tentang mt-30 py-10 ">
        {/* Deskripsi About */}
        {/* ganti responsif */}
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            expedita quod fugiat amet voluptate voluptas enim ratione quas,
            placeat doloribus non aliquam quibusdam laudantium quia deleniti
            dolor rem cumque magnam? Eveniet, earum, repellendus ad amet ut in
            voluptatibus maxime voluptate, aliquam vel laudantium natus
            temporibus possimus quibusdam dolores tempore. Sed!
          </p>
          <div>
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md"
              loading="lazy"
            />
            <div>
              <div>
                <h1>12 +</h1>
              </div>
              <p>Project selesai</p>
              <div>
                <h1>5 +</h1>
              </div>
              <p>Project mangkrak</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tentang Section */}

      {/* Skill Section */}
      <div className="Skill mt-32">
        <h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class text-4xl"
          >
            Skill Yang Dikuasai
          </GradientText>
        </h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, optio
          alias. Culpa harum nihil quod amet magnam ratione rem quae!
        </p>
        <div className="skill-set mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Skill"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skill Section */}

      {/* Proyek Section */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          quod, exercitationem eaque eius labore nihil?
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-secondary rounded-md">
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-500 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-400"
                  >
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek Section */}

      {/* kontak Section */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10  opacity-50">
          mari terhubung dengan saya
        </p>
        <form
          action=""
          className="bg-zinc-800 p-10 md:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold ">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Ketikan Nama Anda"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                e-Mail
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Email anda"
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                placeholder="masukan Pesan anda"
                cols={30}
                rows={10}
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="Submit"
                className="font-semibold cursor-pointer bg-violet-500 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-400"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak Section */}
    </>
  );
}

export default App;
