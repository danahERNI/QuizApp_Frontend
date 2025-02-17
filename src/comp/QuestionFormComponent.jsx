import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChoiceFormComponent from './ChoiceFormComponent'
import AddButtonComp from './AddButtonComp'
import RemoveButtonComp from './RemoveButtonComp'
import Textbox from './Textbox'

function QuestionFormComponent() {
    const navigate = useNavigate();
    
    const [choices, setChoices] = useState([{id:1, value: ''}]);
    
    const handleRemoveOption = () =>{
        navigate('/QuizManagement');
    };
    
    const handleAddChoice = () => {
        const newChoice = { id: choices.length + 1, value: ''};
        setChoices([...choices, newChoice]);
    }

  return (
    <div>
      <div className="bg-slate-300 space-y-4 rounded-lg p-5 flex flex-col">
            <div className='w-full flex flex-col' > 
                <label htmlFor="question">Question:</label>
                <div className='flex flex-row space-x-2'>
                    <Textbox type="text" name="question" placeholder="Enter question"/>
                    <div>
                        <AddButtonComp onClick={handleAddChoice}/>
                    </div>
                </div>
                    
            </div>
            {choices.length > 0 ? (
                    <ChoiceFormComponent choices={choices} setChoices={setChoices} />
                ) : (
                    <p>No choices available</p> // This can help identify if the state is empty
                )}

            <RemoveButtonComp onClick={handleRemoveOption} label="Remove Question"/>
          </div>
    </div>
  )
}

export default QuestionFormComponent
