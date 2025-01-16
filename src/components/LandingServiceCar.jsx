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
                <p className="uppercase max-sm:hidden">Floor area </p>
                <p className="uppercase max-sm:hidden">counting</p>
                <p className="hidden uppercase max-sm:block">
                  Floor area counting
                </p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/special-loans">
                <p className="uppercase max-sm:hidden">Provides special</p>
                <p className="uppercase max-sm:hidden">loan facilities</p>
                <p className="hidden uppercase max-sm:block">
                  Provides special loan facilities
                </p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/planning-approvals">
                <p className="uppercase max-sm:hidden">Planning </p>
                <p className="uppercase max-sm:hidden">approvals</p>
                <p className="hidden uppercase max-sm:block">
                  Planning approvals
                </p>
              </Link>
            </li>
            <li className="h-1/2 bg-[#aaa] w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
            <li className="max-sm:flex max-sm:gap-1">
              <Link href="/services/landscaping">
                <p className="uppercase max-sm:hidden">Landscaping with </p>
                <p className="uppercase max-sm:hidden">new and old designs</p>
                <p className="hidden uppercase max-sm:block">
                  Landscaping with new and old designs
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LSCarousel;
