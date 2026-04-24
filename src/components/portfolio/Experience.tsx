import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "1st Prize — Ideation Bootcamp",
    org: "RMK Engineering College",
    period: "2026",
    desc: "Competed as team LOGIC LORD and secured first place by demonstrating exceptional strategic problem solving and creative ideation.",
  },
  {
    n: "02",
    title: "C++ Programming Virtual Intern",
    org: "CodeAlpha",
    period: "2026",
    desc: "Successfully completed hands-on programming challenges, tackling data structures and core algorithms to strengthen my C++ fundamentals.",
  },
  {
    n: "03",
    title: "3rd Prize — Pitch-a-thon",
    org: "CampusX · Jeppiaar",
    period: "2026",
    desc: "Transformed an innovative concept into a startup prototype, successfully passing mentorship evaluation and industry validation rounds.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 05 — Experience & Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-5xl font-extrabold leading-none md:text-7xl"
        >
          <span className="text-gradient">Milestones</span>{" "}
          <span className="text-stroke">/ so far</span>
        </motion.h2>

        <div className="mt-14 divide-y divide-border/50 border-y border-border/50">
          {items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group grid items-center gap-4 py-8 transition-colors md:grid-cols-[120px_1fr_auto] md:gap-8"
            >
              <span className="font-display text-4xl font-extrabold text-stroke transition-all group-hover:text-gradient-primary md:text-5xl">
                {item.n}
              </span>
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.org} · <span className="font-mono-ui">{item.period}</span>
                </p>
                <p className="max-w-2xl pt-2 text-muted-foreground">{item.desc}</p>
              </div>
              <div className="hidden h-px w-24 bg-gradient-cta transition-all group-hover:w-32 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
