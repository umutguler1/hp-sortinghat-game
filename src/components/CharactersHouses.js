import { useState, useEffect } from "react";
import axios from "axios";

import setCharImages from "../helpers/setCharImages";
import HouseOptions from "./HouseOptions";
import FinalInfo from "./FinalInfo";

const answerButtonClasses =
  "p-4 bg-custom-yellow rounded-lg transition-all w-fit h-fit drop-shadow-lg border-8 border-custom-yellow hover:border-custom-red";
const trueAnswerButtonClasses =
  "p-4 bg-green-500 rounded-lg transition-all border-8 border-green-500";
const wrongAnswerButtonClasses =
  "p-4 bg-red-500 rounded-lg transition-all border-8 border-red-500";
let isLast = false;

const CharactersHouses = () => {
  const charsPerPage = 1;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [chars, setChars] = useState([]);

  const [answerAClasses, setAnswerAClasses] = useState(answerButtonClasses);
  const [answerBClasses, setAnswerBClasses] = useState(answerButtonClasses);
  const [answerCClasses, setAnswerCClasses] = useState(answerButtonClasses);
  const [answerDClasses, setAnswerDClasses] = useState(answerButtonClasses);

  const [isAnswerTrue, setIsAnswerTrue] = useState(undefined);

  const [trueAnswerCount, setTrueAnswerCount] = useState(0);

  const indexOfLastChar = currentPageNumber * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios({
        method: "get",
        url: "http://hp-api.herokuapp.com/api/characters",
      });
      const first61 = response.data.filter((c) => c.house !== "").slice(0, 61);
      setCharImages(first61); // setting the images manually as if they come from the api.

      let random15 = [];
      let a = -1;
      for (let i = 0; i < 15; i++) {
        let randomNum = Math.floor(Math.random() * 4) + 1;
        random15.push(first61[a + randomNum]);
        a += randomNum;
      }
      setChars(random15);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    setAnswerAClasses(answerButtonClasses);
    setAnswerBClasses(answerButtonClasses);
    setAnswerCClasses(answerButtonClasses);
    setAnswerDClasses(answerButtonClasses);

    setIsAnswerTrue(undefined);
  }, [currentPageNumber]);

  if (chars.length === 0) {
    return;
  }

  const currentChars = chars.slice(indexOfFirstChar, indexOfLastChar);
  const currentChar = currentChars[0];

  const nextPageHandler = () => {
    if (currentPageNumber === chars.length) {
      return;
    }
    setCurrentPageNumber((pageNumber) => pageNumber + 1);
  };

  const checkAnswerHandler = (event) => {
    if (currentPageNumber === chars.length) {
      isLast = true;
    }
    event.target.id === currentChar.house.toLowerCase()
      ? setIsAnswerTrue(true)
      : setIsAnswerTrue(false);

    event.target.id === currentChar.house.toLowerCase() &&
      setTrueAnswerCount((count) => count + 1);

    if (currentChar.house.toLowerCase() === "gryffindor") {
      setAnswerAClasses(trueAnswerButtonClasses);
      setAnswerBClasses(wrongAnswerButtonClasses);
      setAnswerCClasses(wrongAnswerButtonClasses);
      setAnswerDClasses(wrongAnswerButtonClasses);
    } else if (currentChar.house.toLowerCase() === "slytherin") {
      setAnswerAClasses(wrongAnswerButtonClasses);
      setAnswerBClasses(trueAnswerButtonClasses);
      setAnswerCClasses(wrongAnswerButtonClasses);
      setAnswerDClasses(wrongAnswerButtonClasses);
    } else if (currentChar.house.toLowerCase() === "hufflepuff") {
      setAnswerAClasses(wrongAnswerButtonClasses);
      setAnswerBClasses(wrongAnswerButtonClasses);
      setAnswerCClasses(trueAnswerButtonClasses);
      setAnswerDClasses(wrongAnswerButtonClasses);
    } else if (currentChar.house.toLowerCase() === "ravenclaw") {
      setAnswerAClasses(wrongAnswerButtonClasses);
      setAnswerBClasses(wrongAnswerButtonClasses);
      setAnswerCClasses(wrongAnswerButtonClasses);
      setAnswerDClasses(trueAnswerButtonClasses);
    }
  };

  const playAgainHandler = () => {
    window.location.reload();
  };

  return (
    <div className="grid">
      <h2 className="text-4xl py-2 px-4 -mt-5 rounded-full bg-custom-white text-black w-fit">
        {currentPageNumber}
      </h2>
      <div className="flex items-center justify-around">
        <div className="grid">
          {currentChars.map((char) => (
            <li
              key={char.name}
              className="text-custom-white text-4xl list-none"
            >
              <p className="mb-4 mt-2 font-semibold">{char.name}</p>
              <img
                src={char.image}
                alt=""
                className="2xl:h-[400px] rounded-lg"
              />
            </li>
          ))}
        </div>
        <HouseOptions
          checkAnswerHandler={checkAnswerHandler}
          answerAClasses={answerAClasses}
          answerBClasses={answerBClasses}
          answerCClasses={answerCClasses}
          answerDClasses={answerDClasses}
          isAnswerTrue={isAnswerTrue}
        />
      </div>
      {isAnswerTrue && (
        <p className="text-green-500 text-4xl font-semibold place-self-center -mt-32">
          CORRECT!
        </p>
      )}
      {isAnswerTrue === false && (
        <p className="text-red-500 text-4xl font-semibold place-self-center -mt-32">
          WRONG :(
        </p>
      )}
      {isLast && (
        <FinalInfo
          trueAnswerCount={trueAnswerCount}
          charsLength={chars.length}
          playAgainHandler={playAgainHandler}
        />
      )}
      <button
        onClick={nextPageHandler}
        disabled={isLast || isAnswerTrue === undefined}
        hidden={isLast || isAnswerTrue === undefined}
        className="text-5xl px-8 py-4 -mt-4 bg-custom-teal rounded-lg text-black place-self-center hover:brightness-150"
      >
        Next!
      </button>
    </div>
  );
};

export default CharactersHouses;
