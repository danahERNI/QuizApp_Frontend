import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizComp from '../comp/QuizComp';
import Navbar from '../comp/Navbar';

function CreateQuiz() {
    return (
        <div className="w-screen h-screen">
            <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
                <Navbar />
                <div className="overflow-y-auto space-y-2">
                    <div className="space-y-3 bg-red">
                        <h1 className="uppercase text-3xl font-medium">Create Quiz</h1>
                        <div className="border-2 border-black" />
                    </div>
                    <div className="w-full h-full p-2">
                        <QuizComp/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateQuiz;
