import React from "react";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";
import Card from "./components/Card";

export default function Home() {
      return (
            <div className="min-h-screen ">
                  <div className="fixed right-32 top-20 flex gap-10">
                        <button className="">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlSpace="preserve"
                                    id="Capa_1"
                                    width="64px"
                                    height="64px"
                                    fill="#fff"
                                    version="1.1"
                                    viewBox="0 0 384.97 384.97"
                              >
                                    <g id="Grid">
                                          <path d="M144.364 0H24.061C10.767 0 0 10.767 0 24.061v120.303c0 13.281 10.767 24.061 24.061 24.061h120.303c13.293 0 24.061-10.779 24.061-24.061V24.061C168.424 10.767 157.657 0 144.364 0m0 144.364H24.061V24.061h120.303zM360.909 0H240.606c-13.293 0-24.061 10.767-24.061 24.061v120.303c0 13.281 10.767 24.061 24.061 24.061h120.303c13.281 0 24.061-10.779 24.061-24.061V24.061C384.97 10.767 374.191 0 360.909 0m0 144.364H240.606V24.061h120.303zM360.909 216.545H240.606c-13.293 0-24.061 10.779-24.061 24.061v120.303c0 13.293 10.767 24.061 24.061 24.061h120.303c13.281 0 24.061-10.767 24.061-24.061V240.606c0-13.293-10.779-24.061-24.061-24.061m0 144.364H240.606V240.606h120.303zM144.364 216.545H24.061C10.767 216.545 0 227.325 0 240.606v120.303c0 13.293 10.767 24.061 24.061 24.061h120.303c13.293 0 24.061-10.767 24.061-24.061V240.606c-.001-13.293-10.768-24.061-24.061-24.061m0 144.364H24.061V240.606h120.303z"></path>
                                    </g>
                              </svg>
                        </button>
                        <button className="">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    fill="none"
                                    viewBox="0 0 24 24"
                              >
                                    <path
                                          stroke="#fff"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="M20 4 3 11l7 3M20 4l-7 17-3-7M20 4 10 14"
                                    ></path>
                              </svg>
                        </button>
                  </div>
                  {/* First slide */}
                  <div className="min-h-screen px-4 flex items-center justify-center mx-auto bg-gray-900 bg-opacity-75">
                        <div className="text-white my-auto space-y-8 text-center justify-center flex-col justify-items-center">
                              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mx-auto">
                                    Welcome to my portfolio.
                              </h2>
                              <h3 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto">
                                    I'm Daniel Poprawski, a web developer from Sarasota. I focus on creating websites
                                    that reflect your brand and achieve results. With a keen eye for design and a
                                    commitment to quality, I build modern websites that engage visitors and help turn
                                    them into customers. Let's work together to enhance your online presence and make
                                    the most of your business through a user-friendly website.
                              </h3>
                              <button>
                                    <svg
                                          className="w-10 h-10 hover:w-12 hover:h-12 transition-all"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                          viewBox="0 0 24 24"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                    >
                                          <polyline points="6 9 12 15 18 9" />
                                    </svg>
                              </button>
                        </div>
                  </div>
                  {/* Second slide */}
                  <div className="min-h-fit py-16 bg-slate-700 bg-opacity-75">
                        <div className="flex flex-col md:flex-row justify-center gap-8 p-16 h-fit-content items-stretch">
                              <Quiz />
                              <Login />
                        </div>
                  </div>
                  {/* Third Slide */}
                  <div className="min-h-fit py-16 bg-zinc-800 bg-opacity-75">
                        <div className="flex flex-col md:flex-row justify-center gap-8 p-16 h-fit-content items-stretch">
                              <Swiper
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    freeMode={true}
                                    loop={true}
                                    modules={[FreeMode]}
                              >
                                    <SwiperSlide>
                                          <Card title={"Eugene Garden & Harvest Center"} img={"/src/assets/Eugene.png"}>
                                                A fast, responsive website built with React, Bootstrap, and Tailwind
                                                CSS. It emphasizes modern design and performance.
                                          </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <Card
                                                title={"J&J Home Improvement Website"}
                                                img={"/src/assets/JandJ-Homes.png"}
                                          >
                                                A modern website featuring detailed service listings and project
                                                portfolios. Crafted with React and Tailwind CSS.
                                          </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <Card title={"Sarasota Networks"} img={"/src/assets/SRQ-Networks.png"}>
                                                This homepage includes bill payment integration, secure login, and an
                                                interactive help desk. It combines robust services with a user-friendly
                                                design.
                                          </Card>
                                    </SwiperSlide>
                              </Swiper>
                        </div>
                  </div>
                  <div className="min-h-fit bg-slate-700 bg-opacity-75">
                        <div className="flex flex-col md:flex-row justify-center gap-8 p-16 h-fit-content items-stretch"></div>
                  </div>
            </div>
      );
}
