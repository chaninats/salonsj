import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "หน้าแรก" },
  { href: "#services", label: "บริการ & ราคา" },
  { href: "#promotions", label: "โปรโมชั่น" },
  { href: "#stylists", label: "เช็คคิวช่าง" },
  { href: "#reviews", label: "รีวิว" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold text-foreground tracking-tight whitespace-nowrap"
        >
          Salon Sajai 💖
        </a>

        <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://lin.ee/6cDhGJ3"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-2xl bg-salon-green px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-cute-hover"
          >
            <MessageCircle size={18} />
            สอบถามทาง LINE
          </a>
          <button
            type="button"
            aria-label="เปิดเมนู"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-foreground hover:bg-primary/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/40">
          <nav className="container mx-auto flex flex-col gap-1 py-3 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lin.ee/6cDhGJ3"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-salon-green px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle size={18} />
              สอบถามทาง LINE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
