import { useEffect } from "react";
import SectionHead from "../components/SectionHead";
import tools from "../assets/guidance_tools.png";
import figma from "../assets/figma.png";
import framer from "../assets/framer.png";
import photoshop from "../assets/photoshop.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Stack = () => {
  const stacks = [
    {
      imgUrl: figma,
    },
    {
      imgUrl: framer,
    },
    {
      imgUrl: photoshop,
    },
    {
      imgUrl: github,
    },
    {
      imgUrl: vscode,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <div
        className='flex justify-center items-center w-full'
        data-aos='fade-down' // Animation for Section Head
      >
        <SectionHead icon={tools} title={"Essential Stacks"} />
      </div>

      <div
        className='flex flex-col justify-center items-center'
        data-aos='zoom-in' // Animation for title
      >
        <h3 className='text-4xl font-bold max-md:text-xl max-md:font-semibold'>
          My Go-to-Tools
        </h3>
      </div>
      <div
        className='grid grid-cols-5 max-md:grid-cols-3 gap-3'
        data-aos='fade-up' // Animation for tools grid
      >
        {stacks.map((stack, i) => (
          <img
            src={stack.imgUrl}
            alt={`Tool ${i + 1}`}
            key={i}
            data-aos='zoom-in' // Animation for individual icons
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
