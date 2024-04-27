import Image from "next/image";
import { FaWheelchair,FaHeartbeat } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function PsychiatryServicesPage() {
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
        <h1 className="z-20 text-6xl font-black text-white">
          Psychiatry Services
        </h1>
      </section>
      <section className="bg-primary_blue h-auto w-full p-4 text-white">
        <p className="my-3 text-center text-3xl font-bold md:text-4xl">
          Benefits of Telehealth Psychiatry
        </p>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-white" />
          <FaHeartbeat className="text-4xl" color="white" />
          <hr className="h-1 w-32 bg-white" />
        </div>
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
