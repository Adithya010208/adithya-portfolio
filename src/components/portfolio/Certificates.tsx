import { motion } from "framer-motion";
import { Award, Code, Cpu, GraduationCap, Trophy, Users } from "lucide-react";

const certs = [
  { icon: Trophy, title: "1st Prize — Ideation Bootcamp", issuer: "RMK Engineering College", year: "2026", color: "from-primary-glow to-accent-pink" },
  { icon: Trophy, title: "3rd Prize — Pitch-a-thon 2026", issuer: "CampusX · Jeppiaar", year: "2026", color: "from-primary-glow to-accent-violet" },
  { icon: Award, title: "AMOR.MORTIS CTF Participant", issuer: "Cybercom", year: "2026", color: "from-accent-pink to-accent-violet" },
  { icon: Code, title: "C++ Virtual Internship", issuer: "CodeAlpha", year: "2026", color: "from-accent-cyan to-primary-glow" },
  { icon: Award, title: "Ramanujan Math Competition (Level 2)", issuer: "ISTE Tamilnadu", year: "2026", color: "from-accent-violet to-accent-cyan" },
  { icon: GraduationCap, title: "Full-Stack Web Development", issuer: "Coursera", year: "2024", color: "from-accent-pink to-accent-violet" },
  { icon: Trophy, title: "Hack the Future Hackathon", issuer: "RMK · Top 10 Finalist", year: "2024", color: "from-accent-violet to-primary-glow" },
  { icon: Code, title: "Internship — Frontend Engineer", issuer: "Tech Startup", year: "2024", color: "from-primary-glow to-accent-cyan" },
  { icon: Cpu, title: "AI / ML Workshop", issuer: "IIT Madras", year: "2024", color: "from-accent-cyan to-accent-pink" },
  { icon: Award, title: "Problem Solving — 5⭐", issuer: "HackerRank", year: "2023", color: "from-accent-pink to-primary-glow" },
  { icon: Users, title: "UI/UX Design Bootcamp", issuer: "Google · Coursera", year: "2023", color: "from-accent-violet to-accent-pink" },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="relative py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 04 — Certificates
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-5xl font-extrabold leading-none md:text-7xl"
        >
          <span className="text-stroke">Certified </span>
          <span className="text-gradient">& proven</span>
        </motion.h2>
      </div>

      <div className="marquee-mask mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 px-6">
          {[...certs, ...certs].map((c, i) => (
            <article
              key={i}
              className="glass group relative w-[320px] shrink-0 overflow-hidden rounded-3xl p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-glow`}>
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 font-mono-ui text-xs uppercase tracking-widest text-muted-foreground">
                Issued · {c.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
