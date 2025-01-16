import banner from "./../assets/Landing/banner.png";
import call from "./../assets/Landing/call.png";
import email from "./../assets/Landing/email.png";
import location from "./../assets/Landing/location.png";

import choose_us_img from "./../assets/Landing/choose_us_img.png";
import proj_banner from "./../assets/Landing/proj_banner.png";
import partners_banner from "./../assets/Landing/partners_banner.png";

import partner_1 from "./../assets/Partners/1.png";
import partner_2 from "./../assets/Partners/2.png";
import partner_3 from "./../assets/Partners/3.png";
import partner_4 from "./../assets/Partners/4.png";
import partner_5 from "./../assets/Partners/5.png";
import partner_6 from "./../assets/Partners/6.png";
import partner_7 from "./../assets/Partners/7.png";
import partner_8 from "./../assets/Partners/8.png";
import partner_9 from "./../assets/Partners/9.png";
import partner_10 from "./../assets/Partners/10.png";

import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import LSCarousel from "../components/LandingServiceCar";
import { Link } from "wouter";

import card_1 from "./../assets/Services/card_1.png";
import card_2 from "./../assets/Services/card_2.png";
import card_3 from "./../assets/Services/card_3.png";
import card_4 from "./../assets/Services/card_4.png";

import p_card_1 from "./../assets/Projects/card_1.png";
import p_card_2 from "./../assets/Projects/card_2.png";
import p_card_3 from "./../assets/Projects/card_3.png";
import p_card_4 from "./../assets/Projects/card_4.png";
import p_card_5 from "./../assets/Projects/card_5.png";
import p_card_6 from "./../assets/Projects/card_6.png";
import p_card_7 from "./../assets/Projects/card_7.png";
import p_card_8 from "./../assets/Projects/card_8.png";
import p_card_9 from "./../assets/Projects/card_9.png";
import p_card_10 from "./../assets/Projects/card_10.png";
import p_card_11 from "./../assets/Projects/card_11.png";

function Landing() {
  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute inset-0 bottom-0 h-full bg-black opacity-60"></div>
        {/*content*/}
        <div className="z-10 flex flex-col items-start justify-center w-2/3 gap-6 p-12 text-white max-sm:w-full max-md:p-6">
          <h1 className="text-6xl poltawski motion-preset-slide-right max-sm:text-4xl">
            Muthukuda Constructions
          </h1>
          <h1 className="text-3xl max-sm:text-2xl">Your Dream Home</h1>
          <p className="text-justify max-sm:text-sm">
            At Muthukuda Constructions, we transform your dreams into reality.
            From concept to completion, our expert team delivers high-quality
            construction solutions tailored to your vision. Build your future
            with confidence—build with Muthukuda Constructions.
          </p>
        </div>
        {/*banner bottom*/}
        <div className="absolute bottom-0 z-10 w-full px-6 text-sm max-md:text-xs max-sm:hidden">
          {/*service carousel*/}
          <div className="w-full h-[15dvh] max-sm:hidden bg-[#407CE0]">
            <LSCarousel></LSCarousel>
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
      </div>
      {/*welcome*/}
      <div>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:fit lg:items-center lg:px-8">
            <div className="max-w-xl text-center">
              <h1 className="text-3xl font-extrabold text-left text-white sm:text-5xl">
                Welcome To
                <strong className="block font-extrabold text-left text-[#407CE0] ">
                  Muthukuda Construction
                </strong>
              </h1>

              <p className="max-w-lg mt-4 text-justify text-white">
                MUTHUKUDA ENGINEERING & CONSTRUCTION (PVT) LTD is a leading and
                fast growing construction company in Sri Lanka. We are engaged
                in both commercial and residential construction with a mission
                of”Brining your dreamed living space in to the real“. Our
                Services includes Construction, Project Management,
                Architectural Designing, Interior Designing, Structural
                Designing, BOQ, Estimation and council approvals
              </p>
            </div>
          </div>
        </section>
      </div>
      {/*CTA*/}
      <div>
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Build Your Dream Home With Us
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
              WE ENSURE TO GIVE THE BEST QUALITY SERVICE FOR YOUR EXPENDITURE
              </p>

              <div className="flex justify-center gap-6 mt-4 md:mt-8">
              <Link
                  href="#"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Our Projects
                </Link>
                <Link
                  href="#"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <img
            alt=""
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-full h-56 sm:h-full"
          />
        </section>
      </div>
      {/*contact us*/}
      <div className="flex flex-col items-center gap-6 px-12 py-6 max-md:px-6 max-sm:p-3">
        <h1 className="text-2xl text-[#407CE0] font-semibold text-center poltawski">
          Contact Us
        </h1>
        <p className="sm:text-center max-sm:text-justify">
          If you need more information about our services, please do not
          hesitate to contact our representatives. Our team is waiting to
          provide excellent customer service for you.
        </p>
        <button className="rounded-lg bg-[#407CE0] px-6 py-3 text-white hover:scale-90 transition-all">
          Contact Us
        </button>
      </div>
      {/*our latest completed projects*/}
      <div
        className="flex flex-col items-center gap-6 px-12 py-6 text-white bg-fixed bg-center bg-no-repeat bg-cover max-md:px-6 max-sm:p-3"
        style={{ backgroundImage: `url(${proj_banner})` }}
      >
        <h1 className="text-3xl max-md:text-2xl max-sm:text-xl">
          Our Latest Completed Projects
        </h1>
        <p className="max-sm:text-justify sm:text-center">
          At Muthukuda Constructions, we take pride in turning dreams into
          reality. Explore our portfolio of recently completed projects that
          showcase our dedication to quality, innovation, and excellence in
          construction. From modern homes to commercial spaces, each project
          reflects our commitment to delivering exceptional craftsmanship and
          tailored solutions to meet our clients' unique needs.
        </p>
        {/*service card grid*/}
        <div className="grid grid-cols-4 gap-6 w-fit max-sm:w-full place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ProjectCard
            title={"Housing Project"}
            text={"Haragama"}
            url={"haragama-housing-proj"}
            img={p_card_1}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Haragama"}
            url={"haragama-housing-proj-2"}
            img={p_card_2}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Kandy City"}
            url={"kandy-housing-proj"}
            img={p_card_3}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Abathenna"}
            url={"abathenna-housing-proj"}
            img={p_card_4}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Wells Park Site"}
            text={"Kandy"}
            url={"kandy-wells-park"}
            img={p_card_5}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Ranawana"}
            url={"ranawana-housing-proj"}
            img={p_card_6}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Hantana (Site 2)"}
            url={"hantana-2-housing-proj"}
            img={p_card_7}
            bg={"white"}
          ></ProjectCard>
          <ProjectCard
            title={"Housing Project"}
            text={"Katugastota (Site 2)"}
            url={"katugastota-2-housing-proj"}
            img={p_card_8}
            bg={"white"}
          ></ProjectCard>
        </div>
        <div className="flex justify-center items-center h-[5dvh] w-full">
          <Link href="/projects">
            <p className="underline underline-offset-4">View All</p>
          </Link>
        </div>
      </div>
      {/*our partners*/}
      <div
        className="flex flex-col items-center gap-6 px-12 py-6 text-black bg-fixed bg-center bg-no-repeat bg-cover max-md:px-6 max-sm:p-3"
        style={{ backgroundImage: `url(${partners_banner})` }}
      >
        <h1 className="text-3xl text-[#407CE0] font-semibold text-center poltawski">
          Our Partners
        </h1>
        <p className="text-justify sm:text-center max-sm:text-sm">
          At Muthukuda Constructions, we believe in the power of collaboration.
          We are proud to work alongside trusted partners who share our vision
          for quality and excellence. Together, we bring innovative solutions,
          premium materials, and expert services to every project, ensuring
          lasting success and satisfaction for our clients.
        </p>
        <div className="grid grid-cols-5 gap-6 w-fit max-sm:w-full place-items-center max-lg:grid-cols-3 max-sm:grid-cols-2">
          <img src={partner_1} alt="partner-img" />
          <img src={partner_2} alt="partner-img" />
          <img src={partner_3} alt="partner-img" />
          <img src={partner_4} alt="partner-img" />
          <img src={partner_5} alt="partner-img" />
          <img src={partner_6} alt="partner-img" />
          <img src={partner_7} alt="partner-img" />
          <img src={partner_8} alt="partner-img" />
          <img src={partner_9} alt="partner-img" />
          <img src={partner_10} alt="partner-img" />
        </div>
      </div>
      {/*our ongoing projects*/}
      <div className="flex flex-col items-center gap-6 px-12 py-6 max-md:px-6 max-sm:p-3">
        <h1 className="text-3xl max-md:text-2xl max-sm:text-xl">
          Our Ongoing Projects
        </h1>
        <p className="max-sm:text-justify sm:text-center">
          At Muthukuda Constructions, progress is always in motion. Discover our
          ongoing projects that showcase our commitment to innovation, quality,
          and meticulous attention to detail. From residential developments to
          commercial ventures, these projects reflect our dedication to building
          spaces that inspire and endure.
        </p>
        {/*service card grid*/}
        <div className="grid grid-cols-4 gap-6 w-fit max-sm:w-full place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ProjectCard
            title={"Housing Project"}
            text={"Haragama"}
            url={"haragama-housing-proj"}
            img={p_card_1}
            bg={"[#407CE0]"}
          ></ProjectCard>
          <ProjectCard
            title={"Commercial Building"}
            text={"Pallekale"}
            url={"comm-building-pallekele"}
            img={p_card_9}
            bg={"[#407CE0]"}
          ></ProjectCard>
          <ProjectCard
            title={"Hotel Construction Project"}
            text={"Rajapihilla Mawatha"}
            url={"hotel-rajapihilla"}
            img={p_card_10}
            bg={"[#407CE0]"}
          ></ProjectCard>
          <ProjectCard
            title={"Industrial Zone Building Project"}
            text={"Balagolla"}
            url={"iz-balagolla"}
            img={p_card_11}
            bg={"[#407CE0]"}
          ></ProjectCard>
        </div>
        <div className="flex justify-center items-center h-[5dvh] w-full">
          <Link href="/projects">
            <p className="underline underline-offset-4">View All</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
