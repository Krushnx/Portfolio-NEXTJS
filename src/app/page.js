import About from '@/components/about/About';
import Hero from '@/components/Home/Hero';
import './globals.css'
import Project from '@/components/project/Project';
import Experince from '@/components/experince/Experince';
import Contact from '@/components/contact/Contact';
import Testimonials from '@/components/testimonials/Testimonials';
import PreFooter from '@/components/footer/PreFooter';
import Footer from '@/components/footer/Footer';



const Home = () => {




  return (
    <div className='home'>
      <Hero />
      <div className='smallLine'></div>
      <About isComponent={false} />
      <div className='smallLine'></div>
      <Project /> 
      <div className='smallLine'></div>
      <Experince />
      <div className='smallLine'></div>
      <Testimonials />
      <div className='smallLine'></div>
      <Contact />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default Home;