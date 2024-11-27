import left from "../assets/Frame 27.png";
import right from "../assets/Frame 28.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import x from "../assets/TwitterX.png";
import whatsapp from "../assets/WhatsApp.png";

const socials = [
  {
    name: "Facebook",
    imgUrl: facebook,
    href: "https://www.facebook.com/share/1Goe3FhH7D/?mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    imgUrl: instagram,
    href: "https://www.instagram.com/tolu.web3/profilecard/?igsh=MTJqMW1wZml4MHQyZw==",
  },
  {
    name: "TwitterX",
    imgUrl: x,
    href: "https://x.com/tolu_web3?s=21",
  },
  {
    name: "Whatsapp",
    imgUrl: whatsapp,
    href: "https://wa.link/dryhi6",
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#F2F2F2] text-center pt-10 flex flex-col justify-center items-center gap-8'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='col-span-1'>
          <img src={left} alt='left' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl text-nowrap max-md:text-lg font-medium tracking-wide'>
            Let’s Connect
          </h1>
        </div>
        <div className='col-span-1'>
          <img src={right} alt='left' />
        </div>
      </div>
      <div>
        <a
          href='mailto:ainae339@gmail.com'
          className='px-4 py-2 bg-[#F8FAFC] border border-[#DDE5ED] rounded-full text-base font-medium text-background'
        >
          ainae339@gmail.com
        </a>
      </div>
      <div className='flex justify-center gap-4 '>
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target='_blank'
            aria-label={social.name}
            className='bg-black text-white rounded-full w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] flex justify-center items-center '
          >
            <img src={social.imgUrl} alt='' className=' max-md:w-[30px]' />
          </a>
        ))}
      </div>
      <div className=' w-full text-sm text-gray-500'>
        <div className=' bg-[#DDE5ED]  w-full h-[1px] flex justify-center ' />
        <div className=' flex justify-between items-start p-5 gap-14'>
          <p className='text-base font-medium text-background text-start'>
            Designed By Me and Built by{" "}
            <a
              href='https://wa.link/aid0ca'
              target='_blank'
              className=' text-primary'
            >
              Jesse Wisdom
            </a>
          </p>
          <p className='text-base font-medium text-background min-w-[100px] '>
            October 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
