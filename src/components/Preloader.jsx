import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Preloader = ({ readyToExit, onExit }) => {
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={readyToExit ? { y: "100%" } : { y: "0%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (readyToExit) onExit();
      }}
      className={`fixed inset-0 z-[9999] bg-amber-400 flex items-center justify-center ${
        readyToExit ? "rounded-b-[3rem]" : ""
      }`}
    >
      <DotLottieReact
        src="https://lottie.host/2abdb104-2f1d-4745-825c-17f0591077e9/EJcgY33d0p.lottie"
        loop
        autoplay
        style={{ width: "350px", height: "350px" }}
      />
    </motion.div>
  );
};

export default Preloader;
