import smileFace from "../assets/cil_smile.png";
import SectionHead from "../components/SectionHead";
import pikaso from "../assets/pikaso_texttoimage_ceo-about-to-speak-in-a-video-looking-handsome-wit 1.png";
import star from "../assets/star.png";
import fifty from "../assets/FIFTY XCHANGE 2 1.png";
import qoute from "../assets/”.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-1.png";
import user3 from "../assets/user-2.png";

const Testimonials = () => {
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

  return (
    <div className='flex flex-col justify-center items-center gap-14 '>
      <div>
        <SectionHead icon={smileFace} title={"Testimonials"} />
      </div>

      <div className='flex flex-col justify-center text-center items-center gap-8'>
        <h3 className='text-4xl font-bold max-md:text-xl max-md:font-semibold'>
          What Clients Are Saying
        </h3>
        <h3 className='text-xl font-bold max-w-[700px] max-md:text-base max-md:font-normal '>
          Hear from those who have experienced firdthand the impact of my
          user-centered, innopvative design solutions
        </h3>
      </div>
      <div className=' flex justify-between items-center max-lg:flex-col  gap-10'>
        <img src={pikaso} alt='' />
        <div className='relative flex flex-col justify-center items-start max-w-[730px] border border-grayBorder px-10 max-lg:px-2 rounded-3xl'>
          <img
            src={qoute}
            alt='qoute'
            className='absoulte top-[28px] -translate-y-[28px] -left-[470px] translate-x-[470px] max-w-[64px]'
          />
          <div className='flex gap-1 pb-4'>{stars}</div>
          <p className='text-lg max-md:text-sm pb-6'>
            “Emmanuel’s work on our crypto trading app was nothing short of
            phenomenal. From the start, he demonstrated a deep understanding of
            both the technical complexities and user needs. His design not only
            transformed the app visually but also elevated the entire user
            experience, making the intricate world of crypto trading feel simple
            and approachable. His attention to detail, creativity, and
            user-first approach truly set him apart. Our users rave about the
            clean, seamless interface, Emmanuel’s unique ability to balance
            creativity with functionality has undoubtedly taken our platform to
            new heights, and we couldn’t be more thrilled with the results!”
          </p>
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
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 mt-10 mb-10 '>
        {/* <div className='  [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)] pointer-events-none'></div> */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='relative flex flex-col justify-center gap-5 items-start text-background bg-[#F8FAFC] border border-[##DDE5ED] rounded-3xl p-3 md:p-5 hover:bg-accent hover:-translate-y-2 transition duration-500 max-w-xs md:max-w-md'
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
            <div className='text-sm tracking-tight'>{testimonial.text}</div>
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
      </div>
    </div>
  );
};

export default Testimonials;
