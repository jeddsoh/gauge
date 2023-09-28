import { Button } from "@nextui-org/button";
import Hero from "../components/hero";
import Menu from "../components/menu";
import Services from "@/components/services-home";
import DataProjects from "@/components/data";

export default function Home() {
  return (
    <>
      <Menu />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Hero />
          <Services />
          <DataProjects />
        </div>
      </main>
    </>
  );
}
