import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/shared/carousel";
import { FaHeartbeat, FaWheelchair } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import Link from "next/link";

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
          <Link href="/about-us">
            <Button className="h-12 w-1/2">Learn More</Button>
          </Link>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
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
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
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
      <section className="h-auto w-full bg-gray-200 py-4">
        <h1 className="my-4 text-center text-4xl font-bold md:text-6xl">
          Main Services
        </h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-primary" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="h-1 w-32 bg-primary" />
        </div>
        <div className="flex h-[30rem] w-full gap-2 p-2 md:h-[40rem] md:gap-6 md:p-6">
          <div className="border-primary_blue shadow-primary_blue flex-1 border-2 shadow-md">
            <div className="relative h-1/2 w-full">
              <Image
                src={"/hold-hands.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-1/2 w-full p-2">
              <h1 className="font-bold md:my-2 md:text-3xl">
                Fostering Wellness with General Psychiatry
              </h1>
              <p className="text-xs text-neutral-600 md:text-base">
                Our principal focus lies in delivering top-tier general
                psychiatry services. Our experienced psychiatrists are adept at
                diagnosing, treating, and managing various mental health
                disorders, offering therapeutic sessions that cater to your
                specific needs.
              </p>
            </div>
          </div>
          <div className="border-primary_blue shadow-primary_blue flex-1 border-2 shadow-md">
            <div className="relative h-1/2 w-full">
              <Image
                src={"/hold-hands.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-1/2 w-full p-2">
              <h1 className="font-bold md:my-2 md:text-3xl">
                Medication Management for Mental Health
              </h1>
              <p className="text-xs text-neutral-600 md:text-base">
                Effective medication management is key to successful treatment
                outcomes in psychiatry.We review your prescription regularly and
                adjust dosages as necessary, reducing potential risks and
                maximizing benefits to your mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full p-4">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          Additional Services
        </h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-primary" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="h-1 w-32 bg-primary" />
        </div>
        <div className="flex h-auto w-full flex-col md:flex-row md:gap-8">
          <div className="flex h-[35rem] w-full flex-col">
            <div className="relative h-full w-full">
              <Image
                src={"/hold-hands.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-[30rem] w-full place-content-center gap-4 p-2">
              <h1 className="font-bold md:my-2 md:text-3xl">
                On-Site Nursing Home Psychiatry{" "}
              </h1>
              <p className="text-xs text-neutral-600 md:text-base">
                Our on-site nursing home psychiatry service stems from our
                commitment to providing comprehensive and personalized mental
                healthcare. Our expert psychiatrists collaborate closely with
                facility staff to ensure the well-being of seniors, providing
                them with on-site evaluations, personalized treatment plans,
                medication management, and therapeutic sessions.
              </p>
            </div>
          </div>
          <div className="flex h-[35rem] w-full flex-col">
            <div className="relative h-full w-full">
              <Image
                src={"/hold-hands.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-[30rem] w-full place-content-center gap-4 p-2">
              <h1 className="font-bold md:my-2 md:text-3xl">
                Telehealth Psychiatry Services
              </h1>
              <p className="text-xs text-neutral-600 md:text-base">
                Our telehealth psychiatry services demonstrate our dedication to
                making mental healthcare accessible, confidential, and
                convenient. Utilizing cutting-edge technology, our expert
                psychiatrists reach patients regardless of their geographical
                location within New York, providing the same quality of care as
                traditional face-to-face sessions. This service includes
                detailed virtual evaluations, development of tailored treatment
                plans, strategic medication management, and therapeutic sessions
                conducted in a secure, online environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary_blue h-auto w-full p-4 text-white">
        <p className="my-3 text-center text-3xl font-bold md:text-4xl">
          Turn to Telehealth
        </p>
        <h1 className="my-3 text-center text-4xl font-bold md:text-6xl">
          The Future of Healthcare
        </h1>
        <p className="my-3 text-center text-xl font-bold">
          At Cordial Health, we&apos;ve embraced this innovative healthcare
          <br />
          approach to deliver convenient, flexible, and accessible psychiatric
          care.
        </p>
        <div className="flex h-auto w-full flex-col gap-4 p-2 md:h-80 md:flex-row">
          <div className="grid h-full w-full bg-white p-2">
            <i className="text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-black">
              Convenience at Its Best
            </h1>
            <p className="text-neutral-600">
              Our telehealth services allow you to bypass travel and time
              constraints, granting you the freedom to access mental health care
              from the comfort of your home.
            </p>
          </div>
          <div className="grid h-full w-full bg-white p-2">
            <i className="text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-black">
              Flexibility that Fits Your Lifestyle
            </h1>
            <p className="text-neutral-600">
              Life can be hectic. That&apos;s why we&apos;ve designed our
              telehealth services to offer flexible scheduling that aligns
              seamlessly with your busy lifestyle.
            </p>
          </div>
          <div className="grid h-full w-full bg-white p-2">
            <i className="text-6xl text-primary md:text-8xl">
              <FaWheelchair />
            </i>
            <h1 className="text-3xl font-bold text-black">Accessible Care</h1>
            <p className="text-neutral-600">
              Whether you&apos;re in a nursing home or prefer remote
              consultations, our telehealth services ensure that high-quality
              mental healthcare is never out of reach, no matter where you are
              in New York.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
