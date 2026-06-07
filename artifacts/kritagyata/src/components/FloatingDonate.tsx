import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

function DonateModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full flex flex-col items-center gap-4"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <h2 className="font-serif text-2xl text-[hsl(345,60%,14%)] tracking-wide">Donate</h2>
          <p className="text-sm text-gray-500 text-center">
            Scan the QR code or use the UPI ID below to support our work.
          </p>
          <img
            src="/qrcode.png"
            alt="Donate QR Code — 8076659789@fam"
            className="w-64 h-64 object-contain rounded-xl border border-gray-100"
          />
          <p className="text-sm font-semibold text-[hsl(345,60%,14%)] tracking-wider">
            8076659789@fam
          </p>
          <p className="text-xs text-gray-400">UPI · Trio</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function FloatingDonate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <DonateModal onClose={() => setOpen(false)} />}

      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-5 z-[150] flex items-center gap-2 px-5 py-3 rounded-full shadow-xl font-semibold text-sm tracking-wide cursor-pointer select-none"
        style={{
          background: "linear-gradient(135deg, hsl(37,75%,52%), hsl(37,80%,62%))",
          color: "hsl(345,60%,10%)",
          boxShadow: "0 4px 20px hsla(37,70%,55%,0.55)",
        }}
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 280, damping: 22 }}
        whileHover={{ scale: 1.07, boxShadow: "0 6px 28px hsla(37,70%,55%,0.7)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Donate"
      >
        <Heart size={16} className="fill-current" />
        Donate
      </motion.button>
    </>
  );
}
