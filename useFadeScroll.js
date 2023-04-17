import { useEffect } from "react";

/**
 * Documentation:
 *
 * 1- Accepts array of useRef() for elements
 *
 * 2- In the beggining of a component do:
 *
 *    - import { useRef } from "react";
 *    - import useFadeScroll from "@/components/hooks/useFadeScroll";
 *
 * 3- In component body you do:
 *
 *    - const elementsRef = useRef([]);
 *    - useFadeScroll(elementsRef.current);
 *
 * 4- For every element you want to use this on, you need to add for that element the following:
 *
 *    - className="faded" | Can be customized in global.css for transition effects, opacity 0
 *    - ref={(el) => (elementsRef.current[0] = el)} | increment for every extra element
 */

function useFadeScroll(elements) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1; // Set opacity to 1 when element is visible
        } else {
          entry.target.style.transition = "opacity 0.8s ease-in-out"; // Add transition effect
          entry.target.style.opacity = 0; // Set opacity to 0 when element is not visible
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default useFadeScroll;
