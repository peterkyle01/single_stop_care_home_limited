import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Menu from "./menu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 h-auto w-full md:h-40">
      <div className="flex h-auto w-full flex-col bg-primary_blue md:h-20 md:flex-row">
        <Link
          className="flex flex-1 items-center justify-center text-white"
          href={"mailto:singlestropcarehome.co.uk"}
        >
          <MdOutlineMailOutline className="mr-2" /> singlestropcarehome.co.uk
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <Link href="/contact-us">
            <Button className="my-2 md:h-12">Schedule an Appointment</Button>
          </Link>
        </div>
        <Link
          href={"tel:020 7092 9996"}
          className="flex flex-1 items-center justify-center text-white"
        >
          <FaPhone className="mr-3" /> 020 7092 9996
        </Link>
      </div>
      <div className="flex h-20 w-full bg-white">
        <div className="flex flex-1 items-center justify-center">
          <Link href={"/"}>
            <Image src={"/logo.jpg"} height={100} width={180} alt="logo" />{" "}
          </Link>
        </div>
        <ul className="text-md hidden flex-1 items-center justify-evenly md:flex">
          <Link href={"/"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              Home
            </li>
          </Link>
          <Link href={"/about-us"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              About Us
            </li>
          </Link>
          <Link href={"/services"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              Services
            </li>
          </Link>
          <Link href={"/staff-supply"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              Staff Supply
            </li>
          </Link>
          <Link href={"/faqs"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              FAQs
            </li>
          </Link>
          <Link href={"/contact-us"}>
            <li className="text-md hover:text-pm_blue font-bold hover:text-primary">
              Contact Us
            </li>
          </Link>
        </ul>
        <i className="mx-2 flex h-20 items-center md:hidden">
          <Menu />
        </i>
      </div>
      <Separator className="bg-primary_blue" />
    </nav>
  );
}
