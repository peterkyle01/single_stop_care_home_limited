"use client";
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { upAnimation } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSPage() {
  const { ref, inView } = useInView({ triggerOnce: true });

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
          ref={ref}
          variants={upAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="z-20 text-6xl font-black text-white"
        >
          FAQs
        </motion.h1>
      </section>
      <section className="h-auto w-full bg-primary_blue p-4 text-white">
        <p className="my-3 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </p>
        <div className="flex h-20 w-full items-center justify-center gap-5">
          <hr className="h-1 w-32 bg-white" />
          <FaHeartbeat className="text-4xl" color="white" />
          <hr className="h-1 w-32 bg-white" />
        </div>
      </section>
      <section className="min-h-[30rem] w-full p-4">
        <Accordion type="single" collapsible className="mx-auto w-3/4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="my-2 text-xl text-primary_blue">
              Who are Single Stop?
            </AccordionTrigger>
            <AccordionContent className="text-md md:text-lg">
              Single Stop Carehome Ltd is a leading domiciliary care company
              based in East part of London, UK. With a focus on providing
              high-quality care services, we strive to enhance the lives of
              individuals in need of support, enabling them to live
              independently and comfortably within their own homes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="my-2 text-xl text-primary_blue">
              What is our mission?
            </AccordionTrigger>
            <AccordionContent className="text-md md:text-lg">
              Our mission is to provide exceptional home-based care services to
              individuals within the comfort and familiarity of their own homes.
              With a strong emphasis on personalized care and support, we are
              dedicated to enhancing the quality of life for our service users
              and enabling them to maintain their independence and dignity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="my-2 text-xl text-primary_blue">
              What is our vision?
            </AccordionTrigger>
            <AccordionContent className="text-md md:text-lg">
              Our vision at Single Stop Carehome Ltd is to be recognized as a
              leading provider of home-based care services in East London. We
              aspire to set the standard for excellence in personalized care,
              fostering independence, dignity, and well-being for our service
              users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="my-2 text-xl text-primary_blue">
              What are our objectives?
            </AccordionTrigger>
            <AccordionContent className="text-md md:text-lg">
              • Expand service offerings: Explore opportunities to expand the
              range of services offered to service users, such as introducing
              new specialized care programmes or partnering with other
              healthcare providers to offer integrated care solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="my-2 text-xl text-primary_blue">
              What are our values?
            </AccordionTrigger>
            <AccordionContent className="text-md md:text-lg">
              •Compassion: We approach every interaction with empathy,
              understanding, and kindness, ensuring our service users feel
              valued, respected, and supported.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
