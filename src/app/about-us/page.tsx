import Image from "next/image";

export default function AboutPage() {
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
        <h1 className="z-20 text-6xl font-black text-white">About</h1>
      </section>
    </main>
  );
}
