import Hero from "./Components/Hero";
import Vr from "./Components/Vr";
import Feature from "./Components/Feature";
import Workflow from "./Components/Workflow";
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col justify-center items-center  z-10 mb-auto">
        <Hero />
        <Vr />
        <Workflow/>
        <Feature/>

      </div>
    </div>
  );
}
