import React from "react";
import { FaAngleDoubleRight, FaHome, FaAngleRight } from "react-icons/fa";
function ShowQuestion(props) {
  const handleLotteryClick = (data) => {
    let allQ = props.allQuestions;
    let current = props.currentQues;
    allQ = allQ.map((q) => {
      if (q.key === current.key) {
        q.answered = true;
      }
      return q;
    });
    props.setTargetPoints(data.target);
    props.setPage("showLottery");
    props.setAllQuestions(allQ);
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <h2 style={{ fontWeight: "bolder", fontSize: "60px" }}>
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
        <FaAngleRight
          className="nextIcon ml50"
          onClick={() => {
            handleLotteryClick({ target: "less" });
          }}
        />
        <FaAngleRight
          className="nextIcon"
          onClick={() => {
            handleLotteryClick({ target: "more" });
          }}
        />
      </div>
    </div>
  );
}

export default ShowQuestion;
