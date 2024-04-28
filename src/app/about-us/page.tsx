import Image from "next/image";
import { FaHeartbeat, FaWheelchair } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function AboutPage() {
  return (
    <main className="h-auto w-full">
      <section className="relative flex h-80 w-full items-center justify-center bg-red-700">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="absolute z-10 h-full w-full bg-primary_blue/30"></div>
        <h1 className="z-20 text-6xl font-black text-white">About</h1>
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
            Introducing Cordial Health
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            At Cordial Health, we recognize mental well-being as the bedrock of
            a fulfilling life. Our skilled and empathetic psychiatrists devote
            themselves to delivering care that is not only personalized but also
            comprehensive, catering to our patients’ diverse needs.
          </p>
          <p className="text-neutral-600">
            Our therapeutic approach is anchored in compassion and robust,
            evidence-based practices. Our primary objective is to equip
            individuals with the tools they need to navigate life joyfully and
            healthily.
          </p>
        </div>
      </section>
      <section className="h-[35rem] w-full p-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-primary_blue p-4 shadow-md shadow-primary_blue">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Our Guiding Principle
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>
          <p>
            We are on a mission to redefine mental healthcare by guaranteeing
            accessible, high-caliber psychiatry services. Our approach is
            designed to dismantle obstacles and secure holistic care for
            individuals from all walks of life, irrespective of their age. Our
            commitment to bringing mental health support to the fingertips of
            New Yorkers is unwavering, facilitated by our on-site services in
            nursing homes and telehealth psychiatry.
          </p>
        </div>
      </section>
      <section className="h-[30rem] w-full p-10">
        <div className="b flex h-full w-full flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Why Align With Cordial Health?
          </h1>
          <p>
            There are a number of reasons why you should choose Cordial Health
            as your partner in mental healthcare. Some of our primary advantages
            include:
          </p>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>
        </div>
      </section>
      <section className="h-auto w-full bg-white p-4 text-white">
        <div className="flex h-auto w-full flex-col gap-4 p-2 md:h-80 md:flex-row">
          <div className="grid h-full w-full border-2 bg-white p-2 shadow-md">
            <i className="text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-black">
              Proficiency in Geriatric Psychiatry
            </h1>
            <p className="text-neutral-600">
              Proficiency in Geriatric Psychiatry Our team consists of
              psychiatrists who are proficient in geriatric psychiatry, a
              specialization that addresses the distinct mental health needs of
              seniors bespoke treatment plans, medication management, and
              therapy sessions.
            </p>
          </div>
          <div className="grid h-full w-full border-2 bg-white p-2 shadow-md">
            <i className="text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-black">
              Inclusive Telehealth Psychiatry
            </h1>
            <p className="text-neutral-600">
              Our telehealth psychiatry services convey professional care into
              the comfort of patients homes. This secure and accessible
              platform ensures that mental health support is within reach for
              individuals scattered across New York.
            </p>
          </div>
          <div className="grid h-full w-full border-2 bg-white p-2 shadow-md">
            <i className="text-6xl text-primary md:text-8xl">
              <FaWheelchair />
            </i>
            <h1 className="text-3xl font-bold text-black">
              Patient-Focused Approach
            </h1>
            <p className="text-neutral-600">
              We place a high premium on personalized care. Each patient is
              accorded sufficient time for our team to fully understand their
              needs, helping us to curate treatment plans designed for
              sustainable well-being.
            </p>
          </div>
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
          <p className="text-lg font-black">Our Pillar</p>
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            The Cordial Health Team
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Our psychiatrists are not only well-versed in psychiatric conditions
            but also continuously strive for professional growth to keep up with
            the evolving mental healthcare landscape. This dedicated team
            combines expertise with compassion to deliver unmatched care.
          </p>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <div className="grid h-auto w-full p-4 md:h-full">
          <p className="text-lg font-black">Our Footprint</p>
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            The Cordial Health Community
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Cordial Health&apos;s dedication extends beyond our core services.
            We are avid contributors to the community we serve, involving
            ourselves in educational initiatives, outreach programs, and
            partnerships that are geared toward demystifying mental health. Our
            collaborative efforts aim to cultivate a community where mental
            well-being is understood, acknowledged, and prioritized.
          </p>
        </div>
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
      </section>
    </main>
  );
}
