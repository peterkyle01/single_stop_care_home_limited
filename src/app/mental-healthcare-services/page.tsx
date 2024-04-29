"use client"
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { upAnimation } from "@/lib/utils";


export default function MentalHealthcareServicesPage() {
  const { ref, inView } = useInView({ triggerOnce: true });

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
          ref={ref}
          variants={upAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="z-20 text-6xl font-black text-white"
        >
          Mental Healthcare Services
        </motion.h1>
      </section>
      <section className="h-auto w-full p-4">
        <p className="text-2xl text-primary font-bold">Our Services</p>
        <h1 className="text-4xl text-primary_blue md:text-6xl">
          Mental Healthcare Services
        </h1>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-primary" />
          <FaHeartbeat className="text-4xl" color="0369a1" />
          <hr className="h-1 w-32 bg-primary" />
        </div>
        <p>
          At Stop Shop Care Home, we are committed to providing comprehensive
          mental healthcare services to meet the diverse needs of our patients
          throughout New York. In addition to our core services of Nursing Home
          Psychiatry and Telehealth Psychiatry, we offer the following
          specialized services:
        </p>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            1. Child and Adolescent Psychiatry
          </h1>
          <p className="my-2">
            Our child and adolescent psychiatry services are designed to address
            the unique mental health challenges faced by children and teenagers.
            Our experienced team of psychiatrists provides expert assessment,
            diagnosis, and treatment for a range of conditions including ADHD,
            anxiety, depression, behavioral disorders, and more. We work closely
            with parents, caregivers, and schools to ensure a holistic approach
            to care.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            2. Mood and Anxiety Disorders
          </h1>
          <p className="my-2">
            We offer specialized services for individuals struggling with mood
            disorders, such as depression and bipolar disorder, as well as
            anxiety disorders such as generalized anxiety disorder, panic
            disorder, and social anxiety disorder. Our psychiatrists provide
            comprehensive evaluations, personalized treatment plans, medication
            management, and therapy to help individuals effectively manage their
            symptoms and improve their overall well-being.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            3. Substance Abuse and Addiction{" "}
          </h1>
          <p className="my-2">
            Our substance abuse and addiction services are designed to support
            individuals on their journey to recovery. Our psychiatrists provide
            comprehensive assessments, personalized treatment plans, and ongoing
            support for substance use disorders, including alcohol, drug, and
            prescription medication addiction. We combine evidence-based
            approaches with compassionate care to address the complex challenges
            associated with addiction. to care.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            4. Geriatric Psychiatry{" "}
          </h1>
          <p className="my-2">
            In addition to our nursing home psychiatry services, we offer
            specialized care for elderly individuals who may not reside in
            nursing homes. Our geriatric psychiatry services focus on addressing
            the mental health needs of seniors, including cognitive disorders,
            depression, anxiety, and memory concerns. We provide comprehensive
            evaluations, medication management, therapy, and support to enhance
            the quality of life for our elderly patients.
          </p>
        </div>
        <div className="my-6 h-auto w-full">
          <h1 className="text-3xl font-bold text-primary_blue">
            5. PTSD and Trauma{" "}
          </h1>
          <p className="my-2">
            Our team has expertise in working with individuals who have
            experienced trauma or are struggling with post-traumatic stress
            disorder (PTSD). We offer a range of evidence-based treatments,
            including trauma-focused therapy, cognitive-behavioral therapy, and
            eye movement desensitization and reprocessing (EMDR). Our goal is to
            provide a safe and supportive environment for individuals to heal
            and regain control of their lives.
          </p>
        </div>
      </section>
    </main>
  );
}
