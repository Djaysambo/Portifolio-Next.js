import Image from "next/image";
import { Footer } from "./components/footer/footer";
import { Projects } from "./components/projects/projects";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <>
        <div className="">
      <div className="static top-0">
      <Header/>
      </div>
      <div className="space-y-4">
      <Projects/>
      <Projects/>
      </div>
     
    </div>
     <Footer/>

    </>
  );
}
