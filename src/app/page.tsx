import Image from "next/image";



import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/shared/carousel";

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
        <div className="grid w-full h-[20rem] md:h-[35rem] p-4">
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
    </main>
  );
}
