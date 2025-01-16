import banner from "./../assets/Landing/banner.png";
import contact_img from "../assets/Landing/contact.jpg";
import cta from "../assets/Landing/cta.jpg";

import LSCarousel from "../components/LandingServiceCar";
import { Link } from "wouter";

import dp_1 from "../assets/Landing/dp/shanika.jpg";
import dp_2 from "../assets/Landing/dp/rasika.jpg";
import dp_3 from "../assets/Landing/dp/nawarathna.jpg";
import dp_4 from "../assets/Landing/dp/virasha.jpg";
import dp_5 from "../assets/Landing/dp/adisha.jpg";
import dp_6 from "../assets/Landing/dp/aruna.jpg";

import card_1 from "./../assets/Services/card_1.png";
import card_2 from "./../assets/Services/card_2.png";
import card_3 from "./../assets/Services/card_3.png";
import card_4 from "./../assets/Services/card_4.png";

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
  const testimonials = [
    {
      image: dp_1, // Replace with the actual path or URL of the image
      name: "Shanika Kottahachchi",
      rating: 5,
      content: "Excellent, reliable team. Can be recommended at any level.",
    },
    {
      image: dp_2,
      name: "Rasika Kodithuwakku",
      rating: 5,
      content: "It was a very good, I must say the best decision I have made to hand over the construction of my new house to Mr. Asanka and his team. It was the first impression he made when we discussed about the construction which made me to hand over the job to them. And I am glad that I made that decision.He and his whole team very much professional in their jobs. And mostly very much reliable.I had no trouble during the construction and their ability to get the job going was excellent. This was experienced during the hard time which we had with no building materials in the country. They were able to get the work going.I make this opportunity to express my gratitude to the muthukuda team for their excellent work.I can recommend this team to anyone, without any hesitation.",
    },
    {
      image: dp_3,
      name: "Nawarathna Bandara",
      rating: 5,
      content: "For my house construction, based on chartered Architecture Chatura Wanninayake recommendations i selected Mutukuda construction limited. There service is utmost higher in terms of quality, professionalism, commitment and time. Reliable and responsible service provider with many flexibility. Not only construction on site but also they handle all statutory requirement with all government institute professional manner with my minimum involvement. I specially thanks to Mutukada construction and ownership delivering my expectations highest level without any deviations.",
    },
    {
      image: dp_4,
      name: "Virasha Kavindi",
      rating: 5,
      content: "The director himself is very friendly and collaborative. When I first got into them  I had no idea how to build a home. They provide such a good consultancy .The performance by them has been outstanding in every regard.I really appreciate his professionalism, his sensitivity to my needs, and his desire to achieve completed projects on time and within budget in such a critical time in this country.What they have done with me is very impressive. They always try to maintain quality in such a good manner.You must call him and see yourself how helpful are them.They have completed my home in time even in these crucial times.",
    },
    {
      image: dp_5,
      name: "Adisha De Alwis",
      rating: 5,
      content: "Highly recommended! The owner also professional qualified person",
    },
    {
      image: dp_6,
      name: "Aruna Ratnavibusshana",
      rating: 5,
      content: "A company which is truly professional and is dedicated in maintaining a very high standard in all aspects of construction. The quality of their finished product is of such high standard, that it cannot be equaled by any other.My home was built by this star class company, I  am lost for words when trying to explain how overwhelmingly satisfied and delighted that i opted to give this very important project over to this company.Mr.Asanka Muthukuda, his managers and the entire team, are a dedicated and motivated group of professionals, who strive too, and succeed in delivering the best and the highest quality product to all their customers.I thank you sincerely sir, and wish Mr. Muthukuda and his company all the very best in all their future endeavors.WELL DONE!! Muthukuda Engineering & Constructions Pvt (Ltd), Will Recommend you always.!!",
    },
  ];

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
          <div className="w-full h-[15dvh] max-sm:hidden bg-[#060097]">
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
      {/*contact us*/}
      <div className="w-full px-12 py-16 mx-auto max-md:px-6 max-md:py-6 nunito">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Image and Social Icons */}
          <div className="relative max-lg:hidden">
            <img
              src={contact_img}
              alt="Contact representative"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl title">
                <span className="title">Contact </span>
                <span className="text-[#060097] title">Us Now</span>
              </h2>
              <p className="text-justify text-gray-600">
                Got a question, suggestion, or need assistance? We’re here to
                help. Reach out to us through the methods below, and we’ll get
                back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 bg-blue-50 rounded-lg pr-[30px]"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 pl-10 rounded-lg bg-blue-50"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 pl-10 rounded-lg bg-blue-50"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 pl-10 rounded-lg bg-blue-50"
                  />
                </div>
              </div>

              {/* Service and Budget Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Need Services"
                    className="w-full p-3 pl-10 rounded-lg bg-blue-50"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Budgets"
                    className="w-full p-3 pl-10 rounded-lg bg-blue-50"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Your Message..."
                  rows={4}
                  className="w-full p-3 rounded-lg bg-blue-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#060097] to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
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
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-[#060097] hover:bg-[#060097]/70 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Our Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-[#060097] hover:bg-[#060097]/70 focus:outline-none focus:ring focus:ring-yellow-400"
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
      <section className="bg-white">
        <div className="max-w-screen-xl p-12 pt-0 mx-auto max-md:p-6 max-md:pt-0">
          <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl title">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mb-8 sm:break-inside-avoid">
                <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="object-cover rounded-full size-14"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-yellow-500">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, starIndex) => (
                            <svg
                              key={starIndex}
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )
                        )}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900 title">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonial.content}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
