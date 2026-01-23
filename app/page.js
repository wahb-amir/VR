import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonial from './Components/Testimonial'
import Contact from "./Components/Contact";
import VideoCard from "./Components/VideoCard";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col justify-center items-center  z-10 mb-auto">
        <Hero />
        <VideoCard />
        <Workflow/>
        <Feature/>
        <Pricing/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}
