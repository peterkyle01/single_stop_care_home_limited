import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/shared/carousel";
import { FaHeartbeat } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="h-auto w-full">
      <section className="relative flex h-80 w-full items-center justify-center bg-red-700">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="bg-primary_blue/30 absolute z-10 h-full w-full"></div>
        <h1 className="z-20 text-6xl font-black text-white">Home</h1>
      </section>
      <section className="bg-primary_blue flex h-auto w-full flex-col text-white md:h-[35rem] md:flex-row-reverse">
        <HeroCarousel />
        <div className="grid h-[20rem] w-full p-4 md:h-[35rem]">
          <h1 className="text-3xl font-black md:text-6xl">
            Welcome to <br /> Cordial Health
          </h1>
          <h2 className="text-md font-bold md:text-3xl">
            Creating a Revolution in Mental Healthcare
          </h2>
          <p className="text-sm tracking-wider md:text-base">
            At Cordial Health, we lead the forefront in offering exceptional
            general psychiatry and medication management services across New
            York. Our expert team of psychiatrists is passionately committed to
            enhancing the mental well-being of individuals across all age groups
            and stages of life.
          </p>
          <Button className="h-12 w-1/2">Learn More</Button>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col md:h-[30rem] md:flex-row">
        <div className="relative h-80 w-full p-4 md:h-full">
          <div className="relative h-full w-full">
            <Image
              src={"/hold-hands.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid h-auto w-full p-4 md:h-full">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Discover The <span className="text-primary_blue">Cordial</span>{" "}
            Approach
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="w-32" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="w-32" />
          </div>

          <p className="my-2 text-neutral-600">
            Navigating the labyrinth of mental health can be daunting. But, with
            Cordial Health, you can expect care that&apos;s not only
            professional but also cordial — a warm and friendly approach that
            goes above and beyond traditional clinical interactions.
          </p>
          <p className="text-neutral-600">
            We recognize that mental healthcare is a deeply personal experience,
            and we&apos;re committed to providing you with the highest level of
            service. Our goal is to build lasting relationships with our
            patients by creating a comfortable environment where they can feel
            at ease discussing their concerns.
          </p>
        </div>
      </section>
      <section className="my-4 h-auto w-full bg-gray-200">
        <h1 className="my-4 text-center text-4xl font-bold md:text-6xl">
          Main Services
        </h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="w-32" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="w-32" />
        </div>
        <div className="flex h-[35rem] w-full gap-6 p-6">
          <div className="border-primary_blue shadow-primary_blue flex-1 border-2 shadow-md"></div>
          <div className="border-primary_blue shadow-primary_blue flex-1 border-2 shadow-md"></div>
        </div>
      </section>
    </main>
  );
}
