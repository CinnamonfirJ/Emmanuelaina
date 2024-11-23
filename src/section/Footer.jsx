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
    href: "#",
  },
  {
    name: "Instagram",
    imgUrl: instagram,
    href: "#",
  },
  {
    name: "TwitterX",
    imgUrl: x,
    href: "#",
  },
  {
    name: "Whatsapp",
    imgUrl: whatsapp,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#F2F2F2] text-center pt-10 flex flex-col justify-center items-center gap-12'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='col-span-1'>
          <img src={left} alt='left' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl max-md:text-lg font-medium tracking-wide'>
            Let’s Connect
          </h1>
        </div>
        <div className='col-span-1'>
          <img src={right} alt='left' />
        </div>
      </div>
      <div>
        <span className='px-4 py-2 bg-[#F8FAFC] border border-[#DDE5ED] rounded-full text-base font-medium text-background'>
          ainae339@gmail.com
        </span>
      </div>
      <div className='flex justify-center gap-4 '>
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            aria-label={social.name}
            className='bg-black text-white rounded-full w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] flex justify-center items-center '
          >
            <img src={social.imgUrl} alt='' className=' max-md:w-[30px]' />
          </a>
        ))}
      </div>
      <div className=' w-full text-sm text-gray-500'>
        <div className=' bg-[#DDE5ED]  w-full h-[1px] flex justify-center ' />
        <div className=' flex justify-between items-censtartter p-5 gap-14'>
          <p className='text-base font-medium text-background text-start'>
            Designed By Me and Built by{" "}
            <a href='/' className=' text-primary'>
              Jesse Wisdom
            </a>
          </p>
          <p className='text-base flex-1 font-medium text-background min-w-[100px] '>
            October 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
