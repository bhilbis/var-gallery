import { GridBackgroundDemo } from "@/components/background/gridBackground";
import Footer from "@/page/footer";
import Members from "@/page/members";
import Projects from "@/page/projects";
import Service from "@/page/service";

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
