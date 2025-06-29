import arrow from "../assets/arrow.png";
import myProject from "../assets/grommet-icons_projects.png";
import SectionHead from "../components/SectionHead";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8 from "../assets/projects/project8.png";
import project9 from "../assets/projects/project9.png";
import project10 from "../assets/projects/project10.png";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link2 } from "lucide-react";

const AllProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      imgUrl: project1,
      title: "ChatNaija - AI Chatbot",
      category: "AI-Team Project",
      link: "https://chat-naija-ai.vercel.app/",
    },
    {
      imgUrl: project2,
      title: "Fifty Crypto Exchange (App)",
      category: "Fintech-Paid Project",
      link: "https://www.behance.net/gallery/211947745/Fifty-Xchange-App",
    },
    {
      imgUrl: project3,
      title: "Fifty Crypto Exchange (Web)",
      category: "Web3 Fintech-Paid Project",
      link: "https://www.behance.net/gallery/214671509/Fifty-Xchange",
    },
    {
      imgUrl: project4,
      title: "Burna Coin (Tap to Earn)",
      category: "Web3 Memecoin-Personal Project",
      link: "https://www.behance.net/gallery/214716603/Burna-Coin",
    },
    {
      imgUrl: project5,
      title: "Shopswap",
      category: "E Commerce-Personal Project",
      link: "https://www.behance.net/gallery/201544379/ShopSwap-E-Commerce-App",
    },
    {
      imgUrl: project6,
      title: "Metamint NFT Dashboard",
      category: "Web3 Fintech-Personal Project",
      link: "https://www.behance.net/gallery/202765619/NFT-Dashboard-Design",
    },
    {
      imgUrl: project7,
      title: "EventPulse",
      category: "Social-Personal Project",
      link: "https://www.behance.net/gallery/210547441/Event-Management-Sign-Up-Page",
    },
    {
      imgUrl: project8,
      title: "Admin Management Dashboard",
      category: "Fintech-Paid Project",
      link: "https://www.behance.net/gallery/206867637/Transactions-Management-Dashboard",
    },
    {
      imgUrl: project9,
      title: "Web3 Finance OS Dashboard",
      category: "Web3 Fintech-Paid Project",
      link: "https://www.behance.net/gallery/200587595/Web3-Financial-OS-Bank-Settings-Section",
    },
    {
      imgUrl: project10,
      title: "Webloom Waitlist Page",
      category: "Saas Project",
      link: "https://www.behance.net/gallery/228488887/Webloom-Waitlist-Page",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <div
        className='flex justify-center items-center w-full'
        data-aos='fade-up'
      >
        <SectionHead icon={myProject} title={"Projects"} />
      </div>
      <div
        className='gap-12 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className='bg-[#F8FAFC] border border-grayBorder rounded-xl overflow-hidden'
            data-aos='zoom-in'
            data-aos-delay={`${300 + i * 100}`}
          >
            <div className='flex flex-col justify-between h-full'>
              {/* Image Container with fixed aspect ratio */}
              <div className='rounded-t-xl w-full aspect-[16/9] overflow-hidden'>
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className='w-full h-full object-cover'
                  loading='lazy'
                  draggable={false}
                />
              </div>

              {/* Text & Link Content */}
              <div className='flex flex-col justify-between gap-3 px-4 py-3'>
                <h3 className='font-semibold text-xl'>{project.title}</h3>
                <div className='flex justify-between items-center'>
                  <p className='font-medium text-background'>
                    {project.category}
                  </p>
                  <a
                    href={project.link}
                    className='flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-gray-200'
                  >
                    <Link2 size={16} />
                    <img src={arrow} alt='arrow' className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        className='flex justify-between items-center w-full max-w-[1140px]'
        data-aos='fade-up'
        data-aos-delay='800'
      >
        <div>
          <h3 className='font-semibold text-lg'>Wanna See More?</h3>
        </div>
        <div>
          <a href='/more'>
            <Button>
              <div>View More</div>
              <div>
                <img src={arrow} alt='arrow' />
              </div>
            </Button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default AllProject;
