import AllProject from "../section/AllProjects";
import FAQs from "../section/FAQs";
import Footer from "../section/Footer";
// import ResumeTimeline from "../section/ResumeTimeLine";
import Stack from "../section/Stack";
import Testimonials from "../section/Testimonials";

const More = () => {
  return (
    <div>
      <section className='mx-[48px] max-md:mx-3 my-[65px]'>
        <AllProject />
      </section>
      <section className='mx-[48px] max-md:mx-3 my-[65px]'>
        {/* <ResumeTimeline /> */}
        <Testimonials />
      </section>
      <section className='mx-[48px] max-md:mx-3 my-[65px]'>
        <FAQs />
      </section>
      <section className='mx-[48px] max-md:mx-3 my-[65px]'>
        <Stack />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default More;
