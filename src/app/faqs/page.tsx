"use client"
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";


export default function FAQSPage() {
   const variants = {
     hidden: { opacity: 0, x: "-100vw" },
     visible: { opacity: 1, x: 0 },
   };
  return (
    <main className="h-[100vh] w-full">
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
    </main>
  );
}
