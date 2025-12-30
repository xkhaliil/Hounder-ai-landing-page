"use server";

export async function Stats() {
  return (
    <div>
      <section className="border-t border-border bg-background px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            The Results Speak for Themselves
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="animate-fade-in animation-delay: 0s; text-center">
              <div className="bg-linear-to-r mb-2 from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                15K+
              </div>
              <div className="text-sm text-muted-foreground">
                new apartments found every month
              </div>
            </div>
            <div className="animate-fade-in animation-delay: 0.1s; text-center">
              <div className="bg-linear-to-r mb-2 from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                95%+
              </div>
              <div className="text-sm text-muted-foreground">
                market coverage across the Netherlands
              </div>
            </div>
            <div className="animate-fade-in animation-delay: 0.2s; text-center">
              <div className="bg-linear-to-r mb-2 from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                +80%
              </div>
              <div className="text-sm text-muted-foreground">
                more viewing responses for our users
              </div>
            </div>
            <div className="animate-fade-in animation-delay: 0.3s; text-center">
              <div className="bg-linear-to-r mb-2 from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                2–3 weeks
              </div>
              <div className="text-sm text-muted-foreground">average move-in time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
