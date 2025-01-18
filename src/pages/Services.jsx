import banner from "../assets/Services/banner.jpg";

import s_1 from "../assets/Services/1.jpg";
import s_2 from "../assets/Services/2.jpg";
import s_3 from "../assets/Services/3.jpg";
import s_4 from "../assets/Services/4.jpg";
import s_5 from "../assets/Services/5.jpg";
import s_6 from "../assets/Services/6.jpg";

function Services() {
  const services = [
    {
      name: "Design and Planning",
      image: s_1,
      text: "Our experienced team of architects and designers work closely with clients to understand their vision and translate it into a well-thought-out design plan. We employ advanced design software and techniques to create detailed architectural plans, 3D renderings, and virtual walkthroughs, allowing you to visualize the final outcome before construction begins.",
    },
    {
      name: "Residential Construction",
      image: s_2,
      text: "Our expertise extends to commercial construction projects, including office buildings, retail spaces, restaurants, and more. We understand the specific requirements of commercial clients and deliver functional and visually appealing spaces that meet their business needs. Our team collaborates closely with clients and stakeholders to ensure efficient space utilization, adherence to safety regulations, and timely project completion.",
    },
    {
      name: "Renovations and Remodeling",
      image: s_3,
      text: "Whether you want to revitalize an outdated space or make functional changes to an existing structure, our renovation and remodeling services can bring new life to your property. From kitchen and bathroom renovations to whole-house remodeling, we provide comprehensive solutions tailored to your preferences and budget. Our team handles everything from demolition and structural modifications to plumbing, electrical work, and interior design.",
    },
    {
      name: "Project Management",
      image: s_4,
      text: "We take pride in our strong project management capabilities. Our dedicated project managers oversee every stage of the construction process, ensuring smooth coordination among subcontractors, adhering to schedules, and managing costs. With our attention to detail and proactive approach, we keep projects on track and deliver results that meet or exceed expectations.",
    },
    {
      name: "Sustainable Construction",
      image: s_5,
      text: "As part of our commitment to environmental responsibility, we offer sustainable construction options. We integrate energy-efficient systems, eco-friendly materials, and green building practices into our projects. Our team is knowledgeable about LEED certification and can help clients achieve their sustainability goals without compromising on quality or aesthetics.",
    },
    {
      name: "Interior Design and Finishes",
      image: s_6,
      text: "To add the perfect finishing touches to your project, our team of interior designers can assist you in selecting materials, colors, fixtures, and furnishings. We create cohesive and aesthetically pleasing interiors that align with your style and enhance the functionality of the space.",
    },
  ];
  return (
    <div className="h-">
      {/*nav spacing DON'T MESS WITH IT!!*/}
      <div className="h-[10dvh]"></div>
      {/*banner*/}
      <div
        className="h-[50dvh] max-md:h-[90dvh] bg-cover flex items-center justify-center bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*backdrop*/}
        <div className="absolute left-0 w-full h-full bg-black/50"></div>
        {/*title*/}
        <h1 className="relative z-10 text-5xl text-white">Our Services</h1>
      </div>
      {/*content*/}
      <section>
        <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <p className="mb-6 text-lg text-center text-gray-700">
            At Mutukuda Construction, we offer a comprehensive range of services
            to meet all your construction needs. Our services are designed to
            provide exceptional craftsmanship, innovative design solutions, and
            a seamless construction experience. Here are some of the key
            services we provide:
          </p>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {services.map((service) => (
              <div className="flex flex-col p-6 border rounded-lg" key={service.name}>
                <div className="relative flex items-center justify-center rounded-md ">
                  <img
                    src={service.image}
                    alt=""
                    className="relative object-cover rounded-md"
                  />
                  <div className="absolute left-0 w-full h-full transition-all rounded-md bg-black/50 hover:bg-black/30"></div>
                  <p className="absolute z-10 px-3 text-xl font-semibold text-center text-white max-sm:text-lg">
                    {service.name}
                  </p>
                </div>
                <p className="pt-6 text-justify">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
