import Image from "next/image";
import { Footer } from "./components/footer/footer";
import { Projects } from "./components/projects/projects";
import { Header } from "./components/header/header";
import { HomeInfo } from "./components/home/home";

const Home: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="static top-0">
          <Header />
        </div>
        <HomeInfo />
        <div className="space-y-4">
          <Projects />
          <Projects />
        </div>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
