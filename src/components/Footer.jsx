import logo from "./../assets/logo.png";
import { Link } from "wouter";
import fb from "./../assets/Footer/fb.png";
import insta from "./../assets/Footer/insta.png";
import yt from "./../assets/Footer/yt.png";

import call from "./../assets/Footer/call.png";
import email from "./../assets/Footer/email.png";
import location from "./../assets/Footer/location.png";

function Footer() {
  return (
    <footer className="h-fit border-t-[1px] bg-no-repeat bg-center font-normal bg-contain px-12 max-md:px-6 max-sm:px-3 text-lg max-lg:text-base max-sm:pt-3 max-md:text-sm">
      <div className="flex w-full gap-3 py-3 h-3/4 max-md:flex-col max-md:h-fit">
        <div className="flex flex-col justify-between md:w-2/3 max-sm:h-fit max-sm:py-3">
          <div className="flex items-center justify-center gap-6 h-fit max-md:h-fit max-md:flex-col max-sm:gap-3 max-md:pb-3">
            <img src={logo} alt="logo" className="h-[100px] sm:h-[120px]"/>
            <p className="text-justify">
              We have over 22 years of experience in building and home
              constructions, planning, designing, landscaping and all kinds of
              civil engineering services.
            </p>
          </div>
          <ul className="flex w-full gap-3 h-fit justify-evenly max-md:justify-between max-sm:flex-col">
            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/aboutus">About Us</Link>
            </li>

            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-sm hover:text-[#407CE0]">
              <Link href="/designs">Designs</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-end justify-between md:w-1/3">
          <div className="flex items-center w-full pb-3">
            <ul className="flex flex-col justify-center w-full h-full gap-3">
              <li className="flex items-center gap-6">
                <img src={call} alt="call" />
                <p className="text-sm ">+94 812 213 613 / +94 777 860 950</p>
              </li>
              <li className="flex items-center gap-6">
                <img src={email} alt="email" />
                <p className="text-sm ">info@ncihomes.com</p>
              </li>
              <li className="flex items-center gap-6">
                <img src={location} alt="location" />
                <p className="text-sm ">
                  {" "}
                  NCI BUILDING, No. 381 A, Katugastota Road, Kandy
                </p>
              </li>
            </ul>
          </div>
          <ul className="flex justify-start w-full gap-6 max-md:pt-3 max-md:justify-center max-sm:gap-3">
            <li className="flex items-center gap-6 transition-all hover:scale-90">
              <a href="https://www.facebook.com/">
                <img src={fb} alt="fb-icon" />
              </a>
            </li>
            <li className="flex items-center gap-6 transition-all hover:scale-90">
              <a href="https://www.instagram.com/">
                <img src={insta} alt="insta-icon" />
              </a>
            </li>
            <li className="flex items-center gap-6 transition-all hover:scale-90">
              <a href="https://www.youtube.com">
                <img src={yt} alt="yt-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center py-3 tracking-widest text-center border-t-2 h-1/4 border-t-black optima">
        <p>
          2024 © All Rights Reserved | Designed & Developed by Silicon Radon
          Networks (Pvt) Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
