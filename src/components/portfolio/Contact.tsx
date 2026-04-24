import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import flowerImg from "@/assets/shape-flower.png";
import bubbleImg from "@/assets/shape-bubble.png";

const socials = [
  { icon: Linkedin, label: "LinkedIn", handle: "@adithya0102", href: "https://www.linkedin.com/in/adithya0102/" },
  { icon: Github, label: "GitHub", handle: "Adithya010208", href: "https://github.com/Adithya010208" },
  { icon: Mail, label: "Email", handle: "adithyakathiresan2008@gmail.com", href: "mailto:adithyakathiresan2008@gmail.com" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:adithyakathiresan2008@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-32">
      <img
        src={flowerImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-8 top-20 h-32 w-32 animate-float-slow"
      />
      <img
        src={bubbleImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-40 h-24 w-24 animate-float-slower"
      />

      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          / 07 — Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-6xl font-extrabold leading-[0.9] md:text-8xl lg:text-9xl"
        >
          <span className="text-gradient">Let's </span>
          <span className="text-gradient-primary">build</span>{" "}
          <span className="text-stroke">together.</span>
        </motion.h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-3xl p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all focus:border-primary/60 focus:shadow-glow"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all focus:border-primary/60 focus:shadow-glow"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all focus:border-primary/60 focus:shadow-glow"
              />
            </label>
            <button
              type="submit"
              className="cta-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Send Message <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.form>

          <div className="space-y-4">
            <div className="glass flex items-center gap-4 rounded-3xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
                <p className="font-display text-lg font-bold">Tiruvallur, Tamil Nadu</p>
              </div>
            </div>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 6 }}
                className="glass group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-gradient-cta group-hover:text-white">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                    <p className="font-medium">{s.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer block */}
        <div className="relative mt-24 border-t border-border/50 pt-16 pb-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-display text-7xl font-extrabold leading-none md:text-9xl mb-8">
              <span className="text-stroke">ADITHYA </span>
              <span className="text-gradient">K</span>
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
               <a href="#home" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Home</a>
               <a href="#about" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">About</a>
               <a href="#skills" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Skills</a>
               <a href="#projects" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Projects</a>
               <a href="#home" className="text-sm font-semibold uppercase tracking-widest text-white hover:text-primary transition-colors opacity-80">↑ Back to Top</a>
            </div>

            <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} — Designed & built with ❤
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
