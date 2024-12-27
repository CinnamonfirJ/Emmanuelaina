import AllProject from "../section/AllProjects";
import FAQs from "../section/FAQs";
import Footer from "../section/Footer";
import ResumeTimeline from "../section/ResumeTimeLine";
import Stack from "../section/Stack";
import Testimonials from "../section/Testimonials";

const More = () => {
  return (
    <div>
      <section className=' my-[65px] mx-[48px] max-md:mx-3'>
        <AllProject />
      </section>
      <section className=' my-[65px] mx-[48px] max-md:mx-3'>
        {/* <ResumeTimeline /> */}
        <Testimonials />
      </section>
      <section className=' my-[65px] mx-[48px] max-md:mx-3'>
        <FAQs />
      </section>
      <section className=' my-[65px] mx-[48px] max-md:mx-3'>
        <Stack />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default More;
