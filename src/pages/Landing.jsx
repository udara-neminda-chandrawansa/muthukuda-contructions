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
        <div className="absolute bottom-0 h-full inset-0 bg-gradient-to-br from-[#000000D4] to-[#000000D4]"></div>
        {/*content*/}
        <div className="z-10 flex flex-col items-start justify-center w-2/3 gap-6 p-12 text-white max-sm:w-full max-md:p-6">
          <h1 className="text-3xl max-sm:text-2xl">Build Your Dream With Us</h1>
          <p className="text-justify max-sm:text-sm">
            Whatever good things we build end up building us
          </p>
          <p className="text-justify max-sm:text-sm">
            At NCI Homes, we transform your dreams into reality. From concept to
            completion, our expert team delivers high-quality construction
            solutions tailored to your vision. Build your future with
            confidence—build with NCI Homes."
          </p>
          <h1 className="text-6xl poltawski motion-preset-slide-right max-sm:text-4xl">
            NCI HOMES
          </h1>
        </div>
        {/*banner bottom*/}
        <div className="absolute bottom-0 z-10 w-full px-6 text-sm max-md:text-xs">
          {/*service carousel*/}
          <div className="w-full h-[15dvh] max-sm:h-fit bg-[#407CE0]">
            <LSCarousel></LSCarousel>
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
      </div>
      {/*contact details (hidden)*/}
      <div className="relative h-[10dvh] hidden justify-center bg-[#F1F1F1] max-md:p-6 max-md:h-fit max-sm:p-3">
        <div className="md:h-[20dvh] z-20 flex w-full text-sm bg-white rounded-lg md:-translate-y-1/2 md:w-5/6 md:absolute max-md:flex-col">
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={call} alt="call" />
            <p>+94 812 213 613</p>
            <p>+94 777 860 950</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={email} alt="call" />
            <p>ifor@ncihomes.com</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={location} alt="call" />
            <p>NCI BUILDING</p>
            <p className="text-center">No. 381 A, Katugastota Road, Kandy</p>
          </div>
        </div>
      </div>
      {/*who we are*/}
      <div className="bg-[#F1F1F1] px-12 py-6 max-md:px-6 max-sm:p-3 flex flex-col items-center gap-3">
        <h1 className="text-5xl font-semibold text-center poltawski max-md:text-3xl">
          Who We Are
        </h1>
        <p className="text-justify sm:text-center max-sm:text-sm">
          NCI Homes Private Limited is a well-established Civil Engineering and
          Constructio company located in Kandy-Sri Lanka. In last two decades we
          have earned its reputation as a creative and innovative construction
          institution that offers high quality construction services in Sri
          Lanka
        </p>
        <h1 className="text-2xl text-[#407CE0] font-semibold text-center poltawski">
          Our Services
        </h1>
        <p className="text-justify sm:text-center max-sm:text-sm">
          We treat our customers with the best we have. Therefore we provide
          them a quality customer service which would saticfy their
          expectations. We offers many facilities as follows:
        </p>
        {/*service card grid*/}
        <div className="grid grid-cols-4 gap-6 w-fit max-sm:w-full place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServiceCard
            text={"Floor area counting"}
            url={"floor-area-counting"}
            img={card_1}
          ></ServiceCard>

          <ServiceCard
            text={"Provides special loan facilities"}
            url={"special-loans"}
            img={card_2}
          ></ServiceCard>

          <ServiceCard
            text={"Planning approvals"}
            url={"planning-approvals"}
            img={card_3}
          ></ServiceCard>

          <ServiceCard
            text={"Landscaping with new and old designs"}
            url={"landscaping"}
            img={card_4}
          ></ServiceCard>
        </div>
        <div className="flex justify-center items-center h-[5dvh] w-full">
          <Link href="/services">
            <p className="underline underline-offset-4">View All</p>
          </Link>
        </div>
      </div>
      {/*why choose us*/}
      <div className="flex gap-6 px-12 py-6 max-md:px-6 max-sm:p-3 max-md:flex-col">
        <div className="md:w-1/3">
          <img
            src={choose_us_img}
            alt="choose_us_img"
            className="object-cover w-full h-full rounded-lg max-md:max-h-[300px] max-md:object-contain max-md:object-top"
          />
        </div>
        <div className="flex flex-col gap-6 md:w-2/3">
          <h1 className="text-5xl font-semibold md:text-start poltawski max-md:text-3xl max-md:text-center">
            Why Choose Us
          </h1>
          <h3 className="text-xl font-medium">Competitive rates</h3>
          <p className="text-justify max-sm:text-sm">
            We offer you the most competitive rates of the current market. Brand
            new houses are available from 3.5 million onwards.
          </p>
          <h3 className="text-xl font-medium">
            High quality construction services and standards
          </h3>
          <p className="text-justify max-sm:text-sm">
            We use quality materials and manpower. Unique, innovative
            architectural designs. Quality customer service.
          </p>
          <h3 className="text-xl font-medium">
            Loan Facilities & Insurance facilities
          </h3>
          <p className="text-justify max-sm:text-sm">
            We would help our customers to obtain a housing loan from a
            recognized finance institution. Free insurance facilities from
            recognized insurance company.
          </p>
        </div>
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
          At NCI Homes, we take pride in turning dreams into reality. Explore
          our portfolio of recently completed projects that showcase our
          dedication to quality, innovation, and excellence in construction.
          From modern homes to commercial spaces, each project reflects our
          commitment to delivering exceptional craftsmanship and tailored
          solutions to meet our clients' unique needs.
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
          At NCI Homes, we believe in the power of collaboration. We are proud
          to work alongside trusted partners who share our vision for quality
          and excellence. Together, we bring innovative solutions, premium
          materials, and expert services to every project, ensuring lasting
          success and satisfaction for our clients.
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
          At NCI Homes, progress is always in motion. Discover our ongoing
          projects that showcase our commitment to innovation, quality, and
          meticulous attention to detail. From residential developments to
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
