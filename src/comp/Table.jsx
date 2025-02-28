import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import axios from 'axios'
import '../index.css'
import EditButtonComp from './EditButtonComp';
import RemoveButtonComp from './RemoveButtonComp';
import ViewButtonComp from './ViewButtonComp';
import PreviewModalComp from './PreviewModalComp';
import EditModalComp from './EditModalComp';

function Table() {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState(null);
    const [selectedQuizForEdit, setSelectedQuizForEdit] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const userId = localStorage.getItem('userId');
    const jwt = localStorage.getItem('authToken');
    
    useEffect(()=>{
        axios.get(`https://localhost:7142/api/Quiz/Mentor/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then((response)=>{
            console.log(response.data);
            setQuizzes(response.data)
        })
        .catch((error)=>{
            console.error("Error fetching existing quizzes.", error)
        });
    },[]);
    const handleDeleteQuiz = async (quizId) => {
        console.log(`Attempting to delete quiz with ID: ${quizId}`);

        if (!quizId) {
        console.error("Error: quizId is undefined or null!");
        return;
        }
        try {
          const response = await axios.delete(`https://localhost:7142/api/Quiz/${quizId}`, {
            withCredentials: true,
          })
          .then((response)=> {

              console.log("Quiz deleted", response.data);
              setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== quizId))
          });
        }catch(error){
          console.error('Unable to delete quiz. ', error);
        }
    }

  return (
    <div className="">
        <div className="flex flex-col">
            <div className="w-full">
                <div className="border-b border-gray-200 shadow">
                    <table className="divide-y w-full divide-gray-300 ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    QuizID
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Title
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Date Created
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Date Updated
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-center divide-y divide-gray-300">
                        {quizzes.map((quiz) => {
                            return (
                            <tr key={quiz.id || index} className="whitespace-nowrap">
                                <td className="px-6 py-4 text-sm text-gray-500">{quiz.id}</td>
                                <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{quiz.title}</div>
                                </td>
                                <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">{format(new Date(quiz.createdDate), 'yyyy-MM-dd HH:mm:ss')}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{quiz.updatedDate ? format(new Date(quiz.updatedDate), 'yyyy-MM-dd HH:mm:ss') : ''}
                                </td>
                                <td className="p-2 space-x-2 flex flex-row h-full items-center justify-center">
                                    <div>
                                        <ViewButtonComp onClick={() => { setSelectedQuizId(quiz.id); setIsModalOpen(true);}}/>
                                    </div>
                                    <div>
                                        <EditButtonComp onClick={() => { setSelectedQuizForEdit(quiz.id); setIsEditModalOpen(true); }}/>
                                    </div>
                                    <div>
                                        <RemoveButtonComp onClick={() => handleDeleteQuiz(quiz.id)}/>
                                    </div>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
            <PreviewModalComp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} quizId={selectedQuizId} />
            <EditModalComp isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} quizId={selectedQuizForEdit} />
    </div>
  )
}

export default Table
