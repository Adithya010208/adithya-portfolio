import { motion } from "framer-motion";
import { Brain, Code2, Shield, LineChart } from "lucide-react";
import starImg from "@/assets/shape-star.png";
import flowerImg from "@/assets/shape-flower.png";

const passions = [
  { icon: Code2, label: "Web Development", desc: "Building fast, scalable, modern interfaces with React, TypeScript & beyond." },
  { icon: Brain, label: "Artificial Intelligence", desc: "Exploring LLMs, ML workflows and intelligent product experiences." },
  { icon: Shield, label: "Cybersecurity", desc: "Implementing robust defense systems, web security, and vulnerability assessments." },
  { icon: LineChart, label: "Data Analytics", desc: "Transforming raw data into actionable insights and intuitive visualizations." },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <img src={starImg} alt="" aria-hidden className="pointer-events-none absolute -left-10 top-32 h-32 w-32 animate-float-slow opacity-70" />
      <img src={flowerImg} alt="" aria-hidden className="pointer-events-none absolute right-4 bottom-24 h-28 w-28 animate-float-slower opacity-80" />

      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 01 — About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-6xl font-extrabold leading-none md:text-8xl lg:text-9xl"
        >
          <span className="text-stroke">ABOUT</span>{" "}
          <span className="text-gradient">ME</span>
        </motion.h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground md:text-xl"
          >
            <p>
              I'm <span className="text-foreground">Adithya K</span>, a B.E. Computer
              Science & Design Engineering student at{" "}
              <span className="text-foreground">RMK Engineering College</span>, based in
              Tiruvallur, Tamil Nadu.
            </p>
            <p>
              I live at the intersection of <span className="text-gradient-primary font-semibold">code, design and creative technology</span> — building products that are
              technically solid and visually unforgettable.
            </p>
            <p>
              From AI experiments to pixel-crafted interfaces, I love turning ideas into bold,
              shippable experiences.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {passions.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-cta text-white shadow-glow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{p.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
