export function Hero() {
  return (
    <section className="overflow-hidden bg-background px-6 pb-20 pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="animate-fade-in mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl">
          <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Home
          <br />
          Search Agent
        </h1>
        <p className="animate-fade-in animation-delay: 0.1s; mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Hounder scans rental platforms 24/7 and automatically applies for
          viewings so you never miss the perfect apartment.
        </p>
        <div className="animate-fade-in animation-delay: 0.15s; mb-10 flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Hounder is building on</span>
          <div className="flex items-center gap-1.5">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4043-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6099-1.4997z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm font-semibold">OpenAI</span>
          </div>
        </div>
        <div className="animate-fade-in animation-delay: 0.2s; relative mx-auto mb-16 max-w-xl">
          <div className="flex items-center justify-center gap-4">
            {/* <div className="flex items-center rounded-full border border-gray-200 bg-white p-2 shadow-xl"> */}
            {/* Feature */}
            {/* enable this button in the future */}
            {/* <div className="flex flex-1 items-center gap-3 px-4">
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
                className="lucide lucide-house h-5 w-5 text-muted-foreground"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <input
                type="text"
                placeholder="Type your city"
                className="flex-1 border-none bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
                defaultValue=""
              />
            </div> 

             <button className="ring-offset-background focus-visible:ring-ring [&_svg]:size-4 bg-linear-to-r shadow-modern hover:shadow-modern-lg inline-flex h-11 transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary from-purple-500 to-blue-500 px-6 py-5 text-base font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-[#5558e3] hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0">
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
            </button> */}
            <button className="ring-offset-background focus-visible:ring-ring [&_svg]:size-4 bg-linear-to-r shadow-modern hover:shadow-modern-lg inline-flex h-11 transform items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary from-purple-500 to-blue-500 px-6 py-5 text-base font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 hover:from-purple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0">
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
            </button>
          </div>
        </div>
        <div className="animate-fade-in animation-delay: 0.3s; relative mx-auto max-w-4xl">
          <div className="flex justify-center gap-4">
            <div className="relative h-80 w-64 shrink-0 scale-90 overflow-hidden rounded-2xl opacity-80 shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&amp;h=300&amp;fit=crop"
                alt="Loft in De Kwakel"
                className="h-full w-full object-cover"
              />
              <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 from-black/70 to-transparent p-4">
                <p className="text-sm font-medium text-white">
                  Loft in De Kwakel
                </p>
                <p className="text-lg font-bold text-white">
                  € 3 000 <span className="text-sm font-normal">/ month</span>
                </p>
              </div>
              <button className="absolute bottom-4 right-4 text-white/80 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative z-10 h-80 w-64 shrink-0 scale-100 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&amp;h=300&amp;fit=crop"
                alt="Modern in Amsterdam"
                className="h-full w-full object-cover"
              />
              <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 from-black/70 to-transparent p-4">
                <p className="text-sm font-medium text-white">
                  Modern in Amsterdam
                </p>
                <p className="text-lg font-bold text-white">
                  € 2 500 <span className="text-sm font-normal">/ month</span>
                </p>
              </div>
              <button className="absolute bottom-4 right-4 text-white/80 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative h-80 w-64 shrink-0 scale-90 overflow-hidden rounded-2xl opacity-80 shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
                alt="Studio in Rotterdam"
                className="h-full w-full object-cover"
              />

              <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 from-black/70 to-transparent p-4">
                <p className="text-sm font-medium text-white">
                  Studio in Rotterdam
                </p>
                <p className="text-lg font-bold text-white">
                  € 1 800 <span className="text-sm font-normal">/ month</span>
                </p>
              </div>
              <button className="absolute bottom-4 right-4 text-white/80 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
