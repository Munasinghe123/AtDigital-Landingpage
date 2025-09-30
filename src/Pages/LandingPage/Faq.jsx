import React, { useState } from "react";

const FAQ_DATA = [
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  }
];

export default function Faq() {
 
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className=" px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-center text-[#4F46E5] font-bold text-xl md:text-2xl">
        Frequently asked questions
      </h2>

      <div className="mt-6 space-y-3 max-w-3xl mx-auto">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const btnId = `faq-btn-${idx}`;

          return (
            <div
              key={idx}
              className={`rounded-lg border border-transparent bg-[#FAF8FF] shadow-sm backdrop-blur-sm ${
                isOpen ? "ring-1 ring-[#4F46E5]/20 bg-[#4F46E5]/5" : ""
              }`}
            >
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 text-left px-4 py-4"
              >
                <span
                  className={`text-sm md:text-[15px] font-medium ${
                    isOpen ? "text-[#4F46E5]" : "text-gray-900"
                  }`}
                >
                  {item.q}
                </span>

            
                <span
                  aria-hidden
                  className={`grid place-items-center w-6 h-6 text-2xl rounded-md transition-colors ${
                    isOpen ? "text-[#4F46E5]" : "text-black"
                  }`}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>

            
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm text-[#6F6C90]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
