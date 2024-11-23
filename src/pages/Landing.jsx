import About from "../section/About";
import FAQs from "../section/FAQs";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Project from "../section/Project";
import Stack from "../section/Stack";
import Testimonials from "../section/Testimonials";

const Landing = () => {
  return (
    <div>
      <section id='hero' className=' my-[70px] mx-[48px] max-md:mx-3'>
        <Hero />
      </section>
      <section id='about' className=' my-[70px] mx-[48px] max-md:mx-3'>
        <About />
      </section>
      <section id='projects' className=' my-[70px] mx-[48px] max-md:mx-3'>
        <Project />
      </section>
      <section id='testimonials' className=' my-[70px] mx-[48px] max-md:mx-3'>
        <Testimonials />
      </section>
      <section className=' my-[70px] mx-[48px] max-md:mx-3'>
        <FAQs />
      </section>
      <section className=' my-[70px] mx-[48px] max-md:mx-3'>
        <Stack />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default Landing;
