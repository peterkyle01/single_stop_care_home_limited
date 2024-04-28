import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" h-auto w-full bg-secondary_blue">
      <div className="flex h-auto w-full flex-col text-white md:h-72 md:flex-row">
        <div className="grid h-72 w-full p-4">
          <p className="text-lg font-bold">Quick Links</p>
          <Separator className="w-1/2" />
          <ul className="grow">
            <Link href={"/"}>
              <li className="text-md hover:text-pm_blue font-bold">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="text-md hover:text-pm_blue font-bold">About Us</li>
            </Link>
            <Link href={"/about"}>
              <li className="text-md hover:text-pm_blue font-bold">
                Psychiatry Services
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="text-md hover:text-pm_blue font-bold">
                Mental Healthcare Services
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="text-md hover:text-pm_blue font-bold">FAQs</li>
            </Link>
            <Link href={"/about"}>
              <li className="text-md hover:text-pm_blue font-bold">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="grid h-72 w-full p-4">
          <p className="text-lg font-bold">Contact Info</p>
          <Separator className="w-1/2" />
          <div className="h-auto w-full">
            <p className="text-sm">Single Top Carehome Ltd</p>
            <p className="text-sm">75 White Chaple Road</p>
            <p className="text-sm">London, E1 1DU</p>
          </div>
          <div className="flex h-auto w-full gap-3">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaPinterest size={30} />
            <FaYoutube size={30} />
            <FaSnapchat size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div className="h-72 w-full p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.717534416318!2d-0.06543062432819607!3d51.51839797181585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccc5d9a52b5%3A0x1d9e8daa94bf42f9!2sWhitechapel%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2ske!4v1714268387931!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-white">Copyright ©2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}
