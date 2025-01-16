import banner from "../assets/About/banner.jpg";
import story from "../assets/About/story.jpg";

function About() {
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
        <h1 className="relative z-10 text-5xl text-white">About Us</h1>
      </div>
      {/*content*/}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="">
                <h2 className="text-2xl font-semibold text-center text-gray-900 sm:text-3xl">
                Our Story
                </h2>

                <p className="mt-4 text-justify text-gray-700">
                Muthukuda Engineering and Construction (Pvt) ltd is a leading construction company in Sri Lanka and based in Kandy District. We are registered under Construction Industry Development Authority (CIDA) and carrying out all types of construction works in islandwide. We have started our journy in 2018 and since now completed more than 50 successful projects. As a reputed construction company, we used to serve best and quality service to all our clients.
                </p>
              </div>
              <ul className="flex flex-col gap-3 pt-3 list-disc list-inside">
                <li>Professional Specialist</li>
                <li>Precise Builders</li>
                <li>Brilliant Ideas</li>
                <li>24/7 Assiatance</li>
            </ul>
            </div>
            
            <div>
              <img
                src={story}
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
