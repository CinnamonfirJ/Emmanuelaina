import Button from "../components/Button";
import Indicator from "../components/Indicator";
import HeroImage from "../assets/image-1.png";
import starImage from "../assets/image 2.png";

const Hero = () => {
  return (
    <div className=' flex max-[1100px]:flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex  max-[1100px]:justify-center max-[1100px]:items-center'>
          <Indicator
            icon={
              <svg
                width='11'
                height='11'
                viewBox='0 0 11 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='5.5' cy='5.5' r='5' fill='#33B91D' />
              </svg>
            }
          >
            {" "}
            Available for work
          </Indicator>
        </div>
        <div className=' flex flex-col gap-5 justify-center items-start max-[1100px]:items-center max-[1100px]:mb-16 '>
          <h1 className='max-[1100px]:text-center text-4xl font-bold font-Bricolage'>
            Hello! <span className=' text-primary'>I’m Emmanuel Aina</span>
          </h1>
          <p className=' max-w-[600px] text-xl max-[1100px]:text-center'>
            A product (UI/UX) designer specializing in web3, crypto, e-commerce,
            fintech, and gaming UI. I have a passion for creating user-friendly
            designs and a solid understanding of frontend development with HTML,
            CSS, and JavaScript, Curious to know more about me?
          </p>
          <a href='#projects'>
            <Button>View Projects</Button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className=' relative border border-primary rounded-full p-[35px] '>
        <div className=' flex absolute top-[5%] -translate-y-[5%] left-[2%] -translate-x-[2%]  '>
          <Indicator variant={"primary"} icon={<img src={starImage} />}>
            User Reaserch
          </Indicator>
        </div>
        <div className=' flex absolute top-[80%] -translate-y-[80%] -left-[10%] translate-x-[10%]  '>
          <Indicator variant={"primary"} icon={<img src={starImage} />}>
            Prototyping
          </Indicator>
        </div>
        <div className=' flex text-nowrap justify-center items-center absolute top-[10%] -translate-y-[10%] left-[110%] -translate-x-[110%]  '>
          <Indicator variant={"primary"} icon={<img src={starImage} />}>
            Product Design
          </Indicator>
        </div>
        <div className=' flex absolute top-[90%] -translate-y-[90%] left-[100%] -translate-x-[100%]  '>
          <Indicator variant={"primary"} icon={<img src={starImage} />}>
            Wireframing
          </Indicator>
        </div>
        <img
          src={HeroImage}
          className=' max-w-[420px] h-auto object-cover w-full border border-grayBorder rounded-full '
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
