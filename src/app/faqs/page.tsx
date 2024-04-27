import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";

export default function FAQSPage() {
  return (
    <main className="h-[100vh] w-full">
      <section className="relative flex h-80 w-full items-center justify-center bg-red-700">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="bg-primary_blue/30 absolute z-10 h-full w-full"></div>
        <h1 className="z-20 text-6xl font-black text-white">FAQs</h1>
      </section>
      <section className="bg-primary_blue h-auto w-full p-4 text-white">
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
