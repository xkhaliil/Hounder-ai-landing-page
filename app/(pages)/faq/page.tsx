import { Navbar } from "../../../app/components/navbar";
import { Footer } from "../../../app/components/footer";
import { SchemaMarkup } from "../../../app/components/schema-markup";
import { FAQClient } from "../../../app/components/faq-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Hounder",
  description:
    "Find answers to common questions about Hounder's AI-powered home search service, pricing, coverage, and how it works.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "Hounder help",
    "rental platform",
    "AI home search",
    "apartment finder",
    "Netherlands rental",
  ],
  openGraph: {
    title: "FAQ - Hounder AI Home Search",
    description:
      "Everything you need to know about Hounder's AI-powered rental search service",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FAQ - Hounder AI Home Search",
    description:
      "Everything you need to know about Hounder's AI-powered rental search service",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How does Hounder find apartments?",
      answer:
        "Hounder uses AI to continuously scan over 450 real estate agencies, major platforms like Funda, Pararius, Facebook Groups, and other rental listings across the Netherlands. We monitor these sources 24/7 to ensure you never miss a new listing that matches your preferences.",
    },
    {
      question: "How much does Hounder cost?",
      answer:
        "Hounder operates on a success-based pricing model. You only pay when you successfully sign a rental contract and get your keys. There are no subscriptions, no upfront costs, and no hidden fees. You can browse, search, and receive matches completely free until you find your home.",
    },
    {
      question: "What happens after I sign up?",
      answer:
        "After signing up, you'll complete a quick onboarding where you tell us your preferences: budget, location, home style, and move-in date. Our AI immediately starts searching for matching apartments. You'll receive instant alerts whenever a property that fits your criteria becomes available, and we'll help you contact agents and schedule viewings.",
    },
    {
      question: "Do you cover all cities in the Netherlands?",
      answer:
        "Currently, we're focused exclusively on Amsterdam where we have 95%+ market coverage. However, we're expanding fast! We're expecting to roll out to other major Dutch cities by the end of the year. Sign up now to be notified when we launch in your city.",
    },
    {
      question: "How quickly can I find an apartment?",
      answer:
        "Our users typically move in within 2-3 weeks, which is 3× faster than the average renter in competitive markets like Amsterdam. The exact timeline depends on your preferences, budget, and the current market, but our AI-powered approach significantly accelerates the process by ensuring you're first to respond to new listings.",
    },
    {
      question: "Will Hounder contact agents on my behalf?",
      answer:
        "Yes! One of Hounder's key features is automatic agent outreach. We contact real estate agents and housing groups for you, send professionally crafted messages, and handle initial communication. You'll only need to step in when it's time to schedule viewings or provide additional information.",
    },
    {
      question: "Can I still search for apartments myself?",
      answer:
        "Absolutely! Hounder is here to assist you, not replace your own efforts. You can continue searching on your own while our AI works in the background. Think of us as your dedicated assistant who never sleeps, ensuring you don't miss opportunities while you handle other parts of your life.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "During onboarding, we'll ask for your budget range, preferred locations (neighborhoods or cities), home preferences (size, type, amenities), and desired move-in date. The more specific you are, the better our AI can match you with the perfect apartment. You can always update these preferences later.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, absolutely. We take data security seriously. All your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent, and we only use it to help you find your perfect rental home.",
    },
    {
      question: "What if I don't find an apartment through Hounder?",
      answer:
        "If you don't find an apartment through our service, you don't pay anything. It's that simple. Our success-based model means we're only successful when you are. There's zero financial risk to trying Hounder.",
    },
    {
      question: "Can I pause or cancel my search?",
      answer:
        "Yes, you can pause or cancel your search at any time through your account settings. If you pause, you won't receive new alerts until you resume. If you cancel, all automated outreach stops immediately. There are no cancellation fees or penalties.",
    },
    {
      question: "Do you work with landlords directly?",
      answer:
        "We work with both landlords and real estate agencies. Our platform connects you with properties from over 450 agencies as well as private landlords posting on platforms like Facebook, Pararius, and Funda. This gives you access to the widest possible range of available rentals.",
    },
  ];

  return (
    <>
      <SchemaMarkup
        type="faq"
        data={{
          questions: faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          })),
        }}
      />
      <div>
        <Navbar />
        <main className="relative z-10 grow">
          <div className="container relative mx-auto max-w-4xl overflow-hidden px-4 pb-24 pt-16 md:pb-32 md:pt-24">
            <div className="opacity: 1; transform: none; mx-auto mb-16 max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Frequently asked questions
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-700 md:text-xl">
                Everything you need to know about Hounder
              </p>
            </div>

            {/* FAQ Questions */}
            <FAQClient faqs={faqs} />

            <div className="mt-16 rounded-2xl border border-purple-200 bg-purple-50 p-8 text-center">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Still have questions?
              </h2>
              <p className="mb-6 text-gray-600">
                We're here to help! Contact our support team for personalized
                assistance.
              </p>
              <a
                className="bg-linear-to-r inline-block rounded-lg from-purple-600 to-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-lg"
                href="mailto:support@hounder.com"
              >
                Contact Support
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
