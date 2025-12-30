"use client";
import logo from "../../app/assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link className="mb-4 flex items-center" href="/">
              <Image src={logo} alt="Hounder" className="h-7 w-7" />
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              AI-powered platform helping tenants find their perfect rental
              home.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href="/guides"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href="/compare"
                >
                  Compare
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-foreground"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/15144806"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed transition-colors hover:text-foreground"
                  title="Privacybeleid"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/15144806/cookie-policy"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed transition-colors hover:text-foreground"
                  title="Cookiebeleid"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/gebruiksvoorwaarden/15144806"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed transition-colors hover:text-foreground"
                  title="Algemene voorwaarden"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>KVK: NL866577518B01</p>
            <p>VAT: 93930240</p>
            <p>Prinsengracht 769, 1017 JZ Amsterdam</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@hounder.ai"
                className="transition-colors hover:text-foreground"
              >
                info@hounder.ai
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+31611725732"
                className="transition-colors hover:text-foreground"
              >
                +31 611 72 57 32
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Hounder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
