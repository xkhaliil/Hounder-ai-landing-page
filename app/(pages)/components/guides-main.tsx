"use server";
export async function GuidesMain() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="mb-12 text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
          Housing Guides
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Expert guides to help you navigate the Amsterdam rental market with
          confidence
        </p>
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        <div className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border border-transparent px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          All
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Getting Started
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Documents
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Locations
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Legal
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Applications
        </div>
        <div className="text-foreground hover:bg-primary hover:text-primary-foreground focus:ring-primary inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
          Finance
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex w-full items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house text-primary h-6 w-6"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Getting Started
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Complete Guide to Renting in Amsterdam
            </h3>
            <p className="text-muted-foreground text-sm">
              Everything you need to know about finding and renting an apartment
              in Amsterdam, from start to finish.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">12 min read</p>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
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
                  className="lucide lucide-file-text text-primary h-6 w-6"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Documents
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Documents You Need to Rent in the Netherlands
            </h3>
            <p className="text-muted-foreground text-sm">
              A comprehensive checklist of all documents required for successful
              rental applications.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">8 min read</p>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
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
                  className="lucide lucide-map-pin text-primary h-6 w-6"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Locations
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Amsterdam Neighborhoods Guide for Expats
            </h3>
            <p className="text-muted-foreground text-sm">
              Explore different neighborhoods in Amsterdam and find the perfect
              area that matches your lifestyle.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">15 min read</p>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
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
                  className="lucide lucide-shield text-primary h-6 w-6"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Legal
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Understanding Dutch Rental Contracts
            </h3>
            <p className="text-muted-foreground text-sm">
              Learn about rental contracts, tenant rights, and what to watch out
              for when signing a lease.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">10 min read</p>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
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
                  className="lucide lucide-users text-primary h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Applications
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Viewing Tips: How to Stand Out
            </h3>
            <p className="text-muted-foreground text-sm">
              Practical tips to make a great impression during apartment
              viewings and increase your chances.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">6 min read</p>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-modern hover:shadow-modern-lg animate-scale-in hover:border-primary cursor-pointer rounded-xl border transition-colors duration-300">
          <div className="flex flex-col space-y-2 p-8">
            <div className="mb-3 flex items-start justify-between">
              <div className="bg-primary/10 rounded-lg p-3">
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
                  className="lucide lucide-book-open text-primary h-6 w-6"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Finance
              </div>
            </div>
            <h3 className="text-foreground mb-2 text-xl font-bold tracking-tight">
              Budget &amp; Cost of Living Guide
            </h3>
            <p className="text-muted-foreground text-sm">
              Understand rental costs, utilities, and monthly expenses to plan
              your budget effectively.
            </p>
          </div>
          <div className="p-8 pt-0">
            <p className="text-muted-foreground text-sm">9 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
