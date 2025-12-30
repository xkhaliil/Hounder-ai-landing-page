"use client";
export function GetStartedFinalSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
          Stop Competing. Start Winning.
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Let Hounder&apos;s AI apply for viewings while you sleep. Join
          thousands who found their home faster.
        </p>
        <a
          className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-modern hover:shadow-modern-lg bg-linear-to-r inline-flex h-11 transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#6366f1] from-purple-500 to-blue-500 px-8 py-6 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          href="/onboarding"
        >
          Get started
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
    </section>
  );
}
