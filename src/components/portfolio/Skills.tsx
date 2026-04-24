import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, accent: "from-accent-pink to-accent-violet" },
  { name: "CSS", level: 92, accent: "from-accent-violet to-primary-glow" },
  { name: "JavaScript", level: 88, accent: "from-primary-glow to-accent-cyan" },
  { name: "Java", level: 90, accent: "from-accent-cyan to-accent-violet" },
  { name: "Python", level: 85, accent: "from-accent-violet to-accent-pink" },
  { name: "C++", level: 78, accent: "from-accent-pink to-primary-glow" },
  { name: "C", level: 88, accent: "from-primary-glow to-accent-pink" },
  { name: "AI Tools", level: 82, accent: "from-accent-cyan to-accent-pink" },
  { name: "Problem Solving", level: 90, accent: "from-accent-violet to-accent-cyan" },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 02 — Skills
        </motion.p>
        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl font-extrabold leading-none md:text-7xl"
          >
            <span className="text-gradient">My </span>
            <span className="text-stroke">Toolkit</span>
          </motion.h2>
          <p className="max-w-md text-muted-foreground">
            A curated stack I use to design, build and ship — from rapid prototypes to production-ready products.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">{s.name}</h3>
                <span className="font-mono-ui text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.accent} shadow-glow`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
