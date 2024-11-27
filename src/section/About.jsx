import SectionHead from "../components/SectionHead";
import about from "../assets/User.png";
import left from "../assets/Frame 27.png";
import right from "../assets/Frame 28.png";
import mindset from "../assets/Vector.png";
import design from "../assets/game-icons_wireframe-globe.png";
import software from "../assets/healthicons_virus-research-outline.png";
import analytical from "../assets/teenyicons_ab-testing-outline.png";
import bg from "../assets/Frame 237.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div
        className='flex justify-center items-center w-full'
        data-aos='fade-up'
      >
        <SectionHead icon={about} title={"About Me"} />
      </div>
      <div
        className='flex justify-center items-center'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        <p className='max-w-[1150px] text-center text-lg'>
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
      <div
        className='grid grid-cols-3 gap-8'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <div className='col-span-1'>
          <img src={left} alt='left' />
        </div>
        <div
          className='flex justify-center items-center'
          data-aos='zoom-in'
          data-aos-delay='400'
        >
          <h1 className='text-5xl font-bold tracking-wide'>
            E <span className='text-primary'>A</span>
          </h1>
        </div>
        <div className='col-span-1'>
          <img src={right} alt='right' />
        </div>
      </div>

      {/* Skills */}
      <div
        className='relative flex justify-center items-center bg-gray-50'
        data-aos='fade-up'
        data-aos-delay='500'
      >
        <div className='grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-12'>
          {skills.map((skill, i) => (
            <div key={i} className='flex justify-center items-center gap-8'>
              <div
                className='flex flex-col justify-center items-center gap-3'
                data-aos='fade-up'
                data-aos-delay={`${600 + i * 100}`}
              >
                <div className='flex justify-center items-center rounded-full border border-[#DDE5ED] w-[60px] h-[60px]'>
                  <div className='flex justify-center items-center rounded-full w-[45px] h-[45px] bg-gradient-to-b from-primary to-secondary'>
                    <img src={skill.icon} alt='icon' />
                  </div>
                </div>
                <div className='font-semibold text-lg text-gray-800 max-w-[151px] text-center leading-none'>
                  <h3>{skill.title}</h3>
                </div>
              </div>
              {i !== skills.length - 1 && (
                <div className='h-[90px] max-md:hidden bg-[#DDE5ED] w-[1px] mx-2'></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div
        className={`grid grid-cols-3 max-md:grid-cols-1 gap-[26px] rounded-[20px] border p-[20px] max-md:p-[48px] border-grayBorder bg-cover bg-center`}
        data-aos='fade-up'
        data-aos-delay='800'
      >
        {experiences.map((experience, i) => (
          <div
            key={i}
            className='flex flex-col justify-center items-center gap-[26px]'
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className='flex flex-col justify-center items-center rounded-[20px] border custom-border border-grayBorder w-[223px] h-[150px]'>
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
