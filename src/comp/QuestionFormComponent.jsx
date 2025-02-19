import React, { useState } from 'react'
import ChoiceFormComponent from './ChoiceFormComponent'
import AddButtonComp from './AddButtonComp'
import RemoveButtonComp from './RemoveButtonComp'
import Textbox from './Textbox'

function QuestionFormComponent({question, index, onRemove, setQuestions, questions}) {

    const [choices, setChoices] = useState([{id:1, value: ''}]);
    
    const handleAddChoice = () => {
        const newChoice = { id: choices.length + 1, value: ''};
        setChoices([...choices, newChoice]);
    }

    const handleQuestionChange = (id, newValue) => {
        const updatedQuestions = questions.map(q =>
            q.id === id ? { ...q, value: newValue } : q
        );
        setQuestions(updatedQuestions);
    };
    
  return (
    <div>
       <div className="bg-slate-300 space-y-4 rounded-lg p-5 flex flex-col">
            <div className='w-full flex flex-col' > 
                <label htmlFor={`question-${question.id}`}>Question {index + 1}</label>
                <div className='flex flex-row space-x-2'>
                    <Textbox type="text" name={`question-${question.id}`} onChange={(e) => handleQuestionChange(question.id, e.target.value)} placeholder="Enter question"/>
                    <div>
                        <AddButtonComp onClick={handleAddChoice}/>
                    </div>
                </div>
            </div>
            {choices.length > 0 ? (
                    <ChoiceFormComponent choices={choices} setChoices={setChoices} />
                ) : (
                    <p>No choices available</p>
                )}

            <RemoveButtonComp onClick={() => onRemove(question.id)} label="Remove Question"/>
          </div>
    </div>
  )
}

export default QuestionFormComponent
