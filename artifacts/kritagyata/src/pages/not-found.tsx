import { Link } from "wouter";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="font-serif text-6xl text-[hsl(345,60%,20%)] mb-4">404</h1>
        <p className="text-muted-foreground text-lg mb-8">Page not found.</p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded bg-[hsl(345,75%,28%)] text-white text-sm font-medium hover:bg-[hsl(345,65%,35%)] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
