import { GridBackgroundDemo } from "@/components/home/home-background/gridBackground";
import Footer from "@/components/home/home-footer/footer";
import Members from "@/components/home/home-members/members";
import Projects from "@/components/home/home-project/project";
import Service from "@/components/home/service/service";

export default function Home() {
  return (
    <>
      <GridBackgroundDemo />
      <Members/>
      <Projects/>
      <Service/>
      <Footer/>
    </>
  );
}
