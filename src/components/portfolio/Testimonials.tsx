import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  {
    quote:
      "Adithya combines a strong design eye with serious technical chops. His work feels polished, modern and considered.",
    name: "Priya R.",
    role: "Product Manager",
    avatar: a1,
  },
  {
    quote:
      "Sharp, curious and reliable. He took ownership of the frontend and delivered above expectations every sprint.",
    name: "Dr. Karthik S.",
    role: "Faculty Mentor, RMK",
    avatar: a2,
  },
  {
    quote:
      "One of the few student devs who actually ships. Clean code, beautiful UI — exactly what every team needs.",
    name: "Rahul M.",
    role: "Senior Designer",
    avatar: a3,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 06 — Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-5xl font-extrabold leading-none md:text-7xl"
        >
          <span className="text-stroke">Kind </span>
          <span className="text-gradient">words</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass relative flex flex-col gap-6 rounded-3xl p-8 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border/50 pt-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40"
                />
                <div>
                  <p className="font-display font-bold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
