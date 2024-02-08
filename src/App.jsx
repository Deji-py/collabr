import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CtaSection from "./components/Join_As_Creator/CtaSection";
import Finding_Creators from "./components/Join_As_Creator/Finding_Creators";
import Hero_section from "./components/Join_As_Creator/Hero_section";
import How_It_Works from "./components/Join_As_Creator/How_It_Works";
import Testimonials from "./components/Join_As_Creator/Testimonials";
import WhyTheyLove from "./components/Join_As_Creator/WhyTheyLove";
import Why_Us from "./components/Join_As_Creator/Why_Us";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <main className=" flex overflow-x-hidden w-full flex-col justify-center items-center">
      <Header />
      <Hero_section />
      <How_It_Works />
      <Why_Us />
      <Finding_Creators />
      <WhyTheyLove />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
