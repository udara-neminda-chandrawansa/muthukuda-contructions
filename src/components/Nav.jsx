import logo from "./../assets/logo.png";
import burger from "./../assets/burger.svg";

import NavButton from "./NavButton";

import { Link } from "wouter";

function Nav({ inLanding }) {
  return (
    <div
      className={`w-full h-fit flex justify-center items-center font-thin text-lg z-50 max-xl:justify-between ${
        inLanding ? " absolute top-0 bg-[#060097]" : " bg-black"
      }`}
    >
      {/*normal nav*/}
      <div className="flex justify-between w-full px-10 h-[10dvh] max-xl:hidden">
        {/*right side*/}
        <ul className="flex items-center w-1/3">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center px-3 text-white text-nowrap cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              <img
                src={logo}
                alt="logo-for-nav"
                className="h-[8dvh] object-contain"
              />
            </li>
          </Link>
        </ul>
        {/*left side*/}
        <ul className="flex items-center justify-end w-2/3 h-full">
          <Link
            href="/"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-white text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link
            href="/aboutus"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-white text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link
            href="/services"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-white text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Services
            </li>
          </Link>
          <Link
            href="/projects"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-white text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Projects
            </li>
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-white text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-xl:grid text-white"
        data-coreui-toggle="offcanvas"
        data-coreui-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <img src={burger} alt="burger-icon" className="scale-150" />
      </div>
      {/*logo for small screen nav*/}
      <div className="hidden pr-6 max-xl:block">
        <img
          src={logo}
          alt="logo-for-small-screen"
          className="scale-75 h-[7dvh] rounded-md"
        />
      </div>
      {/*Nav offcanvas for small screens*/}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="justify-end offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-coreui-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="flex flex-col items-center justify-start h-full gap-6 font-medium">
            <Link href="/" className="w-full text-white no-underline">
              <li
                className="flex items-center justify-start w-full pb-3 text-black border-b-2 cursor-pointer text-nowrap max-lg:text-sm"
                data-coreui-dismiss="offcanvas"
              >
                Home
              </li>
            </Link>
            <Link href="/aboutus" className="w-full text-white no-underline">
              <li
                className="flex items-center justify-start w-full pb-3 text-black border-b-2 cursor-pointer text-nowrap max-lg:text-sm"
                data-coreui-dismiss="offcanvas"
              >
                About Us
              </li>
            </Link>
            <Link href="/services" className="w-full text-white no-underline">
              <li
                className="flex items-center justify-start w-full pb-3 text-black border-b-2 cursor-pointer text-nowrap max-lg:text-sm"
                data-coreui-dismiss="offcanvas"
              >
                Services
              </li>
            </Link>
            <Link href="/projects" className="w-full text-white no-underline">
              <li
                className="flex items-center justify-start w-full pb-3 text-black border-b-2 cursor-pointer text-nowrap max-lg:text-sm"
                data-coreui-dismiss="offcanvas"
              >
                Projects
              </li>
            </Link>
            <Link href="/contact" className="w-full text-white no-underline">
              <li
                className="flex items-center justify-start w-full pb-3 text-black border-b-2 cursor-pointer text-nowrap max-lg:text-sm"
                data-coreui-dismiss="offcanvas"
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
