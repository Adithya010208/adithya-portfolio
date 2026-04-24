import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    if (!document.startViewTransition) {
      document.documentElement.classList.toggle("light");
      setIsDark((prev) => !prev);
      return;
    }

    const t = document.startViewTransition(() => {
      document.documentElement.classList.toggle("light");
      setIsDark((prev) => !prev);
    });

    t.ready.then(() => {
      const radius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a
          href="#home"
          className="px-4 py-2 font-display text-sm font-bold tracking-tight text-foreground"
        >
          AK<span className="text-gradient-primary">.</span>
        </a>
        <div className="hidden items-center md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        
        <button
          onClick={toggleTheme}
          className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground transition-transform hover:scale-105 hover:bg-muted"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <a
          href="#contact"
          className="ml-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
};
