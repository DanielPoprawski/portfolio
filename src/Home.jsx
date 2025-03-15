import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
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

export default function Home() {
      const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
            }
      };

      return (
            <div className="min-h-screen text-white">
                  {/* Hero Section */}
                  <section id="home" className="min-h-screen px-4 flex items-center justify-center relative">
                        {/* Translucent overlay to ensure text readability while showing video */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

                        <div className="text-white space-y-8 text-center z-10 max-w-5xl">
                              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter animate-fadeIn">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                          Daniel Poprawski
                                    </span>
                              </h1>

                              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mx-auto animate-fadeIn animation-delay-200">
                                    Web Developer
                              </h2>

                              <h3 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto animate-fadeIn animation-delay-300">
                                    I'm a web developer from Sarasota. I focus on creating websites that reflect your
                                    brand and achieve results. With a keen eye for design and a commitment to quality, I
                                    build modern websites that engage visitors and help turn them into customers.
                              </h3>
                              <button
                                    onClick={() => scrollToSection("skills")}
                                    className="block mx-auto mt-16 animate-bounce"
                              >
                                    <ChevronDown className="w-10 h-10" />
                              </button>
                        </div>
                  </section>

                  {/* Skills Section */}
                  <section id="skills" className="min-h-fit py-24 relative">
                        <div className="absolute inset-0 bg-slate-700 bg-opacity-85 backdrop-blur-md z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                              <h2 className="text-4xl md:text-5xl mb-6 font-bold text-center">My Skills</h2>
                              <div className="text-center mx-auto text-lg font-semibold max-w-lg text-gray-200 mb-16">
                                    Check out some engaging and interactive components that I can put on your website to
                                    increase visitor session duration
                              </div>

                              <div className="flex flex-col md:flex-row justify-center gap-4 items-stretch">
                                    <Swiper
                                          slidesPerView={2}
                                          modules={[Navigation, Autoplay]}
                                          spaceBetween={16}
                                          navigation={true}
                                          className="cursor-pointer mb-16"
                                    >
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all flex items-center justify-center">
                                                      <Quiz />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all flex items-center justify-center">
                                                      <Login />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all flex items-center justify-center">
                                                      <ProfileEditor />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all flex items-center justify-center">
                                                      <ReviewSection />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all flex items-center justify-center">
                                                      <SearchBar />
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>

                              {/* Skills grid */}
                              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"> */}
                              <Swiper
                                    slidesPerView={4}
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={16}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    className="cursor-pointer"
                              >
                                    {/* React skill */}
                                    <SwiperSlide>
                                          <div className="bg-gray-800 p-6 rounded-lg text-center">
                                                <div className="text-blue-400 text-5xl mb-4">
                                                      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                            <path
                                                                  fill="currentColor"
                                                                  d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9m-4.95-8.56l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold text-xl">React</h3>
                                                <p className="text-gray-400 mt-2">
                                                      Modern UI development with component-based architecture
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Utility-first CSS framework for rapid UI development
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Server-side JavaScript runtime for scalable applications
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Frontend framework for responsive and mobile-first websites
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Object-oriented programming language for cross-platform
                                                      applications
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Dynamic programming language for interactive web applications
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Markup language for structuring content on the web
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Style sheet language for designing and layout of web pages
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Typed superset of JavaScript that compiles to plain JavaScript
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Distributed version control system for tracking changes in code
                                                </p>
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
                                                <p className="text-gray-400 mt-2">
                                                      Platform for automated deployment, serverless functions, and forms
                                                </p>
                                          </div>
                                    </SwiperSlide>
                              </Swiper>
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
                                                      <img
                                                            src="/src/assets/Eugene.png"
                                                            alt="Eugene Garden & Harvest Center"
                                                            className="object-cover h-full w-full"
                                                      />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">
                                                            Eugene Garden & Harvest Center
                                                      </h3>
                                                      <p className="text-gray-300 mb-6">
                                                            A fast, responsive website built with React, Bootstrap, and
                                                            Tailwind CSS. It emphasizes modern design and performance.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">
                                                                  React
                                                            </span>
                                                            <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                                                                  Bootstrap
                                                            </span>
                                                            <span className="px-3 py-1 bg-teal-900 rounded-full text-sm">
                                                                  Tailwind
                                                            </span>
                                                      </div>
                                                      <a
                                                            href="#project1"
                                                            className="inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                                                      >
                                                            View Project
                                                      </a>
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
                                                      <img
                                                            src="/src/assets/SRQ-Networks.png"
                                                            alt="Sarasota Networks"
                                                            className="object-cover h-full w-full"
                                                      />
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">Sarasota Networks</h3>
                                                      <p className="text-gray-300 mb-6">
                                                            This homepage includes bill payment integration, secure
                                                            login, and an interactive help desk. It combines robust
                                                            services with a user-friendly design.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">
                                                                  React
                                                            </span>
                                                            <span className="px-3 py-1 bg-green-900 rounded-full text-sm">
                                                                  Node.js
                                                            </span>
                                                            <span className="px-3 py-1 bg-red-900 rounded-full text-sm">
                                                                  API Integration
                                                            </span>
                                                      </div>
                                                      <a
                                                            href="#project3"
                                                            className="inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                                                      >
                                                            View Project
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section id="contact" className="min-h-fit py-24 relative">
                        <div className="absolute inset-0 bg-slate-700 bg-opacity-60 backdrop-blur-sm z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get In Touch</h2>

                              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                                          <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                                          <p className="text-gray-300 mb-8">
                                                Ready to take your online presence to the next level? I'm here to help
                                                turn your vision into reality. Whether you need a brand new website, a
                                                redesign, or custom web development, I'm just a message away.
                                          </p>

                                          <div className="space-y-4">
                                                <div className="flex items-center">
                                                      <div className="bg-blue-600 p-3 rounded-full mr-4">
                                                            <Mail />
                                                      </div>
                                                      <div>
                                                            <div className="text-sm text-gray-400">Email</div>
                                                            <a
                                                                  href="mailto:daniel@daniel-p.dev"
                                                                  className="hover:text-blue-400"
                                                                  target="_blank"
                                                            >
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
                                                            <a
                                                                  href="https://www.linkedin.com/in/daniel-poprawski/"
                                                                  className="hover:text-blue-400"
                                                                  target="_blank"
                                                            >
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
                                                            <a
                                                                  href="https://github.com/DanielPoprawski"
                                                                  className="hover:text-blue-400"
                                                                  target="_blank"
                                                            >
                                                                  github.com/DanielPoprawski
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                                          <form>
                                                <div className="mb-6">
                                                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                            Your Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="name"
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
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      />
                                                </div>

                                                <div className="mb-6">
                                                      <label
                                                            htmlFor="subject"
                                                            className="block text-sm font-medium mb-2"
                                                      >
                                                            Subject
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="subject"
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      />
                                                </div>

                                                <div className="mb-6">
                                                      <label
                                                            htmlFor="message"
                                                            className="block text-sm font-medium mb-2"
                                                      >
                                                            Your Message
                                                      </label>
                                                      <textarea
                                                            id="message"
                                                            rows="5"
                                                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                                                      ></textarea>
                                                </div>

                                                <button
                                                      type="submit"
                                                      className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
                                                >
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
