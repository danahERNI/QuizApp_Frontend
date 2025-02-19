import React, { useEffect, useState } from "react";
import QuestionFormComponent from "./QuestionFormComponent";
import Textbox from "./Textbox";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";

function EditModalComp() {
    return (
        <div className="fixed inset-0 p-10 bg-transparent flex backdrop-blur-sm items-center justify-center">
            <div className="w-screen h-screen">
                <div className="w-full h-full p-20 flex items-center justify-center">
                    <form className="w-full space-y-4 p-6 bg-slate-200 rounded-lg shadow-md">
                        <div className="space-y-2">
                            <h1 className="uppercase font-medium text-xl">
                                Edit Quiz
                            </h1>
                            <div className="border-b-2 border-black"></div>
                        </div>
                        <div className="space-x-2 flex flex-row items-center">
                            <label htmlFor="quizId" className="font-medium">Quiz Id:</label>
                            <p>#</p>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="title" className="font-medium">Quiz Title:</label>
                            <Textbox type="text" name="title" placeholder="Enter updated quiz title" className="w-full p-2 border rounded-md"/>
                        </div>
                        <QuestionFormComponent/>
                        <ButtonComponent type="submit" label="Update Quiz" className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
                    </form>
                </div>
            </div>

        </div>
    );
    
}

export default EditModalComp
