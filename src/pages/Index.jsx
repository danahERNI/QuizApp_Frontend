import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TakeQuizButtonComp from '../comp/TakeQuizButtonComp';
import Navbar from '../comp/Navbar'
import QuizCard from '../comp/QuizModal';
import { useNavigate } from 'react-router-dom';
import QuizModal from '../comp/QuizModal';

function Index() {
  const [quizzes, setQuizzes] = useState([]);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [selectedQuizForAnswering, setSelectedQuizForAnswering] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableQuizzes = async () => {
      try {
        const response = await fetch('https://localhost:7142/api/Quiz/')
        console.log(response);

        if(response.ok){
          const data = await response.json();
          setQuizzes(data);
          console.log(quizzes);
        }else{
          console.log("Unable to fetch quizzes.")
        }
      }catch(error){
        console.log("unexpected error",error);
      }
    };
    fetchAvailableQuizzes();

  }, []);
  const handleTakeQuiz = (quizId) => {
    console.log("clicked.")
  }
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className=" h-full w-full space-y-2">
          <div className="space-y-3 bg-red">
              <h1 className="uppercase text-xl font-medium">Available Quizzes</h1>
              <div className="border-2 border-black"/>
          </div>
          {/* render quizzes below */}
          {quizzes.length > 0 ?(

            <div className='space-y-2'>

              {quizzes.map((quiz) => (

                <div className="w-full flex flex-row p-2.5 rounded-2xl items-center justify-between bg-transparent h-auto border-2 border-slate-500" key={quiz.id}>
                  <div className=''>
                      <h1>{quiz.title}</h1>
                  </div>
                  <div className="">
                    <TakeQuizButtonComp label="Take Quiz" onClick={() => { setSelectedQuizForAnswering(quiz.id); setIsQuizModalOpen(true); }}/>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No available quizzes. Contact your instructor for further details.</p>
          )}
        </div>
      </div>
      <QuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} quizId={selectedQuizForAnswering}/>
    </div>
  )
}

export default Index;
