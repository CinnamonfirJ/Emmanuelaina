/* eslint-disable react/prop-types */
const SheetTrigger = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 text-md font-medium  hover:text-white transition-all'
    >
      {children}
    </button>
  );
};

export default SheetTrigger;
