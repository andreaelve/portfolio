import React, { useEffect, useRef, useState, useCallback } from "react";
import '../styles/carousel.css';

function Carousel( { children } ) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const [looperInstances, setLooperInstances] = useState(1);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;
        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const instanceWidth = width / innerRef.current.children.length;
        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
        resetAnimation()
    }, [looperInstances]);

    const resetAnimation = () => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "false");
    
          setTimeout(() => {
            if (innerRef?.current) {
              innerRef.current.setAttribute("data-animate", "true");
            }
          }, 25);
        }
      }

    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <div className="carousel" ref={outerRef}>
          <div className="carousel_innerList" ref={innerRef}>
          {[...Array(looperInstances)].map((_, i) => (
            <div
              key={i}
              className="carousel_listInstance"
            >
              {children}
            </div>
          ))}
          </div>
        </div>
      );
}

export default Carousel;