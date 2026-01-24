import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Features from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import { WhyChooseUs } from "./Components/Why-choose-us";
import DemoModal from "./Components/DemoModal";
import SocialProof from "./Components/SocialProof";
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center 
    text-black dark:text-white bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800">
      <div className="flex flex-col justify-center items-center  z-10 mb-auto">
        <Hero />
         <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <DemoModal/>
        <Products/>
         <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <Features/>
         <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <WhyChooseUs/>
        <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <SocialProof/>
         <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <Testimonial/>
         <span className="w-full min-h-[2px] bg-gray-700 mt-5 mb-5 "/>
        <Contact/>
        
      </div>
    </div>
  );
}
