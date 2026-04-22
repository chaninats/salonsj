import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-3">
        <span className="text-xl font-bold text-foreground tracking-tight">
          Salon Sajai 💖
        </span>
        <div className="flex items-center gap-3">
          <Link
            to="/api-docs"
            className="rounded-2xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:shadow-cute-hover"
          >
            API Docs
          </Link>
          <a
            href="https://lin.ee/6cDhGJ3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-salon-green px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-cute-hover"
          >
            <MessageCircle size={18} />
            สอบถามทาง LINE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
