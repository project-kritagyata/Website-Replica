import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryItems } from "@/data";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const items = galleryItems;
  const currentItem = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(160deg, hsl(345,60%,14%) 0%, hsl(345,50%,24%) 100%)",
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
            Moments of service, captured in time. Each photograph is a story of
            humanity.
          </p>
        </motion.div>
      </div>

      <main className="flex-1 py-12 px-4 bg-[hsl(36,25%,96%)]">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                className="w-full break-inside-avoid rounded-lg overflow-hidden group relative cursor-pointer block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-[hsl(345,60%,10%)] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.caption}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {currentItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.88)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              className="max-w-4xl max-h-full flex flex-col items-center gap-4"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentItem.imageUrl}
                alt={currentItem.caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg"
              />
              <p className="text-white/80 text-sm text-center">
                {currentItem.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
