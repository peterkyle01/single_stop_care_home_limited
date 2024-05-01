"use client";
import Image from "next/image";
import { FaWheelchair, FaHeartbeat } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  dropAnimation,
  leftAnimation,
  rightAnimation,
  upAnimation,
} from "@/lib/utils";

export default function Services() {
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
          src={"/hero.webp"}
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
          Services
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
            Emergency Medical Alert Systems
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Emergency medical alert systems are essential tools for the elderly,
            providing a lifeline in case of emergencies such as falls or medical
            crises. These systems are accessible through wearable devices like
            pendants or wristbands, which are often water-resistant and can be
            worn at all times, ensuring help is just a button press away.
            Monitored 24/7 by professionals, these systems can dispatch
            emergency services when activated. Some are equipped with advanced
            features like automatic fall detection, which can call for help
            without manual intervention if a fall is detected. 
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
            Personal Care Assistance
          </h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />{" "}
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>

          <p className="my-2 text-neutral-600">
            Personal Care Assistance (PCA) for the elderly is a comprehensive
            service that caters to the individual needs of seniors, helping them
            with various activities of daily living to maintain their
            independence and dignity. This service encompasses a range of tasks,
            including assistance with bathing, dressing, grooming, and other
            personal hygiene needs, which can become challenging for some
            seniors as they age. PCA also extends to help with mobility, aiding
            individuals in moving around their home safely, and may involve
            transferring them from bed to wheelchair or assisting with walking.
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
      <section className="h-auto w-full p-4">
        <p>
          At Stop Shop Care Home, we are committed to providing comprehensive
          mental healthcare services to meet the diverse needs of our patients
          throughout New York. In addition to our core services of Nursing Home
          Psychiatry and Telehealth Psychiatry, we offer the following
          specialized services:
        </p>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            1. Home Health Care Services
          </h1>
          <p className="my-2">
            These services encompass various aspects of health care for older
            adults living at home. They include medication management, wound
            care, medical equipment support, physical therapy, in-home nursing
            care for recovery from surgery or illness, and managing chronic
            conditions such as diabetes. Providers can come for a few hours each
            day or stay 24/7.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            2. Help with Everyday Activities
          </h1>
          <p className="my-2">
            Elderly individuals often need assistance with daily chores and
            tasks. Services in this category cover light housekeeping (cleaning
            and laundry), meal preparation or delivery, assistance with eating,
            personal care (bathing, dressing, walking), shopping, errands, and
            companionship. Social interaction is crucial for their well-being.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            3. Assisted Living Services
          </h1>
          <p className="my-2">
            Assisted living facilities offer a range of services, including one
            to three meals a day, medication monitoring, personal care
            (dressing, bathing), housekeeping, laundry, 24-hour emergency care,
            and social and recreational activities. These services aim to
            enhance the quality of life for seniors.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            4. Nutrition, Food, and Meal Services
          </h1>
          <p className="my-2">
            Ensuring proper nutrition is essential for seniors. Some home care
            services provide meal planning, preparation, and delivery to meet
            dietary needs. These services contribute to overall health and
            well-being.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            5. Transportation Services
          </h1>
          <p className="my-2">
            Many elderly individuals require transportation for medical
            appointments, grocery shopping, or social outings. Some home care
            providers offer transportation assistance, ensuring seniors can
            access essential services and maintain social connections.
          </p>
        </div>
      </section>
      <section className="h-auto w-full bg-primary_blue p-4 text-white">
        <p className="my-3 text-center text-3xl font-bold md:text-4xl">
          Benefits of A Care Home
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
