import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const photos = [
  { id: 1, src: "/gallery-1.png", caption: "Moments of joy and connection" },
  { id: 2, src: "/gallery-2.png", caption: "Kritagyata — Together we serve" },
  { id: 3, src: "/gallery-3.png", caption: "Hands that care, hearts that give" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const current = lightboxIdx !== null ? photos[lightboxIdx] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <div
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, hsl(345,60%,14%) 0%, hsl(345,50%,24%) 100%)",
        }}
      >
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-[hsl(36,30%,93%)] mb-4">
            Gallery
          </h1>
          <p className="text-[hsl(36,15%,70%)] text-base leading-relaxed">
            Moments of service, captured in time. Each photograph is a story of humanity.
          </p>
        </motion.div>
      </div>

      {/* Gallery grid */}
      <main className="flex-1 py-14 px-4 bg-[hsl(36,25%,96%)]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

          {/* Kritagyata label */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-10 bg-[hsl(37,70%,55%)]" />
            <span
              className="font-serif tracking-[0.28em] uppercase text-sm text-[hsl(345,60%,20%)]"
            >
              Kritagyata
            </span>
            <div className="h-px w-10 bg-[hsl(37,70%,55%)]" />
          </motion.div>

          {/* Three equal images in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.id}
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(37,70%,58%)]"
                style={{ aspectRatio: "3/4" }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[hsl(345,60%,10%)]/0 group-hover:bg-[hsl(345,60%,10%)]/50 transition-all duration-300 flex items-end">
                  <p className="w-full px-4 py-3 text-white text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    {photo.caption}
                  </p>
                </div>
                {/* Golden bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[hsl(37,70%,58%)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            ))}
          </div>

          {/* Bottom label */}
          <motion.p
            className="font-serif italic text-[hsl(345,40%,35%)] text-base tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            "Gratitude in action — one drive at a time."
          </motion.p>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Prev / Next */}
            {lightboxIdx! > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl px-3 py-2 z-10"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx! - 1); }}
                aria-label="Previous"
              >
                ‹
              </button>
            )}
            {lightboxIdx! < photos.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl px-3 py-2 z-10"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx! + 1); }}
                aria-label="Next"
              >
                ›
              </button>
            )}

            <motion.div
              className="flex flex-col items-center gap-4 max-w-2xl w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.caption}
                className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/75 text-sm text-center font-serif italic">
                {current.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
