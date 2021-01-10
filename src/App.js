import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowNumbers from './showNumbers';
import ShowQuestion from './showQuestion';
import ShowLotteryPage from "./showLotteryPage";
import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import * as VFX from 'react-vfx';


let allQues = [{ "question": 'Who brought the small boy to jesus?' }, { "question": 'What did the small boy have?' }, { "question": 'How many men where there' }, { "question": 'How many baskets of loaves and fishes were left over?' }, { "question": `What was the sickness that peter's mother in law suffered with?` }, { "question": 'సౌలును దేవుడు ఏ స్థలం  లో దర్శించాడు?' }, { "question": 'సౌలుని దేనువుడు తరువాత ఏమని పిలవబడ్డాడు?' }, { "question": 'సమరయ స్త్రీ భావి దగ్గర ఎవరిని కలుసుకుంది?' }, { "question": 'దానియేలును ఎంత మంది స్నేహితులు, వారి పేర్లు చెప్పగలరా?' }, { "question": 'దానియేలు గారు రోజుకి ఎన్ని సార్లు ప్రార్ధన చేసుకునేవారు?' }, { "question": 'దానియేలు గారిని బంధించి ఏ గుహ లో వేశారు?' }, { "question": 'యేసయ్య గ్రుడ్డివారిని స్వస్థత పరిచారు. ఆ గ్రుడ్డివాడు  ఎం చేస్తుండేవాడు ?' }, { "question": '7 రొట్టెలు, కొన్ని చేపలు యేసయ్య ఎంత మందికి పంచారు?' }, { "question": 'అతడు పొందిన దెబ్బలు చేత మనకు ___ కలుగుతుంది?' }, { "question": 'యోహాను 3:16' }, { "question": 'యేసు; పునరుద్ధానమును , జీవమును, ___ నా యందు విశ్వాసముంచువాడు ____' }, { "question": 'నమ్ముట నీ వలన అయితే ____' }, { "question": 'Because of sin Adam and Eve where snet out from Eden Garden, Because of jesus we are into ____' }, { "question": 'David was born in __' }, { "question": 'Joseph was sold to ishmaelites lights for ____' }, { "question": 'Short form to all commandments by Moses given by jesus are __' }, { "question": 'Paul was baptised by ___' }, { "question": 'యేసు దగ్గరకు వచ్చిన వ్యక్తి ఎవరు?' }, { "question": 'ఆ యవ్వనస్తుడు యేసును అడిగిన ప్రశ్న ఏమిటి?' }, { "question": 'యేసు చెప్పినట్టు ఆ యవ్వనుడు ఆస్తి అమ్మి బీదలకు ఇచ్చాడా?' }, { "question": 'దేవుడు ధనవంతుడు పరలోకరాజ్యములో ప్రవేశించుట కంటే ఒంటె దీనిలో దూరుట సులభమని చెప్పారు?' }, { "question": 'మీరు మొదట ఆయన __ మరియు __ ని వెదకుడి , అప్పుడన్నియు మీకు అనుగ్రహింపబడును   -మత్తయి 6:33' }, { "question": 'తన సోదరులు గొయ్యిలోకి విసిరినప్పుడు యోసేపు వయస్సు ఎంత?' },  { "question": 'జోసెఫ్ ఎన్ని కలలు కన్నాడు?' },  { "question": 'యోసేపుకు ఎంతమంది సోదరులు ఉన్నారు?' }, { "question": 'జోకాబ్ ప్రియమైన కుమారుడు ఎవరు?' }, { "question": 'యేసు పుట్టినప్పుడు యూదా రాజు ఎవరు?' }, { "question": 'యేసు ఎక్కడ జన్మించాడు?' }, { "question": 'జ్ఞానులు యేసుకు ఇచ్చిన బహుమతులు ఏమిటి?' }, { "question": 'యేసు జననం గురించి విన్న హేరోదు ఏమి చేశాడు?' }, { "question": 'జ్ఞానులు ఎక్కడ నుండి వచ్చారు?' }  ]



allQues = allQues.map((d, i) => { d.key = i + 1; d.answered = false; return d })

function App() {

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
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

  const [allQuestions, setAllQuestions] = useState(allQues)
  const [count, setCount] = useState(allQues.length)
  const [page, setPage] = useState('showNumbers')
  const [currentQues, setCurrentQues] = useState(0)

  const selectQuestion = (key) => {
    setPage('showQuestion')
    setCurrentQues(key)
  }

  return (
    <VFX.VFXProvider>
      <div className="App">
        <ParticlesBg type="custom" config={config} bg={true} />
        {/* <h1>LW KGT QUIZ</h1> */}
        <VFX.VFXSpan className='headTitle' shader="uvGradient">LW KGT QUIZ</VFX.VFXSpan>
        {page === 'showNumbers' && <ShowNumbers allQuestions={allQuestions} selectQuestion={selectQuestion} />}
        {page === 'showQuestion' && <ShowQuestion allQuestions={allQuestions} currentQues={currentQues} setPage={setPage} setAllQuestions={setAllQuestions} />}
        {page === 'showLottery' && <ShowLotteryPage allQuestions={allQuestions} currentQues={currentQues} setPage={setPage} />}
      </div>
    </VFX.VFXProvider>
  );
}

export default App;

