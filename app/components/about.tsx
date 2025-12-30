"use client";

import MobileAnimation from "./about-page-componenets/mobile-animation";
import { WebAnimation } from "./about-page-componenets/web-animation";

export function About() {
  return (
    <div>
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl ">
                Hounder is an AI
                <br />
                real estate agent
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                While you&apos;re away, Hounder monitors every major rental platform
                in the Netherlands and automatically sends viewing applications
                the moment new apartments match your criteria.
              </p>
              <a
                className="ring-offset-background focus-visible:ring-ring [&_svg]:size-4 shadow-modern hover:shadow-modern-lg bg-linear-to-r inline-flex h-11 transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary from-purple-500 to-blue-500 px-6 py-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                href="/onboarding"
              >
                Try now
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
                  className="lucide lucide-arrow-right ml-2 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="bg-linear-to-b absolute bottom-10 left-8 top-10 w-0.5 from-purple-200 via-purple-300 to-purple-200"></div>
              <div className="space-y-12">
                <div className="animate-fade-in animation-delay: 0s; flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-50">
                    <span className="text-2xl font-semibold text-muted-foreground">
                      1
                    </span>
                  </div>
                  <div className="pt-3">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      Set your filters
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Tell Hounder your ideal apartment: city, budget, size, and
                      move-in date.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in animation-delay: 0.1s; flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-50">
                    <span className="text-2xl font-semibold text-muted-foreground">
                      2
                    </span>
                  </div>
                  <div className="pt-3">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      Receive Matches
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Hounder scans 15K+ listings daily and instantly alerts you
                      to matching apartments.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in animation-delay: 0.2s; flex items-start gap-6">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-50">
                    <span className="text-2xl font-semibold text-muted-foreground">
                      3
                    </span>
                  </div>
                  <div className="pt-3">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      Respond and Rent
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      With Hounder Plus, we automatically apply for viewings—you
                      just show up and rent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden overflow-hidden sm:mt-12 md:mt-0 md:block lg:-mt-20">
          {/* Annimation */}
          <WebAnimation />
        </div>
        <div className="mt-14 block  md:hidden">
          <MobileAnimation />
        </div>
      </section>
    </div>
  );
}
