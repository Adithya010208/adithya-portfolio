import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Pause, Play, Smile, Sparkles, Sun } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import starImg from "@/assets/shape-star.png";
import bubbleImg from "@/assets/shape-bubble.png";
import flowerImg from "@/assets/shape-flower.png";

export const Hero = () => {
  const [idle, setIdle] = useState(true);

  // 3D Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
      setIdle(false);
    };

    const handleWindowMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIdle(true);
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    document.addEventListener("mouseleave", handleWindowMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      document.removeEventListener("mouseleave", handleWindowMouseLeave);
    };
  }, [x, y]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-primary/70 shadow-glow"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Floating shapes */}
      <img
        src={starImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-4 top-32 h-20 w-20 animate-float-slow opacity-90 md:left-16 md:h-28 md:w-28"
      />
      <img
        src={bubbleImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-40 h-16 w-16 animate-float-slower opacity-80 md:right-24 md:h-24 md:w-24"
      />
      <img
        src={flowerImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-10 h-16 w-16 animate-float-slow opacity-90 md:bottom-32 md:left-32 md:h-20 md:w-20"
      />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center lg:text-left"
        >
          <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
            Available for opportunities
          </p>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            A CSE & Design Engineering student
            <br className="hidden md:block" />
            crafting bold, futuristic web experiences ✨
          </p>
        </motion.div>

        {/* Center avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex flex-col items-center"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="relative cursor-pointer group"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gradient-cta opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70" 
              style={{
                transform: "translateZ(-50px)",
              }}
            />
            <div
              className="absolute -z-10 animate-spin-slow rounded-full border border-dashed border-primary/30 group-hover:border-primary/60 transition-colors duration-500"
              style={{ width: "110%", height: "110%", top: "-5%", left: "-5%", transform: "translateZ(-20px)" }}
            />
            {/* Idle float + subtle head sway */}
            <motion.div
              animate={
                idle
                  ? { y: [0, -12, 0], rotate: [-1.2, 1.2, -1.2] }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 5, repeat: idle ? Infinity : 0, ease: "easeInOut" }}
              className="relative"
              style={{ transform: "translateZ(40px)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  src={avatarImg}
                  alt="ADHI avatar"
                  width={520}
                  height={520}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-auto w-[280px] drop-shadow-[0_30px_60px_hsl(280_90%_65%/0.4)] sm:w-[360px] md:w-[440px] group-hover:drop-shadow-[0_40px_80px_hsl(280_90%_65%/0.6)] transition-all duration-500"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <a
            href="#contact"
            className="cta-glow group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            CONTACT ME
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>

      {/* Bottom heading + CTAs */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
        <div className="container space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">Hi, I'm </span>
            <span className="text-gradient-primary">ADHI</span>
            <span className="ml-2 inline-block">✌️</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Computer Science & Design Engineering Student · Developer · Creative Tech Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="cta-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <Download className="h-4 w-4" /> View Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
