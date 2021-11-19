import React, { useEffect, useState, useRef } from "react";
import Logo from '/logo.png'
const circleConfig = {
  viewBox: "0 0 38 38",
  x: "19",
  y: "19",
  radio: "6.91549430918954"
};

const Loader = ({ activeClass, setActiveClass }) => {
  const [load, setLoad] = useState(0);
  // const [activeClass, setActiveClass] = useState(true);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    // Your custom logic here
    setLoad(load + 1);
    if (load === 100) {
      setLoad(load);
      setActiveClass(false);
    }
  }, 20);

  return (
    <div
      className={activeClass ? "loader-wrapper is-active" : "loader-wrapper"}
    >
      <div className="loader-center">
        <svg className="spiner" viewBox={circleConfig.viewBox}>
          <circle
            className="donut-ring"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke="#2f2f2f"
            strokeWidth={0.3}
            // strokeDasharray={trailSpaced ? 1 : 0}
          />

          <circle
            className="donut-segment"
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke="red"
            strokeWidth={0.3}
            strokeDasharray={`${load} ${100 - load}`}
            // strokeDashoffset={INITIAL_OFFSET}
          />
        </svg>
        <svg
          className="center-logo"
          width="72"
          height="43"
          viewBox="0 0 72 43"
          fill="none"
         src={Logo}
        >
        
        </svg>
      </div>

   
    </div>
  );
};

export default Loader;