import React, { useState, useEffect, lazy } from "react";
import { Mail, Github, Linkedin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProfileEditor from "./components/ProfileEditor";
import ReviewSection from "./components/ReviewSection";
import SearchBar from "./components/Searchbar";
import { X, Check } from "lucide-react";
import SRQ from "/public/SRQ-Networks.webp";
import CompeteStudio from "/public/CompeteStudio.webp";
import Eugene from "/public/Eugene.webp";

export default function Home() {
      const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                  section.scrollIntoView({
                        behavior: "smooth",
                  });
            }
      };

      const [successModal, setSuccessModal] = useState(false);
      const [errorModal, setErrorModal] = useState(false);
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: "",
      });

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.id]: e.target.value,
            });
      };

      const handleSubmit = (e) => {
            fetch("/", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams(formData).toString(),
            })
                  .then((response) => {
                        if (response.ok) {
                              setSuccessModal(true);
                        } else {
                              console.error(response);
                              setErrorModal(true);
                        }
                  })
                  .catch((error) => {
                        setErrorModal(true);
                        throw error;
                  });
            e.preventDefault();
      };

      return (
            <div className="min-h-screen text-white">
                  {/* Hero Section */}
                  <section id="home" className="min-h-screen px-4 flex items-center justify-center relative">
                        {/* Translucent overlay to ensure text readability while showing video */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

                        <div className="text-white space-y-8 text-center z-10 max-w-5xl">
                              <h1 className="lg:text-8xl text-5xl font-bold leading-tight tracking-tighter animate-fadeIn">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Daniel Poprawski</span>
                              </h1>

                              <h2 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter mx-auto animate-fadeIn animation-delay-200">Full Stack Developer</h2>

                              <h3 className="text-lg lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto animate-fadeIn animation-delay-300">
                                    My name's Daniel and I'm a full stack developer from Sarasota. I focus on creating websites that reflect your brand and achieve results. With a
                                    keen eye for design and a commitment to quality, I build modern websites that engage visitors and help turn them into customers.
                              </h3>
                              <button onClick={() => scrollToSection("skills")} className="block mx-auto mt-16 animate-bounce">
                                    <ChevronDown className="w-10 h-10" />
                              </button>
                        </div>
                  </section>

                  {/* Skills Section */}
                  <section id="skills" className="min-h-fit py-24 relative">
                        <div className="absolute inset-0 bg-slate-700 bg-opacity-85 backdrop-blur-md z-0"></div>
                        <div className=" relative mx-auto container">
                              <h2 className="text-4xl md:text-5xl mb-6 font-bold text-center">My Skills</h2>
                              <div className="text-center mx-auto text-lg font-semibold max-w-lg text-gray-200 mb-16">
                                    Check out some engaging and interactive components that I can put on your website to increase visitor session duration
                              </div>

                              <div className="flex flex-row justify-center gap-4 items-center">
                                    <button id="prevEl" className="hidden lg:inline-block px-6 py-2 bg-blue-600 rounded-full  hover:bg-blue-700 transition-all h-[4.5rem]">
                                          <ChevronLeft />
                                    </button>

                                    <Swiper
                                          slidesPerView={1}
                                          modules={[Navigation, Autoplay]}
                                          spaceBetween={0}
                                          breakpoints={{
                                                1024: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 16,
                                                },
                                          }}
                                          navigation={{
                                                nextEl: "#nextEl",
                                                prevEl: "#prevEl",
                                                disabledClass: "bg-blue-900 cursor-not-allowed hover:bg-blue-900 !important",
                                          }}
                                          className=" mb-16 mx-2"
                                    >
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                                                      <Quiz />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg ">
                                                      <Login />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg ">
                                                      <ProfileEditor />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg ">
                                                      <ReviewSection />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg ">
                                                      <SearchBar />
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                                    <button id="nextEl" className="hidden lg:inline-block px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all h-[4.5rem]">
                                          <ChevronRight />
                                    </button>
                              </div>

                              <Swiper
                                    slidesPerView={2}
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={4}
                                    breakpoints={{
                                          720: {
                                                slidesPerView: 4,
                                                spaceBetween: 4,
                                          },
                                          1024: {
                                                slidesPerView: 6,
                                                spaceBetween: 8,
                                          },
                                    }}
                                    pagination={{
                                          clickable: true,
                                          el: ".custom-pagination-container",
                                    }}
                              >
                                    {/* React skill */}
                                    <SwiperSlide className="h-full">
                                          <div className="bg-gray-800 p-6 rounded-lg text-center h-full">
                                                <div className="text-blue-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9m-4.95-8.56l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">React</h3>
                                                <p className="text-gray-400 mt-2">Modern UI development with component-based architecture</p>
                                          </div>
                                    </SwiperSlide>
                                    {/* Tailwind CSS skill */}
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-teal-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Tailwind CSS</h3>
                                                <p className="text-gray-400 mt-2">Utility-first CSS framework for rapid UI development</p>
                                          </div>
                                    </SwiperSlide>
                                    {/* Node.js skill */}
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-green-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076
                                                                              c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0
                                                                              L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392
                                                                              c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021
                                                                              c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921
                                                                              c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603
                                                                              v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993
                                                                              c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233
                                                                              c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081
                                                                              c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833
                                                                              c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402
                                                                              c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253
                                                                              c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Node.js</h3>
                                                <p className="text-gray-400 mt-2">Server-side JavaScript runtime for scalable applications</p>
                                          </div>
                                    </SwiperSlide>
                                    {/* Bootstrap skill */}
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-purple-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Bootstrap</h3>
                                                <p className="text-gray-400 mt-2">Frontend framework for responsive and mobile-first websites</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-orange-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.93.828-.093-0.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Java</h3>
                                                <p className="text-gray-400 mt-2">Cross-platform object-oriented enterprise programming language</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-yellow-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">JavaScript</h3>
                                                <p className="text-gray-400 mt-2">Dynamic programming language for interactive web applications</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-orange-600 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">HTML5</h3>
                                                <p className="text-gray-400 mt-2">Markup language for structuring content on the web</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-blue-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">CSS3</h3>
                                                <p className="text-gray-400 mt-2">Style sheet language for designing and layout of web pages</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-blue-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">TypeScript</h3>
                                                <p className="text-gray-400 mt-2">Typed superset of JavaScript that compiles to plain JavaScript</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-red-500 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Git</h3>
                                                <p className="text-gray-400 mt-2">Distributed version control system for tracking changes in code</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-teal-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031-.022.01-.02zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Netlify</h3>
                                                <p className="text-gray-400 mt-2">Platform for automated deployment, serverless functions, and forms</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-teal-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 16 16" className="w-16 h-16 mx-auto" fill="none">
                                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                            <g>
                                                                  <path
                                                                        fill="#202020"
                                                                        d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#F8BF11"
                                                                        d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#D6A312"
                                                                        d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#202020"
                                                                        d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#ffffff"
                                                                        d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#E6E6E6"
                                                                        d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#ffffff"
                                                                        d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z"
                                                                  ></path>
                                                                  <path
                                                                        fill="#202020"
                                                                        d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z"
                                                                  ></path>
                                                            </g>
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Linux</h3>
                                                <p className="text-gray-400 mt-2">Server-oriented free and open source operating system</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-teal-400 text-5xl mb-4">
                                                      <svg viewBox="-8.78 0 70 70" fill="#000000" className="w-16 h-16 mx-auto">
                                                            <g id="SVGRepo_iconCarrier">
                                                                  <path
                                                                        d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z"
                                                                        fill="#00bcf2"
                                                                        transform="translate(-830.906 -943.981)"
                                                                  ></path>
                                                            </g>
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">SQL</h3>
                                                <p className="text-gray-400 mt-2">Server query language for managing databases</p>
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className=" mb-4 w-16 h-16 mx-auto">
                                                      <svg viewBox="0 -30 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                  <path
                                                                        d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z"
                                                                        fill="#F90"
                                                                  ></path>
                                                                  <path
                                                                        d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z"
                                                                        fill="#F90"
                                                                  ></path>
                                                                  <path
                                                                        d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z"
                                                                        fill="#fff"
                                                                  ></path>
                                                            </g>
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">Amazon Web Services</h3>
                                                <p className="text-gray-400 mt-2">Managing instances on the world's premier server network.</p>
                                          </div>
                                    </SwiperSlide>
                              </Swiper>
                              <div className="mx-auto w-fit mt-4">
                                    <div className="custom-pagination-container" />
                              </div>
                        </div>
                  </section>

                  {/* Projects Section */}
                  <section id="projects" className="min-h-fit py-24 relative">
                        <div className="absolute inset-0 bg-zinc-800 bg-opacity-70 backdrop-blur-sm z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Recent Projects</h2>

                              <div className="space-y-8">
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                          <div className="md:flex">
                                                <div className="md:w-1/3 h-64 bg-gray-700 flex items-center justify-center">
                                                      <img lazy src={CompeteStudio} alt="Compete Studio" className="object-cover h-full w-full" />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">Compete Studio</h3>
                                                      <p className="text-gray-300 mb-6">
                                                            Contributing to the team at Compete Studio, where we develop specialized customer relationship management solutions for
                                                            dance studios nationwide.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                                                            <span className="px-3 py-1 bg-teal-900 rounded-full text-sm">Tailwind</span>
                                                            <span className="px-3 py-1 bg-amber-700 rounded-full text-sm">Firebase</span>
                                                            <span className="px-3 py-1 bg-red-900 rounded-full text-sm">Express</span>
                                                            <span className="px-3 py-1 bg-stone-600 rounded-full text-sm">MS SQL Server</span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                          <div className="md:flex">
                                                <div className="md:w-1/3 h-64 bg-gray-700 flex items-center justify-center">
                                                      <img lazy src={Eugene} alt="Eugene Garden & Harvest Center" className="object-cover h-full w-full" />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">Eugene Garden & Harvest Center</h3>
                                                      <p className="text-gray-300 mb-6">
                                                            A fast, responsive website built with React, Bootstrap, and Tailwind CSS. It emphasizes modern design and performance.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                                                            <span className="px-3 py-1 bg-teal-900 rounded-full text-sm">Tailwind</span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    {/* <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                          <div className="md:flex">
                                                <div className="md:w-1/3 h-64 bg-gray-700 flex items-center justify-center">
                                                      <img
                                                            src="/src/assets/JandJ-Homes.png"
                                                            alt="J&J Home Improvement"
                                                            className="object-cover h-full w-full"
                                                      />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">
                                                            J&J Home Improvement Website
                                                      </h3>
                                                      <p className="text-gray-300 mb-6">
                                                            A modern website featuring detailed service listings and
                                                            project portfolios. Crafted with React and Tailwind CSS.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">
                                                                  React
                                                            </span>
                                                            <span className="px-3 py-1 bg-teal-900 rounded-full text-sm">
                                                                  Tailwind
                                                            </span>
                                                            <span className="px-3 py-1 bg-yellow-900 rounded-full text-sm">
                                                                  JavaScript
                                                            </span>
                                                      </div>
                                                      <a
                                                            href="#project2"
                                                            className="inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                                                      >
                                                            View Project
                                                      </a>
                                                </div>
                                          </div>
                                    </div> */}

                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                          <div className="md:flex">
                                                <div className="md:w-1/3 h-64 bg-gray-700 flex items-center justify-center">
                                                      <img lazy src={SRQ} alt="Sarasota Networks" className="object-cover h-full w-full" />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">Sarasota Networks</h3>
                                                      <p className="text-gray-300 mb-6">
                                                            This homepage includes bill payment integration, secure login, and an interactive help desk. It combines robust services
                                                            with a user-friendly design.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">React</span>
                                                            <span className="px-3 py-1 bg-green-900 rounded-full text-sm">Node.js</span>
                                                            <span className="px-3 py-1 bg-red-900 rounded-full text-sm">API Integration</span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section id="contact" className="min-h-fit py-24 relative">
                        {successModal && (
                              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-gray-800 rounded-lg p-8 relative shadow-xl max-w-md w-full mx-4">
                                          <button onClick={() => setSuccessModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors">
                                                <X className="w-6 h-6" />
                                          </button>
                                          <div className="text-center">
                                                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                      <Check />
                                                </div>
                                                <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                                                <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                          </div>
                                    </div>
                              </div>
                        )}
                        {errorModal && (
                              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-gray-800 rounded-lg p-8 relative shadow-xl max-w-md w-full mx-4">
                                          <button onClick={() => setErrorModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors">
                                                <X className="w-6 h-6" />
                                          </button>
                                          <div className="text-center">
                                                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                      <X />
                                                </div>
                                                <h2 className="text-2xl font-bold text-white mb-2">Error!</h2>
                                                <p className="text-gray-300 border-b border-dashed border-gray-500 pb-4">
                                                      Something went wrong. Please either try again, or reach out to me via email
                                                </p>
                                                <p className="mt-4">
                                                      <a href="mailto:daniel@daniel-p.dev">daniel@daniel-p.dev</a>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        )}
                        <div className="absolute inset-0 bg-slate-700 bg-opacity-60 backdrop-blur-sm z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get In Touch</h2>

                              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                                          <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                                          <p className="text-gray-300 mb-8">
                                                Ready to take your online presence to the next level? I'm here to help turn your vision into reality. Whether you need a brand new
                                                website, a redesign, or custom web development, I'm just a message away.
                                          </p>

                                          <div className="space-y-4">
                                                <div className="flex items-center">
                                                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                                                            <Mail />
                                                      </div>
                                                      <div>
                                                            <div className="text-sm text-gray-400">Email</div>
                                                            <a href="mailto:daniel@daniel-p.dev" className="hover:text-blue-400" target="_blank">
                                                                  daniel@daniel-p.dev
                                                            </a>
                                                      </div>
                                                </div>
                                                <div className="flex items-center">
                                                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                                                            <Linkedin />
                                                      </div>
                                                      <div>
                                                            <div className="text-sm text-gray-400">LinkedIn</div>
                                                            <a href="https://www.linkedin.com/in/daniel-poprawski/" className="hover:text-blue-400" target="_blank">
                                                                  linkedin.com/in/daniel-poprawski
                                                            </a>
                                                      </div>
                                                </div>
                                                <div className="flex items-center">
                                                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                                                            <Github />
                                                      </div>
                                                      <div>
                                                            <div className="text-sm text-gray-400">GitHub</div>
                                                            <a href="https://github.com/DanielPoprawski" className="hover:text-blue-400" target="_blank">
                                                                  github.com/DanielPoprawski
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                                          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                                                <input type="hidden" name="form-name" value="contact" />
                                                <div hidden>
                                                      <input name="bot-field" />
                                                </div>

                                                <div className="mb-6">
                                                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                            Your Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={(e) => handleChange(e)}
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      />
                                                </div>

                                                <div className="mb-6">
                                                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                            Your Email
                                                      </label>
                                                      <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={(e) => handleChange(e)}
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      />
                                                </div>

                                                <div className="mb-6">
                                                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                            Subject
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="subject"
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={(e) => handleChange(e)}
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      />
                                                </div>

                                                <div className="mb-6">
                                                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                            Your Message
                                                      </label>
                                                      <textarea
                                                            id="message"
                                                            name="message"
                                                            rows="5"
                                                            value={formData.message}
                                                            onChange={(e) => handleChange(e)}
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      ></textarea>
                                                </div>

                                                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
                                                      Send Message
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
}
