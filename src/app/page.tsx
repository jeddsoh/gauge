import { Button } from "@nextui-org/button";
import Hero from "../components/hero";
import Menu from "../components/menu";

export default function Home() {
  return (
    <>
      <header className="fixed w-full">
        <Menu />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Hero />
        </div>
      </main>
    </>
  );
}
