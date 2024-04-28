"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftAnimation, rightAnimation } from "@/lib/utils";

export default function ContactUsPage() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const variants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
  };
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
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="z-20 text-6xl font-black text-white"
        >
          Contact Us
        </motion.h1>
      </section>
      <section className="flex h-auto w-full flex-col md:h-[45rem] md:flex-row">
        <motion.div
          ref={ref}
          variants={leftAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="h-full w-full p-4 md:w-1/4"
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="flex h-20 w-full items-center justify-center gap-5">
            <hr className="h-1 w-32 bg-primary" />
            <FaHeartbeat className="text-4xl" color="0369a1" />
            <hr className="h-1 w-32 bg-primary" />
          </div>
          <p>
            We are here to assist you. Please feel free to reach out to us for
            any inquiries or to schedule an appointment.
          </p>
          <h1 className="my-3 text-2xl">Contact Information:</h1>
          <p>Phone: 469-36PHYZI (77924)</p>
          <p>Email: singlestropcarehome.co.uk</p>
          <h1 className="my-3 text-2xl">Office Address:</h1>
          <p>Single Top Carehome Ltd 75 White Chaple Road</p>
          <h1 className="my-3 text-2xl">Office Address:</h1>
          <p>
            Monday-Friday: 10AM - 10PM
            <br />
            Saturday: 10AM - 10PM
            <br />
            Sunday: Closed
          </p>
          <p className="my-6">
            Thank you for considering our psychiatry services. We look forward
            to hearing from you and providing the support you need.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={rightAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid h-full w-full gap-3 p-4 md:w-3/4"
        >
          <p className="text-center text-lg font-bold">
            Thank you for considering our psychiatry services. We look forward
            to hearing from you and providing the support you need.
          </p>
          <div className="grow px-10 shadow-primary_blue">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">First Name:</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Last Name:</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Phone number:</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Message:</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Send
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
