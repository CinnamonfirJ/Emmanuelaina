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
      <section id='hero' className='container mx-auto my-[65px]'>
        <Hero />
      </section>
      <section id='about' className='container mx-auto my-[65px]'>
        <About />
      </section>
      <section id='projects' className='container mx-auto my-[65px]'>
        <Project />
      </section>
      <section id='testimonials' className='container mx-auto my-[65px]'>
        <Testimonials />
      </section>
      <section className='container mx-auto my-[65px]'>
        <FAQs />
      </section>
      <section className='container mx-auto my-[65px]'>
        <Stack />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default Landing;
