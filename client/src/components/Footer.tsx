/*
 * Design: Soft Brutalism — warm dark theme
 * Footer: Minimal with brand, links, contact email
 * Accent: amber for links
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <Link href="/">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-amber-400">a</span>sappia
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Small apps, built weekly.<br />
              Experiments by asappia.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4
              className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/apps/chess-clock-pro", label: "Chess Clock Pro" },
                { href: "/support", label: "Support" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-amber-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact
            </h4>
            <a
              href="mailto:support@asappia.com"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              support@asappia.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} asappia. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care by an indie developer.
          </p>
        </div>
      </div>
    </footer>
  );
}
