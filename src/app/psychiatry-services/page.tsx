"use client";
import Image from "next/image";
import { FaWheelchair, FaHeartbeat } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { dropAnimation, leftAnimation, rightAnimation, upAnimation } from "@/lib/utils";

export default function PsychiatryServicesPage() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });

  return (
    <main className="h-auto w-full">
      <section className="relative flex h-60 w-full items-center justify-center bg-red-700 md:h-80">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="absolute z-10 h-full w-full bg-primary_blue/30"></div>
        <motion.h1
          ref={ref6}
          variants={upAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="z-20 text-6xl font-black text-white"
        >
          Psychiatry Services
        </motion.h1>
      </section>
      <section className="h-[30rem] w-full p-10">
        <div className="b flex h-full w-full flex-col items-center justify-center gap-3">
          <motion.h1
            ref={ref1}
            variants={dropAnimation}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="text-4xl font-bold text-primary_blue md:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.div
            ref={ref1}
            variants={dropAnimation}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="flex h-20 w-full items-center justify-center gap-5"
          >
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </motion.div>
          <p>
            At Stop Shop Care Home, we offer comprehensive psychiatry services
            to meet the diverse mental health needs of individuals throughout
            New York. Our experienced team of psychiatrists is committed to
            providing high-quality care and improving the well-being of our
            patients. Choose from the following services:
          </p>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref4}
          variants={leftAnimation}
          initial="hidden"
          animate={inView4 ? "show" : "hidden"}
          className="relative h-80 w-full p-4 md:h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={"/image4.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={rightAnimation}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-4xl font-bold text-primary_blue md:text-6xl">
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
        </motion.div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref5}
          variants={leftAnimation}
          initial="hidden"
          animate={inView5 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-4xl font-bold text-primary_blue md:text-6xl">
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
        </motion.div>
        <motion.div
          ref={ref3}
          variants={rightAnimation}
          initial="hidden"
          animate={inView3 ? "show" : "hidden"}
          className="relative h-80 w-full p-4 md:h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={"/image3.jpg"}
              fill
              alt="hold-hands"
              className="object-cover"
            />
          </div>
        </motion.div>
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
            <i className="place-self-center text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-primary_blue">
              Convenience at Its Best
            </h1>
            <p className="text-neutral-600">
              Our telehealth services allow you to bypass travel and time
              constraints, granting you the freedom to access mental health care
              from the comfort of your home.
            </p>
          </div>
          <div className="grid h-full w-full bg-white p-2">
            <i className="place-self-center text-6xl text-primary md:text-8xl">
              <IoIosTimer />
            </i>
            <h1 className="text-3xl font-bold text-primary_blue">
              Flexibility that Fits Your Lifestyle
            </h1>
            <p className="text-neutral-600">
              Life can be hectic. That&apos;s why we&apos;ve designed our
              telehealth services to offer flexible scheduling that aligns
              seamlessly with your busy lifestyle.
            </p>
          </div>
          <div className="grid h-full w-full bg-white p-2">
            <i className="place-self-center text-6xl text-primary md:text-8xl">
              <FaWheelchair />
            </i>
            <h1 className="text-3xl font-bold text-primary_blue">
              Accessible Care
            </h1>
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
