import React, { useState, useEffect } from "react";
import * as VFX from "react-vfx";

// const confetti = require('canvas-confetti');
import confetti from "canvas-confetti";
import { FaAngleDoubleRight, FaHome } from "react-icons/fa";
// let gifts = ['10,000', '5000', '2000', '50,000', '10,000', '75,000']
// const randomElement = gifts[Math.floor(Math.random() * gifts.length)];
// const max =
function ShowLotteryPage(props) {
  const randomElement1 = Math.floor(Math.random() * (99 - 10) + 10) + ",000";

  var end = Date.now() + 10 * 100;
  const [randomElement, setRandomElement] = useState(randomElement1);
  const [showVFX, setShowVFX] = useState(false);
  const [color, setColor] = useState("#e2f2fb");
  // go Buckeyes!
  var colors = ["#bb0000", "#ffffff"];
  var intervalHandle;
  useEffect(() => {
    startIntervalTask();
  }, []);
  const startIntervalTask = () => {
    intervalHandle = setInterval(() => {
      console.log("in interval");
      // execute this code after every 5000 miliseconds
      setRandomElement(Math.floor(Math.random() * (99 - 10 + 1) + 10) + ",000");
      setColor(getRandomColor());
    }, 100);

    setTimeout(() => {
      // setRandomElement(Math.floor(Math.random() * (99 - 10) + 10) + ',000')
      // stopIntervalTask()
      console.log("in set timeout");
      clearInterval(intervalHandle);
      if (props.targetPoints === "more") {
        setRandomElement(
          Math.floor(Math.random() * (99 - 85 + 1) + 85) + ",000"
        );
      } else {
        setRandomElement(
          Math.floor(Math.random() * (85 - 70 + 1) + 70) + ",000"
        );
      }

      setShowVFX(true);
      (function frame() {
        confetti({
          particleCount: 500,
          angle: 60,
          spread: 90,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 500,
          angle: 120,
          spread: 90,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 3000);
  };

  const stopIntervalTask = () => {
    clearInterval(intervalHandle);
  };

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <VFX.VFXProvider>
      <div className="container">
        <div className="col-md-12">
          {!showVFX && (
            <span className="lottery" style={{ color: color }}>
              {randomElement}
            </span>
          )}
          {showVFX && (
            <span className="lottery" style={{ color: "black" }}>
              {randomElement}
            </span>
          )}
          {/* {showVFX && <VFX.VFXSpan className='lottery'>{randomElement}</VFX.VFXSpan>} */}
        </div>
        {/* <button onClick={() => props.setPage('showNumbers')}>next</button> */}
        <FaHome
          className="nextIcon"
          onClick={() => {
            props.setPage("showNumbers");
          }}
        />
      </div>
    </VFX.VFXProvider>
  );
}

export default ShowLotteryPage;
