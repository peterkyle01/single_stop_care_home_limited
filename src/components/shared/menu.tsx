"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger>
        <TiThMenuOutline size={30} color="#0369a1" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="my-10 flex items-center justify-between">
            Menu
          </SheetTitle>
          <SheetDescription>
            <ul className="flex flex-1 flex-col items-start justify-evenly gap-6 text-lg">
              <SheetClose asChild>
                <Link href={"/"}>
                  <li className="text-md font-bold">Home</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/about"}>
                  <li className="text-md font-bold">About</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/psychiatry-services"}>
                  <li className="text-md font-bold"> Psychiatry Services</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/mental-healthcare-services"}>
                  <li className="text-md font-bold">
                    {" "}
                    Mental Healthcare Services
                  </li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/faqs"}>
                  <li className="text-md font-bold"> FAQs</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/contact-us"}>
                  <li className="text-md font-bold"> Contact Us</li>
                </Link>
              </SheetClose>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
