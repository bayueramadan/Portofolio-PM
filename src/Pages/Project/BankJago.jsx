import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function BankJago() {
  return (
    <>
      {/* About Section */}
      <section className="bg-[var(--color-warna-terang)] px-4 md:px-20 pt-6 md:pt-10 pb-10 md:pb-2 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 space-y-5">
          <h3 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Disclaimer
          </h3>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-warna-hitam)] leading-snug">
            About Case Study
          </h1>

          <p className="text-[var(--color-warna-hitam)]/80 text-lg leading-relaxed mt-2 ">
            Before we continue, this case study is created only for learning
            purposes. It is not intended to suggest Bank Jago to change or
            remove anything from their product. Additional supporting data would
            be required to reach a stronger conclusion regarding this study
            case.
          </p>

          <p className="text-[var(--color-warna-hitam)]/80 text-lg leading-relaxed">
            Please note that this case study is not conducted by Bank Jago’s
            design or product team — this is purely my personal project.
          </p>
        </div>
        {/* Kanan: Lottie Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="h-[300px]  md:h-[420px]  w-80 flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/99f00795-6177-4d6b-848d-39b3a3852429/fwGGWBLS96.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>
      {/* Background Section */}
      <section className="bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] px-4 md:px-20 py-10 md:py-2">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Background
          </h2>

          {/* Grid content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {/* Kiri: Tentang Bank Jago */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
                Bank Jago
              </h3>
              <p className="text-base md:text-lg text-[var(--color-warna-gelap)] leading-relaxed">
                Bank Jago is a digital bank in Indonesia that integrates with
                platforms like GoTo and Bibit. It offers flexible financial
                solutions with its unique “Pockets” feature, helping users
                organize spending and savings easily for smarter money
                management.
              </p>
            </div>

            {/* Kanan: Research Method */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
                Research Method
              </h3>
              <p className="text-base md:text-lg text-[var(--color-warna-gelap)] leading-relaxed">
                <strong>Qualitative – Competitive Analysis.</strong> This method
                is used to research major competitors in the digital banking
                industry to gain insights into their products and identify
                opportunities where Bank Jago can improve or differentiate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
