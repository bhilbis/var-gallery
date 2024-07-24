import { GridBackgroundDemo } from "@/components/home/home-background/gridBackground";
import Footer from "@/components/home/home-footer/footer";
import Members from "@/components/home/home-members/members";
import Projects from "@/components/home/home-project";
import Service from "@/components/home/home-service/service";

export default function Home() {
  return (

    <div className="overflow-hidden">
      <GridBackgroundDemo />
      <Members/>
      <Projects/>
      <Service/>
      <Footer/>
      </div>

  );
}
