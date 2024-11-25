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

const Project = () => {
  const projects = [
    {
      imgUrl: project1,
      title: "Fifty Crypto Settings",
      category: "Fintech-Paid Project",
    },
    {
      imgUrl: project2,
      title: "Admin Management Dashboard",
      category: "Fintech-Paid Project",
    },
    {
      imgUrl: project3,
      title: "Crypto App Sign Up",
      category: "Fintech-Paid Project",
    },
    {
      imgUrl: project4,
      title: "Burna Coin (Tap to Earn)",
      category: "Web 3 Memecoin-Paid Project",
    },
    {
      imgUrl: project5,
      title: "Shopswap",
      category: "E Commerce- Personal Project",
    },
    {
      imgUrl: project6,
      title: "Metamint NFT Dashboard",
      category: "Web3 Fintech-Paid Project",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <div className='flex justify-center items-center w-full'>
        <SectionHead icon={myProject} title={"Projects"} />
      </div>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12'>
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className='border border-grayBorder rounded-xl bg-[#F8FAFC]'
          >
            <div className='flex flex-col justify-center items-start gap-2'>
              <img src={project.imgUrl} alt='project' />
              <div className='flex flex-col justify-center items-start gap-3 px-4 py-1'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-base text-background font-medium'>
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' flex justify-between items-center max-w-[1140px] w-full'>
        <div>
          <h3 className='text-lg font-semibold'>Wanna See More?</h3>
        </div>
        <div>
          <a href='/'>
            <Button>
              <div>View More</div>
              <div>
                <img src={arrow} alt='arrow' />
              </div>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
