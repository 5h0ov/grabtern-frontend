import React, { useState, useEffect } from "react";
import styles from "../../styles/scrolltotop.module.css"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {isVisible && (
        <div id="progress">
          <span id="progress-value" onClick={scrollToTop}>
            &#x1F815;
          </span>
        </div>
      )}
    </section>
  );
};

export default ScrollToTopButton;
