"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent>
        <CarouselItem className="relative h-80 w-full md:h-[35rem]">
          <Image
            src={"/hold-hands.jpg"}
            fill
            alt="hold-hands"
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="relative h-80 w-full md:h-[35rem]">
          <Image
            src={"/hold-hands.jpg"}
            fill
            alt="hold-hands"
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="relative h-80 w-full md:h-[35rem]">
          <Image
            src={"/hold-hands.jpg"}
            fill
            alt="hold-hands"
            className="object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
