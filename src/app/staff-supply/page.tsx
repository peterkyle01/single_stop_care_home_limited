"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { upAnimation } from "@/lib/utils";

export default function StaffSupply() {
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
          Staff Supply
        </motion.h1>
      </section>
      <section className="h-auto w-full p-2 md:px-20 ">
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            Our Dedicated Team
          </h1>
          <p className="my-2">
            At Single Stop Home Care, we believe that our caregivers are the
            heart of our service. We are proud to supply a team of professionals
            who are not only highly qualified but also deeply committed to
            providing compassionate care to our residents.
          </p>
        </div>
        <h1 className="text-3xl font-bold text-primary_blue">
          Why Choose Our Caregivers?
        </h1>
        <div className="my-6 h-auto w-full">
          <p className="my-2">
            <span className="text-lg font-black text-primary_blue">
              Expertise and Empathy:{" "}
            </span>
            Each member of our team is carefully selected for their expertise in
            elderly care and their innate empathy towards the needs of the
            elderly. We ensure that all our caregivers are certified and
            regularly trained to stay abreast of the latest developments in care
            practices.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <p className="my-2">
            <span className="text-lg font-black text-primary_blue">
              Reliable Supply Management:
            </span>
            We understand that a well-stocked facility is crucial for the smooth
            operation of home care services. Our caregivers are equipped with an
            efficient supply management system that ensures all necessary items,
            from medical supplies to daily necessities, are readily available
            for our residents.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <p className="my-2">
            <span className="text-lg font-black text-primary_blue">
              Flexible and Responsive:
            </span>
            Our staff scheduling is designed to be flexible and responsive to
            the changing needs of our residents. We provide round-the-clock
            care, with caregivers available to step in at a moment&apos;s
            notice, ensuring that there is always someone there when needed.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <p className="my-2">
            <span className="text-lg font-black text-primary_blue">
              Building Trust:
            </span>
            Trust is the foundation of our relationship with residents and their
            families. Our caregivers are not just staff; they are part of the
            Single Stop family. They work tirelessly to build and maintain a
            bond of trust, providing peace of mind that your loved ones are in
            good hands.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <p className="my-2">
            <span className="text-lg font-black text-primary_blue">
              Continuous Improvement
            </span>
            Feedback from residents and families is invaluable to us. It helps
            us to continuously improve and provide the best care possible. Our
            caregivers are open to learning from experiences and adapting to
            better meet the needs of those we serve.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            Join Our Team
          </h1>
          <p className="my-2">
            Are you passionate about making a difference in the lives of the
            elderly? Do you have the skills and compassion needed to provide
            top-notch care? If so, we would love to hear from you. Visit our
            careers page to learn more about opportunities to join the Single
            Stop Home Care family.
          </p>
        </div>
      </section>
    </main>
  );
}
