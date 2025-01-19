import banner from "./../assets/Landing/banner.png";
import contact_img from "../assets/Landing/contact.jpg";
import cta from "../assets/Landing/cta.jpg";

import LSCarousel from "../components/LandingServiceCar";
import { Link } from "wouter";

import card_1 from "./../assets/Services/card_1.png";
import card_2 from "./../assets/Services/card_2.png";
import card_3 from "./../assets/Services/card_3.png";
import card_4 from "./../assets/Services/card_4.png";

import car_1 from "../assets/Landing/car/car_1.jpg";
import car_2 from "../assets/Landing/car/car_2.jpg";
import car_3 from "../assets/Landing/car/car_3.jpg";

import TestimonialSlider from "../components/Testimonials";

function Landing() {
  const blogs = [
    {
      id: 1,
      price: "900,000 LKR Upwards",
      image: card_1,
      title: "Residential Construction",
      content:
        "One of our core specializations is residential construction. We understand that your home is a reflection of your lifestyle and personal taste. Our team works closely with clients to design and build custom homes that exceed their expectations. Whether it’s a contemporary urban dwelling or a traditional countryside retreat, we have the expertise to bring your vision to life. From architectural design to interior finishes, we ensure every detail is meticulously crafted to create a comfortable and stylish living space.",
    },
    {
      id: 2,
      price: "650,000 LKR upwards",
      image: card_2,
      title: "Commercial Construction",
      content:
        "We specialize in commercial construction, catering to diverse business needs. Our team has extensive experience in constructing office buildings, retail spaces, hospitality establishments, and more. We understand the unique requirements of commercial projects, including functionality, aesthetics, and adherence to industry standards. By employing advanced construction techniques and materials, we create spaces that are not only visually appealing but also efficient and conducive to productivity.",
    },
    {
      id: 3,
      price: "400,000 LKR Upwards",
      image: card_3,
      title: "Renovations and Remodeling",
      content:
        "Renovating and remodeling existing spaces requires a different set of skills and expertise, and it is an area in which we excel. Our team is adept at transforming outdated or underutilized spaces into modern, functional environments. Whether it’s a kitchen renovation, bathroom remodel, or a complete home makeover, we carefully plan and execute every step to achieve the desired outcome. We integrate innovative design concepts, sustainable materials, and efficient layouts to breathe new life into your space.",
    },
    {
      id: 4,
      price: "150,000 LKR Upwards",
      image: card_4,
      title: "Sustainable Construction",
      content:
        "As a responsible construction company, we have a strong focus on sustainable construction practices. We incorporate environmentally friendly solutions into our projects, such as energy-efficient systems, sustainable materials, and waste reduction strategies. Our team is well-versed in green building certifications and can guide clients in achieving their sustainability goals while maintaining a high standard of quality.",
    },
  ];

  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-fixed bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute inset-0 bottom-0 h-full bg-black opacity-60"></div>
        {/*content*/}
        <div className="z-10 flex flex-col items-start justify-center w-2/3 gap-6 p-12 text-white max-sm:w-full max-md:p-6">
          <h1 className="text-3xl max-sm:text-xl">Your Dream Home</h1>
          <h1 className="text-6xl motion-preset-slide-right max-sm:text-4xl">
            A Place Where Dreams Become Reality
          </h1>

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
          <div className="w-full h-[15dvh] max-sm:hidden bg-[#001733]">
            <LSCarousel></LSCarousel>
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
      </div>
      {/*welcome*/}
      <div>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-fixed bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:fit lg:items-center lg:px-8">
            <div className="max-w-xl text-center">
              <h1 className="text-3xl font-extrabold text-left text-white sm:text-5xl lh-sm">
                Welcome To Muthukuda Construction
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

      {/*images*/}
      <div className="flex items-center justify-center w-full gap-6 px-12 py-16 mx-auto max-md:px-6 max-md:py-6 nunito max-md:flex-col">
      <img src={car_1} className="md:w-1/3 rounded-xl" alt="" />
      <img src={car_2} className="md:w-1/3 rounded-xl" alt="" />
      <img src={car_3} className="md:w-1/3 rounded-xl" alt="" />
      </div>

      {/*CTA*/}
      <div>
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
          <div className="flex items-center justify-center p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl title">
                Build Your Dream Home With Us
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                WE ENSURE TO GIVE THE BEST QUALITY SERVICE FOR YOUR EXPENDITURE
              </p>

              <div className="flex justify-center gap-6 mt-4 md:mt-8 max-md:flex-col">
                <Link
                  href="/projects"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-[#512D1D] hover:bg-[#512D1D]/70 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Our Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-[#512D1D] hover:bg-[#512D1D]/70 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <img alt="" src={cta} className="object-cover w-full h-[500px]" />
        </section>
      </div>

      {/*blog posts*/}
      <div className="w-full px-12 py-16 mx-auto max-md:px-6 max-md:py-6 nunito">
        {/* Header */}
        <div className="mb-12 text-center max-md:mb-6 intersect:motion-preset-slide-right motion-duration-3000 motion-delay-75">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl title">
            Our Specialization
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-12 max-md:gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group intersect:motion-preset-slide-up motion-duration-3000"
            >
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden border rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Title */}
                <h3 className="text-xl font-bold transition-colors title">
                  {blog.title}
                </h3>

                {/* content */}
                <div className="">
                  <a href="#" className="inline-flex items-center text-justify">
                    <span>{blog.content}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*testimonials*/}
      {/*new*/}
      <TestimonialSlider />
    </div>
  );
}

export default Landing;
