import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShowNumbers from "./showNumbers";
import ShowQuestion from "./showQuestion";
import ShowLotteryPage from "./showLotteryPage";
import Particles from "react-particles-js";
import ParticlesBg from "particles-bg";
import * as VFX from "react-vfx";
import _ from "underscore";

let allQues = [
  { question: "Gold అనగా దేనిని చెప్తుంది ?" },
  { question: "Gold అనగా దేనిని చెప్తుంది ?" },
  { question: "యోహాను ౩:16 (John 3:16)  లో ఏమి ఉంది ?" },
  { question: "యోహాను ౩:16 (John 3:16)  లో ఏమి ఉంది ?" },
  { question: "పాపమును ఏ రంగుతో పోలుస్తాము ?" },
  { question: "పాపమును ఏ రంగుతో పోలుస్తాము ?" },
  { question: "Red color ఏమి చెప్తుంది  ?" },
  { question: "Red color ఏమి చెప్తుంది  ?" },
  { question: "Green color ఏమి చెప్తుంది  ?" },
  { question: "Green color ఏమి చెప్తుంది  ?" },
  { question: "యోహాను ౩:16 (John 3:16) ఏమి color గురించి  చెప్తుంది   ?" },
  { question: "యోహాను ౩:16 (John 3:16) ఏమి color గురించి  చెప్తుంది   ?" },
  { question: "పరలోక పట్టణం లో 12 12 ?" },
  { question: "పరలోక పట్టణం లో 12 12 ?" },
  { question: "పాపం చెయ్యటం వలన ఏమి పోగొట్టుకుంటున్నారు  ?" },
  { question: "పాపం చెయ్యటం వలన ఏమి పోగొట్టుకుంటున్నారు  ?" },
  { question: "మనము ఎవరికి సమీపంగా ఉండాలి  ?" },
  { question: "మనము ఎవరికి సమీపంగా ఉండాలి  ?" },
  { question: "దేవుడు మనలని ఎలా ఉండమని చెప్తున్నాడు  ?" },
  { question: "దేవుడు మనలని ఎలా ఉండమని చెప్తున్నాడు  ?" },
  { question: "పవిత్రతకు ఏమి సూచిస్తుంది   ?" },
  { question: "పవిత్రతకు ఏమి సూచిస్తుంది   ?" },
  { question: "White color ఏమి చెప్తుంది  ?" },
  { question: "White color ఏమి చెప్తుంది  ?" }
];

allQues = shuffleArray(allQues);
// allQues = _.flatten(
//   allQues.map((d, i) => {
//     return [d, d];
//   })
// );

// allQues = _.flatten(allQues);
console.log("in allQuest after dublin g", allQues);

allQues = allQues.map((d, i) => {
  d.key = i + 1;
  d.answered = false;
  return d;
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }

  const [allQuestions, setAllQuestions] = useState(allQues);
  const [count, setCount] = useState(allQues.length);
  const [page, setPage] = useState("showNumbers");
  const [currentQues, setCurrentQues] = useState(0);

  const selectQuestion = (key) => {
    setPage("showQuestion");
    setCurrentQues(key);
  };

  return (
    <VFX.VFXProvider>
      <div className="App">
        <ParticlesBg type="custom" config={config} bg={true} />
        {/* <h1>LW KGT QUIZ</h1> */}
        {/* <VFX.VFXSpan className='headTitle' shader="uvGradient">LW KGT QUIZ</VFX.VFXSpan> */}
        <span className="headTitle">LW KGT QUIZ</span>
        {page === "showNumbers" && (
          <ShowNumbers
            allQuestions={allQuestions}
            selectQuestion={selectQuestion}
          />
        )}
        {page === "showQuestion" && (
          <ShowQuestion
            allQuestions={allQuestions}
            currentQues={currentQues}
            setPage={setPage}
            setAllQuestions={setAllQuestions}
          />
        )}
        {page === "showLottery" && (
          <ShowLotteryPage
            allQuestions={allQuestions}
            currentQues={currentQues}
            setPage={setPage}
          />
        )}
      </div>
    </VFX.VFXProvider>
  );
}

export default App;
