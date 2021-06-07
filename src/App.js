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

allQues = [
  { question: "దానియేలు గ్రంధం లో మొత్తం ఎన్ని అధ్యయాలు ఉన్నాయి ?" },
  { question: "దానియేలు గ్రంధాన్ని ఎవరు వ్రాసారు ?" },
  { question: "బబులోను రాజ్యానికి రాజు ఎవరు ?" },
  { question: "నెబుకద్నెజరు ఏ దేశం మీదకి దాడి చేసాడు ?" },
  { question: "దానియేలుకు  రాజు గారు ఏ బిరుదును పెట్టారు ?" },
  { question: "మండుచున్న అగ్నిగుండంలో ఎవరిని వేశారు ?" },
  {
    question:
      "దానియేలు , అతని స్నేహితులు బబులోను రాజ్యంలో ఎలాంటి ఆహరం తీసుకున్నారు ?"
  },
  { question: "రాజుగారికి వచ్చిన కలలో ప్రతిమ ఒక్క తల దేనితో చేయబడింది ?" },
  {
    question:
      "మండుచున్న అగ్నిగుండాన్ని ఎన్ని రెట్లు  అధికం చేయమని రాజు గారు చెప్పారు ?"
  },
  {
    question: "షడ్రక్, మేషాక్, అబేద్నెగో  లను అగ్ని గుండం నుండి ఎవరు కాపాడారు ?"
  },
  { question: "బబులోనులో దానియేలు ఏ భాషను నేర్చుకున్నారు ?" },
  {
    question:
      "బబులోను రాజైన  నెబుకద్నెజరు దూర అను మైదానం లో ఏ ప్రతిమను నిలువబెట్టారు ?"
  },
  { question: "దానియేలు గారు ఎలాంటి ఆత్మను కలిగివున్నారు ?" },
  { question: "రాజుగారికి వచ్చిన కలల భావం ఎవరు చెప్పగలిగారు ?" },
  { question: "దేనినిబట్టి  నెబుకద్నెజరుకు పశువు మనసు వచ్చింది ?" },
  { question: "రాజుగారి కలలో చెట్టు నరికివేయబడి మొద్దు దేనితో కట్ట బడింది ?" },
  { question: "ఎన్ని సంవత్సరాలవరకు నెబుకద్నెజరుకు పశువు మనసు కలిగింది ?" },
  {
    question:
      "రాజ్యంలో ఉన్నవారికంటే దానియేలు వారి స్నేహితులు ఎన్ని రెట్లు శ్రేష్టులుగా కనిపించారు?"
  },
  { question: "తనరాజ్యంలో 1000  మందికి గొప్ప విందు చేయించిన రాజు ఎవరు ?" },
  { question: "గోడమీద వ్రాత దేనితో వ్రాయబడింది ?" },
  { question: "గోడమీద వ్రాత ఏమిటి ?" },
  { question: "దానియేలు గారు రోజుకు ఎన్నిమార్లు ప్రార్ధన చేసేవారు ?" },
  { question: "గోడమీద వ్రాతకు అర్థమేమిటి ?" },
  { question: "ఏ రాజు కాలంలో దానియేలును సింహాల గుహలో వేశారు ?" },
  {
    question:
      "దానియేలు మొదటి దర్శనములో కనిపించిన నాలుగు జంతువులు వేటికి సాదృశ్యముగా ఉన్నాయి ?"
  },
  { question: "దర్శనములోని నాలుగు జంతువులు ఎక్కడి నుండి బయటకు వచ్చాయి ?" },
  {
    question:
      "గర్వంగా మాట్లాడే నోరుగల చిన్న కొమ్మును తండ్రి అయిన దేవుడు ఏమిచేసాడు ?"
  },
  {
    question:
      "దానియేలు రెండవ దర్శనములో చూసిన మేకపోతుకు ఎన్ని కొమ్ములు ఉన్నాయి ?"
  },
  {
    question:
      "దానియేలుకు షూషను పట్టణములో ఏ నది దగ్గర ఉన్నట్లు దర్శనం కలిగింది ?"
  },
  { question: "దర్శనభావం చెప్పటానికి దానియేలు వద్దకు ఎవరు పంపబడ్డారు ?" },
  { question: "దానియేలు యిర్మీయా గ్రంధాన్ని చదివినప్పుడు ఏమి గ్రహించాడు ?" },
  { question: "యిర్మీయా గ్రంధం చదివాక దానియేలు ప్రార్ధనకు ఎలా సిద్ధపడ్డాడు ?" },
  { question: "డెబ్బది వారములు అనగా దేవుని దృష్టిలో ఎన్ని సంవత్సరాలు ?" },
  { question: "పరలోకమంతటిచేత దానియేలు ఏ పేరుతో పిలవబడ్డాడు ?" },
  {
    question:
      "దానియేలు ఎన్ని దినములు దుఃఖ పడి భోజనం ,స్నానం చేయక ప్రార్ధన చేసాడు ?"
  },
  { question: "దానియేలు దర్శనంలో హిద్దెకెలు నది దగ్గర ఎవరిని చూసారు ?" },
  { question: "దర్శనము చూసినందున దానియేలుకు  ఏమిజరిగింది?" },
  { question: "గాబ్రియేలు దూత ఈ దర్శనం ఎప్పుడు జరుగుతుంది అని చెప్పాడు ?" },
  {
    question:
      " గాబ్రియేలు దూతను దానియేలు వద్దకు రాకుండా 21  రోజులు ఎవరు అడ్డగించారు ?"
  },
  { question: "గాబ్రియేలు దూతకు సహాయంగా యుద్ధం చేయుటకు ఎవరు వచ్చారు ?" },
  { question: "గాబ్రియేలు దూత దానియేలును ముట్టి బలపరిచి ఏమి చెప్పాడు ?" },
  { question: "రెండు కొమ్ములు గల పొట్టేలు ఏ రాజును సూచిస్తుంది ?" },
  {
    question:
      "గోడమీద వ్రాత అర్ధం చెప్పినవారికి   బెల్షస్సరు రాజు ఏ బహుమానం ప్రకటించాడు ?"
  },
  { question: "బబులోను రాజ్యంలో దానియేలు గారు ఏ పదవిలో ఉన్నారు ?" },
  { question: "బెల్షస్సరు రాజు విందులో ఏ పాత్రలు వాడినారు ?" },
  {
    question: "నెబుకద్నెజరు రాజు కలలో వచ్చిన ప్రతిమ కాళ్ళు ఏ లోహంతో చేయబడినవి ?"
  },
  { question: "రాజు కలలో వచ్చిన బంగారు తల దేనికి సాదృశ్యంగా ఉంది ?" },
  { question: "బబులోను రాజ్యంలో దానియేలు గారు ఏ పదవిలో ఉన్నారు ?" },
  { question: "దర్శనభావం చెప్పటానికి దానియేలు వద్దకు ఎవరు పంపబడ్డారు ?" },
  { question: "బబులోను రాజ్యానికి రాజు ఎవరు ?" }
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
