import { useState, useEffect } from "react";
import banner from "../assets/Projects/banner.jpg";

// image galleries of completed projects
const nawarathna_raw = import.meta.glob(
  "../assets/Projects/Projects/completed/nawarathna/*.{png,jpg,jpeg,svg}"
);
// image galleries of ongoing projects
const eranga_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/1-eranga/*.{png,jpg,jpeg,svg}"
);
const samarakoon_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/3-aruna/*.{png,jpg,jpeg,svg}"
);
const chinthaka_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/5-chinthaka/*.{png,jpg,jpeg,svg}"
);
const kodithuwakku_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/4-kodithuwakku/*.{png,jpg,jpeg,svg}"
);
const wimal_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/9-wimal/*.{png,jpg,jpeg,svg}"
);
const kapila_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/2-kapila/*.{png,jpg,jpeg,svg}"
);
const danushka_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/15-danushka/*.{png,jpg,jpeg,svg}"
);
const taniya_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/14-taniya/*.{png,jpg,jpeg,svg}"
);
const jaliya_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/6-jaliya/*.{png,jpg,jpeg,svg}"
);
const asanka_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/7-asanka/*.{png,jpg,jpeg,svg}"
);
const prasanna_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/8-prasanna/*.{png,jpg,jpeg,svg}"
);
const chandimal_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/10-chamindal/*.{png,jpg,jpeg,svg}"
);
const piyumi_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/12-piyumi/*.{png,jpg,jpeg,svg}"
);
const vilamerak_raw = import.meta.glob(
  "../assets/Projects/Projects/ongoing/20-vilamerak/*.{png,jpg,jpeg,svg}"
);
// image galleries of 3d projects
const yasiru_raw = import.meta.glob(
  "../assets/Projects/Projects/3D/19-yasiru/*.{png,jpg,jpeg,svg}"
);
const indika_raw = import.meta.glob(
  "../assets/Projects/Projects/3D/17-indika/*.{png,jpg,jpeg,svg}"
);
const rathnavibushana_raw = import.meta.glob(
  "../assets/Projects/Projects/3D/16-rathnavibushana/*.{png,jpg,jpeg,svg}"
);
const anusha_raw = import.meta.glob(
  "../assets/Projects/Projects/3D/13-anusha/*.{png,jpg,jpeg,svg}"
);
const jagath_raw = import.meta.glob(
  "../assets/Projects/Projects/3D/11-jagath/*.{png,jpg,jpeg,svg}"
);

function Projects() {
  const [selectedProjTypePGWise, setSelectedProjTypePGWise] = useState(0); // for proj type selection (for proj type filtering page wise)
  const [selectedProjType, setSelectedProjType] = useState("completed"); // for proj type selection (for proj type filtering modal wise)
  const [selectedProj, setSelectedProj] = useState(0); // for proj selection
  // completed proj img arrays
  const [nawarathnaImages, setNawarathnaImages] = useState([]);

  // ongoing proj img arrays
  const [erangaImages, setErangaImages] = useState([]);
  const [samarakoonImages, setSamarakoonImages] = useState([]);
  const [chinthakaImages, setChinthakaImages] = useState([]);
  const [kodithuwakkuImages, setKodithuwakkuImages] = useState([]);
  const [wimalImages, setWimalImages] = useState([]);
  const [asankaImages, setAsankaImages] = useState([]);
  const [kapilaImages, setKapilaImages] = useState([]);
  const [danushkaImages, setDanushkaImages] = useState([]);
  const [prasannaImages, setPrasannaImages] = useState([]);
  const [chandimalImages, setChandimalImages] = useState([]);
  const [piyumiImages, setPiyumiImages] = useState([]);
  const [taniyaImages, setTaniyaImages] = useState([]);
  const [jaliyaImages, setJaliyaImages] = useState([]);
  const [vilamerakImages, setVilamerakImages] = useState([]);

  // 3d proj img arrays
  const [yasiruImages, setYasiruImages] = useState([]);
  const [indikaImages, setIndikaImages] = useState([]);
  const [rathnavibushanaImages, setRathnavibushanaImages] = useState([]);
  const [anushaImages, setAnushaImages] = useState([]);
  const [jagathImages, setJagathImages] = useState([]);

  // use effect for auto loading *
  useEffect(() => {
    // ** 3D **
    // Load yasiru_raw images
    const loadYasiruImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(yasiru_raw).map((key) => yasiru_raw[key]())
      );
      setYasiruImages(resolvedImages.map((mod) => mod.default));
    };

    loadYasiruImages();

    // Load indika_raw images
    const loadIndikaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(indika_raw).map((key) => indika_raw[key]())
      );
      setIndikaImages(resolvedImages.map((mod) => mod.default));
    };

    loadIndikaImages();

    // Load rathnavibushana_raw images
    const loadRathnavibushanaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(rathnavibushana_raw).map((key) =>
          rathnavibushana_raw[key]()
        )
      );
      setRathnavibushanaImages(resolvedImages.map((mod) => mod.default));
    };

    loadRathnavibushanaImages();

    // Load anusha_raw images
    const loadAnushaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(anusha_raw).map((key) => anusha_raw[key]())
      );
      setAnushaImages(resolvedImages.map((mod) => mod.default));
    };

    loadAnushaImages();

    // Load jagath_raw images
    const loadJagathImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(jagath_raw).map((key) => jagath_raw[key]())
      );
      setJagathImages(resolvedImages.map((mod) => mod.default));
    };

    loadJagathImages();

    // ** Completed **
    // Load nawarathna_raw images
    const loadNawarathnaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(nawarathna_raw).map((key) => nawarathna_raw[key]())
      );
      setNawarathnaImages(resolvedImages.map((mod) => mod.default));
    };

    loadNawarathnaImages();

    // ** Ongoing **
    // Load eranga_raw images
    const loadErangaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(eranga_raw).map((key) => eranga_raw[key]())
      );
      setErangaImages(resolvedImages.map((mod) => mod.default));
    };

    loadErangaImages();

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

    // Load asanka_raw images
    const loadAsankaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(asanka_raw).map((key) => asanka_raw[key]())
      );
      setAsankaImages(resolvedImages.map((mod) => mod.default));
    };

    loadAsankaImages();

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

    // Load prasanna_raw images
    const loadPrasannaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(prasanna_raw).map((key) => prasanna_raw[key]())
      );
      setPrasannaImages(resolvedImages.map((mod) => mod.default));
    };

    loadPrasannaImages();

    // Load chandimal_raw images
    const loadChanidimalImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(chandimal_raw).map((key) => chandimal_raw[key]())
      );
      setChandimalImages(resolvedImages.map((mod) => mod.default));
    };

    loadChanidimalImages();

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

    // Load piyumi_raw images
    const loadPiyumiImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(piyumi_raw).map((key) => piyumi_raw[key]())
      );
      setPiyumiImages(resolvedImages.map((mod) => mod.default));
    };

    loadPiyumiImages();

    // Load vilamerak_raw images
    const loadVilamerakImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(vilamerak_raw).map((key) => vilamerak_raw[key]())
      );
      setVilamerakImages(resolvedImages.map((mod) => mod.default));
    };

    loadVilamerakImages();
  });

  const ThreeDProjects = [
    ["Dr. Jagath - Matale (M E C)", "", ["", ""], jagathImages],
    ["Miss Anusha (M.E.C)", "", ["", ""], anushaImages],
    [
      "Mr. Rathnavibushana - Pilimathalawa (M E C)",
      "",
      ["", ""],
      rathnavibushanaImages,
    ],
    ["Mr. Indika - Mathale (M E C)", "", ["", ""], indikaImages],
    ["Mr. Yaseru - Katugastota (M E C)", "", ["", ""], yasiruImages],
  ];

  const completedProjects = [
    [
      "Mr. Nawarathne - Kundasale (M E C)",
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
  ];

  const ongoingProjects = [
    ["Dr. Eranga (M E C)", "", ["", "", "", "", ""], erangaImages],
    ["Dr. Kapila Kandy (M.E.C)", "", ["", "", "", "", ""], kapilaImages],
    [
      "Dr. Aruna  (M E C)",
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
      "Mr.Kodithuwakku (M.E.C)",
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
      "Mr. Chinthaka (M.E.C)",
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
      "Mr. Jaliya - Aniwatta (M.E.C)",
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
    [
      "Mr. Asanka (M E C)",
      "",
      [
        "Project Type : Personalized Residence",
        "Client : Mr. Asanka",
        "",
        "",
        "",
      ],
      asankaImages,
    ],
    [
      "Dr Prasanna project heerassagala (M.E.C)",
      "",
      ["", "", "", "", ""],
      prasannaImages,
    ],
    [
      "Dr Wimal (M.E.C)",
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
    ["Dr. Chaminda (M.E.C)", "", ["", "", "", "", ""], chandimalImages],
    ["Dr. Piyumi (M E C)", "", ["", "", "", "", ""], piyumiImages],
    [
      "Miss Tanya (M.E.C)",
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
      "Mr. Danushka (M.E.C)",
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
    [
      "Vilamerak Collaps Retaining Wall (M E C)",
      "",
      ["", "", "", "", ""],
      vilamerakImages,
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
                selectedProjTypePGWise === 0 ? "bg-[#001733] text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedProjTypePGWise(1)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 1 ? "bg-[#001733] text-white" : ""
              }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setSelectedProjTypePGWise(2)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 2 ? "bg-[#001733] text-white" : ""
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setSelectedProjTypePGWise(3)}
              className={`px-3 py-1 rounded-full border-1 ${
                selectedProjTypePGWise === 3 ? "bg-[#001733] text-white" : ""
              }`}
            >
              3D Projects
            </button>
          </div>
          {/*projects grid*/}
          <div className="grid grid-cols-1 gap-1 mt-6 sm:grid-cols-2 md:grid-cols-3">
            {selectedProjTypePGWise !== 2 && selectedProjTypePGWise !== 3
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

                    <div className="relative p-2 bg-white border border-gray-100">
                      <h3 className="mt-1 text-lg font-medium text-gray-900 line-clamp-1">
                        {project[0]}
                      </h3>

                      <p className="hidden mt-1 text-justify text-gray-700 line-clamp-1">
                        {project[1]}
                      </p>

                      <form className="flex gap-4 mt-2">
                        <button
                          type="button"
                          data-coreui-toggle="modal"
                          data-coreui-target="#exampleModal"
                          className="block w-full px-4 py-3 text-sm font-medium text-white transition bg-[#001733] rounded hover:scale-105"
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
            {selectedProjTypePGWise !== 1 && selectedProjTypePGWise !== 3
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

                    <div className="relative p-2 bg-white border border-gray-100">
                      <h3 className="mt-1 text-lg font-medium text-gray-900 line-clamp-1">
                        {project[0]}
                      </h3>

                      <p className="hidden mt-1 text-justify text-gray-700 line-clamp-1">
                        {project[1]}
                      </p>

                      <form className="flex gap-4 mt-2">
                        <button
                          type="button"
                          data-coreui-toggle="modal"
                          data-coreui-target="#exampleModal"
                          className="block w-full px-4 py-3 text-sm font-medium text-white transition bg-[#001733] rounded hover:scale-105"
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
            {selectedProjTypePGWise !== 1 && selectedProjTypePGWise !== 2
              ? ThreeDProjects.map((project, index) => (
                  <div
                    className="relative block overflow-hidden group"
                    key={`3d-${project[0]}`}
                  >
                    {/*carousel*/}
                    <div
                      id={`projCar-3d-${index}`}
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
                            key={`3d-img-key${index}`}
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
                        data-coreui-target={`#projCar-3d-${index}`}
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
                        data-coreui-target={`#projCar-3d-${index}`}
                        data-coreui-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <div className="relative p-2 bg-white border border-gray-100">
                      <h3 className="mt-1 text-lg font-medium text-gray-900 line-clamp-1">
                        {project[0]}
                      </h3>

                      <p className="hidden mt-1 text-justify text-gray-700 line-clamp-1">
                        {project[1]}
                      </p>

                      <form className="flex gap-4 mt-2">
                        <button
                          type="button"
                          data-coreui-toggle="modal"
                          data-coreui-target="#exampleModal"
                          className="block w-full px-4 py-3 text-sm font-medium text-white transition bg-[#001733] rounded hover:scale-105"
                          onClick={() => {
                            setSelectedProjType("3d");
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
                  : selectedProjType === "ongoing"
                  ? ongoingProjects[selectedProj][0]
                  : ThreeDProjects[selectedProj][0]}
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
                    : selectedProjType === "ongoing"
                    ? ongoingProjects[selectedProj][3].map((image, index) => (
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
                    : ThreeDProjects[selectedProj][3].map((image, index) => (
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
                  : selectedProjType === "ongoing"
                  ? ongoingProjects[selectedProj][1]
                  : ThreeDProjects[selectedProj][1]}
              </p>
              {/*modal text ul*/}
              <ul className="mt-6">
                {selectedProjType === "completed"
                  ? completedProjects[selectedProj][2].map(
                      (listItem, index) => <li key={index}>{listItem}</li>
                    )
                  : selectedProjType === "ongoing"
                  ? ongoingProjects[selectedProj][2].map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))
                  : ThreeDProjects[selectedProj][2].map((listItem, index) => (
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
