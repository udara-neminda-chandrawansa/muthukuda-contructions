import logo from "./../assets/logo.png";
import { Link } from "wouter";
import fb from "./../assets/Footer/fb.png";
import insta from "./../assets/Footer/insta.png";

import call from "./../assets/Footer/call.png";
import email from "./../assets/Footer/email.png";
import location from "./../assets/Footer/location.png";

function Footer() {
  return (
    <footer className="h-fit bg-[#060097] text-white border-t-[1px] font-normal px-12 max-md:px-6 max-sm:px-3 text-lg max-lg:text-base max-sm:pt-0 max-md:text-sm">
      <div className="flex w-full gap-3 py-3 max-md:py-0 h-3/4 max-md:flex-col max-md:h-fit">
        <div className="flex flex-col justify-between md:w-2/3 max-sm:h-fit max-sm:py-0">
          <div className="flex items-center justify-center gap-6 h-fit max-md:h-fit max-md:flex-col max-sm:gap-3 max-md:pb-3">
            <img src={logo} alt="logo" className="h-[100px] sm:h-[120px]"/>
            <p className="text-sm text-justify">
            Muthukuda Engineering and Construction (Pvt) ltd is a leading construction company in Sri Lanka and based in Kandy District. We have started our journy in 2018 and since now completed more than 50 successful projects. As a reputed construction company, we used to serve best and quality service to all our clients.
            </p>
          </div>
          <ul className="flex w-full gap-3 pt-3 h-fit justify-evenly max-md:justify-between max-sm:flex-col">
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
          </ul>
        </div>

        <div className="flex flex-col items-end justify-between md:w-1/3">
          <div className="flex items-center w-full pb-3">
            <ul className="flex flex-col justify-center w-full h-full gap-3">
              <li className="flex items-center gap-6">
                <img src={call} alt="call" />
                <p className="text-sm ">+94 713 458 438</p>
              </li>
              <li className="flex items-center gap-6">
                <img src={email} alt="email" />
                <p className="text-sm ">info@muthukudaconstruction.lk / muthukudaconstruction@gmail.com</p>
              </li>
              <li className="flex items-center gap-6">
                <img src={location} alt="location" />
                <p className="text-sm ">
                  {" "}
                  No.629,Halloluwa, Road,Peradaniya
                </p>
              </li>
            </ul>
          </div>
          <ul className="flex justify-end w-full gap-6 max-md:pt-3 max-md:justify-center max-sm:gap-3">
            <li className="flex items-center gap-6 transition-all hover:scale-90">
              <a href="https://www.facebook.com/ASKMuthukudaarachchi">
                <img src={fb} alt="fb-icon" className="w-5 h-5"/>
              </a>
            </li>
            <li className="flex items-center gap-6 transition-all hover:scale-90">
              <a href="https://muthukudaconstruction.lk/?page_id=83#">
                <img src={insta} alt="insta-icon"  className="w-5 h-5"/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center py-3 text-sm tracking-widest text-center border-t-2 h-1/4 border-t-white optima">
        <p>
          2025 © All Rights Reserved | Muthukuda Constructions | Designed & Developed by Silicon Radon
          Networks (Pvt) Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
