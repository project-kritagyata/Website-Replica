import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Heart } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/projectkritagyata?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const JOIN_URL = "https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const links = [
  { href: "/", label: "Home", external: false },
  { href: "/our-work", label: "Our Work", external: false },
  { href: "/gallery", label: "Gallery", external: false },
  { href: JOIN_URL, label: "Join Us", external: true },
];

function DonateModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 flex flex-col items-center gap-4"
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
          className="w-64 h-64 object-contain rounded-xl"
        />
        <p className="text-sm font-semibold text-[hsl(345,60%,14%)] tracking-wider">
          8076659789@fam
        </p>
        <p className="text-xs text-gray-400">UPI · Trio</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <>
      {donateOpen && <DonateModal onClose={() => setDonateOpen(false)} />}

      <nav className="sticky top-0 z-50 bg-[hsl(345,60%,14%)] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Project Kritagyata Logo"
                className="h-10 w-10 object-contain rounded-full ring-2 ring-[hsl(37,70%,58%)] ring-offset-2 ring-offset-[hsl(345,60%,14%)]"
              />
              <span className="font-serif text-[hsl(36,30%,92%)] text-lg tracking-wide hidden sm:block">
                Project Kritagyata
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded text-[hsl(36,25%,80%)] hover:text-[hsl(36,30%,97%)] hover:bg-[hsl(345,40%,22%)] transition-all duration-200 mr-1"
              >
                <Instagram size={18} />
              </a>
              {links.map((l) => {
                const active = !l.external && (location === l.href || (l.href !== "/" && location.startsWith(l.href)));
                const cls = `px-4 py-2 rounded text-sm font-medium tracking-wide transition-all duration-200 ${
                  active
                    ? "bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)]"
                    : "text-[hsl(36,25%,80%)] hover:text-[hsl(36,30%,97%)] hover:bg-[hsl(345,40%,22%)]"
                }`;
                return l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href} className={cls}>
                    {l.label}
                  </Link>
                );
              })}
              <button
                onClick={() => setDonateOpen(true)}
                className="ml-1 px-4 py-2 rounded text-sm font-semibold tracking-wide transition-all duration-200 bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)] hover:bg-[hsl(37,70%,65%)] flex items-center gap-1.5"
              >
                <Heart size={14} />
                Donate
              </button>
            </div>

            <button
              className="md:hidden text-[hsl(36,25%,80%)] hover:text-white p-2 rounded"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-[hsl(345,55%,11%)] border-t border-[hsl(345,35%,22%)] px-4 py-3 flex flex-col gap-1">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded text-sm font-medium tracking-wide transition-all text-[hsl(36,25%,80%)] hover:bg-[hsl(345,40%,20%)] hover:text-white flex items-center gap-2"
            >
              <Instagram size={16} />
              Instagram
            </a>
            {links.map((l) => {
              const active = !l.external && (location === l.href || (l.href !== "/" && location.startsWith(l.href)));
              const cls = `px-4 py-2.5 rounded text-sm font-medium tracking-wide transition-all ${
                active
                  ? "bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)]"
                  : "text-[hsl(36,25%,80%)] hover:bg-[hsl(345,40%,20%)] hover:text-white"
              }`;
              return l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={cls}>
                  {l.label}
                </Link>
              );
            })}
            <button
              onClick={() => { setDonateOpen(true); setOpen(false); }}
              className="px-4 py-2.5 rounded text-sm font-semibold tracking-wide transition-all bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)] hover:bg-[hsl(37,70%,65%)] flex items-center gap-2 mt-1"
            >
              <Heart size={16} />
              Donate
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
