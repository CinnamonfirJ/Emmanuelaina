// eslint-disable-next-line react/prop-types
import Indicator from "./Indicator";

const SectionHead = ({ icon, title }) => {
  const barHeights = ["h-5", "h-7", "h-9"];

  return (
    <div className='flex justify-center items-center gap-8 w-full'>
      {/* Left Side */}
      <div className='flex items-center justify-center w-full gap-4'>
        <div className='flex-grow h-[1px] bg-[#DDE5ED] w-full' />
        <div className='flex items-center gap-2'>
          {barHeights.map((height, index) => (
            <div key={index} className={`w-[1px] ${height} bg-[#DDE5ED]`} />
          ))}
        </div>
      </div>

      {/* Title Section */}
      <div className='flex items-center justify-center'>
        <Indicator variant='title' size='large' icon={<img src={icon} />}>
          {title}
        </Indicator>
      </div>

      {/* Right Side */}
      <div className='flex items-center justify-center w-full gap-4'>
        <div className='flex items-center gap-2'>
          {barHeights.reverse().map((height, index) => (
            <div key={index} className={`w-[1px] ${height} bg-[#DDE5ED]`} />
          ))}
        </div>
        <div className='flex-grow h-[1px]bg-[#DDE5ED]' />
      </div>
    </div>
  );
};

const DecorativeElement = ({ direction }) => {
  const barHeights = ["h-3", "h-4", "h-5"];

  return (
    <div className='relative w-full flex justify-center items-center '>
      {/* Horizontal Line */}
      <div className='absolute top-1/2 left-0 w-[90%] h-[2px] bg-primary' />
      {/* Vertical Bars */}
      <div
        className={`absolute top-1 -translate-y-1 flex gap-1.5 ${
          direction === "left" ? "right-0" : "left-0"
        }`}
      >
        {direction === "left"
          ? barHeights.map((height, index) => (
              <div
                key={index}
                className={`w-[2px] ${height} bg-primary/80 transform -translate-y-1/2`}
              />
            ))
          : barHeights
              .reverse()
              .map((height, index) => (
                <div
                  key={index}
                  className={`w-[2px] ${height} bg-primary/80 transform -translate-y-1/2`}
                />
              ))}
      </div>
    </div>
  );
};

export default SectionHead;
