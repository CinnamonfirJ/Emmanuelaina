/* eslint-disable react/prop-types */
const SheetContent = ({ isOpen, children, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className=' flex justify-between items-center p-4 border-b border-gray-200'>
        {/* <div>
          <div className=' flex justify-center items-center font-archivo text-[24px] '>
            <img src='/image1.png' alt='logo' width={60} height={40} />
            Chat<span className=' text-primary'>Naija</span>
          </div>
        </div> */}
        <button
          onClick={onClose}
          className='text-sm text-gray-500 hover:text-gray-700'
        >
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 2L24 24'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M24 2L2 24'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
      <div className='p-4'>{children}</div>
    </div>
  );
};

export default SheetContent;
