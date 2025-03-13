import { createContext } from "react";
import { useState, useContext, useEffect, useCallback } from "react";

const ScrollContext = createContext(null);

export default function ContextWrapper({ children }) {
      const [isScrolled, setIsScrolled] = useState(false);
      const [scrollPosition, setScrollPosition] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 50);
                  setScrollPosition({
                        x: window.pageXOffset,
                        y: window.pageYOffset,
                  });
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      const scrollTo = useCallback((target) => {
            if (typeof target === "object" && "x" in target && "y" in target) {
                  window.scrollTo({
                        left: target.x,
                        top: target.y,
                        behavior: "smooth",
                  });
            } else if (typeof target === "string") {
                  const element = document.getElementById(target);
                  if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                  }
            } else if (target instanceof Element) {
                  target.scrollIntoView({ behavior: "smooth" });
            }
      }, []);

      return (
            <ScrollContext.Provider value={{ scrollPosition, isScrolled, setIsScrolled, scrollTo }}>
                  {children}
            </ScrollContext.Provider>
      );
}

export const useScroll = () => {
      const context = useContext(ScrollContext);
      if (context === null) {
            throw new Error("useScroll must be used within a ScrollProvider");
      }
      return context;
};
