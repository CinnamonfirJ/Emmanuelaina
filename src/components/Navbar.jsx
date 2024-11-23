import profile from "../assets/image.png";
import Button from "./Button";
import Sheet from "./sheet/Sheet";
const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  return (
    <header className=' sticky top-8 my-8 mx-28 max-md:mx-3 z-10'>
      <div className=' flex justify-between items-center bg-background rounded-full'>
        <div className=' py-2 px-4 '>
          <img src={profile} width={55} height={55} alt='profile' />
        </div>
        <div>
          <ul className='max-[940px]:hidden flex justify-center items-center gap-10 text-lg font-medium'>
            {links.map((link, i) => (
              <li key={i} className=' text-white cursor-pointer'>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' py-2 px-4  max-[940px]:hidden'>
          <a href='#contact'>
            <Button variant={"light"}>Contact Me</Button>
          </a>
        </div>
        <div className='py-2 px-4 hidden max-[940px]:flex'>
          <Sheet />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
