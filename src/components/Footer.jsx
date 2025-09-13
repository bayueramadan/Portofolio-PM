import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-warna-gelap border-t border-zinc-700 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="#"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-amber-400 transition"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-zinc-400 hover:text-amber-400 transition"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="Reddit"
            className="text-zinc-400 hover:text-amber-400 transition"
          >
            <i className="ri-reddit-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-zinc-400 hover:text-amber-400 transition"
          >
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>

        {/* Optional Extra Info */}
        <div className="text-sm text-zinc-400 text-center">
          <p>Built with React & Tailwind · Version 3</p>
          <p>
            <a
              href="https://bayueramadan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              Lihat Portofolio Versi 2
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 font-medium text-center">
          © 2025 Bayu Erfan Ramadani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
