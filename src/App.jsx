import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timerDone, setTimerDone] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const isFirstLoad = useRef(true);

  // minimal 5 detik
  useEffect(() => {
    const timer = setTimeout(() => setTimerDone(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // halaman siap
  useEffect(() => {
    const handleReady = () => setPageReady(true);
    if (document.readyState === "complete") {
      setPageReady(true);
    } else {
      window.addEventListener("load", handleReady);
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

  // kombinasi timer + halaman ready
  const readyToExit = timerDone && pageReady;

  // dipanggil dari Preloader setelah animasi selesai
  const handlePreloaderExit = () => {
    setLoading(false);
    isFirstLoad.current = false; // ⬅️ tandai sudah masuk pertama kali
  };

  // overlay antar halaman (skip untuk load pertama)
  useEffect(() => {
    if (!loading && !isFirstLoad.current) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, loading]);

  // render
  return (
    <>
      {loading ? (
        <Preloader readyToExit={readyToExit} onExit={handlePreloaderExit} />
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home startAnimation={!loading} />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/project"
                element={
                  <PageWrapper>
                    <Project />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          {showOverlay && <TransitionOverlay />}
          <Footer />
        </>
      )}
    </>
  );
}

/* Wrapper halaman */

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ y: 50 }} // masuk dari bawah, tanpa opacity
      animate={{ y: 0 }} // ke posisi normal, tanpa opacity
      exit={{ y: -50 }} // keluar ke atas, tanpa opacity
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "relative", zIndex: 0 }} // pastikan layer konten di belakang overlay
    >
      {children}
    </motion.div>
  );
}

/* Overlay transisi */
function TransitionOverlay() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 w-screen h-screen bg-amber-400 z-[9999] pointer-events-none overflow-hidden md:rounded-t-[3rem] md:rounded-b-[3rem] border-t-4 border-b-4 border-black"
    />
  );
}

export default App;
