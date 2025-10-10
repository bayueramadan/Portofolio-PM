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
      className={`fixed inset-0 z-[9999] bg-warna-abu flex items-center justify-center ${
        readyToExit ? "rounded-b-[3rem]" : ""
      }`}
    >
      <DotLottieReact
        src="https://lottie.host/3136f74a-a2c7-4b44-8f7e-a4847b29375f/Bq4dutVWrd.lottie"
        autoplay
        style={{ width: "350px", height: "350px" }}
      />
    </motion.div>
  );
};

export default Preloader;
