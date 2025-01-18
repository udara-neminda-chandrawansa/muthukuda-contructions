import { useState, useEffect } from "react";
import banner from "../assets/Projects/banner.jpg";

// image galleries of completed projects
const nawarathna_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/nawarathna/*.{png,jpg,jpeg,svg}"
);
const samarakoon_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/samarakoon/*.{png,jpg,jpeg,svg}"
);
const chinthaka_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/chinthaka/*.{png,jpg,jpeg,svg}"
);
const kodithuwakku_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/kodithuwakku/*.{png,jpg,jpeg,svg}"
);
const wimal_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/wimal/*.{png,jpg,jpeg,svg}"
);
const aruna_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/aruna/*.{png,jpg,jpeg,svg}"
);
const kapila_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/kapila/*.{png,jpg,jpeg,svg}"
);
const danushka_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/danushka/*.{png,jpg,jpeg,svg}"
);

// image galleries of ongoing projects
const roshan_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/roshan/*.{png,jpg,jpeg,svg}"
);
const anil_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/anil/*.{png,jpg,jpeg,svg}"
);
const yasiru_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/yasiru/*.{png,jpg,jpeg,svg}"
);
const taniya_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/taniya/*.{png,jpg,jpeg,svg}"
);
const jaliya_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/jaliya/*.{png,jpg,jpeg,svg}"
);

function Projects() {
  const [selectedProjTypePGWise, setSelectedProjTypePGWise] = useState(0); // for proj type selection (for proj type filtering page wise)
  const [selectedProjType, setSelectedProjType] = useState("completed"); // for proj type selection (for proj type filtering modal wise)
  const [selectedProj, setSelectedProj] = useState(0); // for proj selection
  // completed proj img arrays
  const [nawarathnaImages, setNawarathnaImages] = useState([]);
  const [samarakoonImages, setSamarakoonImages] = useState([]);
  const [chinthakaImages, setChinthakaImages] = useState([]);
  const [kodithuwakkuImages, setKodithuwakkuImages] = useState([]);
  const [wimalImages, setWimalImages] = useState([]);
  const [arunaImages, setArunaImages] = useState([]);
  const [kapilaImages, setKapilaImages] = useState([]);
  const [danushkaImages, setDanushkaImages] = useState([]);

  // ongoing proj img arrays
  const [roshanImages, setRoshanImages] = useState([]);
  const [anilImages, setAnilImages] = useState([]);
  const [yasiruImages, setYasiruImages] = useState([]);
  const [taniyaImages, setTaniyaImages] = useState([]);
  const [jaliyaImages, setJaliyaImages] = useState([]);

  // use effect for auto loading *
  useEffect(() => {
    // Load nawarathna_raw images
    const loadNawarathnaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(nawarathna_raw).map((key) => nawarathna_raw[key]())
      );
      setNawarathnaImages(resolvedImages.map((mod) => mod.default));
    };

    loadNawarathnaImages();

    // Load samarakoon_raw images
    const loadSamarakoonImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(samarakoon_raw).map((key) => samarakoon_raw[key]())
      );
      setSamarakoonImages(resolvedImages.map((mod) => mod.default));
    };

    loadSamarakoonImages();

    // Load chinthaka_raw images
    const loadChinthakaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(chinthaka_raw).map((key) => chinthaka_raw[key]())
      );
      setChinthakaImages(resolvedImages.map((mod) => mod.default));
    };

    loadChinthakaImages();

    // Load kodithuwakku_raw images
    const loadKodithuwakkuImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kodithuwakku_raw).map((key) => kodithuwakku_raw[key]())
      );
      setKodithuwakkuImages(resolvedImages.map((mod) => mod.default));
    };

    loadKodithuwakkuImages();

    // Load wimal_raw images
    const loadWimalImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(wimal_raw).map((key) => wimal_raw[key]())
      );
      setWimalImages(resolvedImages.map((mod) => mod.default));
    };

    loadWimalImages();

    // Load aruna_raw images
    const loadArunaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(aruna_raw).map((key) => aruna_raw[key]())
      );
      setArunaImages(resolvedImages.map((mod) => mod.default));
    };

    loadArunaImages();

    // Load kapila_raw images
    const loadKapilaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kapila_raw).map((key) => kapila_raw[key]())
      );
      setKapilaImages(resolvedImages.map((mod) => mod.default));
    };

    loadKapilaImages();

    // Load danushka_raw images
    const loadDanushkaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(danushka_raw).map((key) => danushka_raw[key]())
      );
      setDanushkaImages(resolvedImages.map((mod) => mod.default));
    };

    loadDanushkaImages();

    // Load roshan_raw images
    const loadRoshanImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(roshan_raw).map((key) => roshan_raw[key]())
      );
      setRoshanImages(resolvedImages.map((mod) => mod.default));
    };

    loadRoshanImages();

    // Load anil_raw images
    const loadAnilImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(anil_raw).map((key) => anil_raw[key]())
      );
      setAnilImages(resolvedImages.map((mod) => mod.default));
    };

    loadAnilImages();

    // Load yasiru_raw images
    const loadYasiruImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(yasiru_raw).map((key) => yasiru_raw[key]())
      );
      setYasiruImages(resolvedImages.map((mod) => mod.default));
    };

    loadYasiruImages();

    // Load taniya_raw images
    const loadTaniyaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(taniya_raw).map((key) => taniya_raw[key]())
      );
      setTaniyaImages(resolvedImages.map((mod) => mod.default));
    };

    loadTaniyaImages();

    // Load jaliya_raw images
    const loadJaliyaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(jaliya_raw).map((key) => jaliya_raw[key]())
      );
      setJaliyaImages(resolvedImages.map((mod) => mod.default));
    };

    loadJaliyaImages();
  });

  const completedProjects = [
    [
      "Residence of Mr. Nawarathne",
      "The site was one of those awkward leftover plots in a by-road junction, which used to be flooded by rainwater in the monsoon season due to the poorly maintained drainage system. Even though the site was not the best place to build a house, the potential of designing a unique house in the vicinity had been identified by the architect during the initial visit, and accepted the project as a challenge. In contrast to many present-day clients, Mr. Nawarathne’s idea of a home was easy to capture because of his simple lifestyle and his rural upbringing. As minimalism was preferred by the whole family, the architect did not have to worry about convincing them to chop off the unwatered spaces of their primary brief. The house was designed to have a semi-basement for parking and a backyard, to keep service areas away from the main house but kept the physical connection to the main areas. The main two floor levels were divided into four levels with 5 feet level differences. Due to this, the staircase was sandwiched by two wings of the house. Mrs. Padma Gunarathne, the Structural Engineer of the project carefully developed the structural design. Her effort was admirable because designing an economical structure for a split-level house in a sloping lot pushes any well-experienced engineer to run the extra mile. Ultimately, the client and his family were rewarded with a minimal yet luxurious tropical house that is well-equipped with modern facilities. Fulfillment of all parties indicates the potential of a long-lasting friendship in advance.",
      [
        "Project Type : Personalized Residence",
        "Client : Mr.Nawarathna Bandara",
        "Principal Architect : Chathura Wanninayake",
        "Structural Engineer : Mrs. Padma Gunarathna",
        "Project completion : 24th November 2022",
      ],
      nawarathnaImages,
    ],
    [
      "Residence of Dr. Aruna Samarokoon",
      "The site was one of those awkward leftover plots in a by-road junction, which used to be flooded by rainwater in the monsoon season due to the poorly maintained drainage system. Even though the site was not the best place to build a house, the potential of designing a unique house in the vicinity had been identified by the architect during the initial visit, and accepted the project as a challenge. In contrast to many present-day clients, Mr. Nawarathne’s idea of a home was easy to capture because of his simple lifestyle and his rural upbringing. As minimalism was preferred by the whole family, the architect did not have to worry about convincing them to chop off the unwatered spaces of their primary brief. The house was designed to have a semi-basement for parking and a backyard, to keep service areas away from the main house but kept the physical connection to the main areas. The main two floor levels were divided into four levels with 5 feet level differences. Due to this, the staircase was sandwiched by two wings of the house. Mrs. Padma Gunarathne, the Structural Engineer of the project carefully developed the structural design. Her effort was admirable because designing an economical structure for a split-level house in a sloping lot pushes any well-experienced engineer to run the extra mile. Ultimately, the client and his family were rewarded with a minimal yet luxurious tropical house that is well-equipped with modern facilities. Fulfillment of all parties indicates the potential of a long-lasting friendship in advance.",
      [
        "Project Type : Personalized Residence",
        "Client : Dr. Aruna Samarakoon",
        "Architect : Mr. Samitha Basnayaka",
        "Project completion : 11 November 2021",
        "",
      ],
      samarakoonImages,
    ],
    [
      "Residence of Mr. Chinthaka Smaranayake",
      "‘Building a house is not just like a snake shedding its skin. It brings not only a new life to it. But also, a new chapter to the surrounding.’ In mid-2021, Chinthaka Smaranayake, a well-known tuition master in the Kurunegala area, hired architect Chathura Wanninayake to renovate his family house in the Wariyapola suburb. The site was a long, rectangular 40-perch lot that faces the Puttalam-Kurunegala main road. The existing building was over 40 years old by then, and only a few parts of it were solid enough to walk along with the upcoming structure. Although the architect wanted to demolish the existing building completely, rising material costs encouraged him to save up to 30 percent of the building in the design process. The client’s preferred architectural language was more related to contemporary architectural styles with a modern feel. So white was selected as the primary colour. Teak timber and black colours have been introduced to bring a vibrant tone to create a unique character with an inviting front façade. The titanium-mixed cement floors also brought more Sri Lankan ambience to the house. Despite the fact that the project was supposed to be completed in eight months, it took more than a year due to the COVID-19 pandemic and the country’s economic crisis. However, the contractor managed to keep the quality of the design, and his work coordination during the rough period was remarkable with its newly introduced elegant look, the house became a landmark of the Puttalam–Kurunegala highway at the end of the construction process.",
      [
        "Project Type : Personalized Residence",
        "Client : Chinthaka Samaranayake",
        "Principal Architect : Chathura Wanninayake",
        "Project completion : 26th January 2023",
        "",
      ],
      chinthakaImages,
    ],
    [
      "Residence of Dr. K.A.R.I Kodithuwakku",
      "",
      [
        "Project Type : Appartment",
        "Client : Dr. K.A.R.I Kodithuwakku",
        "Project Value : 38 Million",
        "Project completion : 02nd September 2022",
        "",
      ],
      kodithuwakkuImages,
    ],
    [
      "Residence of Dr. Wimal",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Dr. Wimal",
        "Project Value : 14 Million",
        "Project completion : 10th November 2022",
        "",
      ],
      wimalImages,
    ],
    [
      "Residence of Mr. Aruna Rathnavibushana",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Mr. Aruna Rathnavibushana",
        "Project Value : 19 Million",
        "Project completion : 01st July 2022",
        "",
      ],
      arunaImages,
    ],
    [
      "Residence of Dr. Kapila Alwis",
      "",
      [
        "Project Type : Renovation",
        "Client : Dr. Kapila Alwis",
        "Project Value : 11.5 Million (Est)",
        "",
        "",
      ],
      kapilaImages,
    ],
    [
      "Residence of Mr. Dhanushka",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Mr. Dhanushka",
        "Project Value 10.6 Million",
        "Project completion : 20 July 2024",
        "",
      ],
      danushkaImages,
    ],
  ];

  const ongoingProjects = [
    [
      "Residence of Mr. Roshan Hewage",
      "",
      [
        "Project Type : Structural Development",
        "Client : Mr. Roshan Hewage",
        "Project Value : 19 Million (Est)",
        "",
        "",
      ],
      roshanImages,
    ],
    [
      "Residence of Dr. Anil Priyashantha",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Dr. Anil Priyashantha",
        "Principal Architect : Ch. Architcture Chathura Wanninayake",
        "Project Value : 14.5 Million (Est)",
        "",
      ],
      anilImages,
    ],
    [
      "Residence of Mr. Yasiru Liyanage",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Mr. Yasiru Liyanage",
        "Principal Architect : Ch. Architcture Chatura Wanninayake",
        "Project Value : 17.9 Million (Est)",
        "",
      ],
      yasiruImages,
    ],
    [
      "Residence of Ms. Taniya de Silva",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Ms. Taniya de Silva",
        "Principal Architect : Ch. Architcture Thilina Wijakoon",
        "Structural Engineering : United Structural Engineering Consultants (Pvt.) Ltd.",
        "Project Value : 60 Million (Est)",
      ],
      taniyaImages,
    ],
    [
      "Residence of Mr. Jaliya Jayasundara",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Mr. Jaliya Jayasundara",
        "Principal Architect : Ch. Architcture Thilina Wijakoon",
        "Project Value : 24.6 Million (Est)",
        "",
      ],
      jaliyaImages,
    ],
  ];

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
        <h1 className="relative z-10 text-5xl text-white">Our Projects</h1>
      </div>
      {/*content*/}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          {/*proj select buttons*/}
          <div className="flex gap-3 max-md:flex-col">
            <button
              onClick={() => setSelectedProjTypePGWise(0)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 0 ? "bg-[#060097] text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedProjTypePGWise(1)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 1 ? "bg-[#060097] text-white" : ""
              }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setSelectedProjTypePGWise(2)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 2 ? "bg-[#060097] text-white" : ""
              }`}
            >
              Ongoing Projects
            </button>
          </div>
          {/*projects grid*/}
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            {selectedProjTypePGWise !== 2
              ? completedProjects.map((project, index) => (
                  <div
                    className="relative block overflow-hidden group"
                    key={project[0]}
                  >
                    {/*carousel*/}
                    <div
                      id={`projCar-${index}`}
                      className="h-64 bg-gray-600 carousel slide sm:h-72"
                      data-coreui-ride="true"
                    >
                      {/*car content (images)*/}
                      <div className="carousel-inner">
                        {project[3].map((image, index) => (
                          <div
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                            key={`img-key${index}`}
                          >
                            <img
                              src={image}
                              className="object-cover h-64 d-block w-100 sm:h-72"
                              alt={image}
                            />
                          </div>
                        ))}
                      </div>
                      {/*car prev / next*/}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-coreui-target={`#projCar-${index}`}
                        data-coreui-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-coreui-target={`#projCar-${index}`}
                        data-coreui-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <div className="relative p-6 bg-white border border-gray-100">
                      <h3 className="mt-1.5 line-clamp-1 text-lg font-medium text-gray-900">
                        {project[0]}
                      </h3>

                      <p className="mt-1.5 line-clamp-3 text-gray-700 text-justify">
                        {project[1]}
                      </p>

                      <form className="flex gap-4 mt-4">
                        <button
                          type="button"
                          data-coreui-toggle="modal"
                          data-coreui-target="#exampleModal"
                          className="block w-full px-4 py-3 text-sm font-medium text-white transition bg-[#060097] rounded hover:scale-105"
                          onClick={() => {
                            setSelectedProjType("completed");
                            setSelectedProj(index);
                          }}
                        >
                          See More
                        </button>
                      </form>
                    </div>
                  </div>
                ))
              : ""}
            {selectedProjTypePGWise !== 1
              ? ongoingProjects.map((project, index) => (
                  <div
                    className="relative block overflow-hidden group"
                    key={`ongoing-${project[0]}`}
                  >
                    {/*carousel*/}
                    <div
                      id={`projCar-ong-${index}`}
                      className="h-64 bg-gray-600 carousel slide sm:h-72"
                      data-coreui-ride="true"
                    >
                      {/*car content (images)*/}
                      <div className="carousel-inner">
                        {project[3].map((image, index) => (
                          <div
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                            key={`ong-img-key${index}`}
                          >
                            <img
                              src={image}
                              className="object-cover h-64 d-block w-100 sm:h-72"
                              alt={image}
                            />
                          </div>
                        ))}
                      </div>
                      {/*car prev / next*/}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-coreui-target={`#projCar-ong-${index}`}
                        data-coreui-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-coreui-target={`#projCar-ong-${index}`}
                        data-coreui-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <div className="relative p-6 bg-white border border-gray-100">
                      <h3 className="mt-1.5 line-clamp-1 text-lg font-medium text-gray-900">
                        {project[0]}
                      </h3>

                      <p className="mt-1.5 line-clamp-3 text-gray-700 text-justify">
                        {project[1]}
                      </p>

                      <form className="flex gap-4 mt-4">
                        <button
                          type="button"
                          data-coreui-toggle="modal"
                          data-coreui-target="#exampleModal"
                          className="block w-full px-4 py-3 text-sm font-medium text-white transition bg-[#060097] rounded hover:scale-105"
                          onClick={() => {
                            setSelectedProjType("ongoing");
                            setSelectedProj(index);
                          }}
                        >
                          See More
                        </button>
                      </form>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
      {/*project modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selectedProjType === "completed"
                  ? completedProjects[selectedProj][0]
                  : ongoingProjects[selectedProj][0]}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body red-custom-scroll">
              {/*carousel*/}
              <div
                id="modalCar"
                className="bg-gray-600 carousel slide"
                data-coreui-ride="true"
              >
                {/*car content (images)*/}
                <div className="carousel-inner">
                  {selectedProjType === "completed"
                    ? completedProjects[selectedProj][3].map((image, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={`img-key-${index}-${image}`}
                        >
                          <img
                            src={image}
                            className="object-contain d-block w-100"
                            alt={image}
                          />
                        </div>
                      ))
                    : ongoingProjects[selectedProj][3].map((image, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={`img-key-${index}-${image}`}
                        >
                          <img
                            src={image}
                            className="object-contain d-block w-100"
                            alt={image}
                          />
                        </div>
                      ))}
                </div>
                {/*car prev / next*/}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-coreui-target="#modalCar"
                  data-coreui-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-coreui-target="#modalCar"
                  data-coreui-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/*modal text p*/}
              <p className="mt-6 text-justify">
                {selectedProjType === "completed"
                  ? completedProjects[selectedProj][1]
                  : ongoingProjects[selectedProj][1]}
              </p>
              {/*modal text ul*/}
              <ul className="mt-6">
                {selectedProjType === "completed"
                  ? completedProjects[selectedProj][2].map(
                      (listItem, index) => <li key={index}>{listItem}</li>
                    )
                  : ongoingProjects[selectedProj][2].map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                {}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
