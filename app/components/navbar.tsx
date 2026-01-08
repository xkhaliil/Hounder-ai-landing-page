"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { ThemeToggle } from "./theme-toggle"; // Suspended for future reactivation

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div>
      <header className="border-border bg-background/80 fixed left-0 right-0 top-0 z-50 h-20 border-b backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex h-full items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="text-foreground text-xl font-bold">hounder</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {isHome && (
                <>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                  >
                    How it works
                  </a>
                  <a
                    href="#testimonials"
                    onClick={(e) => handleSmoothScroll(e, "#testimonials")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                  >
                    Reviews
                  </a>
                  <a
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    FAQ
                  </a>
                  <a
                    href="#pricing"
                    onClick={(e) => handleSmoothScroll(e, "#pricing")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                  >
                    Pricing
                  </a>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Blog
                  </a>
                </>
              )}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Theme Toggle - Suspended for future reactivation */}
              {/* <ThemeToggle /> */}
              <a
                className="ring-offset-background focus-visible:ring-ring [&_svg]:size-3 bg-linear-to-r shadow-modern bg-primary text-primary-foreground hover:bg-primary/90 get-started-button inline-flex h-8 transform-gpu items-center justify-center gap-2 whitespace-nowrap rounded-full from-purple-500 to-blue-500 px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                href="/onboarding"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Theme Toggle - Suspended for future reactivation */}
              {/* <ThemeToggle /> */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground p-2"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {isMobileMenuOpen ? (
                    <path d="M18 6 6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 12h16M4 6h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="border-border mt-4 border-t pt-4 md:hidden">
              <nav className="flex flex-col gap-4">
                {isHome && (
                  <>
                    <a
                      href="#how-it-works"
                      onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                      className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                    >
                      How it works
                    </a>
                    <a
                      href="#testimonials"
                      onClick={(e) => handleSmoothScroll(e, "#testimonials")}
                      className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                    >
                      Reviews
                    </a>
                    <a
                      href="/faq"
                      className="text-muted-foreground hover:text-foreground text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </a>
                    <a
                      href="#pricing"
                      onClick={(e) => handleSmoothScroll(e, "#pricing")}
                      className="text-muted-foreground hover:text-foreground cursor-pointer text-sm"
                    >
                      Pricing
                    </a>
                    <a
                      href="/blog"
                      className="text-muted-foreground hover:text-foreground text-sm"
                    >
                      Blog
                    </a>
                  </>
                )}
                <a
                  className="ring-offset-background focus-visible:ring-ring [&_svg]:size-3 bg-linear-to-r shadow-modern bg-primary text-primary-foreground hover:bg-primary/90 get-started-button inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full from-purple-500 to-blue-500 px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                  href="/onboarding"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
