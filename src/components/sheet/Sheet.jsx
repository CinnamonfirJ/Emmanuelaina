"use client";

import SheetTrigger from "./SheetTrigger";
import SheetContent from "./SheetContent";

import { useState } from "react";
// import Button from "../common/Button";
// import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Sheet = () => {
  // const navigate = useNavigate();
  const Links = [
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

  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => {
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  // const handleLogin = () => {
  //   navigate("/login");
  // };

  // const handleSignup = () => {
  //   navigate("/signup");
  // };

  return (
    <div>
      <SheetTrigger onClick={openSheet}>
        {/* <img src='/open.svg' alt='logo' width={30} height={30} /> */}
        <Button variant={"light"}>
          {" "}
          <svg
            width='26'
            height='20'
            viewBox='0 0 26 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.33337 1.25H24.6667M1.33337 10H24.6667M14.4584 18.75H24.6667'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </Button>
      </SheetTrigger>

      <div>
        <SheetContent isOpen={isOpen} onClose={closeSheet}>
          <div className='flex flex-col justify-start items-start h-screen gap-3'>
            {Links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={` text-background p-5 hover:text-accent`}
                onClick={closeSheet}
              >
                {" "}
                {item.name}{" "}
              </a>
            ))}
            <div className='flex flex-col gap-5 w-full'>
              <div className=' py-2 px-4 '>
                <a href='#contact' onClick={closeSheet}>
                  <Button variant={"primary"}>Contact Me</Button>
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </div>

      {/* <div className=' absolute top-0 left-[39%] translate-x-[39%] -z-10 h-screen bg-white w-[256px] ' /> */}

      {/* Backdrop (optional) */}
      {isOpen && (
        <div
          onClick={closeSheet}
          className='fixed inset-0 -z-10 h-screen bg-black bg-opacity-90 backdrop-blur-lg'
        />
      )}
    </div>
  );
};

export default Sheet;
