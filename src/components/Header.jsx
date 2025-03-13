import { useScroll } from "../context/ContextWrapper";

export default function Header() {
      const { isScrolled, scrollTo } = useScroll();

      return (
            <nav
                  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                        isScrolled ? "bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg py-2" : "py-4"
                  }`}
            >
                  <div className="container mx-auto px-6 flex justify-between items-center">
                        <div className="font-bold text-xl text-white">Daniel Poprawski</div>

                        <div className="hidden md:flex space-x-8">
                              <button
                                    onClick={() => scrollTo("home")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Home
                              </button>
                              <button
                                    onClick={() => scrollTo("projects")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Projects
                              </button>
                              <button
                                    onClick={() => scrollTo("skills")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Skills
                              </button>
                              <button
                                    onClick={() => scrollTo("contact")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Contact
                              </button>
                        </div>

                        <div className="flex gap-4">
                              <a
                                    href="/gallery"
                                    className="p-2 rounded-md transition-all bg-gray-800 bg-opacity-60 hover:bg-blue-600"
                              >
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="#fff"
                                          viewBox="0 0 384.97 384.97"
                                    >
                                          <g>
                                                <path d="M144.364 0H24.061C10.767 0 0 10.767 0 24.061v120.303c0 13.281 10.767 24.061 24.061 24.061h120.303c13.293 0 24.061-10.779 24.061-24.061V24.061C168.424 10.767 157.657 0 144.364 0m0 144.364H24.061V24.061h120.303zM360.909 0H240.606c-13.293 0-24.061 10.767-24.061 24.061v120.303c0 13.281 10.767 24.061 24.061 24.061h120.303c13.281 0 24.061-10.779 24.061-24.061V24.061C384.97 10.767 374.191 0 360.909 0m0 144.364H240.606V24.061h120.303zM360.909 216.545H240.606c-13.293 0-24.061 10.779-24.061 24.061v120.303c0 13.293 10.767 24.061 24.061 24.061h120.303c13.281 0 24.061-10.767 24.061-24.061V240.606c0-13.293-10.779-24.061-24.061-24.061m0 144.364H240.606V240.606h120.303zM144.364 216.545H24.061C10.767 216.545 0 227.325 0 240.606v120.303c0 13.293 10.767 24.061 24.061 24.061h120.303c13.293 0 24.061-10.767 24.061-24.061V240.606c-.001-13.293-10.768-24.061-24.061-24.061m0 144.364H24.061V240.606h120.303z"></path>
                                          </g>
                                    </svg>
                              </a>
                              <a
                                    href="#contact"
                                    className="p-2 rounded-md transition-all bg-gray-800 bg-opacity-60 hover:bg-blue-600"
                              >
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
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
                              </a>
                        </div>
                  </div>
            </nav>
      );
}
