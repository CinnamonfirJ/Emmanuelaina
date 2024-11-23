import React from "react";
import Indicator from "./Indicator";
import left from "../assets/Frame 27.png";
import right from "../assets/Frame 28.png";

const SectionHead = ({ icon, title }) => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-8 py-10'>
        <div className='col-span-1  flex justify-center items-center'>
          <img src={left} alt='left' />
        </div>
        <div className='flex justify-center items-center'>
          <Indicator
            variant={"title"}
            size={"large"}
            icon={<img src={icon} alt='title' />}
          >
            {title}
          </Indicator>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
          <img src={right} alt='left' />
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
