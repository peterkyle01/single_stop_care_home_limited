import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="h-auto w-full">
      <section className="relative flex h-80 w-full items-center justify-center bg-red-700">
        <Image
          src={"/hold-hands.jpg"}
          fill
          alt="hold-hands"
          className="object-cover"
        />
        <div className="bg-primary_blue/30 absolute z-10 h-full w-full"></div>
        <h1 className="z-20 text-6xl font-black text-white">Contact Us</h1>
      </section>
      <section className="flex h-[35rem] w-full">
        <div className="h-full w-1/4">
          <h1>Contact Us</h1>
        </div>
        <div className="h-full w-3/4">

        </div>
      </section>
      
    </main>
  );
}
