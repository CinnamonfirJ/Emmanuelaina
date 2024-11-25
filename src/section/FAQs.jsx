import { useEffect, useRef, useState } from "react";
import { faqData as initialFaqData } from "../data/faqData";
import SectionHead from "../components/SectionHead";
import faq from "../assets/wpf_faq.png";

const FAQs = () => {
  const [faqData, setFaqData] = useState(initialFaqData);
  const faqSectionRef = useRef();

  useEffect(() => {
    const faqSection = faqSectionRef.current;
    if (!faqSection) return;

    function handleOutClick(e) {
      if (!faqSection.contains(e.target)) {
        setFaqData((prevFaqData) =>
          prevFaqData.map((faq) => ({
            ...faq,
            active: false,
          }))
        );
      }
    }

    document.addEventListener("click", handleOutClick, true);

    return () => {
      document.removeEventListener("click", handleOutClick, true);
    };
  }, []);

  function toggleFaqActiveState(question) {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faq) => ({
        ...faq,
        active: faq.question === question ? !faq.active : false,
      }))
    );
  }

  return (
    <div className='flex flex-col justify-center items-center gap-8 overflow-hidden'>
      <div className='flex justify-center items-center w-full'>
        <SectionHead icon={faq} title={"FAQs"} />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-4xl font-bold max-md:text-xl max-md:font-semibold'>
          Frequently Asked Questions{" "}
        </h3>
      </div>

      <section ref={faqSectionRef} className='md:w-[60%] w-full'>
        {faqData.map((faq, i) => (
          <FAQsBox faq={faq} key={i} onToggle={toggleFaqActiveState} />
        ))}
      </section>
    </div>
  );
};

function FAQsBox({ faq, onToggle }) {
  return (
    <div
      onClick={() => onToggle(faq.question)}
      className='border rounded-2xl py-2 px-5 mt-3 cursor-pointer'
    >
      <div
        className={`flex items-center justify-between transition-all ${
          faq.active ? "pb-1" : ""
        }`}
      >
        <h4 className='md:text-lg text-md text-darkText'>{faq.question}</h4>

        <div>
          {faq.active ? (
            <svg
              className='w-[40px]'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='50'
                height='50'
                rx='25'
                fill='#0C0C0C'
                fillOpacity='0.9'
              />
              <path
                d='M32.5 26.2476H17.5C17.1685 26.2476 16.8505 26.1159 16.6161 25.8814C16.3817 25.647 16.25 25.3291 16.25 24.9976C16.25 24.666 16.3817 24.3481 16.6161 24.1137C16.8505 23.8793 17.1685 23.7476 17.5 23.7476H32.5C32.8315 23.7476 33.1495 23.8793 33.3839 24.1137C33.6183 24.3481 33.75 24.666 33.75 24.9976C33.75 25.3291 33.6183 25.647 33.3839 25.8814C33.1495 26.1159 32.8315 26.2476 32.5 26.2476Z'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              className='w-[40px]'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='50'
                height='50'
                rx='25'
                fill='#0C0C0C'
                fillOpacity='0.9'
              />
              <path
                d='M32.5 26.2476H26.25V32.4976C26.25 32.8291 26.1183 33.147 25.8839 33.3814C25.6495 33.6159 25.3315 33.7476 25 33.7476C24.6685 33.7476 24.3505 33.6159 24.1161 33.3814C23.8817 33.147 23.75 32.8291 23.75 32.4976V26.2476H17.5C17.1685 26.2476 16.8505 26.1159 16.6161 25.8814C16.3817 25.647 16.25 25.3291 16.25 24.9976C16.25 24.666 16.3817 24.3481 16.6161 24.1137C16.8505 23.8793 17.1685 23.7476 17.5 23.7476H23.75V17.4976C23.75 17.166 23.8817 16.8481 24.1161 16.6137C24.3505 16.3793 24.6685 16.2476 25 16.2476C25.3315 16.2476 25.6495 16.3793 25.8839 16.6137C26.1183 16.8481 26.25 17.166 26.25 17.4976V23.7476H32.5C32.8315 23.7476 33.1495 23.8793 33.3839 24.1137C33.6183 24.3481 33.75 24.666 33.75 24.9976C33.75 25.3291 33.6183 25.647 33.3839 25.8814C33.1495 26.1159 32.8315 26.2476 32.5 26.2476Z'
                fill='white'
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          faq.active ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className='border-t border-t-gray-200 py-2 text-sm text-gray-500'>
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
