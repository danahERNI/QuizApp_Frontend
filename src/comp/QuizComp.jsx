import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../comp/ButtonComponent';
import AddButtonComp from '../comp/AddButtonComp';
import RemoveButtonComp from '../comp/RemoveButtonComp';
import Textbox from '../comp/Textbox';

function QuizComp({isEdit}) {

    const navigate = useNavigate();
    const jwt = localStorage.getItem("authToken"); 
    const userId = localStorage.getItem("userId");
    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([{ id: 1, body: '', choices: [{ id: 1, name: '', isCorrect: false }] }]);

    const handleAddQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            body: '',
            choices: [{ id: 1, name: '', isCorrect: false }]
        };
        setQuestions([...questions, newQuestion]);
    };

    const handleRemoveQuestion = (id) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const handleQuestionChange = (id, newValue) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, body: newValue } : q));
    };

    const handleAddChoice = (questionId) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? { ...q, choices: [...q.choices, { id: q.choices.length + 1, name: '', isCorrect: false }] }
                : q
        ));
    };

    const handleRemoveChoice = (questionId, choiceId) => {
        setQuestions(questions.map(q =>
            q.id === questionId
                ? { ...q, choices: q.choices.filter(choice => choice.id !== choiceId) }
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

        const quizData = {
            title: quizTitle,
            userId: userId,
            questionDTO: questions.map(q => ({
                body: q.body,
                choices: q.choices.map(choice => ({
                    name: choice.name,
                    isCorrect: choice.isCorrect
                }))
            }))
        };

        try {
            // const response = await fetch('https://localhost:7142/api/Quiz/', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(quizData)
            // });
            const response = await axios.post('https://localhost:7142/api/Quiz', quizData, {
                headers: {Authorization: `Bearer ${jwt}`}
            });

            if (response) {
                alert('Quiz created!');
                navigate('/QuizManagement');
            } else {
                alert('Error in creating quiz.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create quiz:', error);
        }
    };

    return (
        <form className="w-full h-full space-y-2 bg-slate-200" onSubmit={handleSubmit}>
            <div className="space-y-3">
                <label htmlFor="title">Quiz Title:</label>
                <Textbox
                    type="text"
                    name="title"
                    placeholder="Enter quiz title"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                />
            </div>

            <AddButtonComp onClick={handleAddQuestion} label="Add Question" />

            {questions.length > 0 ? (
                questions.map((question, index) => (
                    <div key={question.id} className="bg-slate-300 space-y-4 rounded-lg p-5 flex flex-col">
                        <div className="w-full flex flex-col">
                            <label htmlFor={`question-${question.id}`}>Question {index + 1}</label>
                            <div className="flex flex-row space-x-2">
                                <Textbox
                                    type="text"
                                    name={`question-${question.id}`}
                                    value={question.body}
                                    onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                                    placeholder="Enter question"
                                />
                                <div>
                                    <AddButtonComp onClick={() => handleAddChoice(question.id)} />
                                </div>
                            </div>
                        </div>

                        {question.choices.length > 0 ? (
                            question.choices.map((choice, choiceIndex) => (
                                <div key={choice.id} className="px-5">
                                    <label htmlFor={`choice-${choice.id}`}>Choice {choiceIndex + 1}:</label>
                                    <div className="flex flex-row items-center justify-center w-full space-x-2">
                                        <div className="w-full">
                                            <Textbox
                                                type="text"
                                                name={`choice-${choice.id}`}
                                                value={choice.name}
                                                onChange={(e) => handleChoiceChange(question.id, choice.id, e.target.value)}
                                                placeholder="Enter choice"
                                            />
                                        </div>
                                        <div className="w-full h-full items-center flex">
                                            <input
                                                className="w-8 h-8"
                                                type="radio"
                                                name={`correct-${question.id}`}
                                                checked={choice.isCorrect}
                                                onChange={() => handleCorrectChoice(question.id, choice.id)}
                                            />
                                        </div>
                                        <div>
                                            <RemoveButtonComp onClick={() => handleRemoveChoice(question.id, choice.id)} label="" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No choices available</p>
                        )}

                        <RemoveButtonComp onClick={() => handleRemoveQuestion(question.id)} label="Remove Question" />
                    </div>
                ))
            ) : (
                <p>No questions available</p>
            )}

            <ButtonComponent
                type="submit"
                label={isEdit ? 'Update Quiz' : 'Create Quiz'}
                className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            />
        </form>
    );
}

export default QuizComp;
