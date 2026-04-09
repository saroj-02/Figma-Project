import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="studio">
          <ContentSection
            title={
              <>
                Tomorrow <span className="underline-orange">should</span> <br /> 
                be better than <span className="pill-highlight pill-green">today</span>
              </>
            }
            description="We take a lot of pride in the work we do. Our team of experts is dedicated to delivering the best results for our clients and we always strive to exceed expectations."
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            imageSide="right"
            linkText="Read more"
            shape="square"
            nextSectionId="services"
          />

          <ContentSection
            title={
              <>
                <span className="pill-highlight pill-green">See</span> how we can <br /> 
                help you <span className="underline-orange">progress</span>
              </>
            }
            description="We build our solutions around you and your business. Why keep things as they are when we can work with you to plan and build solutions with a 360 degree view of your short and long term business development."
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            imageSide="left"
            linkText="Read more"
            shape="triangle"
            showCurvedPath={true}
          />
        </div>

        <div id="services">
          <Services />
        </div>

        <Testimonials />
        <FAQ />
        
        <div id="contact">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
