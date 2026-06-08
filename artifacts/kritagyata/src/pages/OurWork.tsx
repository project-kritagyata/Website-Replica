import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category === activeCategory || p.tags.includes(activeCategory),
        );

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
            Our Work
          </h1>
          <p className="text-[hsl(36,15%,70%)] text-base leading-relaxed">
            Across communities, across years — a record of service offered with gratitude.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-16 z-30 bg-[hsl(36,30%,97%)] border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide flex-shrink-0 transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[hsl(345,75%,28%)] text-white border-[hsl(345,75%,28%)]"
                  : "bg-white text-foreground border-border hover:border-[hsl(345,40%,50%)] hover:text-[hsl(345,75%,28%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 py-12 px-4 bg-[hsl(36,25%,96%)]">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">
              No projects found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                >
                  <div className="overflow-hidden h-52 flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs tracking-wide capitalize">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={11} />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground leading-snug">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto pt-3 text-xs text-muted-foreground border-t border-border">
                      {project.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {project.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Users size={11} />
                        {project.beneficiaries.toLocaleString()} beneficiaries
                      </span>
                    </div>

                    <Link
                      href={`/project/${project.id}`}
                      className="mt-1 text-sm font-medium text-[hsl(345,75%,28%)] hover:text-[hsl(345,65%,38%)] transition-colors"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
