import React from "react";
import Navbar from './comp/Navbar.jsx'
import './index.css';

function Index(){
    return(
        <div className="w-full h-full  p-10 flex  flex-row items-center justify-center ">
            <div className=" w-full h-full flex flex-col rounded-md border-10 border-white">
                <Navbar/>
                <div className="h-full space-y-8  flex flex-col items-center justify-center">
                    {/* <Card/> */}
                    <h1 className="text-8xl uppercase ">
                        Take the Quiz?
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Index;