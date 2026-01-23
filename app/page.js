import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Features from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import VideoCard from "./Components/VideoCard";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center 
    text-black dark:text-white bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800">
      <div className="flex flex-col justify-center items-center  z-10 mb-auto">
        <Hero />
        <Products/>
        <Features/>
        <Testimonial/>
        <Contact/>
        
      </div>
    </div>
  );
}
