import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


import dp_1 from "../assets/Landing/dp/shanika.jpg";
import dp_2 from "../assets/Landing/dp/rasika.jpg";
import dp_3 from "../assets/Landing/dp/nawarathna.jpg";
import dp_4 from "../assets/Landing/dp/virasha.jpg";
import dp_5 from "../assets/Landing/dp/adisha.jpg";
import dp_6 from "../assets/Landing/dp/aruna.jpg";

const testimonials = [
  {
    id: 1,
    image: dp_1, // Replace with the actual path or URL of the image
    title: "Shanika Kottahachchi",
    rating: 5,
    content: "Excellent, reliable team. Can be recommended at any level.",
  },
  {
    id: 2,
    image: dp_2,
    title: "Rasika Kodithuwakku",
    rating: 5,
    content:
      "It was a very good, I must say the best decision I have made to hand over the construction of my new house to Mr. Asanka and his team. It was the first impression he made when we discussed about the construction which made me to hand over the job to them. And I am glad that I made that decision.He and his whole team very much professional in their jobs. And mostly very much reliable.I had no trouble during the construction and their ability to get the job going was excellent. This was experienced during the hard time which we had with no building materials in the country. They were able to get the work going.I make this opportunity to express my gratitude to the muthukuda team for their excellent work.I can recommend this team to anyone, without any hesitation.",
  },
  {
    id: 3,
    image: dp_3,
    title: "Nawarathna Bandara",
    rating: 5,
    content:
      "For my house construction, based on chartered Architecture Chatura Wanninayake recommendations i selected Mutukuda construction limited. There service is utmost higher in terms of quality, professionalism, commitment and time. Reliable and responsible service provider with many flexibility. Not only construction on site but also they handle all statutory requirement with all government institute professional manner with my minimum involvement. I specially thanks to Mutukada construction and ownership delivering my expectations highest level without any deviations.",
  },
  {
    id: 4,
    image: dp_4,
    title: "Virasha Kavindi",
    rating: 5,
    content:
      "The director himself is very friendly and collaborative. When I first got into them  I had no idea how to build a home. They provide such a good consultancy .The performance by them has been outstanding in every regard.I really appreciate his professionalism, his sensitivity to my needs, and his desire to achieve completed projects on time and within budget in such a critical time in this country.What they have done with me is very impressive. They always try to maintain quality in such a good manner.You must call him and see yourself how helpful are them.They have completed my home in time even in these crucial times.",
  },
  {
    id: 5,
    image: dp_5,
    title: "Adisha De Alwis",
    rating: 5,
    content: "Highly recommended! The owner also professional qualified person",
  },
  {
    id: 6,
    image: dp_6,
    title: "Aruna Ratnavibusshana",
    rating: 5,
    content:
      "A company which is truly professional and is dedicated in maintaining a very high standard in all aspects of construction. The quality of their finished product is of such high standard, that it cannot be equaled by any other.My home was built by this star class company, I  am lost for words when trying to explain how overwhelmingly satisfied and delighted that i opted to give this very important project over to this company.Mr.Asanka Muthukuda, his managers and the entire team, are a dedicated and motivated group of professionals, who strive too, and succeed in delivering the best and the highest quality product to all their customers.I thank you sincerely sir, and wish Mr. Muthukuda and his company all the very best in all their future endeavors.WELL DONE!! Muthukuda Engineering & Constructions Pvt (Ltd), Will Recommend you always.!!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ));
  };

  return (
    <div className="p-12 pt-0 mx-auto max-md:p-6 max-md:pt-0">
      <h1 className="mb-6 text-4xl font-bold text-center md:text-5xl title">
        Read trusted reviews from our customers
      </h1>

      <div className="relative flex justify-center">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex gap-1 mb-4">
            {renderStars(testimonials[currentIndex].rating)}
          </div>

          <h2 className="mb-4 text-2xl font-bold text-[#060097] flex gap-2 items-center max-md:text-lg">
            <img src={testimonials[currentIndex].image} alt="dp" className="w-10" />
            {testimonials[currentIndex].title}
          </h2>

          <p className="text-justify text-gray-600 h-[10dvh] pr-3 overflow-y-scroll red-custom-scroll">
            {testimonials[currentIndex].content}
          </p>
        </div>

        <div className="absolute flex justify-between gap-3 px-2 top-3 right-1 w-fit">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-10 h-10 text-[#060097] bg-white border border-[#060097] rounded-full hover:bg-pink-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 text-[#060097] bg-white border border-[#060097] rounded-full hover:bg-pink-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
