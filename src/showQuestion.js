import React from "react";
import { FaAngleDoubleRight, FaHome } from "react-icons/fa";
function ShowQuestion(props) {
  const handleLotteryClick = () => {
    let allQ = props.allQuestions;
    let current = props.currentQues;
    allQ = allQ.map((q) => {
      if (q.key === current.key) {
        q.answered = true;
      }
      return q;
    });
    props.setPage("showLottery");
    props.setAllQuestions(allQ);
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <h2 style={{ fontWeight: "bolder", fontSize: "200px" }}>
          {props.currentQues.question}
        </h2>
        {/* <button onClick={() => { handleLotteryClick() }}>lottery</button> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FaHome
          className="nextIcon"
          onClick={() => {
            props.setPage("showNumbers");
          }}
        />
        <FaAngleDoubleRight
          className="nextIcon ml50"
          onClick={() => {
            handleLotteryClick();
          }}
        />
      </div>
    </div>
  );
}

export default ShowQuestion;
