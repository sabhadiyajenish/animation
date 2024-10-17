"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";
import Image from "next/image";
import { Radio } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const QuestionsForm = () => {
  const data = [
    {
      questionTitle: "Es fällt mir schwer, morgens in die Arbeit zu gehen.",
      answer: "nein",
      category: "Emotional",
    },
    {
      questionTitle:
        "Ich bin vermehrt anfällig für körperliche Krankheiten und/oder habe Schmerzen.",
      answer: "ja",
      category: "Physical",
    },
    {
      questionTitle: "Ich bin in letzter Zeit schnell gereizt.",
      answer: "ja",
      category: "Emotional",
    },
    {
      questionTitle:
        "Ich bin vermehrt anfällig für körperliche Krankheiten und/oder habe Schmerzen.",
      answer: "ja",
      category: "Physical",
    },
    {
      questionTitle: "Ich  anfällig für Krankheiten und/oder habe Schmerzen.",
      answer: "ja",
      category: "Physical",
    },
    {
      questionTitle: "Ich finde es schwer, Entscheidungen zu treffen.",
      answer: "ja",
      category: "Cognitive",
    },
    {
      questionTitle: "Ich finde es schwer,  zu treffen.",
      answer: "nein",
      category: "Cognitive",
    },
    {
      questionTitle:
        "Ich bin verm  körperliche Krankheiten und/oder habe Schmerzen.",
      answer: "ja",
      category: "Physical",
    },
    {
      questionTitle:
        "Ich habe das Gefühl, dass mir alles über den Kopf wächst.",
      answer: "ja",
      category: "Cognitive",
    },
    {
      questionTitle: "Ich bin in letzter Zeit schnell gereizt.",
      answer: "ja",
      category: "Emotional",
    },
    {
      questionTitle: "Ich Zeit schnell gereizt.",
      answer: "ja",
      category: "Emotional",
    },
    // Add more questions if needed
  ];

  const totalQuestions = data.length;

  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const storedAnswers = localStorage.getItem("answers");
    const storedQuestionIndex = localStorage.getItem("currentQuestionIndex");

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }

    if (storedQuestionIndex) {
      setCurrentQuestionIndex(Number(storedQuestionIndex));
    }
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null)); // Track user answers, initialized to null for each question
  const [submitted, setSubmitted] = useState(false); // Track if form has been submitted

  const progressValue = Number(
    (((currentQuestionIndex + 1) / totalQuestions) * 100).toFixed(0)
  );

  // Function to handle answer selection
  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    setAnswers(updatedAnswers);

    // Save updated answers to localStorage
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  // Function to go to next question
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);

      // Save current question index to localStorage
      localStorage.setItem("currentQuestionIndex", newIndex);
    }
  };

  // Function to go to previous question
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);

      // Save current question index to localStorage
      localStorage.setItem("currentQuestionIndex", newIndex);
    }
  };

  // Function to submit the form and calculate results
  const handleSubmit = () => {
    setSubmitted(true);

    // Clear the localStorage after submission (optional)
    localStorage.removeItem("answers");
    localStorage.removeItem("currentQuestionIndex");
  };

  // Function to calculate results based on categories
  const calculateCategoryResults = () => {
    const categories = {
      Emotional: { yesCount: 0, color: "" },
      Physical: { yesCount: 0, color: "" },
      Cognitive: { yesCount: 0, color: "" },
    };

    answers.forEach((answer, index) => {
      const question = data[index];
      if (answer === "ja") {
        categories[question.category].yesCount += 1;
      }
    });

    // Assign color codes based on yesCount
    Object.keys(categories).forEach((category) => {
      const yesCount = categories[category].yesCount;
      if (yesCount <= 1) {
        categories[category].color = "Green";
      } else if (yesCount === 2) {
        categories[category].color = "Orange";
      } else if (yesCount >= 3) {
        categories[category].color = "Red";
      }
    });

    return categories;
  };

  // Function to render results
  const renderResults = () => {
    const categoryResults = calculateCategoryResults();

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mt-10">Results:</h1>

        <table className="table-auto mt-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Yes Count</th>
              <th className="border border-gray-300 p-2">Color</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categoryResults).map((category) => (
              <tr key={category}>
                <td className="border border-gray-300 p-2">{category}</td>
                <td className="border border-gray-300 p-2">
                  {categoryResults[category].yesCount}
                </td>
                <td
                  className={`border border-gray-300 p-2 text-white ${
                    categoryResults[category].color === "Green"
                      ? "bg-green-500"
                      : categoryResults[category].color === "Orange"
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                >
                  {categoryResults[category].color}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const currentQuestion = data[currentQuestionIndex];

  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          {!submitted ? (
            <>
              <div className="flex w-full flex-col gap-4 md:mt-0 mt-5 md:px-0 px-3 ">
                {/* Progress bar */}
                {/* <Progress
                  value={progressValue}
                  size="md"
                  className="bg-gray-200"
                  color="gray"
                  label={`.`}
                  labelProps={{
                    className: "text-white font-semibold text-end",
                  }}
                /> */}
                <div className="relative w-full h-4 bg-gray-200 rounded-full Z-0">
                  <div
                    className="absolute top-0 left-0 h-4 bg-gray-700 dark:bg-red-300 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${progressValue}%` }}
                  >
                    <span className="absolute right-2 top-0 text-white text-xs font-semibold">
                      {progressValue}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                {/* Display current question */}
                <div className="flex md:flex-nowrap flex-wrap justify-center gap-x-5">
                  <div>
                    <Image
                      src={`/images/queImag1.png`}
                      className="md:w-[579px] w-[320px] md:h-[366px] h-full object-cover"
                      alt={"queImag1"}
                      height={0}
                      width={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className="md:mt-0 mt-10 md:px-0 mx-3">
                    <div className="bg-[#273646] p-5 rounded-2xl md:w-[790px] w-full min-w-[320px]">
                      <p className="text-[#FFFFFF] font-normal text-[14px] text-start">
                        {currentQuestionIndex + 1}. Frage
                      </p>
                      <h3 className="text-white font-bold md:text-[23px] text-[18px] leading-[28px] mt-[7px]">
                        {currentQuestion.questionTitle}
                      </h3>
                    </div>
                    <div className="flex flex-col mt-[39px] ml-[28px]">
                      <Radio
                        name={`answer-${currentQuestionIndex}`}
                        label="ja"
                        checked={answers[currentQuestionIndex] === "ja"}
                        onChange={() => handleAnswerChange("ja")}
                      />
                      <Radio
                        name={`answer-${currentQuestionIndex}`}
                        label="nein"
                        checked={answers[currentQuestionIndex] === "nein"}
                        onChange={() => handleAnswerChange("nein")}
                      />
                    </div>
                    <div className="mt-[43px] flex gap-x-4 ml-[28px]">
                      <Button
                        variant="text"
                        className="bg-[#E6E6E6]"
                        onClick={handlePrev}
                        disabled={currentQuestionIndex === 0} // Disable "Zurück" on first question
                      >
                        Zurück
                      </Button>

                      {currentQuestionIndex === totalQuestions - 1 ? (
                        <Button
                          variant="gradient"
                          onClick={handleSubmit}
                          disabled={answers[currentQuestionIndex] === null} // Disable if no answer selected
                        >
                          Submit
                        </Button>
                      ) : (
                        <Button
                          variant="gradient"
                          onClick={handleNext}
                          disabled={answers[currentQuestionIndex] === null} // Disable if no answer selected
                        >
                          Weiter
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            renderResults()
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionsForm;
