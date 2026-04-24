import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a
          href="#contact"
          className="ml-1 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
};
