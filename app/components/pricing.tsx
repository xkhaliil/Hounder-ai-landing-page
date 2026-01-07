"use client";
import { useState } from "react";

export function Pricing() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            No Cure, No Pay
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Only pay when you successfully find your new home. No upfront costs,
            no risk.
          </p>
        </div>
        <div className="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="animate-fade-in border-border bg-background rounded-2xl border-2 p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-foreground mb-1 text-2xl font-bold">Free</h3>
              <p className="text-muted-foreground text-sm">
                Essential tools to start your search
              </p>
            </div>
            <div className="mb-6">
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-foreground text-4xl font-bold">€0</span>
                <span className="text-muted-foreground text-sm">forever</span>
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-green-600"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Aggregated listings from entire market</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-green-600"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Housing matches delivered via email</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-green-600"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Instant alerts for new listings</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-green-600"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Request viewings manually</span>
              </li>
            </ul>
            <a
              className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-purple-200 bg-white px-6 py-6 text-base font-semibold shadow-sm transition-all duration-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href="/onboarding"
            >
              Get Started Free
            </a>
          </div>
          <div className="animate-fade-in relative rounded-2xl border-2 border-[#6366f1] bg-white p-8 shadow-lg">
            <div className="bg-linear-to-r absolute -top-3 left-1/2 -translate-x-1/2 rounded-full from-purple-600 to-blue-600 px-4 py-1 text-sm font-semibold text-white">
              Fastest Results
            </div>
            <div className="mb-6">
              <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                Success Fee Only
              </div>
              <h3 className="text-foreground mb-1 text-2xl font-bold">
                Hounder Plus
              </h3>
              <p className="text-muted-foreground text-sm">
                We do all the work for you
              </p>
            </div>
            <div className="mb-6">
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-foreground text-4xl font-bold">€249</span>
                <span className="text-muted-foreground/60 text-lg line-through">
                  €499
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                one-time fee after you get the keys
              </p>
            </div>
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
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
                className="lucide lucide-info mt-0.5 h-5 w-5 shrink-0 text-green-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <p className="text-sm text-green-700">
                <span className="font-semibold">No upfront payment.</span> Pay
                only after you&apos;ve received the keys.
              </p>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-[#6366f1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Everything in Free</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-[#6366f1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Automatic viewing applications sent 24/7</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-[#6366f1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Personal tenant profile</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-[#6366f1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Application tracking</span>
              </li>
              <li className="text-foreground/90 flex items-center gap-3">
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
                  className="lucide lucide-check h-5 w-5 shrink-0 text-[#6366f1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Personal agent support</span>
              </li>
            </ul>
            <a
              className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-modern hover:shadow-modern-lg bg-linear-to-r inline-flex h-11 w-full transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#6366f1] from-purple-500 to-blue-500 px-6 py-6 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href="/onboarding"
            >
              Get Started Free
            </a>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Start with 7 days free trial
            </p>
          </div>
        </div>
        <div className="mx-auto mb-8 max-w-4xl" data-orientation="vertical">
          <div
            data-state={isExpanded ? "open" : "closed"}
            data-orientation="vertical"
            className="rounded-xl border bg-gray-50 px-6"
          >
            <h3
              data-orientation="vertical"
              data-state={isExpanded ? "open" : "closed"}
              className="flex"
            >
              <button
                type="button"
                aria-controls="radix-:r1:"
                aria-expanded={isExpanded}
                data-state={isExpanded ? "open" : "closed"}
                data-orientation="vertical"
                id="radix-:r0:"
                className="flex flex-1 items-center justify-between py-5 text-base font-semibold transition-all hover:no-underline"
                data-radix-collection-item=""
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-circle-help h-5 w-5 text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  How it works &amp; offer breakdown
                </div>
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
                  className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </h3>
            <div
              data-state={isExpanded ? "open" : "closed"}
              id="radix-:r1:"
              role="region"
              aria-labelledby="radix-:r0:"
              data-orientation="vertical"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
              style={
                {
                  ["--radix-accordion-content-height" as string]:
                    "var(--radix-collapsible-content-height)",
                  ["--radix-accordion-content-width" as string]:
                    "var(--radix-collapsible-content-width)",
                  ["--radix-collapsible-content-height" as string]: "317px",
                  ["--radix-collapsible-content-width" as string]: "846px",
                } as React.CSSProperties
              }
              hidden={!isExpanded}
            >
              <div className="pb-4 pt-0">
                <div className="pb-4">
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 text-sm">
                    <div className="font-medium text-gray-500">Feature</div>
                    <div className="text-center font-medium">Free</div>
                    <div className="text-center font-medium text-purple-600">
                      Plus
                    </div>
                    <div className="text-gray-600">Scan all sources</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600">Filter to preferences</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600">Email alerts</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600">AI applies for you</div>
                    <div className="text-center text-gray-400">—</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600">Track progress</div>
                    <div className="text-center text-gray-400">—</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-gray-600">Personal agent</div>
                    <div className="text-center text-gray-400">—</div>
                    <div className="text-center">
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
                        className="lucide lucide-check mx-auto h-4 w-4 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="bg-muted flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-foreground/90">7 day free trial</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
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
              className="lucide lucide-shield h-5 w-5"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span>No cure, no pay guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
