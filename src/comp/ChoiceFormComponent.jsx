import React, { useState } from 'react'
import Textbox from './Textbox'
import RemoveButtonComp from './RemoveButtonComp'

function ChoiceFormComponent({ choices, setChoices }) {

    const handleRemoveChoice = (id) => {
        const updatedChoices = choices.filter(choice => choice.id !== id);
        setChoices(updatedChoices);
    }

    const handleChoiceChange = (id, newValue) => {
        const updatedChoices = choices.map(choice =>
            choice.id === id ? {...choice, value: newValue } : choice
        );
        setChoices(updatedChoices);
    }
    
  return (
    <div>
        {choices.map((choice, index) => (
            <div key={choice.id} className="px-5">
                <label htmlFor={`choice-${choice.id}`}>Choice {index + 1}:</label>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <div className="w-full">
                        <Textbox type="text" name={`choice-${choice.id}`}  value={choice.value} onChange={(e) => handleChoiceChange(choice.id, e.target.value)} placeholder="Enter choice" />
                    </div>
                    <div className="w-full h-full items-center flex">
                        <input className="w-8 h-8" type="radio" name={`correct-${choice.id}`} />
                    </div>
                    <div>
                        <RemoveButtonComp onClick={() => handleRemoveChoice(choice.id)} label=""/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default ChoiceFormComponent
