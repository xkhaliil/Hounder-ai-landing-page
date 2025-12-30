"use server";
export async function HowItWorks() {
  return (
    <div>
      <section id="how-it-works" className=" px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-in relative ">
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:border-8">
                <div className="mb-6 flex items-center justify-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6366f1] text-sm font-medium text-white">
                    1
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6366f1] text-sm font-medium text-white">
                    2
                  </div>
                  <div className="bg-secondary text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
                    3
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold">
                  Receive Matches
                </h3>
                <p className="text-muted-foreground mb-6 text-center text-sm">
                  Tell Hounder what kind of apartment you&apos;re looking for.
                </p>
                <p className="text-foreground mb-4 text-center font-medium">
                  Bedrooms
                </p>
                <div className="mb-6 flex justify-center gap-2">
                  <button
                    className="bg-secondary text-foreground h-10 w-10 rounded-lg text-sm"
                    aria-label="1 bedroom"
                  >
                    1
                  </button>
                  <button
                    className="bg-secondary text-foreground h-10 w-10 rounded-lg text-sm"
                    aria-label="2 bedrooms"
                  >
                    2
                  </button>
                  <button
                    className="bg-primary text-primary-foreground h-10 w-10 rounded-lg text-sm font-semibold"
                    aria-label="3 bedrooms"
                  >
                    3
                  </button>
                  <button
                    className="bg-secondary text-foreground h-10 w-10 rounded-lg text-sm"
                    aria-label="4 bedrooms"
                  >
                    4
                  </button>
                  <button
                    className="bg-secondary text-foreground h-10 w-10 rounded-lg text-sm"
                    aria-label="5 or more bedrooms"
                  >
                    5+
                  </button>
                </div>
                <div className="border-t pt-4">
                  <div className="text-muted-foreground mb-1 flex items-center gap-2 text-sm">
                    <span>per month</span>
                  </div>
                  <p className="text-foreground font-semibold">Amsterdam</p>
                  <p className="text-muted-foreground text-xs">
                    Amsterdam • 2 bedrooms 66m2
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in delay-100">
              <h2 className="text-foreground mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Be the first to apply automatically
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Viewings fill up within 20 minutes. Hounder applies instantly,
                so you&apos;re always first in line.
              </p>
              <a
                className="ring-offset-background focus-visible:ring-ring [&_svg]:size-4 shadow-modern hover:shadow-modern-lg bg-linear-to-r inline-flex h-11 transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#6366f1] from-purple-500 to-blue-500 px-6 py-5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
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
          </div>
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-16 text-4xl font-bold md:text-5xl">
              Home searching, made easy
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="animate-fade-in">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down text-muted-foreground h-10 w-10"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <h3 className="text-foreground mb-4 text-xl font-bold">
                  Cheaper
                </h3>
                <div className="border-border bg-card rounded-xl border p-4">
                  <p className="text-muted-foreground text-sm">
                    Skip the €2,000+ relocation agent. Hounder&apos;s AI does
                    the same work for{" "}
                    <span className="font-semibold">
                      a fraction of the cost
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="animate-fade-in delay-100">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-house text-muted-foreground h-10 w-10"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-foreground mb-4 text-xl font-bold">
                  Better
                </h3>
                <div className="border-border bg-card rounded-xl border p-4">
                  <p className="text-muted-foreground text-sm">
                    Stop refreshing Funda and Pararius. Hounder watches{" "}
                    <span className="font-semibold">
                      all platforms simultaneously
                    </span>{" "}
                    and only shows you relevant matches.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in delay-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-fast-forward text-muted-foreground h-10 w-10"
                  >
                    <polygon points="13 19 22 12 13 5 13 19"></polygon>
                    <polygon points="2 19 11 12 2 5 2 19"></polygon>
                  </svg>
                </div>
                <h3 className="text-foreground mb-4 text-xl font-bold">
                  Faster
                </h3>
                <div className="border-primary/20 bg-primary/10 rounded-xl border p-4">
                  <p className="text-muted-foreground text-sm">
                    While others browse, Hounder already applied for you. Our
                    users get{" "}
                    <span className="font-semibold underline">
                      3x more viewing invitations
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
