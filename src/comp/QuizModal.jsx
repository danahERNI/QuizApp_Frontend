import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";

function QuizModal({ isOpen, onClose, quizId }) {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (!quizId || !isOpen) return;
    
    const fetchQuizDetails = async () => {
      setLoading(true);
      try {
        
        const response = await axios.get(`https://localhost:7142/api/Quiz/${quizId}`, {
          withCredentials: true,
        });
        setQuizData(response.data); 
        // console.log("this",response.data)
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      } finally {
        setLoading(false)
        // console.log(quizData)
      }
    };
    
    fetchQuizDetails();
  }, [quizId, isOpen]);
  
  if (!isOpen) return null;
  
  const handleChoiceSelect = (questionId, choiceId) => {
    // console.log(questionId, choiceId)
    setSelectedChoices((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };
 

  const handleSubmitQuiz = () => {
    const questionLength = quizData.question.length;
    let noOfCorrectAnswers = 0;

    quizData.question.forEach((question) => {
      
      const userChoiceId = selectedChoices[question.questionId];
      
      const correctAnswer = question.choices.find(choice => choice.isCorrect);
        
      console.log(userChoiceId, correctAnswer.id);
  
         if(userChoiceId && correctAnswer){
          if(userChoiceId === correctAnswer.id){
            noOfCorrectAnswers++;
          }
         } 

    });
    const totalScore = `${noOfCorrectAnswers} / ${questionLength}`;
    setScore(totalScore);
    setIsSubmitted(true)
    alert(`You scored ${noOfCorrectAnswers} out of ${questionLength}!`);
  }

  return (
    <div className="fixed inset-0 p-10 bg-transparent flex backdrop-blur-xs items-center justify-center">
      <div className="space-y-2 bg-white h-full p-5 rounded-lg shadow-sm max-w-lg w-full overflow-y-auto">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          quizData && (
            <>
              <h1 className="text-xl font-medium mb-4 uppercase">{quizData.title}</h1>
              <div className="space-y-4">

                {quizData.question && quizData.question.length > 0 ? (

                    quizData.question.map((question, qIndex) => (

                        <div key={qIndex} className="p-4 rounded-lg bg-gray-100">
                            <p className="font-semibold">{question.body}</p>

                            {question.choices && question.choices.length > 0 ? (
                                <ul className="mt-2 space-y-1">

                                  {question.choices.map((choice) => (
                                    <li key={choice.id} className="w-full">
                                      <div
                                        className={`p-2 rounded-lg flex items-center space-x-2 cursor-pointer transition-all 
                                          ${!isSubmitted ? 
                                            (selectedChoices[question.questionId] === choice.id ? "bg-blue-300" : "bg-gray-200") 
                                            : (choice.isCorrect ? "bg-green-300" : selectedChoices[question.questionId] === choice.id ? "bg-red-300" : "bg-gray-200")
                                          }`}
                                        onClick={() => handleChoiceSelect(question.questionId, choice.id)}
                                      >
                                        <input
                                          type="radio"
                                          name={`question-${question.questionId}`}
                                          value={choice.id}
                                          checked={selectedChoices[question.questionId] === choice.id}
                                          onChange={() =>!isSubmitted && handleChoiceSelect(question.questionId, choice.id)}
                                          className="cursor-pointer hidden"
                                        />
                                        <label className="cursor-pointer">{choice.name}</label>
                                      </div>
                                    </li>
                                  ))}


                                </ul>
                            ) : (
                                <p className="text-gray-500">No choices available.</p>
                            )}
                        </div>
                    ))
                    ) : (
                        <p className="text-gray-500">No questions available.</p>
                    )}
              </div>
            </>
          )
        )}
        <div className="w-full space-y-2">

          <ButtonComponent 
              onClick={handleSubmitQuiz}
              type="submit" 
              className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
              label="Submit Quiz" 
          />
          <ButtonComponent 
              type="button" onClick={onClose}
              className="w-full text-black hover:bg-red-700 bg-transparent focus:ring-4 focus:outline-none focus:ring-red-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
              label="Close" 
          />
        </div>
      </div>
    </div>
  );
}

export default QuizModal;

