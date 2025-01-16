import React from "react";
import { Link } from "wouter";

const LSCarousel = () => {
  return (
    <div className="relative w-full h-[15dvh] flex items-center justify-center">
      <div className="flex items-center justify-center w-full h-full transition-transform duration-500 ease-in-out">
        <div className="w-full h-full bg-white">
          <ul className="flex items-center h-full px-6 text-center text-black max-sm:px-3 justify-evenly max-sm:flex-col">
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/floor-area-counting">
                <p className="uppercase max-sm:hidden">Residential</p>
                <p className="uppercase max-sm:hidden">Construction</p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/special-loans">
                <p className="uppercase max-sm:hidden">Commercial</p>
                <p className="uppercase max-sm:hidden">Construction</p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/planning-approvals">
                <p className="uppercase max-sm:hidden">Renovations </p>
                <p className="uppercase max-sm:hidden">and Remodeling</p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/landscaping">
                <p className="uppercase max-sm:hidden">Sustainable </p>
                <p className="uppercase max-sm:hidden">Construction</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LSCarousel;
