import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, projectStats } from "@/data";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  const stats = projectStats;
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-4"
        style={{
          background: "linear-gradient(160deg, hsl(345,60%,14%) 0%, hsl(345,55%,22%) 60%, hsl(37,45%,30%) 100%)",
          minHeight: "90vh",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(37,70%,58%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(37,60%,45%) 0%, transparent 40%)",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/logo.png"
            alt="Project Kritagyata"
            className="w-36 h-36 object-contain rounded-full ring-4 ring-[hsl(37,70%,58%)] ring-offset-4 ring-offset-[hsl(345,60%,14%)] drop-shadow-2xl"
            variants={fadeUp}
            custom={0}
          />

          <motion.div variants={fadeUp} custom={1} className="flex flex-col gap-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[hsl(36,30%,95%)] tracking-wide leading-tight">
              Project Kritagyata
            </h1>
            <p className="text-[hsl(37,55%,70%)] font-serif italic text-xl md:text-2xl tracking-wider">
              कृतज्ञता — Grateful hearts — filled with care
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[hsl(36,20%,78%)] text-base md:text-lg leading-relaxed max-w-xl"
          >
            We serve communities with heartfelt dedication — empowering lives through education,
            healthcare, and opportunity. Every act of service is an expression of gratitude.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/our-work"
              className="px-8 py-3 rounded bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)] font-semibold tracking-wide hover:bg-[hsl(37,70%,65%)] transition-all duration-200 shadow-lg text-sm"
            >
              See Our Work
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded border border-[hsl(36,20%,60%)] text-[hsl(36,25%,85%)] font-medium tracking-wide hover:bg-[hsl(345,40%,22%)] transition-all duration-200 text-sm"
            >
              Volunteer With Us
            </a>
            <button
              onClick={() => document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded border border-[hsl(37,55%,55%)] text-[hsl(37,70%,72%)] font-medium tracking-wide hover:bg-[hsl(345,40%,22%)] transition-all duration-200 text-sm"
            >
              Our Story ↓
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="bg-[hsl(36,30%,97%)] py-16 px-4 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>

          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: Globe, target: stats.totalProjects, suffix: "", label: "Projects Completed", color: "text-[hsl(345,75%,28%)]" },
              { icon: Users, target: 500, suffix: "+", label: "Lives Touched", color: "text-[hsl(37,70%,50%)]" },
              { icon: Heart, target: 70, suffix: "+", label: "Active Volunteers", color: "text-[hsl(345,65%,35%)]" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className={`font-serif text-4xl md:text-5xl font-semibold ${stat.color}`}>
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-muted-foreground text-sm tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            className="font-serif text-2xl md:text-3xl text-[hsl(345,60%,20%)] italic leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "We believe that gratitude is not just a feeling — it is an act. Every service rendered
            is a debt repaid to the community that shaped us."
          </motion.blockquote>
          <motion.div
            className="mt-6 w-12 h-0.5 bg-[hsl(37,70%,58%)] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 text-muted-foreground text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Our Mission
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 px-4 bg-[hsl(345,60%,14%)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex-shrink-0">
              <img
                src="/founder.png"
                alt="Nishtha Bhatia, Founder of Project Kritagyata"
                className="w-56 h-72 object-cover object-top rounded-2xl shadow-2xl border-4 border-[hsl(37,70%,58%)]"
              />
            </div>

            <div className="flex flex-col gap-5 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[hsl(37,70%,58%)] text-xs font-semibold tracking-widest uppercase mb-2">Our Story</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[hsl(36,30%,95%)] leading-snug">
                  Born from a Teenager's Dream
                </h2>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 text-[hsl(36,15%,72%)] text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>
                  Project Kritagyata was founded in <span className="text-[hsl(37,70%,65%)] font-medium">2025</span> by{" "}
                  <span className="text-[hsl(36,30%,92%)] font-semibold">Nishtha Bhatia</span>, who was just{" "}
                  <span className="text-[hsl(37,70%,65%)] font-medium">16 years old</span> when she decided that gratitude
                  should be more than a feeling — it should be a force for change.
                </p>
                <p>
                  Growing up, Nishtha witnessed first-hand the inequalities that communities around her faced — children
                  without access to quality education, families struggling for basic healthcare, and elderly members
                  left without support. Rather than looking away, she chose to act.
                </p>
                <p>
                  With a handful of friends, a notebook full of ideas, and an unshakeable belief in the power of
                  community, she launched Kritagyata — the Sanskrit word for <em className="text-[hsl(36,30%,85%)]">gratitude</em>.
                  The vision was simple: every life we have been given is a gift, and the truest way to honour it is
                  to give back.
                </p>
                <p>
                  Today, what began as one young woman's resolve has grown into a movement of{" "}
                  <span className="text-[hsl(37,70%,65%)] font-medium">70+ volunteers</span>, spanning education,
                  healthcare, environment, livelihood, and women empowerment — touching over{" "}
                  <span className="text-[hsl(37,70%,65%)] font-medium">500 lives</span> and counting.
                </p>
              </motion.div>

              <motion.p
                className="text-[hsl(37,55%,62%)] font-serif italic text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                "You don't need to be older to make a difference. You just need to care enough to start."
                <span className="block mt-1 text-sm not-italic text-[hsl(36,15%,55%)]">— Nishtha Bhatia, Founder</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-[hsl(36,25%,96%)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <motion.h2
              className="font-serif text-3xl md:text-4xl text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Recent Work
            </motion.h2>
            <Link
              href="/our-work"
              className="text-[hsl(345,75%,28%)] text-sm font-medium hover:text-[hsl(345,65%,38%)] transition-colors"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-[hsl(37,60%,45%)]">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground leading-snug">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {project.beneficiaries.toLocaleString()} beneficiaries
                    </span>
                    <Link
                      href={`/project/${project.id}`}
                      className="text-xs text-[hsl(345,75%,28%)] font-medium hover:text-[hsl(345,65%,38%)] transition-colors"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(345,60%,14%) 0%, hsl(345,50%,24%) 100%)",
        }}
      >
        <motion.div
          className="max-w-2xl mx-auto flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[hsl(36,30%,93%)]">
            Be a Part of Something Meaningful
          </h2>
          <p className="text-[hsl(36,15%,70%)] text-base leading-relaxed">
            Your time, skills, and compassion can change lives. Join our family of volunteers
            and help us carry forward the spirit of gratitude.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3.5 rounded bg-[hsl(37,70%,58%)] text-[hsl(345,60%,10%)] font-semibold tracking-wide hover:bg-[hsl(37,70%,65%)] transition-all duration-200 shadow-lg text-sm"
          >
            Apply to Volunteer
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
