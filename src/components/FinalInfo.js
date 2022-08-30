const FinalInfo = ({ trueAnswerCount, charsLength, playAgainHandler }) => {
  return (
    <div className="grid place-self-center gap-y-4 text-center -mt-8">
      <div className="grid gap-y-4 text-4xl font-semibold text-custom-yellow">
        TOTAL SCORE:
        <p className="w-[200px] py-2 place-self-center rounded-lg bg-custom-red">
          {trueAnswerCount}/{charsLength}
        </p>
      </div>
      <button
        className="text-5xl bg-custom-teal px-8 py-4 right-[150px] rounded-lg transition-all hover:scale-125 xl:absolute"
        onClick={playAgainHandler}
      >
        PLAY AGAIN!
      </button>
    </div>
  );
};

export default FinalInfo;
