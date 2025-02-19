import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ButtonComponent from '../comp/ButtonComponent';
import AddButtonComp from '../comp/AddButtonComp';
import RemoveButtonComp from '../comp/RemoveButtonComp';
import Textbox from '../comp/Textbox';

function EditModalComp({ isOpen, onClose, quizId }) {
    const navigate = useNavigate();
    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        if (!quizId || !isOpen) return;

        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`https://localhost:7142/api/Quiz/${quizId}`, {
                    withCredentials: true,
                });
                setQuizTitle(response.data.title);
                setQuestions(response.data.question || []);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizData();
    }, [quizId, isOpen]);

    const handleQuestionChange = (id, newValue) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, body: newValue } : q));
    };
    const handleRemoveChoice = (questionId, choiceId) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? { ...q, choices: q.choices.filter(choice => choice.id !== choiceId) }
                : q
        ));
    };
    const handleAddQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            body: '',
            choices: [{ id: 1, name: '', isCorrect: false }]
        };
        setQuestions([...questions, newQuestion]);
    };
    const handleRemoveQuestion = (id) => {
        // setQuestions(questions.filter((q) => q.id !== id));
        // setQuestions(prevQuestions => prevQuestions.filter(q => q.id !== id));
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.filter(q => q.id !== id);
    
            // Re-index question IDs after removal
            return updatedQuestions.map((q, index) => ({
                ...q,
                id: index + 1,  // Ensures correct sequential IDs
                choices: q.choices.map((choice, cIndex) => ({
                    ...choice,
                    id: cIndex + 1, // Re-index choices as well
                }))
            }));
        });
    };
    const handleAddChoice = (questionId) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? { ...q, choices: [...q.choices, { id: q.choices.length + 1, name: '', isCorrect: false }] }
                : q
        ));
    };
    const handleChoiceChange = (questionId, choiceId, newValue) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? {
                    ...q,
                    choices: q.choices.map(choice =>
                        choice.id === choiceId ? { ...choice, name: newValue } : choice
                    )
                }
                : q
        ));
    };

    const handleCorrectChoice = (questionId, choiceId) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? {
                    ...q,
                    choices: q.choices.map(choice =>
                        ({ ...choice, isCorrect: choice.id === choiceId })
                    )
                }
                : q
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedQuiz = {
            title: quizTitle,
            questionDTO: questions.map(q => ({
                id: q.id,
                body: q.body,
                choices: q.choices.map(choice => ({
                    id: choice.id,
                    name: choice.name,
                    isCorrect: choice.isCorrect
                }))
            }))
        };

        try {
            const response = await axios.patch(`https://localhost:7142/api/Quiz/${quizId}`, updatedQuiz, {
                withCredentials: true,
            });

            if (response.status === 200) {
                alert('Quiz updated successfully!');
                navigate('/QuizManagement');
            } else {
                alert('Error updating quiz.');
            }
        } catch (error) {
            console.error('Error updating quiz:', error);
            alert('Failed to update quiz.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 p-10 bg-transparent flex backdrop-blur-xs items-center justify-center">
            <div className="bg-white h-full p-5 rounded-lg shadow-sm w-full overflow-y-auto">
                <h2 className="text-xl font-bold mb-2">Edit Quiz</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <form className="w-full h-full space-y-2" onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <label htmlFor="title">Quiz Title:</label>
                            <Textbox
                                type="text"
                                name="title"
                                value={quizTitle}
                                onChange={(e) => setQuizTitle(e.target.value)}
                            />
                        </div>

                        <AddButtonComp onClick={handleAddQuestion} label="Add Question" />

                        {questions.map((question, index) => (
                            <div key={question.id} className="bg-slate-300 space-y-4 rounded-lg p-5 flex flex-col">
                                <div className="w-full flex flex-col">

                                    <label>Question {index + 1}</label>
                                    <div className="flex flex-row space-x-2">
                                        <Textbox
                                            type="text"
                                            value={question.body}
                                            onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                                        />
                                        <div>
                                            <AddButtonComp onClick={() => handleAddChoice(question.id)} />
                                        </div>
                                    </div>
                                </div>
                                {question.choices.map((choice, cIndex) => (
                                    <div key={choice.id} className='px-5'>
                                        <label>Choice {cIndex + 1}</label>
                                        <div className="flex flex-row items-center justify-center w-full space-x-2">

                                            <div className="w-full">

                                                <Textbox
                                                    type="text"
                                                    value={choice.name}
                                                    onChange={(e) => handleChoiceChange(question.id, choice.id, e.target.value)}
                                                />
                                            </div>
                                            <div className="w-full h-full items-center flex">

                                                <input
                                                    type="radio"
                                                    className='w-8 h-8'
                                                    name={`correct-${question.id}`}
                                                    checked={choice.isCorrect}
                                                    onChange={() => handleCorrectChoice(question.id, choice.id)}
                                                />
                                            </div>
                                            <div className="">
                                                <RemoveButtonComp onClick={() => handleRemoveChoice(question.id, choice.id)} label="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <RemoveButtonComp onClick={() => handleRemoveQuestion(question.id)} label="Remove Question" />
                            </div>
                        ))}
                        <ButtonComponent 
                            type="submit" 
                            className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                            label="Apply Changes" 
                        />
                        <ButtonComponent 
                            type="button" onClick={onClose}
                            className="w-full text-black hover:bg-red-700 bg-transparent focus:ring-4 focus:outline-none focus:ring-red-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                            label="Close" 
                        />
                    </form>
                )}
            </div>
        </div>
    );
}

export default EditModalComp;
