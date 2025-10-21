import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

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

      {/* 🟥 SECTION: PROBLEM STATEMENT */}
      <section className="bg-[var(--color-warna-terang)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri - Teks */}
        <div className="md:w-1/2 space-y-6 text-[var(--color-warna-gelap)]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
            Problem Statement
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              When making QRIS payments, users are required to enter a PIN every
              time, which slows down the process.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Using biometric authentication could make transactions faster
              while still keeping them secure.
            </p>
          </div>
        </div>

        {/* Kanan - Gambar mockup */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/img/BankJago/SS1-BankJago.png"
            alt="Bank Jago QRIS PIN Screen"
            className="h-[300px] md:h-[360px] lg:h-[400px] w-auto drop-shadow-2xl "
            loading="lazy"
          />
        </div>
      </section>

      {/* 🟪 SECTION: USER JOURNEY MAP (Before) */}
      <section className="bg-[var(--color-warna-terang)] px-6 md:px-20 py-10 md:py-16 flex flex-col items-center text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
          User Journey Map (Before)
        </h2>

        {/* Wrapper scrollable */}
        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="min-w-[600px] md:min-w-0 flex justify-center">
            <img
              src="/assets/img/BankJago/UJ1-BankJago.png"
              alt="User Journey Map - Before Implementation"
              className="h-[400px] md:h-auto w-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Petunjuk scroll (muncul hanya di mobile) */}
        <p className="text-sm text-gray-500 mt-4 md:hidden italic">
          👉 Swipe right to explore the full journey
        </p>
      </section>

      {/* 🧩 SECTION: RESEARCH CONDUCT */}
      <section className="bg-[var(--color-warna-terang)] px-6 md:px-20 py-10 md:py-16 text-[var(--color-warna-gelap)]">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-left md:text-center space-y-4">
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Research Conduct
          </h2>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
            Based on Competitive Analysis – GoPay
          </h3>

          <p className="text-base md:text-lg leading-relaxed">
            When making a QRIS payment in GoPay, users are prompted for a quick
            fingerprint verification instead of typing a PIN. This flow
            represents how biometric verification can transform a critical pain
            point into a seamless experience, balancing both security and
            convenience.
          </p>
        </div>

        {/* Ilustrasi Flow */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-[240px] h-[240px] flex items-center justify-center text-gray-400 text-sm italic">
              <img
                src="/assets/img/BankJago/Scan-BankJago.png"
                alt="Scan Qris"
                className="rounded-xl"
              />
            </div>
            <p className="text-sm md:text-base font-semibold">Scan QRIS</p>
          </div>

          {/* Panah */}
          <span className="text-2xl font-bold text-[var(--color-warna-gelap)] md:rotate-0 rotate-90">
            →
          </span>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-[240px] h-[240px] flex items-center justify-center text-gray-400 text-sm italic">
              <img
                src="/assets/img/BankJago/FingerPrint-BankJago.png"
                alt="Fingerprint Prompt"
                className="rounded-xl"
              />
            </div>
            <p className="text-sm md:text-base font-semibold">
              Fingerprint Prompt
            </p>
          </div>

          {/* Panah */}
          <span className="text-2xl font-bold text-[var(--color-warna-gelap)] md:rotate-0 rotate-90">
            →
          </span>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-[240px] h-[240px] flex items-center justify-center text-gray-400 text-sm italic">
              <img
                src="/assets/img/BankJago/PYS-BankJago.png"
                alt="Payment Success"
                className="rounded-xl"
              />
            </div>
            <p className="text-sm md:text-base font-semibold">
              Payment Success
            </p>
          </div>
        </div>
      </section>

      {/* 🧩 SECTION: RESEARCH CONDUCT — Restate the Problem Briefly */}
      <section className="bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri: Konten Teks */}
        <div className="flex-1">
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Research Conduct
          </h2>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
            Restate the Problem Briefly
          </h3>

          <div className="space-y-4 text-[var(--color-warna-gelap)] text-base md:text-lg leading-relaxed">
            <p>
              When paying with QRIS in Bank Jago, users must enter a PIN before
              completing the transaction. This process feels slow and stressful,
              especially when standing in line where others are waiting.
            </p>

            <p>
              The extra steps create a sense of pressure to hurry, and typing a
              PIN in public also reduces privacy and comfort.
            </p>

            <p>
              Competitors like GoPay have simplified this with fingerprint
              verification, offering a faster and more secure experience.
            </p>
          </div>
        </div>

        {/* Kanan: Lottie Illustration (Placeholder) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gray-200/40 rounded-full flex items-center justify-center text-gray-400 text-sm italic">
            <DotLottieReact
              src="https://lottie.host/a428d5f9-4807-4ce1-ad32-2e2f58cfde25/yNDAimXgLd.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* 🧩 SECTION: SOLUTION */}
      <section className="bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri: Ilustrasi (Placeholder) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/assets/img/BankJago/SS2-BankJago.png"
            alt="Proposed Solution"
            className="h-[300px] md:h-[360px] lg:h-[400px] w-auto drop-shadow-2xl "
          />
        </div>

        {/* Kanan: Konten Teks */}
        <div className="flex-1">
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Solution
          </h2>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
            Proposed Solution
          </h3>

          <div className="space-y-4 text-[var(--color-warna-gelap)] text-base md:text-lg leading-relaxed">
            <p>
              Introduce fingerprint authentication for QRIS payments under a set
              limit (e.g., Rp1,000,000).
            </p>

            <p>
              Transactions above the limit will still require a PIN or password,
              maintaining layered security.
            </p>

            <p>
              This improvement shortens the payment process, keeps users’ data
              private, and aligns with modern digital banking standards.
            </p>
          </div>
        </div>
      </section>

      {/* 🟪 SECTION: USER JOURNEY MAP (After) */}
      <section className="bg-[var(--color-warna-terang)] px-6 md:px-20 py-10 md:py-16 flex flex-col items-center text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-4">
          User Journey Map (After)
        </h2>

        {/* Wrapper scrollable */}
        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="min-w-[600px] md:min-w-0 flex justify-center">
            <img
              src="/assets/img/BankJago/UJ2-BankJago.png"
              alt="User Journey Map - Before Implementation"
              className="h-[400px] md:h-auto w-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Petunjuk scroll (muncul hanya di mobile) */}
        <p className="text-sm text-gray-500 mt-4 md:hidden italic">
          👉 Swipe right to explore the full journey
        </p>
      </section>

      {/* 🧩 SECTION: RESULT / EXPECTED IMPACT */}
      <section className="bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri: Konten Teks */}
        <div className="flex-1">
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Result
          </h2>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-6">
            Expected Impact
          </h3>

          <ul className="space-y-4 text-base md:text-lg leading-relaxed text-[var(--color-warna-gelap)]">
            <li>
              • Reduce average payment time from <b>11s → 7s</b>
            </li>
            <li>
              • Improve perceived convenience score <b>(+25%)</b>
            </li>
            <li>
              • Maintain <b>100% security</b> for high-value transactions
            </li>
          </ul>
        </div>

        {/* Kanan: Ilustrasi (Placeholder) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-lg flex items-center justify-center text-gray-400 italic text-sm">
            <DotLottieReact
              src="https://lottie.host/b3715dca-7f8e-45f3-a0c7-c1647059f40d/DiXfQD3A84.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* 🧩 SECTION: RESULT — ACHIEVEMENTS */}
      <section className="bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Kiri: Teks (2/3 Lebar) */}
        <div className="flex-[2]">
          <h2 className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4">
            Result
          </h2>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ff0044] mb-6">
            Achievements
          </h3>

          <ul className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--color-warna-gelap)]">
            <li>
              💡 By creating this case study, I learned how simplifying the
              payment verification flow can make users feel calmer and more
              confident during transactions.
            </li>
            <li>
              🔒 I discovered that using fingerprint verification helps users
              reduce stress and hesitation when they are in a queue and need to
              complete payments quickly.
            </li>
            <li>
              ⏱️ Through the User Journey Map, I was able to understand what
              triggers user frustration and how faster verification can enhance
              both speed and privacy.
            </li>
            <li>
              ✨ I created a projection of the improved User Journey Map to
              visualize how the new solution supports a smoother and more secure
              payment experience.
            </li>
          </ul>
        </div>

        {/* Kanan: Ilustrasi (1/3 Lebar) */}
        <div className="flex-[1] flex justify-center items-center">
          <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px]  rounded-lg flex items-center justify-center text-gray-400 italic text-sm">
            <DotLottieReact
              src="https://lottie.host/2d704593-4d5a-4461-b4fe-4a2ff453aff1/UhQ3Homd6T.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* 🧩 SECTION: THANK YOU & METADATA (Slide-Style) */}
      <section className="bg-[#e6eaed] text-[var(--color-warna-gelap)] px-6 md:px-20 py-10 md:py-16 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
        {/* Kiri: Thank You + CTA */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff0044]">
            Thank You for Reading 🙏
          </h3>

          <p className="text-sm md:text-md text-[var(--color-warna-gelap)] leading-relaxed">
            This case study reflects my approach to identifying user needs,
            exploring product opportunities, and designing meaningful, practical
            solutions.
            <br />
            <br />
            Feel free to reach out if you'd like to discuss, collaborate, or
            share thoughts about this project.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 bg-[var(--color-warna-hijau)] text-[var(--color-warna-putih)] font-semibold px-6 py-2 rounded-lg shadow-md shadow-[var(--color-warna-hijau)]/30 hover:bg-[var(--color-warna-biru)] transition-all duration-300 ease-in-out"
          >
            Get in Touch →
          </Link>
        </div>

        {/* Kanan: Metadata */}
        <div className="flex-1 bg-[var(--color-warna-putih)] p-6 md:p-8 rounded-xl border border-[var(--color-warna-abu)]/30 shadow-sm">
          <h4 className="text-[#ff0044] font-bold text-lg mb-4 uppercase tracking-wide">
            Project Info
          </h4>
          <ul className="space-y-3 text-[var(--color-warna-gelap)] text-sm md:text-base">
            <li>
              <span className="font-semibold">📅 Created:</span> 10 October 2025
            </li>
            <li>
              <span className="font-semibold">💼 Role:</span> Product Manager /
              UX Researcher
            </li>
            <li>
              <span className="font-semibold">🧰 Tools:</span> Figma, Notion,
              Canva, VS Code
            </li>

            <li>
              <span className="font-semibold">🏷️ Category:</span> Product
              Improvement / Digital Banking
            </li>
            <li>
              <span className="font-semibold">🔗 Type:</span> Personal Learning
              Exploration
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Credit */}
      <div className="text-center py-6 text-sm text-[var(--color-warna-abu)]">
        © {new Date().getFullYear()} Bayu Erfan. All Rights Reserved.
      </div>
    </>
  );
}
