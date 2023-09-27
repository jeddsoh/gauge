import Image from "next/image";
import { Button } from '@nextui-org/button';
import { serif } from "../app/fonts";

export default function Hero() {
  return (
    <section className="h-screen relative flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 h-full w-full opacity-50"
        style={{
          backgroundImage: `url('/images/masks.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 -z-20 h-full w-full bg-opacity-100"
        style={{
          backgroundImage: `url('/images/masks_noise.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t to-100% from-neutral-950"></div>

      {/* Content */}
      <div className="container px-4 mx-auto items-center text-center flex flex-col gap-6">
        <h1 className={`${serif.className} text-7xl font-bold`}>
          Crafting a new common sense.
        </h1>
        <p className="text-xl text-neutral-200 leading-normal max-w-4xl">
          Gauge is a consultancy of designers, engineers, ethnographers and data
          scientists; dedicated as a group to help you find clear causality from
          within the wisdom of crowds.
        </p>
        <div className="mt-6">
          <Button>See what we do</Button>
        </div>
      </div>
      <div className="flex flex-col gap-6 mx-auto items-center mt-20">
        <p className="text-neutral-200 font-semibold text-sm">
          Trusted by the clients we keep.
        </p>
        <ul className="flex items-center gap-20">
          <li>
            <a href="">
              <Image
                src="/images/clients/affirm-logo.png"
                width={100}
                height={42}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <Image
                src="/images/clients/electronic-arts.png"
                width={171}
                height={26}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <Image
                src="/images/clients/airbnb.png"
                width={64}
                height={64}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <Image
                src="/images/clients/adobe.png"
                width={37}
                height={51}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <Image
                src="/images/clients/new-relic.png"
                width={124}
                height={24}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}