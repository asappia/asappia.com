/*
 * Design: Soft Brutalism — warm dark theme
 * Landing page: Oversized brand, tagline, app cards
 * Hero: Full-width with generated background, large "asappia" text
 * Apps section: Glass card for Chess Clock Pro
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Timer, Palette, Volume2, Vibrate, ChevronRight, Smartphone } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/OnY9C5HKCublHeRtcq10GH/sandbox/Dx677ABwJ9rhORYrySenT1-img-1_1771680510000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT25ZOUM1SEtDdWJsSGVSdGNxMTBHSC9zYW5kYm94L0R4Njc3QUJ3SjlyaE9SWXJ5U2VuVDEtaW1nLTFfMTc3MTY4MDUxMDAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D7ltthcAeK5gyVeChRAsuDa4TG8HxNLFPefclb9jycvXbRnw2eewbsTa6iOLgQvsk6dnz9mdaX~VmHjXnyk77dXPzWivsJSW25oC0ajd0adQU37kK~qJNy4oOymq3pNey9OXHV5z4C2jJH7yHUW5eIXZoqAkGzUd193L6lrX-22wcrCDY9k~Gw6uUlpRZL~CnZDHG~wGn65IW6KcotoedCE~pxfyBVaNgWKAzJNyaL9aq3A6GpLmFtus-eECE9MoZmEbZDe7uJ9cTDLfvq-g7kGeRRJZOqnUoITdz8EaZthwc6tLvpUp1kiTlWG6VG3uV~0cszMtUXPLdZECwQMacw__";

const CHESS_CLOCK_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/OnY9C5HKCublHeRtcq10GH/sandbox/Dx677ABwJ9rhORYrySenT1-img-2_1771680517000_na1fn_Y2hlc3MtY2xvY2staGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT25ZOUM1SEtDdWJsSGVSdGNxMTBHSC9zYW5kYm94L0R4Njc3QUJ3SjlyaE9SWXJ5U2VuVDEtaW1nLTJfMTc3MTY4MDUxNzAwMF9uYTFmbl9ZMmhsYzNNdFkyeHZZMnN0YUdWeWJ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ih3NfwdC0B409YpQSESXfuQ3qpOsJm--j0V4fbAq79aN-f9HAwS5QhPVwg8KJZPfAoU81FJwKAjEj7sxAA-YPx6Da60SVNqL1ck3Jc4MF7GLrOUvDbGmXLh1ZKUMhJ4u~3yfvSl9xh63iYQNNGmXe8UQMf8XMmCcZYtXJa0KF-78NtXrAIYiLVjxjpp53ro3niyqAMUwazQfksi-PCXWa-lBNDUPE5wvwPUq9ksvyYoBIrWCanfdSBaUfHzlpwP7xTjWl46x8aS~4xbatFVv~8tL~qD7uUjd2S2828nnCUZ0R~zqQG7-Xi7CyOWu2Tac43xjuyCdG~r4bdtFq-26BA__";

const features = [
  { icon: Timer, label: "Multiple Time Controls", desc: "Bullet, Blitz, Rapid, Classical, and custom presets" },
  { icon: Palette, label: "6 Visual Themes", desc: "From classic wood to modern dark" },
  { icon: Volume2, label: "Sound Effects", desc: "Satisfying click and alert sounds" },
  { icon: Vibrate, label: "Haptic Feedback", desc: "Tactile response on every tap" },
  { icon: Smartphone, label: "iOS & Android", desc: "Available on both platforms" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative z-10 container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-amber-400">a</span>
            <span className="text-foreground">sappia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Small apps, built weekly.<br />
            Experiments by asappia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10"
          >
            <Link href="/apps/chess-clock-pro">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500/15 border border-amber-500/25 text-amber-400 text-sm font-medium hover:bg-amber-500/25 transition-all">
                Explore our apps
                <ChevronRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Apps
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built with care
            </motion.h2>
          </motion.div>

          {/* Chess Clock Pro Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/apps/chess-clock-pro">
              <motion.div
                variants={fadeUp}
                custom={2}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={CHESS_CLOCK_IMG}
                      alt="Chess Clock Pro"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>

                  {/* Content side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 mb-2">
                      Featured App
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Chess Clock Pro
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      A professional chess clock for iOS and Android with multiple time controls,
                      6 visual themes, sound effects, and haptic feedback. Everything you need
                      for your next game.
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {features.map((f) => (
                        <div
                          key={f.label}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-xs text-muted-foreground"
                        >
                          <f.icon size={13} className="text-amber-400/70" />
                          {f.label}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                      Learn more
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* More apps coming soon */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              More apps coming soon. Stay tuned.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
