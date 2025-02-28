import LI_Icon from "../assets/linkedin.jsx";
import GH_Icon from "../assets/github.jsx";

export default function Footer() {
      return (
            <footer className="relative py-12">
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-80 z-0"></div>
                  <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                              <div className="mb-6 md:mb-0">
                                    <h2 className="text-2xl font-bold">Daniel Poprawski</h2>
                                    <p className="text-gray-400 mt-2">Web Developer</p>
                              </div>

                              <div className="flex space-x-8">
                                    <a href="#home" className="hover:text-blue-400 transition-colors">
                                          Home
                                    </a>
                                    <a href="#projects" className="hover:text-blue-400 transition-colors">
                                          Projects
                                    </a>
                                    <a href="#skills" className="hover:text-blue-400 transition-colors">
                                          Skills
                                    </a>
                                    <a href="#contact" className="hover:text-blue-400 transition-colors">
                                          Contact
                                    </a>
                              </div>
                        </div>

                        <hr className="border-gray-800 my-8" />

                        <div className="text-center text-gray-500 text-sm">
                              &copy; {new Date().getFullYear()} Daniel Poprawski. All rights reserved.
                        </div>
                  </div>
            </footer>
      );
}
