"use client"
import Image from "next/image";
import { FaWheelchair,FaHeartbeat } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { motion } from "framer-motion";


export default function PsychiatryServicesPage() {
   const variants = {
     hidden: { opacity: 0, x: "-100vw" },
     visible: { opacity: 1, x: 0 },
   };
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
         <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="z-20 text-6xl font-black text-white">
          Psychiatry Services
        </motion.h1>
      </section>
      <section className="h-[30rem] w-full p-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 b">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Our Services
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>
          <p>
            At Cordial Health, we offer comprehensive psychiatry services to
            meet the diverse mental health needs of individuals throughout New
            York. Our experienced team of psychiatrists is committed to
            providing high-quality care and improving the well-being of our
            patients. Choose from the following services:
          </p>
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
            Nursing Home Psychiatry{" "}
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Our specialized nursing home psychiatry services focus on enhancing
            the mental health and quality of life for seniors residing in
            nursing homes. We provide on-site evaluations, personalized
            treatment plans, medication management, and therapy sessions. Our
            psychiatrists collaborate closely with nursing home staff to ensure
            integrated and holistic care for each individual.
          </p>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <div className="grid h-auto w-full p-4 md:h-full">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Telehealth Psychiatry{" "}
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Our convenient telehealth psychiatry services bring professional
            mental healthcare directly to you. Through secure and confidential
            video conferencing, you can access our team of expert psychiatrists
            from the comfort of your own home. We offer a wide range of
            services, including initial assessments, medication management,
            therapy sessions, and ongoing support. Our telehealth platform
            ensures that individuals across New York can receive the care they
            need, regardless of their location.
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
      <section className="h-auto w-full bg-primary_blue p-4 text-white">
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
