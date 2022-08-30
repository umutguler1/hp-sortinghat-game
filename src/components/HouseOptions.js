import gryffindor from "../assets/gryffindor.png";
import slytherin from "../assets/slytherin.png";
import hufflepuff from "../assets/hufflepuff.png";
import ravenclaw from "../assets/ravenclaw.png";

const HouseOptions = ({
  checkAnswerHandler,
  answerAClasses,
  answerBClasses,
  answerCClasses,
  answerDClasses,
  isAnswerTrue,
}) => {
  return (
    <div className="flex my-4 gap-12 -mr-8 float-right">
      <button
        id="gryffindor"
        onClick={checkAnswerHandler}
        className={answerAClasses}
        disabled={isAnswerTrue !== undefined}
      >
        <img src={gryffindor} alt="" id="gryffindor" className="w-[200px]" />
      </button>
      <button
        id="slytherin"
        onClick={checkAnswerHandler}
        className={answerBClasses}
        disabled={isAnswerTrue !== undefined}
      >
        <img src={slytherin} alt="" id="slytherin" className="w-[200px]" />
      </button>
      <button
        id="hufflepuff"
        onClick={checkAnswerHandler}
        className={answerCClasses}
        disabled={isAnswerTrue !== undefined}
      >
        <img src={hufflepuff} alt="" id="hufflepuff" className="w-[200px]" />
      </button>
      <button
        id="ravenclaw"
        onClick={checkAnswerHandler}
        className={answerDClasses}
        disabled={isAnswerTrue !== undefined}
      >
        <img src={ravenclaw} alt="" id="ravenclaw" className="w-[200px]" />
      </button>
    </div>
  );
};

export default HouseOptions;
