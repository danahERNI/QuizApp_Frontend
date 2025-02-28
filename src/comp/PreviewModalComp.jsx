import React, { useEffect, useState } from "react";
import axios from "axios";

function PreviewModalComp({ isOpen, onClose, quizId }) {
  const jwt = localStorage.getItem("authToken");
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quizId || !isOpen) return;

    const fetchQuizDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://localhost:7142/api/Quiz/${quizId}`, {
          headers: {Authorization: `Bearer ${jwt}`},
          withCredentials: true,
        });
        setQuizData(response.data); 
        console.log("this",response.data)
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      } finally {
        setLoading(false)
        console.log(quizData)
      }
    };

    fetchQuizDetails();
  }, [quizId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-10 bg-transparent flex backdrop-blur-xs items-center justify-center">
      <div className="bg-white max-h-full min-h-1/2 p-5 rounded-lg shadow-sm max-w-lg w-full overflow-y-scroll">
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
                                    {question.choices.map((choice, cIndex) => (
                                        <li key={cIndex} className={`p-2 rounded-lg ${choice.isCorrect ? "bg-green-200" : "bg-gray-200"}`}>
                                            {choice.name} {choice.isCorrect && "✔"}
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
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"> Close </button>
      </div>
    </div>
  );
}

export default PreviewModalComp;
