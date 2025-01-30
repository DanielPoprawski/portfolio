import LI_Icon from "../assets/linkedin.jsx";
import GH_Icon from "../assets/github.jsx";

export default function Footer() {
      return (
            <div className="bg-gray-500 m-auto text-center p-4 text-white bg-opacity-75">
                  <p className="flex flex-row items-center justify-center gap-2">
                        Connect with me on social media:
                        <a href="https://www.linkedin.com/in/daniel-poprawski" target="_blank" rel="noopener">
                              <LI_Icon />
                        </a>
                        <a href="https://github.com/DanielPoprawski" target="_blank" rel="noopener">
                              <GH_Icon />
                        </a>
                  </p>
                  <div className="text-sm">© 2025 Daniel Poprawski</div>
            </div>
      );
}
