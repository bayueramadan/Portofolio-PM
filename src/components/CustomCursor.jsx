import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const mouseMoveHandler = (e) => {
      const { clientX: x, clientY: y } = e;
      const isHover = e.target.closest("a, button");

      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
        scale: isHover ? 1.8 : 1,
        borderColor: isHover ? "#FFDE21" : "#000", // hijau pas hover
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <>
      {/* Hilangkan cursor default */}
      <style>{`
        html, body {
          cursor: none;
        }
      `}</style>

      {/* Follower */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed z-[9999] w-12 h-12 rounded-full border-2 border-warna-terang bg-transparent"
      />
      {/* Cursor kecil */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-[#FFDE21]"
      />
    </>
  );
};

export default CustomCursor;
