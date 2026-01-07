"use client";

import { useState } from "react";

export function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

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
      question: "How quickly will I get matches?",
      answer:
        "Most users receive their first matches within 15-30 minutes of completing their preferences. However, the speed depends on your specific criteria - broader preferences typically yield faster results, while very specific requirements may take longer. Our AI works 24/7 to find matches as soon as they become available.",
    },
    {
      question: "Can I use Hounder if I'm not in the Netherlands yet?",
      answer:
        "Absolutely! Hounder is perfect for international movers. You can set up your preferences remotely and start receiving matches before you arrive. We'll help you arrange virtual viewings and coordinate with agents to secure your apartment, making your move to the Netherlands much smoother.",
    },
    {
      question: "What cities does Hounder cover?",
      answer:
        "Hounder covers all major Dutch cities including Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Groningen, Tilburg, Almere, Breda, and Nijmegen. We're also continuously expanding to smaller cities and towns across the Netherlands to provide comprehensive coverage.",
    },
    {
      question: "How do I contact agents through Hounder?",
      answer:
        "Once you find a property you like, you can contact the agent directly through our platform. We provide all the necessary contact information and can help you draft professional messages in Dutch if needed. You can also track your applications and viewings through your Hounder dashboard.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data security very seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent, and we comply with all GDPR regulations. You have full control over what information you share with agents and when.",
    },
    {
      question: "What if I don't find anything I like?",
      answer:
        "There's no risk! Since you only pay when you successfully rent an apartment, you can use Hounder for as long as you need without any cost. Our AI continuously learns from your preferences and improves its matching. Many users find their perfect home within days, but we're here to support you for as long as it takes.",
    },
    {
      question: "Can I change my preferences later?",
      answer:
        "Yes, you can update your preferences anytime through your dashboard. Changes take effect immediately, and our AI will start searching based on your new criteria. This flexibility is perfect if your plans change or if you want to explore different neighborhoods or property types.",
    },
    {
      question: "How does the success fee work?",
      answer:
        "The success fee is only charged when you sign a rental contract and receive your keys. The exact amount depends on your rental price and is clearly displayed before you commit to anything. There are no hidden costs, and you never pay anything until you have a signed contract in hand.",
    },
    {
      question: "Can Hounder help with viewings?",
      answer:
        "Yes! We can help you schedule viewings with agents and provide tips for making a good impression. For international clients, we can also help arrange virtual viewings. Our goal is to make the entire rental process as smooth as possible, from finding the apartment to signing the contract.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isExpanded = expandedItems.includes(index);

        return (
          <div key={index} className="rounded-xl border bg-gray-50 px-6">
            <h3 className="flex">
              <button
                type="button"
                className="flex w-full flex-1 items-center justify-between py-5 text-left text-base font-semibold transition-all hover:no-underline"
                onClick={() => toggleItem(index)}
              >
                <span className="flex items-center gap-2">
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
                  {faq.question}
                </span>
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
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-4">
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
