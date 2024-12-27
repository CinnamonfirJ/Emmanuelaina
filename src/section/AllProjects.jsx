import arrow from "../assets/arrow.png";
import myProject from "../assets/grommet-icons_projects.png";
import SectionHead from "../components/SectionHead";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import Button from "../components/Button";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const AllProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      imgUrl: project1,
      title: "Fifty Crypto Settings",
      category: "Fintech-Paid Project",
      link: "/",
    },
    {
      imgUrl: project2,
      title: "Admin Management Dashboard",
      category: "Fintech-Paid Project",
      link: "/",
    },
    {
      imgUrl: project3,
      title: "Crypto App Sign Up",
      category: "Fintech-Paid Project",
      link: "/",
    },
    {
      imgUrl: project4,
      title: "Burna Coin (Tap to Earn)",
      category: "Web 3 Memecoin-Paid Project",
      link: "/",
    },
    {
      imgUrl: project5,
      title: "Shopswap",
      category: "E Commerce- Personal Project",
      link: "/",
    },
    {
      imgUrl: project6,
      title: "Metamint NFT Dashboard",
      category: "Web3 Fintech-Paid Project",
      link: "/",
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
        className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className='border border-grayBorder rounded-xl bg-[#F8FAFC]'
            data-aos='zoom-in'
            data-aos-delay={`${300 + i * 100}`}
          >
            <div className='flex flex-col justify-center items-start gap-2'>
              <img src={project.imgUrl} alt='project' />
              <div className='flex flex-col justify-center items-start gap-3 px-4 py-1 w-full'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-base text-background font-medium'>
                    {project.category}
                  </p>
                  <div>
                    <a
                      href={project.link}
                      className='flex justify-center items-center gap-2 bg-primary rounded-full py-1 px-2 text-gray-200'
                    >
                      <div>View</div>
                      <div>
                        <img src={arrow} alt='arrow' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        className='flex justify-between items-center max-w-[1140px] w-full'
        data-aos='fade-up'
        data-aos-delay='800'
      >
        <div>
          <h3 className='text-lg font-semibold'>Wanna See More?</h3>
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
