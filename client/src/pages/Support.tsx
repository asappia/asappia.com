/*
 * Design: Soft Brutalism — warm dark theme
 * Support page: FAQ accordion, contact email link
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I set a custom time control?",
    a: "Open Chess Clock Pro, tap the settings icon (gear) on the main screen, then select 'Custom Time'. You can set the initial time, increment, and delay for each player independently. Tap 'Save' to store your custom preset for future use.",
  },
  {
    q: "How do I change the visual theme?",
    a: "From the main screen, tap the settings icon, then select 'Themes'. You'll see all 6 available themes — tap any theme to preview it, then tap 'Apply' to set it as your active theme. Themes change the entire look of the clock interface.",
  },
  {
    q: "How do I enable or disable sound effects?",
    a: "Go to Settings > Sound & Haptics. You can toggle sound effects on or off independently. When enabled, you'll hear a satisfying click when switching turns and an alert when time runs out.",
  },
  {
    q: "How do I enable or disable haptic feedback?",
    a: "Go to Settings > Sound & Haptics. Toggle the 'Haptic Feedback' switch. When enabled, your device will provide a subtle vibration on each tap, giving you tactile confirmation of your actions.",
  },
  {
    q: "What time control formats are supported?",
    a: "Chess Clock Pro supports all standard formats: Bullet (1-2 min), Blitz (3-5 min), Rapid (10-30 min), Classical (60+ min), and fully customizable presets. You can also configure Fischer increment and Bronstein delay.",
  },
  {
    q: "Is my data stored online?",
    a: "By default, all your settings and preferences are stored locally on your device. If you enable cloud sync, your data will be backed up to iCloud (iOS) or Google Cloud (Android) for cross-device access. See our Privacy Policy for more details.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "We'd love to hear from you! Send us an email at support@asappia.com with a description of the issue or your feature idea. Please include your device model and OS version for bug reports.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-3xl mx-auto">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Help Center
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Support
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
              Find answers to common questions about Chess Clock Pro, or reach out to us directly.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-16"
          >
            <h2
              className="text-2xl font-semibold mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <MessageCircle size={22} className="text-amber-400" />
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-amber-500/20"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-amber-400 transition-colors py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 sm:p-12"
          >
            <h2
              className="text-2xl font-semibold mb-4 flex items-center gap-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Mail size={22} className="text-amber-400" />
              Still need help?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Can't find what you're looking for? Send us an email and we'll get back to you as soon as possible. Please include your device model and OS version for bug reports.
            </p>
            <a
              href="mailto:support@asappia.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500/15 border border-amber-500/25 text-amber-400 text-sm font-medium hover:bg-amber-500/25 transition-all"
            >
              <Mail size={16} />
              support@asappia.com
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
