import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // default open item pertama
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    items.forEach((_, i) => {
      const content = contentRefs.current[i];
      if (!content) return;

      const isOpen = i === openIndex;

      // Stop animasi yang masih jalan
      gsap.killTweensOf(content);

      if (isOpen) {
        // Smooth open
        gsap.fromTo(
          content,
          { height: 0, opacity: 0 },
          {
            height: content.scrollHeight,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      } else {
        // Smooth close
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.45,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex, items]);

  return (
    <div className="w-full container mx-auto bg-[var(--color-warna-terang)] border border-[var(--color-warna-abu)] rounded-2xl shadow-sm overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-[var(--color-warna-abu)] last:border-none"
        >
          {/* Header */}
          <div
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-5 text-left font-semibold text-lg md:text-xl transition-all duration-300 select-none
              ${
                openIndex === index
                  ? "bg-[var(--color-warna-hijau)] text-[var(--color-warna-putih)]"
                  : "bg-[var(--color-warna-terang)] text-[var(--color-warna-gelap)] hover:bg-[var(--color-warna-biru)] hover:text-[var(--color-warna-putih)]"
              }`}
            style={{ cursor: "default" }} // 🟩 cursor normal
          >
            <span>{item.title}</span>
            <span
              className={`text-2xl md:text-3xl font-bold select-none transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <i className="ri-arrow-down-s-line"></i>
            </span>
          </div>

          {/* Body */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden h-0 opacity-0 bg-[var(--color-warna-putih)]"
          >
            <div className="px-5 md:px-6 py-4 text-gray-600 text-base md:text-lg leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
