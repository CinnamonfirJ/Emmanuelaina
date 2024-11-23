import SectionHead from "../components/SectionHead";
import tools from "../assets/guidance_tools.png";
import figma from "../assets/figma.png";
import framer from "../assets/framer.png";
import photoshop from "../assets/photoshop.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";

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

  return (
    <div className='flex flex-col justify-center items-center gap-14'>
      <div>
        <SectionHead icon={tools} title={"Essential Stacks"} />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-4xl font-bold max-md:text-xl max-md:font-semibold'>
          My Go-to-Tools
        </h3>
      </div>
      <div className='grid grid-cols-5 max-md:grid-cols-3 gap-3'>
        {stacks.map((stack, i) => (
          <img src={stack.imgUrl} alt='' key={i} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
