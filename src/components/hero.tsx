import Image from "next/image";
import { Button } from "@nextui-org/button";
import { serif } from "../app/fonts";
import { Link } from "@nextui-org/link";
import masks from "public/images/masks.webp";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className={`${serif.className} text-7xl font-bold`}>
            Crafting a new common sense.
          </h1>
          <p className="mt-6 max-w-3xl text-lg mx-auto leading-relaxed">
            Gauge is a consultancy of designers, engineers, ethnographers and
            data scientists; dedicated as a group to help you find clear
            causality from within the wisdom of crowds.
          </p>
          <Button
            className="mt-6"
            href="#"
            as={Link}
            variant="solid"
          >
            See what we do
          </Button>
        </div>
      </div>
    </section>
  );
}
