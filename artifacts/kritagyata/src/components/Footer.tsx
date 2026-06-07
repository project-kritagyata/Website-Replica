import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[hsl(345,60%,10%)] text-[hsl(36,20%,75%)] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-full" />
              <span className="font-serif text-[hsl(36,30%,90%)] text-lg tracking-wide">
                Project Kritagyata
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(36,15%,65%)]">
              Kritagyata — the spirit of gratitude. We serve communities with heartfelt dedication,
              one act of kindness at a time.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-[hsl(36,30%,88%)] text-base mb-4 tracking-wide">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/our-work", label: "Our Work" },
                { href: "/gallery", label: "Gallery" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-[hsl(37,70%,58%)] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[hsl(37,70%,58%)] transition-colors duration-200"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[hsl(36,30%,88%)] text-base mb-4 tracking-wide">
              Connect
            </h4>
            <p className="text-sm leading-relaxed text-[hsl(36,15%,65%)]">
              Interested in volunteering or partnering with us? We'd love to hear from you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-[hsl(37,70%,58%)] hover:text-[hsl(37,70%,68%)] transition-colors font-medium"
            >
              Get Involved &rarr;
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[hsl(345,35%,18%)] text-center text-xs text-[hsl(36,10%,50%)]">
          &copy; {new Date().getFullYear()} Project Kritagyata. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
