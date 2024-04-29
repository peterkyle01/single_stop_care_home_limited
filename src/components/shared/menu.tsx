"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger>
        <TiThMenuOutline size={30} color="#0369a1" />
      </SheetTrigger>
      <SheetContent className="bg-primary_blue">
        <SheetHeader>
          <SheetTitle className="my-5 flex items-center justify-between text-4xl text-white">
            Menu
          </SheetTitle>
          <SheetDescription>
            <ul className="flex flex-1 flex-col items-start justify-evenly gap-6 text-lg">
              <SheetClose asChild>
                <Link href={"/"}>
                  <li className="text-md font-bold text-white">Home</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/about-us"}>
                  <li className="text-md font-bold text-white">About</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/psychiatry-services"}>
                  <li className="text-md font-bold text-white">
                    {" "}
                    Psychiatry Services
                  </li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/mental-healthcare-services"}>
                  <li className="text-md font-bold text-white">
                    {" "}
                    Mental Healthcare Services
                  </li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/faqs"}>
                  <li className="text-md font-bold text-white"> FAQs</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/contact-us"}>
                  <li className="text-md font-bold text-white"> Contact Us</li>
                </Link>
              </SheetClose>
            </ul>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="relative my-10">
          <Image src={"/logo.jpg"} width={300} height={200} alt="logo" />
        </SheetFooter>
        <Link
          href={"tel:469-36PHYZI (77924)"}
          className="flex my-4 flex-1 items-center justify-center text-white"
        >
          <FaPhone className="mr-3" />
          tel:469-36PHYZI (77924)
        </Link>
        <Link
          className="flex flex-1 items-center justify-center text-white"
          href={"mailto:singlestropcarehome.co.uk"}
        >
          <MdOutlineMailOutline className="mr-2" /> singlestropcarehome.co.uk
        </Link>
      </SheetContent>
    </Sheet>
  );
}
