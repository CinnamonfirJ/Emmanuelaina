import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import smileFace from "../assets/cil_smile.png";
import SectionHead from "../components/SectionHead";
import pikaso from "../assets/pikaso_texttoimage_ceo-about-to-speak-in-a-video-looking-handsome-wit 1.png";
import star from "../assets/star.png";
import fifty from "../assets/FIFTY XCHANGE 2 1.png";
import qoute from "../assets/”.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-1.png";
import user3 from "../assets/user-2.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<img src={star} alt='star' key={i} />);
  }

  const testimonials = [
    {
      text: "“Working with Aina was an absolute game-changer for our fintech app. His ability to combine design aesthetics with functionality resulted in an interface our users love. The attention to detail and deep understanding of user experience really shines through in the final product.”",
      name: "Louis Anderson",
      title: "Manager, FinTech Solutions",
      imgUrl: user1,
    },
    {
      text: "“Working with Aina was an absolute game-changer for our fintech app. His ability to combine design aesthetics with functionality resulted in an interface our users love. The attention to detail and deep understanding of user experience really shines through in the final product.”",
      name: "Achraf Hakimi",
      title: "CEO & Founder, CryptoTrade",
      imgUrl: user2,
    },
    {
      text: "“Working with Aina was an absolute game-changer for our fintech app. His ability to combine design aesthetics with functionality resulted in an interface our users love. The attention to detail and deep understanding of user experience really shines through in the final product.”",
      name: "Oscar Gonzalez",
      title: "Founder of GameVerse",
      imgUrl: user3,
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div className='flex flex-col justify-center items-center gap-8 overflow-hidden'>
      <div
        className='flex justify-center items-center w-full'
        data-aos='fade-down'
      >
        <SectionHead icon={smileFace} title={"Testimonials"} />
      </div>

      <div
        className='flex flex-col justify-center text-center items-center gap-8'
        data-aos='fade-up'
      >
        <h3 className='text-4xl font-bold max-md:text-xl max-md:font-semibold'>
          What Clients Are Saying
        </h3>
        <h3 className='text-xl font-bold max-w-[700px] text-background/90 max-md:text-base max-md:font-normal '>
          Hear from those who have experienced firdthand the impact of my
          user-centered, innopvative design solutions
        </h3>
      </div>

      {/* Image */}
      <div
        className=' flex justify-between items-center max-lg:flex-col gap-10'
        data-aos='flip-up'
      >
        <img src={pikaso} alt='' />
        <div
          data-aos='flip-left'
          className='relative flex flex-col justify-center items-start max-w-[730px] border bg-[#F8FAFC] border-grayBorder px-10 max-lg:px-2 rounded-3xl'
        >
          {/* <img
            src={qoute}
            alt='qoute'
            className='absoulte top-[12px] -translate-y-[12px] -left-[470px] translate-x-[470px]'
          /> */}
          <div className='flex justify-end items-end w-full'>
            <div className='absoulte top-[25px] -translate-y-[25px] -right-5'>
              <svg
                width='64'
                height='47'
                viewBox='0 0 64 47'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.2 24L18.6 23.6C17.8 24.4 16.8667 25 15.8 25.4C14.7333 25.8 13.3333 26 11.6 26C8.66667 26 6.06667 24.9333 3.8 22.8C1.53333 20.6667 0.400001 17.6667 0.400001 13.8C0.400001 9.93333 1.6 6.79999 4 4.39999C6.53333 1.86666 9.73333 0.59999 13.6 0.59999C17.6 0.59999 21 2.13332 23.8 5.19999C26.6 8.26666 28 12.5333 28 18C28 25.3333 25.7333 31.6667 21.2 37C16.6667 42.2 10.8667 45.2667 3.8 46.2V37.8C7.66667 37 10.8667 35.4 13.4 33C15.9333 30.6 17.2 27.6 17.2 24ZM52.8 24L54.4 23.6C53.6 24.4 52.6 25 51.4 25.4C50.3333 25.8 49 26 47.4 26C44.3333 26 41.6667 24.9333 39.4 22.8C37.1333 20.6667 36 17.6667 36 13.8C36 9.93333 37.2 6.79999 39.6 4.39999C42.1333 1.86666 45.3333 0.59999 49.2 0.59999C53.3333 0.59999 56.8 2.13332 59.6 5.19999C62.4 8.26666 63.8 12.5333 63.8 18C63.8 25.3333 61.4667 31.6667 56.8 37C52.2667 42.2 46.4667 45.2667 39.4 46.2V37.8C43.4 37 46.6 35.4 49 33C51.5333 30.6 52.8 27.6 52.8 24Z'
                  fill='#864BE7'
                />
              </svg>
            </div>
          </div>
          <div className='flex gap-1 pb-3'>{stars}</div>

          <div>
            <p className='text-lg max-md:text-sm pb-6 text-background'>
              “Emmanuel’s work on our crypto trading app was nothing short of
              phenomenal. From the start, he demonstrated a deep understanding
              of both the technical complexities and user needs. His design not
              only transformed the app visually but also elevated the entire
              user experience, making the intricate world of crypto trading feel
              simple and approachable. His attention to detail, creativity, and
              user-first approach truly set him apart. Our users rave about the
              clean, seamless interface, Emmanuel’s unique ability to balance
              creativity with functionality has undoubtedly taken our platform
              to new heights, and we couldn’t be more thrilled with the
              results!”
            </p>
          </div>
          <div className='pb-6 w-full'>
            <div className='h-[1px] bg-[#DDE5ED]'></div>
          </div>

          <div className='flex justify-between items-center pb-6 w-full'>
            <div>
              <h3 className='text-2xl max-md:text-lg font-semibold'>
                Fuhad Busari
              </h3>
              <p className='text-xl max-md:text-base font-medium'>
                CEO & Founder
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <img src={fifty} alt='fifty' />
              <p className='text-2xl max-md:text-base font-semibold'>
                Fifty Crypto
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='relative gap-8 mt-10 mb-10'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        {/* <div className='  [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)] pointer-events-none'></div> */}
        <motion.div
          className='flex gap-5 flex-none '
          animate={{ x: [0, -1000] }} // Animate from 0px to -1000px (adjust for actual card width)
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[
            ...testimonials,
            ...testimonials,
            ...testimonials,
            ...testimonials,
          ].map((testimonial, index) => (
            <div
              key={index}
              className='relative flex flex-col justify-center gap-5 items-start min-w-[440px]  text-background bg-[#F8FAFC] border border-[##DDE5ED] rounded-3xl p-3 md:p-5 hover:bg-accent hover:-translate-y-2 transition duration-500  max-w-xs md:max-w-md'
            >
              <div className=' flex justify-center items-center'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.32489 18.9231L8.56489 13.6101L4.44189 10.0381L9.87289 9.56813L11.9999 4.55713L14.1269 9.56713L19.5569 10.0371L15.4339 13.6091L16.6749 18.9221L11.9999 16.1021L7.32489 18.9231Z'
                    fill='#F5DE15'
                  />
                </svg>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.32489 18.9231L8.56489 13.6101L4.44189 10.0381L9.87289 9.56813L11.9999 4.55713L14.1269 9.56713L19.5569 10.0371L15.4339 13.6091L16.6749 18.9221L11.9999 16.1021L7.32489 18.9231Z'
                    fill='#F5DE15'
                  />
                </svg>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.32489 18.9231L8.56489 13.6101L4.44189 10.0381L9.87289 9.56813L11.9999 4.55713L14.1269 9.56713L19.5569 10.0371L15.4339 13.6091L16.6749 18.9221L11.9999 16.1021L7.32489 18.9231Z'
                    fill='#F5DE15'
                  />
                </svg>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.32489 18.9231L8.56489 13.6101L4.44189 10.0381L9.87289 9.56813L11.9999 4.55713L14.1269 9.56713L19.5569 10.0371L15.4339 13.6091L16.6749 18.9221L11.9999 16.1021L7.32489 18.9231Z'
                    fill='#F5DE15'
                  />
                </svg>
              </div>
              <div className='text-sm tracking-tight min-w-[400px]'>
                {testimonial.text}
              </div>
              <div className=' bg-[#DDE5ED]  w-full h-[1px] flex justify-center text-center ' />
              <div className='flex items-center gap-3'>
                <div className=' flex items-start '>
                  <img
                    src={testimonial.imgUrl}
                    alt={`Avatar for ${testimonial.name}`}
                    className='h-[45px] w-[45px] rounded-full'
                  />
                </div>
                <div>
                  <h3 className='text-black text-xl font-semibold'>
                    {testimonial.name}
                  </h3>
                  <h3 className='text-base font-medium'>{testimonial.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
