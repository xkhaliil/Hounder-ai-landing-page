"use client";
import logo from "../../app/assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-border bg-secondary border-t px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link className="mb-4 flex items-center" href="/">
              <Image src={logo} alt="Hounder" className="h-7 w-7" />
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              AI-powered platform helping tenants find their perfect rental
              home.
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Resources
            </h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-foreground transition-colors"
                  href="/guides"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground transition-colors"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground transition-colors"
                  href="/compare"
                >
                  Compare
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground transition-colors"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Support
            </h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/15144806"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-foreground transition-colors"
                  title="Privacybeleid"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/15144806/cookie-policy"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-foreground transition-colors"
                  title="Cookiebeleid"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/gebruiksvoorwaarden/15144806"
                  className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-foreground transition-colors"
                  title="Algemene voorwaarden"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="text-muted-foreground space-y-1 text-xs">
            <p>KVK: NL866577518B01</p>
            <p>VAT: 93930240</p>
            <p>Prinsengracht 769, 1017 JZ Amsterdam</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@hounder.ai"
                className="hover:text-foreground transition-colors"
              >
                info@hounder.ai
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+31611725732"
                className="hover:text-foreground transition-colors"
              >
                +31 611 72 57 32
              </a>
            </p>
          </div>
        </div>
        <div className="border-border mt-8 border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Hounder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
