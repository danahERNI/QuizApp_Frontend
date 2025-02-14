import React from "react";
import '../index.css';

function Navbar(){
    return(
        <div className="text-2xl h-4 p-5 flex justify-end items-center">
            <nav className="">
                <li className="list-none flex flex-row space-x-4">
                    <ul><a className="hover:underline " href="#">options</a></ul>
                    <ul><a className="hover:underline " href="#">options</a></ul>
                </li>
            </nav>
        </div>
    );
}

export default Navbar;