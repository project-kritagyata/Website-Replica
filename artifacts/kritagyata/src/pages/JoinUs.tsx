import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
            Join Us
          </h1>
          <p className="text-[hsl(36,15%,70%)] text-base leading-relaxed">
            Become part of a growing family of changemakers. Your time and skills can transform lives.
          </p>
        </motion.div>
      </div>

      <main className="flex-1 py-12 px-4 bg-[hsl(36,25%,96%)]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-xl border border-border bg-card p-8 shadow-sm mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-3">Volunteer With Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We welcome passionate individuals who want to make a difference. Fill out our volunteer
              application form and we will get in touch with you about opportunities that match your
              skills and interests.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded bg-[hsl(345,75%,28%)] text-white font-medium text-sm tracking-wide hover:bg-[hsl(345,65%,35%)] transition-all duration-200 shadow-sm"
            >
              Apply to Volunteer &rarr;
            </a>
          </motion.div>

          <h2 className="font-serif text-2xl text-foreground mb-6">Open Roles</h2>

          <p className="text-muted-foreground text-center py-16">
            No open roles at this time. Check back soon!
          </p>

          <div className="mt-16 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-serif text-xl text-foreground mb-2">Don't see a fitting role?</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              We're always open to passionate people. Write to us and we'll find a way for you to
              contribute.
            </p>
            <a
              href="mailto:volunteer@projectkritagayata.org"
              className="inline-block text-sm font-medium text-[hsl(345,75%,28%)] hover:text-[hsl(345,65%,38%)] transition-colors"
            >
              volunteer@projectkritagayata.org &rarr;
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
