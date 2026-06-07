import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Tag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const id = parseInt(params.id ?? "0", 10);
  const project = projects.find((p) => p.id === id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[hsl(345,75%,28%)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Our Work
          </Link>

          {!project ? (
            <div className="py-24 text-center">
              <p className="text-muted-foreground">Project not found.</p>
              <Link href="/our-work" className="text-[hsl(345,75%,28%)] text-sm mt-4 inline-block">
                Return to Our Work
              </Link>
            </div>
          ) : (
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="secondary" className="text-xs tracking-wide">
                  {project.category}
                </Badge>
                {project.location && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin size={13} />
                    {project.location}
                  </span>
                )}
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar size={13} />
                  {project.year}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users size={13} />
                  {project.beneficiaries.toLocaleString()} beneficiaries
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                {project.title}
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {project.description}
              </p>

              {project.longDescription && (
                <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
                  {project.longDescription.split("\n").map((para, i) => (
                    <p key={i} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size={13} className="text-muted-foreground" />
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-border">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScorLtLhXrCs-lU5G_D5fGcKuYwMyGMQ_DaUz8sEzSAPVOljQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded bg-[hsl(345,75%,28%)] text-white font-medium text-sm tracking-wide hover:bg-[hsl(345,65%,35%)] transition-all duration-200 shadow-sm"
                >
                  Volunteer for Projects Like This
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
