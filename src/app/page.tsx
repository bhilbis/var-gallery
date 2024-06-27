import { GridBackgroundDemo } from "@/components/background/gridBackground";
import Members from "@/components/page/members";
import Projects from "@/components/page/projects";
import Service from "@/components/page/service";

export default function Home() {
  return (
    <>
      <GridBackgroundDemo />
      <Members/>
      <Projects/>
      <Service/>
    </>
  );
}
