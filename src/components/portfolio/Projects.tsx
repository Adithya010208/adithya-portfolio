import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import portfolio from "@/assets/project-portfolio.jpg";
import ai from "@/assets/project-ai.jpg";
import web from "@/assets/project-web.jpg";
import college from "@/assets/project-college.jpg";
import startup from "@/assets/project-startup.jpg";

const projects = [
  {
    n: "01",
    title: "ClearNote AI",
    tag: "AI",
    desc: "An AI assistant that records and transcribes doctor-patient conversations to generate final reports, minimizing documentation time and enhancing patient care.",
    stack: ["Python", "OpenAI", "FastAPI"],
    image: ai,
    github: "#",
    live: "https://clear-note-web.vercel.app/",
  },
  {
    n: "02",
    title: "RMK Academic Intelligence Portal",
    tag: "Education",
    desc: "A comprehensive academic portal tailored for enhanced student and faculty experiences.",
    stack: ["React", "Node", "Postgres"],
    image: college,
    github: "#",
    live: "https://smartresult.vercel.app/",
  },
  {
    n: "03",
    title: "SecurePay",
    tag: "Fintech",
    desc: "A highly secure, sleek payment dashboard focused on seamless and protected transactions.",
    stack: ["Next.js", "Tailwind", "Firebase"],
    image: startup,
    github: "#",
    live: "https://sentinal-pay-official.vercel.app/",
  },
  {
    n: "04",
    title: "EcoPulse AI",
    tag: "Smart Systems",
    desc: "An AI-powered energy optimization dashboard designed to monitor, analyze, and manage real-time resource consumption.",
    stack: ["React", "AI", "Dashboard"],
    image: web,
    github: "#",
    live: "https://energymanagement-nu.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 03 — Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-5xl font-extrabold leading-none md:text-7xl"
        >
          <span className="text-gradient">Projects</span>{" "}
          <span className="text-stroke">/ Case studies</span>
        </motion.h2>

        <div className="mt-14 space-y-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-3xl transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className="grid items-stretch gap-0 md:grid-cols-[140px_1fr_auto]">
                <div className="flex items-center justify-center border-b border-border/50 p-6 md:border-b-0 md:border-r">
                  <span className="font-display text-5xl font-extrabold text-stroke md:text-6xl">
                    {p.n}
                  </span>
                </div>

                <div className="flex flex-col justify-center gap-3 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <p className="max-w-2xl text-muted-foreground">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-secondary px-3 py-1 font-mono-ui text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 p-6 md:flex-col md:justify-center">
                  <a
                    href={p.github || "#"}
                    target={p.github && p.github !== "#" ? "_blank" : undefined}
                    rel={p.github && p.github !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={`${p.title} GitHub`}
                    className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110 hover:border-primary/40"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.live || "#"}
                    target={p.live && p.live !== "#" ? "_blank" : undefined}
                    rel={p.live && p.live !== "#" ? "noopener noreferrer" : undefined}
                    className="cta-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                  >
                    LIVE PROJECT
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Expanding image strip or iframe preview on hover */}
              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6">
                    {p.live && p.live !== "#" ? (
                      <iframe
                        src={p.live}
                        title={`${p.title} live preview`}
                        loading="lazy"
                        className="pointer-events-none h-64 w-full overflow-hidden rounded-2xl border-none bg-background object-cover md:h-80"
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="h-64 w-full rounded-2xl object-cover md:h-80"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass flex items-center justify-center rounded-3xl border border-dashed border-primary/30 p-12 py-16 text-center transition-all hover:border-primary/50 hover:shadow-glow"
          >
            <h3 className="font-display text-3xl font-extrabold text-muted-foreground md:text-4xl">
              Crafting more ideas... ✨
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
