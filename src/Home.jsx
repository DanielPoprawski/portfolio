import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

                              <div className="flex justify-center gap-6 pt-6 animate-fadeIn animation-delay-400">
                                    <button
                                          onClick={() => scrollToSection("projects")}
                                          className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center"
                                    >
                                          View My Work
                                          <svg
                                                className="w-5 h-5 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                          >
                                                <polyline points="7 13 12 18 17 13" />
                                                <polyline points="7 6 12 11 17 6" />
                                          </svg>
                                    </button>

                                    <button
                                          onClick={() => scrollToSection("contact")}
                                          className="px-8 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all font-semibold"
                                    >
                                          Contact Me
                                    </button>
                              </div>

                              <button
                                    onClick={() => scrollToSection("skills")}
                                    className="block mx-auto mt-16 animate-bounce"
                              >
                                    <svg
                                          className="w-10 h-10 hover:text-blue-400 transition-colors"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          viewBox="0 0 24 24"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                    >
                                          <polyline points="6 9 12 15 18 9" />
                                    </svg>
                              </button>
                        </div>
                  </section>

                  {/* Skills Section */}
                  <section id="skills" className="min-h-fit py-24 relative">
                        <div className="absolute inset-0 bg-slate-700 bg-opacity-85 backdrop-blur-md z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Skills</h2>

                              <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
                                    <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all">
                                          <Quiz />
                                    </div>

                                    <div className="bg-gray-800 rounded-xl p-8 shadow-lg flex-1 transition-all">
                                          <Login />
                                    </div>
                              </div>

                              {/* Skills grid */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                                    {/* React skill */}
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

                                    {/* Tailwind CSS skill */}
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

                                    {/* Node.js skill */}
                                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                                          <div className="text-green-500 text-5xl mb-4">
                                                <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
                                                      <path
                                                            fill="currentColor"
                                                            d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.04-.02-.09-.06-.1-.09V7.59c0-.04.06-.08.09-.1l7.44-4.3c.04-.02.08-.02.12 0l7.44 4.3c.04.02.09.06.1.09v8.82c0 .04-.06.08-.09.1l-7.44 4.3c-.04.02-.08.02-.12 0l-1.99-1.12c-.08-.04-.18-.04-.26 0-.26.18-.63.27-.95.27-1.05 0-1.69-.46-2.39-1.25-.06-.07-.15-.09-.24-.06-.09.04-.15.12-.15.21v1.21c0 .14.08.27.19.33 1.13.64 2.23.99 3.32.99.71 0 1.37-.17 1.97-.51l2.61-1.5c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2m3.85 6.93c-2.05 0-3.29.89-3.29 2.4 0 1.62 1.26 2.08 3.3 2.28 2.44.24 2.63.6 2.63 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47-.01-.1-.09-.17-.2-.17h-.83c-.11 0-.21.09-.2.2.17 1.83 1.36 2.68 3.78 2.68 2.26 0 3.57-.89 3.57-2.44 0-1.54-1.06-1.96-3.27-2.25-2.24-.3-2.65-.46-2.65-1.08 0-.49.21-1.13 2.15-1.13 1.71 0 2.36.37 2.62 1.54.02.09.1.16.2.16h.83c.06 0 .11-.02.15-.07.04-.04.06-.1.05-.16-.14-1.7-1.27-2.48-3.86-2.48z"
                                                      />
                                                </svg>
                                          </div>
                                          <h3 className="font-bold text-xl">Node.js</h3>
                                          <p className="text-gray-400 mt-2">
                                                Server-side JavaScript runtime for scalable applications
                                          </p>
                                    </div>

                                    {/* Bootstrap skill */}
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

                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
                                    </div>

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

                                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                          <div className="md:flex">
                                                <div className="md:w-1/3 h-64 bg-gray-700 flex items-center justify-center">
                                                      <div className="text-gray-500 text-lg">Image Placeholder</div>
                                                </div>
                                                <div className="p-8 md:w-2/3">
                                                      <h3 className="text-2xl font-bold mb-4">
                                                            Beachside Resort Booking
                                                      </h3>
                                                      <p className="text-gray-300 mb-6">
                                                            A full-featured booking platform for a luxury beachside
                                                            resort in Sarasota. Features include real-time availability,
                                                            secure payments, and virtual tours.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                            <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">
                                                                  React
                                                            </span>
                                                            <span className="px-3 py-1 bg-green-900 rounded-full text-sm">
                                                                  Node.js
                                                            </span>
                                                            <span className="px-3 py-1 bg-purple-900 rounded-full text-sm">
                                                                  Express
                                                            </span>
                                                            <span className="px-3 py-1 bg-yellow-900 rounded-full text-sm">
                                                                  MongoDB
                                                            </span>
                                                      </div>
                                                      <a
                                                            href="#project4"
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

                  {/* Contact Section */}
                  {/* Contact Section */}
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
                                                                  href="mailto:daniel@example.com"
                                                                  className="hover:text-blue-400"
                                                                  target="_blank"
                                                            >
                                                                  daniel@example.com
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
