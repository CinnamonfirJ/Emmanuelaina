import mindset from "../assets/Vector.png";
import design from "../assets/game-icons_wireframe-globe.png";
import software from "../assets/healthicons_virus-research-outline.png";
import analytical from "../assets/teenyicons_ab-testing-outline.png";
import survey from "../assets/Survey.png";
import ui from "../assets/iconoir_design-nib.png";

import pikaso from "../assets/pikaso_texttoimage_ceo-about-to-speak-in-a-video-looking-handsome-wit 1.png";
import star from "../assets/star.png";
import fifty from "../assets/FIFTY XCHANGE 2 1.png";
import qoute from "../assets/”.png";

import img1 from "../assets/image (2).png";
import img2 from "../assets/image-1 (2).png";
import img3 from "../assets/image-2.png";
import img4 from "../assets/image-3.png";
import img5 from "../assets/image-4.png";
import img6 from "../assets/image-5.png";

export default function ResumeTimeline() {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<img src={star} alt='star' key={i} />);
  }

  const qualifications = [
    {
      icon: img1,
      title: "Royal International Schools",
      description: "Basic Education (Creche-Basic 6)",
      date: "2007-2016",
    },
    {
      icon: img2,
      title: "Lagos State Model College, Meiran",
      description: "JSS1-SS3",
      date: "Sept 2016-2022",
    },
    {
      icon: img4,
      title: "University of Ibadan",
      description: "Bsc (Political Science)",
      date: "Sept 2024-Present",
    },
  ];

  const experiences = [
    {
      icon: img6,
      title: "Parach ICT Academy",
      description: "UI/UX Designer",
      date: "Feb 2021-2022",
    },
    {
      icon: img3,
      title: "Artificial Empire",
      description: "UI/UX Designer",
      date: "Jan 2022-2023",
    },
    {
      icon: img5,
      title: "Fifty Crypto Exhange",
      description: "UI/UX Designer",
      date: "Jan 2023-Present",
    },
  ];

  const services = [
    {
      icon: mindset,
      title: "User Flow",
      description:
        "Mapping the User Journey to Enhance Navigation and Experience",
    },
    {
      icon: design,
      title: "Wireframing",
      description: "Creating Visual Blueprints for Effective Design Solutions",
    },
    {
      icon: software,
      title: "User Research",
      description: "Understanding User Needs to Drive Design Decisions",
    },
    {
      icon: analytical,
      title: "User Survey",
      description: "Collecting Valuable Insights to Inform Design Decisions",
    },
    {
      icon: survey,
      title: "UI Design",
      description:
        "Crafting Visually Engaging Interfaces for Seamless Interaction",
    },
    {
      icon: ui,
      title: "User Testing",
      description: "Validating Designs Through Real User Feedback",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-14 my-[70px] mx-[48px] max-md:mx-3 overflow-hidden'>
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
      <div className='container mx-auto p-6'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Qualifications Column */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold mb-8'>Qualifications</h2>
            <div className='relative'>
              <div className='absolute left-2 top-0 bottom-0 w-0.5 bg-[#DDE5ED]' />

              {/* Royal International Schools */}

              {qualifications.map((qualification, i) => (
                <div key={i} className='relative pl-10 pb-12'>
                  <div className='absolute left-0 p-2 bg-purple-500 rounded-full' />
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-start gap-4'>
                      <div className='space-y-2'>
                        <div className='w-12 h-12 relative'>
                          <img
                            src={qualification.icon}
                            alt='Royal International Schools logo'
                            width={48}
                            height={48}
                            className='object-contain'
                          />
                        </div>
                        <h3 className='text-2xl font-bold'>
                          {qualification.title}
                        </h3>
                        <p className='text-lg font-medium font-Satoshi text-gray-600'>
                          {qualification.description}
                        </p>
                        <div className='flex items-center gap-2 text-lg font-Satoshi font-medium text-gray-500'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3.996 9.6L12 14.4L24 7.2L12 0L0 7.2H12V9.6H3.996ZM0 9.6V19.2L2.4 16.536V11.04L0 9.6ZM12 24L6 20.4L3.6 18.96V11.76L12 16.8L20.4 11.76V18.96L12 24Z'
                              fill='#0C0C0C'
                              fillOpacity='0.9'
                            />
                          </svg>

                          <span>{qualification.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold mb-8'>Experience</h2>
            <div className='relative'>
              <div className='absolute left-2 top-0 bottom-0 w-0.5 bg-[#DDE5ED]' />

              {experiences.map((experience, i) => (
                <div key={i} className='relative pl-10 pb-12'>
                  <div className='absolute left-0 p-2 bg-purple-500 rounded-full' />
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-start gap-4'>
                      <div className='space-y-2'>
                        <div className='w-12 h-12 relative'>
                          <img
                            src={experience.icon}
                            alt='Royal International Schools logo'
                            width={48}
                            height={48}
                            className='object-contain'
                          />
                        </div>
                        <h3 className='text-2xl font-bold'>
                          {experience.title}
                        </h3>
                        <p className='text-lg font-medium font-Satoshi text-gray-600'>
                          {experience.description}
                        </p>
                        <div className='flex items-center gap-2 text-lg font-Satoshi font-medium text-gray-500'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.578 2.432L13.578 1.382C11.822 0.461 10.944 0 10 0C9.056 0 8.178 0.46 6.422 1.382L6.101 1.551L15.024 6.65L19.04 4.64C18.394 3.908 17.352 3.361 15.578 2.43M19.748 5.964L15.75 7.964V11C15.75 11.1989 15.671 11.3897 15.5303 11.5303C15.3897 11.671 15.1989 11.75 15 11.75C14.8011 11.75 14.6103 11.671 14.4697 11.5303C14.329 11.3897 14.25 11.1989 14.25 11V8.714L10.75 10.464V19.904C11.468 19.725 12.285 19.297 13.578 18.618L15.578 17.568C17.729 16.439 18.805 15.875 19.403 14.86C20 13.846 20 12.583 20 10.06V9.943C20 8.05 20 6.866 19.748 5.964ZM9.25 19.904V10.464L0.252 5.964C8.9407e-08 6.866 0 8.05 0 9.941V10.058C0 12.583 -1.19209e-07 13.846 0.597 14.86C1.195 15.875 2.271 16.44 4.422 17.569L6.422 18.618C7.715 19.297 8.532 19.725 9.25 19.904ZM0.96 4.641L10 9.161L13.411 7.456L4.525 2.378L4.422 2.432C2.649 3.362 1.606 3.909 0.96 4.642'
                              fill='#0C0C0C'
                              fillOpacity='0.9'
                            />
                          </svg>

                          <span>{experience.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl p-8 border border-grayBorder shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex flex-col items-center text-center space-y-4'>
                <div className='flex justify-center items-center rounded-full w-[80px] h-[80px] bg-gradient-to-b from-primary to-secondary'>
                  <img
                    src={service.icon}
                    className=' w-[45px] h-[45px] '
                    alt='icon'
                  />
                </div>
                <h3 className='text-3xl font-bold'>{service.title}</h3>
                <p className='text-gray-600 text-xl leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
