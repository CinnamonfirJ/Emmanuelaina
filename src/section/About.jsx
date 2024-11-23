import SectionHead from "../components/SectionHead";
import about from "../assets/User.png";
import left from "../assets/Frame 27.png";
import right from "../assets/Frame 28.png";
import mindset from "../assets/Vector.png";
import design from "../assets/game-icons_wireframe-globe.png";
import software from "../assets/healthicons_virus-research-outline.png";
import analytical from "../assets/teenyicons_ab-testing-outline.png";

const About = () => {
  const skills = [
    { icon: mindset, title: "User-Centered Mindset" },
    { icon: design, title: "Visual Design Skills" },
    { icon: software, title: "Software Proficiency Skills" },
    { icon: analytical, title: "Analytical Problem-Solving" },
  ];
  const experiences = [
    { number: "10+", title: "Design projects" },
    { number: "2+", title: "Years of Experience" },
    { number: "3+", title: "Apps Designed" },
  ];

  return (
    <div className='flex flex-col gap-14 justify-center items-center'>
      <div>
        <SectionHead icon={about} title={"About Me"} />
      </div>
      <div className='flex justify-center items-center'>
        <p className='max-w-[1000px] text-center text-lg'>
          Hi, I'm Emmanuel Aina, a UI/UX designer with over 2 years of
          experience creating intuitive digital products. My passion for
          blending beauty and functionality has led me to design across web3,
          fintech, e-commerce, and gaming UI. One of my proudest achievements is
          designing a cryptocurrency trading platform that’s easy for both
          beginners and seasoned traders, contributing to DeFi through clean,
          user-friendly interfaces. I’ve designed minimalistic landing pages for
          an AI startup, streamlined fintech flows, and crafted engaging event
          management platforms. With frontend skills in HTML, CSS, and
          JavaScript, I collaborate closely with developers to bring impactful,
          user-centered designs to life. I’m adaptable and ready to tackle any
          project, committed to delivering user-centered designs that make a
          lasting impact.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <div className='col-span-1'>
          <img src={left} alt='left' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-wide'>
            E <span className='text-primary'>A</span>
          </h1>
        </div>
        <div className='col-span-1'>
          <img src={right} alt='left' />
        </div>
      </div>
      <div>
        {/* Experience  */}
        <div className='grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-12'>
          {skills.map((skill, i) => (
            <div
              key={i}
              className='flex flex-col justify-center items-center gap-3'
            >
              <div className='flex justify-center items-center rounded-full border border-grayBorder w-[60px] h-[60px]'>
                <div className='flex justify-center items-center rounded-full w-[45px] h-[45px] bg-gradient-to-b from-primary to-secondary'>
                  <img src={skill.icon} alt='icon' />
                </div>
              </div>
              <div className='font-semibold text-lg text-background max-w-36 text-center leading-none'>
                <h3>{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className='grid grid-cols-3 max-md:grid-cols-1 gap-8 rounded-lg border max-w-[750px] pt-5 pb-3 px-2 border-grayBorder'>
        {experiences.map((experience, i) => (
          <div
            key={i}
            className='flex flex-col justify-center items-center gap-3'
          >
            <div className='flex flex-col justify-center items-center rounded-lg border custom-border border-grayBorder w-[220px] h-[138px]'>
              <div className='flex justify-center items-center rounded-full font-black text-6xl'>
                <h1>{experience.number}</h1>
              </div>
              <div className='font-semibold text-lg text-background text-center leading-none'>
                <h3>{experience.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
