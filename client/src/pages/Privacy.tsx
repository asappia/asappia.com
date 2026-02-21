/*
 * Design: Soft Brutalism — warm dark theme
 * Privacy Policy: Clean typographic layout, compliant with App Store & Play Store
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Effective date: February 21, 2026
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="prose prose-invert max-w-none space-y-8"
          >
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                asappia ("we," "our," or "us") operates mobile applications available on the Apple App Store and Google Play Store. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span><strong className="text-foreground">Usage Data & Analytics:</strong> We use analytics services to collect anonymized usage data, such as app feature usage, session duration, and crash reports. This helps us improve the quality and performance of our apps.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span><strong className="text-foreground">Device Information:</strong> We may collect device type, operating system version, and unique device identifiers for analytics and diagnostics purposes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span><strong className="text-foreground">Locally Stored Data:</strong> Our apps store user preferences, settings, and app data locally on your device. This data is not transmitted to our servers unless you opt into cloud sync features.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span><strong className="text-foreground">Cloud-Synced Data:</strong> If you enable cloud sync or backup features, your app data may be stored on secure cloud services (such as Apple iCloud or Google Cloud) to allow data recovery and cross-device synchronization.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>3. Advertising</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps may display advertisements provided by third-party advertising networks. These networks may use cookies, device identifiers, and similar technologies to serve ads based on your prior visits to our apps or other apps and websites. We do not share personally identifiable information with advertisers. You can opt out of personalized advertising through your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>4. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span>Provide, maintain, and improve our applications</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span>Monitor and analyze usage trends and preferences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span>Diagnose technical issues and crashes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span>Display relevant advertisements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 mt-1.5 shrink-0">&#8226;</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>5. Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most app data is stored locally on your device. When cloud sync is enabled, data is stored using industry-standard encryption on secure cloud infrastructure. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps may use third-party services that have their own privacy policies. These include analytics providers (such as Google Analytics for Firebase), advertising networks, and cloud storage providers. We encourage you to review the privacy policies of these third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to opt out of certain data processing activities. To exercise these rights, please contact us at the email address provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the app and updating the "Effective date" at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-3">
                <a href="mailto:support@asappia.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                  support@asappia.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
