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
    <footer className=" bg-secondary_blue h-auto w-full">
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
            <p className="text-sm">970 N Broadway STE 201, Yonkers, NY 10701</p>
            <p className="text-sm">info@cordialhealthpc.com</p>
            <p className="text-sm"> 347-66PSYCH (77924)</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.830866357652!2d36.778592273441035!3d-1.27476009871311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19fd9b65c0ef%3A0xbac0db1b9cbf73e!2sArchives%20Tower%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1714247392724!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-white">Copyright ©2023 All Rights Reserved</p>
      </div>
    </footer>
  );
}
