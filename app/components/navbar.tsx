"use client";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
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
  };
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div>
      <header className="border-border bg-background/80 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="text-foreground text-xl font-bold">hounder</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {isHome && (
                <>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Product
                  </a>
                  <a
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    href="/guides"
                  >
                    Learn
                  </a>
                  <a
                    href="#pricing"
                    onClick={(e) => handleSmoothScroll(e, "#pricing")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Pricing
                  </a>
                </>
              )}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                className="ring-offset-background focus-visible:ring-ring [&_svg]:size-4 shadow-modern hover:shadow-modern-lg bg-linear-to-r bg-primary text-primary-foreground inline-flex h-9 transform items-center justify-center gap-2 whitespace-nowrap rounded-full from-purple-500 to-blue-500 px-4 text-xs font-semibold transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                href="/onboarding"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
