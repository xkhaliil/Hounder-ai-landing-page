import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/theme-context";
import { registerServiceWorker } from "./utils/service-worker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Hounder - AI-Powered Home Search Agent",
  description:
    "Hounder scans rental platforms 24/7 and automatically applies for viewings so you never miss the perfect apartment.",
  keywords: ["home search", "rental", "AI", "apartment finder", "real estate"],
  authors: [{ name: "Hounder" }],
  openGraph: {
    title: "Hounder - AI-Powered Home Search Agent",
    description:
      "Never miss the perfect apartment again. AI-powered home search that works 24/7.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hounder - AI-Powered Home Search Agent",
    description:
      "Never miss the perfect apartment again. AI-powered home search that works 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Register service worker on the client side
  if (typeof window !== "undefined") {
    registerServiceWorker();
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://plus.unsplash.com" />
        <link rel="dns-prefetch" href="https://plus.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Critical CSS inline for hero section */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical layout and rendering optimizations */
              .hero-section {
                contain: layout style;
                will-change: transform;
              }
              .optimize-content-visibility {
                content-visibility: auto;
                contain-intrinsic-size: 0 500px;
              }
              .optimize-text-rendering {
                text-rendering: optimizeLegibility;
                font-display: swap;
              }
              .hero-image-container {
                contain: layout style paint;
                will-change: transform;
              }
              .image-wrapper {
                transform: translateZ(0);
                will-change: transform;
                backface-visibility: hidden;
              }
              /* Optimize animations */
              @media (prefers-reduced-motion: reduce) {
                .animate-fade-in {
                  animation: none !important;
                  opacity: 1 !important;
                }
              }
              .animate-fade-in {
                animation: fadeIn 0.6s ease-out forwards;
                opacity: 0;
                will-change: opacity;
              }
              .animate-fade-in.delay-100 { animation-delay: 0.1s; }
              .animate-fade-in.delay-150 { animation-delay: 0.15s; }
              .animate-fade-in.delay-200 { animation-delay: 0.2s; }
              .animate-fade-in.delay-300 { animation-delay: 0.3s; }
              @keyframes fadeIn {
                to { opacity: 1; }
              }
              /* Critical above-the-fold styles */
              body {
                font-display: swap;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              /* Optimize image loading */
              img, picture, video, canvas, svg {
                display: block;
                max-width: 100%;
                height: auto;
              }
              /* Reduce layout shifts */
              .hero-section > * {
                transform: translateZ(0);
              }
            `,
          }}
        />

        {/* Preload critical hero images for LCP optimization */}
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop&q=60&auto=format&fit=crop&auto=webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop&q=60&auto=format&fit=crop&auto=webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300&h=200&fit=crop&q=60&auto=format&fit=crop&auto=webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var finalTheme = theme || systemTheme;
                  if (finalTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
