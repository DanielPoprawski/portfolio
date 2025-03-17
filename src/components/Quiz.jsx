import React, { useState } from "react";
import { Check, AlertCircle, RotateCcw, Award } from "lucide-react";

export default function Quiz() {
      // Quiz questions and answers
      const quizData = [
            {
                  question: "Which of the following is a JavaScript framework?",
                  options: ["Django", "React", "Flask", "Ruby on Rails"],
                  correctAnswer: 1, // React
            },
            {
                  question: "What does CSS stand for?",
                  options: [
                        "Computer Style Sheets",
                        "Creative Style Sheets",
                        "Cascading Style Sheets",
                        "Colorful Style Sheets",
                  ],
                  correctAnswer: 2, // Cascading Style Sheets
            },
            {
                  question: "Which HTML tag is used to define an internal style sheet?",
                  options: ["<css>", "<script>", "<style>", "<link>"],
                  correctAnswer: 2, // <style>
            },
            {
                  question: "Which property is used to change the background color?",
                  options: ["bgcolor", "color", "background-color", "background"],
                  correctAnswer: 2, // background-color
            },
      ];

      // State management
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [score, setScore] = useState(0);
      const [showResult, setShowResult] = useState(false);
      const [answered, setAnswered] = useState(false);
      const [feedbackMessage, setFeedbackMessage] = useState("");

      // Handle option selection
      const handleOptionSelect = (optionIndex) => {
            if (answered) return; // Prevent changing answer after submission
            setSelectedOption(optionIndex);
      };

      // Handle answer submission
      const handleSubmit = () => {
            if (selectedOption === null) {
                  setFeedbackMessage("Please select an answer first");
                  return;
            }

            setAnswered(true);

            // Check if answer is correct
            if (selectedOption === quizData[currentQuestion].correctAnswer) {
                  setScore(score + 1);
                  setFeedbackMessage("Correct! Well done!");
            } else {
                  setFeedbackMessage(
                        `Incorrect. The correct answer is: ${
                              quizData[currentQuestion].options[quizData[currentQuestion].correctAnswer]
                        }`
                  );
            }
      };

      // Move to next question
      const handleNextQuestion = () => {
            if (currentQuestion < quizData.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                  setSelectedOption(null);
                  setAnswered(false);
                  setFeedbackMessage("");
            } else {
                  setShowResult(true);
            }
      };

      // Reset quiz to start over
      const resetQuiz = () => {
            setCurrentQuestion(0);
            setSelectedOption(null);
            setScore(0);
            setShowResult(false);
            setAnswered(false);
            setFeedbackMessage("");
      };

      // Calculate percentage score
      const calculatePercentage = () => {
            return (score / quizData.length) * 100;
      };

      // Get feedback based on score
      const getFeedback = () => {
            const percentage = calculatePercentage();
            if (percentage >= 80) return "Excellent! You're a web dev pro!";
            if (percentage >= 60) return "Good job! You know your stuff.";
            if (percentage >= 40) return "Not bad, but room for improvement.";
            return "Keep learning! Practice makes perfect.";
      };

      // Render results screen
      const renderResults = () => {
            const percentage = calculatePercentage();

            return (
                  <div className="text-center">
                        <Award size={64} className="mx-auto mb-4 text-yellow-500" />
                        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>

                        <div className="mb-6">
                              <div className="text-4xl font-bold mb-2">
                                    {score} / {quizData.length}
                              </div>
                              <div className="text-lg">Your score: {percentage.toFixed(0)}%</div>
                        </div>

                        <p className="mb-6">{getFeedback()}</p>

                        <button
                              onClick={resetQuiz}
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center mx-auto"
                        >
                              <RotateCcw size={18} className="mr-2" />
                              Try Again
                        </button>
                  </div>
            );
      };

      // Render question screen
      const renderQuestion = () => {
            return (
                  <>
                        <div className="mb-4">
                              <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-medium text-gray-500">
                                          Question {currentQuestion + 1} of {quizData.length}
                                    </span>
                                    <span className="text-sm font-medium text-gray-500">Score: {score}</span>
                              </div>

                              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                                    <h3 className="text-lg font-semibold">{quizData[currentQuestion].question}</h3>
                              </div>

                              <ul className="space-y-2">
                                    {quizData[currentQuestion].options.map((option, index) => (
                                          <li key={index}>
                                                <button
                                                      onClick={() => handleOptionSelect(index)}
                                                      className={`w-full text-left p-3 rounded-md border ${
                                                            selectedOption === index
                                                                  ? answered
                                                                        ? index ===
                                                                          quizData[currentQuestion].correctAnswer
                                                                              ? "bg-green-100 border-green-500"
                                                                              : "bg-red-100 border-red-500"
                                                                        : "bg-blue-100 border-blue-500"
                                                                  : "bg-white border-gray-300 hover:bg-gray-50"
                                                      } transition-colors flex items-center`}
                                                      disabled={answered}
                                                >
                                                      <div
                                                            className={`w-5 h-5 mr-3 flex-shrink-0 rounded-full border ${
                                                                  selectedOption === index
                                                                        ? answered
                                                                              ? index ===
                                                                                quizData[currentQuestion].correctAnswer
                                                                                    ? "border-green-500 bg-green-500"
                                                                                    : "border-red-500 bg-red-500"
                                                                              : "border-blue-500 bg-blue-500"
                                                                        : "border-gray-400"
                                                            } flex items-center justify-center`}
                                                      >
                                                            {selectedOption === index && (
                                                                  <Check size={12} className="text-white" />
                                                            )}
                                                      </div>
                                                      {option}
                                                </button>
                                          </li>
                                    ))}
                              </ul>

                              {feedbackMessage && (
                                    <div
                                          className={`mt-4 p-3 rounded-md ${
                                                feedbackMessage.startsWith("Correct")
                                                      ? "bg-green-100 text-green-800"
                                                      : feedbackMessage.startsWith("Incorrect")
                                                      ? "bg-red-100 text-red-800"
                                                      : "bg-yellow-100 text-yellow-800"
                                          } flex items-start`}
                                    >
                                          {feedbackMessage.startsWith("Correct") ? (
                                                <Check size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                                          ) : (
                                                <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                                          )}
                                          {feedbackMessage}
                                    </div>
                              )}
                        </div>

                        <div className="flex justify-between">
                              {!answered ? (
                                    <button
                                          onClick={handleSubmit}
                                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
                                    >
                                          Submit Answer
                                    </button>
                              ) : (
                                    <button
                                          onClick={handleNextQuestion}
                                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md"
                                    >
                                          {currentQuestion < quizData.length - 1 ? "Next Question" : "See Results"}
                                    </button>
                              )}

                              <button
                                    onClick={resetQuiz}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md flex items-center"
                              >
                                    <RotateCcw size={16} className="mr-1" />
                                    Reset
                              </button>
                        </div>
                  </>
            );
      };

      return (
            <div className="bg-gray-100 p-6 rounded-lg min-w-full overflow-hidden shadow-lg text-black">
                  <h2 className="text-2xl font-bold mb-4">Web Development Quiz</h2>
                  <p className="mb-6">
                        Test your web development knowledge with this interactive quiz. Answer the questions and see how
                        well you score!
                  </p>

                  {showResult ? renderResults() : renderQuestion()}

                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                        Add interactive quizzes to engage visitors and showcase your expertise.
                  </div>
            </div>
      );
}
