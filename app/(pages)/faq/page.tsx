
import { Navbar } from "../../../app/components/navbar";
import { Footer } from "../../../app/components/footer";

export default function FAQPage() {
  return (
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
          <div className="space-y-4" data-orientation="vertical">
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r1:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r0:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  How does Hounder find apartments?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r1:"
                role="region"
                aria-labelledby="radix-:r0:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-dow --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); --radix-collapsible-content-height: 88.25px; --radix-collapsible-content-width: 814px; overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r3:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r2:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  How much does Hounder cost?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r3:"
                role="region"
                aria-labelledby="radix-:r2:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r5:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r4:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  What happens after I sign up?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r5:"
                role="region"
                aria-labelledby="radix-:r4:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r7:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r6:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Do you cover all cities in the Netherlands?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r7:"
                role="region"
                aria-labelledby="radix-:r6:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r9:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r8:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  How quickly can I find an apartment?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r9:"
                role="region"
                aria-labelledby="radix-:r8:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rb:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:ra:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Will Hounder contact agents on my behalf?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rb:"
                role="region"
                aria-labelledby="radix-:ra:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rd:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rc:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Can I still search for apartments myself?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rd:"
                role="region"
                aria-labelledby="radix-:rc:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rf:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:re:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  What information do I need to provide?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rf:"
                role="region"
                aria-labelledby="radix-:re:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rh:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rg:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Is my data secure?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rh:"
                role="region"
                aria-labelledby="radix-:rg:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rj:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:ri:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  What if I don't find an apartment through Hounder?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rj:"
                role="region"
                aria-labelledby="radix-:ri:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rl:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rk:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Can I pause or cancel my search?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rl:"
                role="region"
                aria-labelledby="radix-:rk:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 transition-shadow hover:shadow-md"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:rn:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:rm:"
                  className="[&amp;[data-state=open]&gt;svg]:rotate-180 flex flex-1 items-center justify-between py-5 font-semibold text-gray-900 transition-all hover:no-underline"
                  data-radix-collection-item=""
                >
                  Do you work with landlords directly?
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
                    className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:rn:"
                role="region"
                aria-labelledby="radix-:rm:"
                data-orientation="vertical"
                className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down --radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); overflow-hidden text-sm transition-all"
              ></div>
            </div>
          </div>
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
  );
}
