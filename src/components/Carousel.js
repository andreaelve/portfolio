import React, { useEffect, useRef, useState, useCallback } from "react";
import '../styles/carousel.css';

function Carousel( { children } ) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const [looperInstances, setLooperInstances] = useState(1);
    const [iconList, setIconList] = useState([[...children]]);

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
          }, 20);
        }
      }

    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <div className="looper" ref={outerRef}>
          <div className="looper__innerList" ref={innerRef}>
          {[...Array(looperInstances)].map((_, i) => (
            <div
              key={i}
              className="looper__listInstance"
            >
              {children}
            </div>
          ))}
          </div>
        </div>
      );
}

export default Carousel;