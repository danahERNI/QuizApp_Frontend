import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import axios from 'axios'
import '../index.css'

function Table() {
    const [quizzes, setQuizzes] = useState([]);
    
    useEffect(()=>{
        axios.get('https://localhost:7142/api/Quiz')
        .then((response)=>{
            console.log(response.data);
            
            setQuizzes(response.data)
            console.log("Quizzes Data:", quizzes);
        })
        .catch((error)=>{
            console.error("Error fetching existing quizzes.", error)
        });
    },[]);
    useEffect(() => {
        console.log('Updated quizzes state:', quizzes);
    }, [quizzes]);

    // const HandleDelete = (quizId) =>{
    //     axios.delete('https://localhost:7142/api/Quiz/${quizId}')
    // }
  return (
    <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
            <div className="w-full">
                <div className="border-b border-gray-200 shadow">
                    <table className="divide-y divide-gray-300 ">
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
                            <tr key={quiz.id} className="whitespace-nowrap">
                                <td className="px-6 py-4 text-sm text-gray-500">{quiz.id}</td>
                                <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{quiz.title}</div>
                                </td>
                                <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">{format(new Date(quiz.createdDate), 'yyyy-MM-dd HH:mm:ss')}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{quiz.updatedDate ? format(new Date(quiz.updatedDate), 'yyyy-MM-dd HH:mm:ss') : ''}
                                </td>
                                <td className="row-span-3">
                                    
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table
