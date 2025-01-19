import React from "react";
import { Mail, Phone, User, Building, Pen } from "lucide-react";
import banner from "../assets/Contact/banner.jpg";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="">
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
        <h1 className="relative z-10 text-5xl text-white">Contact Us</h1>
      </div>
      {/*form*/}
      <div className="w-full p-6 mx-auto my-6 md:max-w-6xl bg-gray-50">
        <div className="mb-8 text-center">
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Contact With{" "}
            <span className="text-[#001733]">Muthukuda Constructions</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <form onSubmit={handleSubmit} className="space-y-4 lg:w-2/3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <User className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#001733]"
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#001733]"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#001733]"
                  required
                />
              </div>
              <div className="relative">
                <Pen className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#001733]"
                  required
                />
              </div>
            </div>

            <textarea
              placeholder="Write Message..."
              rows={6}
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#001733]"
              required
            />

            <button
              type="submit"
              className="w-full px-6 py-3 font-medium text-white transition-opacity rounded-lg bg-[#001733] hover:opacity-80"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6 lg:w-1/3">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Working Hours:</h2>
              <p className="text-gray-600">Mon-Fri: 8.30AM - 5.30PM</p>
              <p className="text-gray-600">Sat: 9.00 AM - 1 PM</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Location:</h2>
              <p className="text-gray-600">
                No.629, Halloluwa Road, Peradaniya
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#001733] to-[#001733] max-[375px]:hidden">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="px-4 py-1 w-fit text-sm text-white rounded-full bg-gradient-to-r from-[#001733] to-[#001733]">
                    Call Now
                  </p>
                  <a href="tel:94713458438" className="text-gray-600">
                    +94 713 458 438
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#001733] to-[#001733] max-[375px]:hidden">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="px-4 py-1 w-fit text-sm text-white rounded-full bg-gradient-to-r from-[#001733] to-[#001733]">
                    Email Now
                  </p>
                  <ul>
                    <li>
                      <a
                        href="mailto:info@muthukudaconstruction.lk"
                        className="text-gray-600"
                      >
                        info@muthukudaconstruction.lk
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:muthukudaconstruction@gmail.com"
                        className="text-gray-600"
                      >
                        muthukudaconstruction@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*map*/}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1013137.0176339599!2d80.607512!3d7.290064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3679f4e29236d%3A0x2b63e58fb75aa14f!2sMuthukuda%20Engineering%20and%20Construction%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1737178813004!5m2!1sen!2slk" className="w-full h-[40dvh] p-6 pt-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default ContactForm;
