import { Link } from "wouter";
import logo from "./../assets/logo.png";
import banner from "../assets/Footer/banner.jpg";

import { Facebook, Instagram, MapPin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="py-6 text-white bg-[#001733] nunito">
      <div className="w-full px-12 mx-auto 2xl:px-36 max-md:px-6">
        <div className="grid grid-cols-1 gap-12 max-lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                <img src={logo} alt="" className="w-20" />
              </h2>
              <p className="text-sm">Your Dream Home</p>
            </div>
            <p className="text-sm text-justify text-white">
              Muthukuda Engineering and Construction (Pvt) ltd is a leading
              construction company in Sri Lanka and based in Kandy District. We
              have started our journy in 2018 and since now completed more than
              50 successful projects. As a reputed construction company, we used
              to serve best and quality service to all our clients.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/explore/locations/1079233842270985/muthukuda-engineering-construction-pvt-ltd/"
                className="p-2 border border-gray-700 rounded-full hover:border-[#001733] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/ASKMuthukudaarachchi"
                className="p-2 border border-gray-700 rounded-full hover:border-[#001733] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-6 lg:pb-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Architecture",
                "Exterior Design",
                "Landscape Design",
                "Site Planning",
              ].map((service) => (
                <li key={service}>
                  <p className="text-white transition-colors cursor-pointer hover:text-[#F8EF22]">
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Office Address</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <a
                    href="mailto:info@muthukudaconstruction.lk"
                    className="text-white transition-colors hover:text-[#F8EF22]"
                  >
                    info@muthukudaconstruction.lk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div className="text-white">
                  <p>No 629</p>
                  <p>Halloluwa Road, </p>
                  <p>Peradaniya</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">More Info</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact Us", "Projects"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "About Us"
                          ? "/aboutus"
                          : item === "Services"
                          ? "/services"
                          : item === "Contact Us"
                          ? "/contact"
                          : "/projects"
                      }
                      className="text-white transition-colors hover:text-[#F8EF22]"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="hidden pt-8 my-16 border-t border-gray-800">
          <h3 className="mb-6 text-xl font-semibold">Achievements:</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="object-contain w-24 h-24 bg-white" />
            <div className="object-contain w-24 h-24 bg-white" />
            <div className="object-contain w-24 h-24 bg-white" />
            <div className="object-contain w-24 h-24 bg-white" />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 text-center text-white border-t border-white">
          <p>
            2025 © All Rights Reserved | Muthukuda Constructions | Designed &
            Developed by Silicon Radon Networks (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
