import { useScroll } from "../context/ContextWrapper";
import DLogoCurvy from "/public/DLogoCurvy.svg";

export default function Header() {
      const { isScrolled, scrollTo } = useScroll();

      return (
            <nav
                  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                        isScrolled ? "bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg py-2" : "py-4"
                  }`}
            >
                  <div className="container mx-auto px-6 flex justify-between items-center">
                        <div className="font-bold text-xl text-white flex gap-4">
                              <img src={DLogoCurvy} className="w-8 h-8" />
                              Daniel Poprawski
                        </div>

                        <div className="hidden md:flex space-x-8">
                              <button
                                    onClick={() => scrollTo("home")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Home
                              </button>
                              <button
                                    onClick={() => scrollTo("skills")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Skills
                              </button>
                              <button
                                    onClick={() => scrollTo("projects")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Projects
                              </button>
                              <button
                                    onClick={() => scrollTo("contact")}
                                    className="hover:text-blue-400 transition-colors text-white"
                              >
                                    Contact
                              </button>
                        </div>
                  </div>
            </nav>
      );
}
