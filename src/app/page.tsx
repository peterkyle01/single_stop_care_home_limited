"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaHeartbeat, FaWheelchair } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { dropAnimation, leftAnimation, rightAnimation } from "@/lib/utils";

export default function HomePage() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });

  return (
    <main className="h-auto w-full">
      <section className="relative flex h-[35rem] w-full justify-center">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="absolute z-10 h-full w-full bg-black/40"></div>
        <div className="z-20 mt-16 w-3/4 p-2 text-white md:w-1/2">
          <h1 className="text-center text-4xl font-black md:text-6xl">
            Welcome to <br /> Single Stop Care Home
          </h1>
          <h2 className="my-2 text-center text-lg font-bold md:text-3xl">
            Creating a Revolution in Parental Healthcare
          </h2>
          <p className="text-center text-sm tracking-wider md:text-base">
            At Single Stop Care Home, we lead the forefront in offering
            exceptional general home care across UK. Our expert team of
            psychiatrists is passionately committed to enhancing the mental
            well-being of individuals across all age groups and stages of life.
          </p>
          <Link href="/about-us" className="my-4 flex w-full justify-center">
            <Button className="h-12 w-1/2">Learn More</Button>
          </Link>
        </div>
      </section>
      <section className="flex h-auto w-full flex-col py-4 md:h-[30rem] md:flex-row">
        <motion.div
          ref={ref7}
          variants={leftAnimation}
          initial="hidden"
          animate={inView7 ? "show" : "hidden"}
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
        <motion.div
          ref={ref1}
          variants={rightAnimation}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
          className="grid h-auto w-full p-4 md:h-full"
        >
          <h1 className="text-4xl font-bold text-neutral-800 md:text-6xl">
            Discover The <span className="text-primary_blue">Single Stop</span>{" "}
            Approach
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Navigating the labyrinth of mental health can be daunting. But, with
            Single Stop Care Home, you can expect care that&apos;s not only
            professional but also peace — a warm and friendly approach that goes
            above and beyond traditional clinical interactions.
          </p>
          <p className="text-neutral-600">
            We recognize that mental healthcare is a deeply personal experience,
            and we&apos;re committed to providing you with the highest level of
            service. Our goal is to build lasting relationships with our
            patients by creating a comfortable environment where they can feel
            at ease discussing their concerns.
          </p>
        </motion.div>
      </section>
      <section className="h-auto w-full bg-gray-200 py-4">
        <motion.h1
          ref={ref4}
          variants={dropAnimation}
          initial="hidden"
          animate={inView4 ? "show" : "hidden"}
          className="my-4 text-center text-4xl font-bold text-primary_blue md:text-6xl"
        >
          Main Services
        </motion.h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-primary" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="h-1 w-32 bg-primary" />
        </div>
        <div className="flex h-[30rem] w-full gap-1 p-1 md:h-[40rem] md:gap-6 md:p-6">
          <motion.div
            ref={ref2}
            variants={leftAnimation}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            className="flex-1 border border-primary_blue shadow-md shadow-primary_blue"
          >
            <div className="relative h-1/2 w-full">
              <Image
                src={"/image2.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-1/2 w-full bg-white p-1">
              <h1 className="text-center font-bold text-primary_blue md:my-2 md:text-3xl">
                Fostering Wellness with General Psychiatry
              </h1>
              <p className="text-center text-xs text-neutral-600 md:text-xl">
                Our principal focus lies in delivering top-tier general
                psychiatry services. Our experienced psychiatrists are adept at
                diagnosing, treating, and managing various mental health
                disorders, offering therapeutic sessions that cater to your
                specific needs.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            variants={rightAnimation}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            className="flex-1 border border-primary_blue shadow-md shadow-primary_blue"
          >
            <div className="relative h-1/2 w-full">
              <Image
                src={"/image1.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-1/2 w-full bg-white p-1">
              <h1 className="text-center font-bold text-primary_blue md:my-2 md:text-3xl">
                Medication Management for Good Health
              </h1>
              <p className="text-center text-xs text-neutral-600 md:text-xl">
                Effective medication management is key to successful treatment
                outcomes in psychiatry.We review your prescription regularly and
                adjust dosages as necessary, reducing potential risks and
                maximizing benefits to your mental well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="h-auto w-full p-4">
        <motion.h1
          ref={ref5}
          variants={dropAnimation}
          initial="hidden"
          animate={inView5 ? "show" : "hidden"}
          className="text-center text-4xl font-bold text-primary_blue md:text-6xl"
        >
          Additional Services
        </motion.h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-primary" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="h-1 w-32 bg-primary" />
        </div>
        <div className="flex h-auto w-full flex-col md:flex-row md:gap-8">
          <motion.div
            ref={ref8}
            variants={leftAnimation}
            initial="hidden"
            animate={inView8 ? "show" : "hidden"}
            className="flex h-[35rem] w-full flex-col"
          >
            <div className="relative h-full w-full">
              <Image
                src={"/image4.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-[30rem] w-full place-content-center gap-4 p-2">
              <h1 className="text-3xl font-bold text-primary_blue md:my-2">
                On-Site Nursing Home Psychiatry
              </h1>
              <p className="text-neutral-600">
                Our on-site nursing home psychiatry service stems from our
                commitment to providing comprehensive and personalized mental
                healthcare. Our expert psychiatrists collaborate closely with
                facility staff to ensure the well-being of seniors, providing
                them with on-site evaluations, personalized treatment plans,
                medication management, and therapeutic sessions.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            variants={rightAnimation}
            initial="hidden"
            animate={inView3 ? "show" : "hidden"}
            className="flex h-[35rem] w-full flex-col"
          >
            <div className="relative h-full w-full">
              <Image
                src={"/image5.jpg"}
                fill
                alt="hold-hands"
                className="object-cover"
              />
            </div>
            <div className="grid h-[30rem] w-full place-content-center gap-4 p-2">
              <h1 className="text-3xl font-bold text-primary_blue md:my-2">
                Telehealth Psychiatry Services
              </h1>
              <p className="text-neutral-600">
                Our telehealth psychiatry services demonstrate our dedication to
                making mental healthcare accessible, confidential, and
                convenient. This service includes detailed virtual evaluations,
                development of tailored treatment plans, strategic medication
                management, and therapeutic sessions conducted in a secure,
                online environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="h-auto w-full bg-primary_blue p-4 text-white">
        <motion.p
          ref={ref6}
          variants={dropAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="my-3 text-center text-3xl font-bold md:text-4xl"
        >
          Turn to Single Stop
        </motion.p>
        <motion.h1
          ref={ref6}
          variants={dropAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="my-3 text-center text-4xl font-bold md:text-6xl"
        >
          The Future of Care Home
        </motion.h1>
        <motion.p
          ref={ref6}
          variants={dropAnimation}
          initial="hidden"
          animate={inView6 ? "show" : "hidden"}
          className="my-3 text-center text-xl font-bold"
        >
          At Single Stop Care Home we&apos;ve embraced this innovative
          healthcare
          <br />
          approach to deliver convenient, flexible, and accessible psychiatric
          care.
        </motion.p>
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
