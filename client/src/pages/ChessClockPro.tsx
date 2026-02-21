/*
 * Design: Soft Brutalism — warm dark theme
 * Chess Clock Pro app page: hero, features, screenshot placeholders, store links
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Timer,
  Palette,
  Volume2,
  Vibrate,
  Smartphone,
  Zap,
  Settings,
  Clock,
  ImageIcon,
  Apple,
  ExternalLink,
} from "lucide-react";

const CHESS_CLOCK_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/OnY9C5HKCublHeRtcq10GH/sandbox/Dx677ABwJ9rhORYrySenT1-img-2_1771680517000_na1fn_Y2hlc3MtY2xvY2staGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT25ZOUM1SEtDdWJsSGVSdGNxMTBHSC9zYW5kYm94L0R4Njc3QUJ3SjlyaE9SWXJ5U2VuVDEtaW1nLTJfMTc3MTY4MDUxNzAwMF9uYTFmbl9ZMmhsYzNNdFkyeHZZMnN0YUdWeWJ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ih3NfwdC0B409YpQSESXfuQ3qpOsJm--j0V4fbAq79aN-f9HAwS5QhPVwg8KJZPfAoU81FJwKAjEj7sxAA-YPx6Da60SVNqL1ck3Jc4MF7GLrOUvDbGmXLh1ZKUMhJ4u~3yfvSl9xh63iYQNNGmXe8UQMf8XMmCcZYtXJa0KF-78NtXrAIYiLVjxjpp53ro3niyqAMUwazQfksi-PCXWa-lBNDUPE5wvwPUq9ksvyYoBIrWCanfdSBaUfHzlpwP7xTjWl46x8aS~4xbatFVv~8tL~qD7uUjd2S2828nnCUZ0R~zqQG7-Xi7CyOWu2Tac43xjuyCdG~r4bdtFq-26BA__";

const THEMES_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/OnY9C5HKCublHeRtcq10GH/sandbox/Dx677ABwJ9rhORYrySenT1-img-3_1771680503000_na1fn_Y2hlc3MtY2xvY2stdGhlbWVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT25ZOUM1SEtDdWJsSGVSdGNxMTBHSC9zYW5kYm94L0R4Njc3QUJ3SjlyaE9SWXJ5U2VuVDEtaW1nLTNfMTc3MTY4MDUwMzAwMF9uYTFmbl9ZMmhsYzNNdFkyeHZZMnN0ZEdobGJXVnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bilDXO~vpNuSIz1IKWSyKyZipezTxFZ2c1RBGCpfVl5ERDe~IanslReFq09V0eceVTA~3c31jup6dhimGgA7gccbXhXRUhv7yrB4d0PoXVFwgWMCKPE0VAj8EbmuXlfb1muB9nZe~CZD65NH13Bd~Fdr2u~OV~pjup9myLWzHbegj-bqrZQxEEqjUYx1f7PnUPa7tRuVxopfXJtWlYpi60e33eHK2Hwd~1Xn6ehZLmwXxuHhl5Zr9aXzZSLd03ofdc4wHhVhalKsOJJPqIkFinlR~Ru5hM6f7h9grLiNjsbUgztlOoywcUjk6CxLP8-pWUV5OFkT5MItcsbJbk3s1w__";

const features = [
  {
    icon: Timer,
    title: "Multiple Time Controls",
    desc: "Bullet, Blitz, Rapid, Classical, and fully customizable presets with Fischer increment and Bronstein delay.",
  },
  {
    icon: Palette,
    title: "6 Visual Themes",
    desc: "Classic wood, modern dark, clean white, ocean blue, sunset orange, and forest green.",
  },
  {
    icon: Volume2,
    title: "Sound Effects",
    desc: "Satisfying click sounds on turn switch and clear alerts when time expires.",
  },
  {
    icon: Vibrate,
    title: "Haptic Feedback",
    desc: "Subtle vibration on every tap for tactile confirmation during intense games.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    desc: "Zero-lag tap detection. Built for competitive play where every millisecond counts.",
  },
  {
    icon: Settings,
    title: "Fully Configurable",
    desc: "Set time per player, increment, delay, and save unlimited custom presets.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ChessClockPro() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Link href="/">
                <span className="text-xs text-muted-foreground hover:text-amber-400 transition-colors mb-6 inline-block">
                  &larr; Back to Home
                </span>
              </Link>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                iOS & Android
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Chess Clock Pro
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                A professional chess clock with multiple time controls, 6 visual themes,
                sound effects, and haptic feedback. Everything you need for your next game.
              </p>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Apple size={20} />
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
                    <div className="leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.7.4.7 1.08 0 1.48l-2.302 1.302-2.532-2.532 2.532-2.552zM5.864 1.469L16.8 7.802l-2.302 2.302-8.635-8.635z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-70 leading-none">Get it on</div>
                    <div className="leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={CHESS_CLOCK_IMG}
                  alt="Chess Clock Pro"
                  className="w-full h-auto"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Features
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything you need
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i + 2}
                className="group p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-amber-400" />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Themes Showcase */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Personalize
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              6 beautiful themes
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border"
          >
            <img
              src={THEMES_IMG}
              alt="Chess Clock Pro Themes — 6 visual themes shown on phone screens"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gallery
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Screenshots
            </motion.h2>
          </motion.div>

          {/* Placeholder grid for screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1, duration: 0.5 }}
                className="aspect-[9/16] rounded-xl border border-dashed border-border bg-card/20 flex flex-col items-center justify-center gap-3"
              >
                <ImageIcon size={32} className="text-muted-foreground/30" />
                <span className="text-xs text-muted-foreground/40">Screenshot {n}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/50 mt-6">
            App screenshots coming soon.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 sm:p-12 text-center"
          >
            <Clock size={40} className="text-amber-400 mx-auto mb-6" />
            <h2
              className="text-3xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to play?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download Chess Clock Pro and elevate your chess experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500/15 border border-amber-500/25 text-amber-400 text-sm font-medium hover:bg-amber-500/25 transition-all"
              >
                <Apple size={16} />
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500/15 border border-amber-500/25 text-amber-400 text-sm font-medium hover:bg-amber-500/25 transition-all"
              >
                <ExternalLink size={16} />
                Google Play
              </a>
            </div>

            {/* Quick links */}
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <Link href="/support">
                <span className="text-muted-foreground hover:text-amber-400 transition-colors">
                  Support
                </span>
              </Link>
              <Link href="/privacy">
                <span className="text-muted-foreground hover:text-amber-400 transition-colors">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
