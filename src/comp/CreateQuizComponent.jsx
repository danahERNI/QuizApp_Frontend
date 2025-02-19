import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
import AddButtonComp from './AddButtonComp'
import QuestionFormComponent from './QuestionFormComponent'
import Textbox from './Textbox'

function CreateQuizComponent() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([{id:1, value: ''}]);

    const handleRemoveQuestion = (id) => {
      setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
    }

    const handleAddQuestion = () =>{
      const newQuestion = {id:questions.length + 1, value: ''};
      setQuestions([...questions, newQuestion]);
    }
  return (
    <div>
        <form className="w-full h-full space-y-2 bg-slate-200 p-4 rounded-lg">
          <div className="space-y-3">
            <label htmlFor="title">Quiz Title:</label>
            <Textbox type="text" name="title" placeholder="Enter quiz title"/>
          </div>
          <AddButtonComp onClick={handleAddQuestion} label="Add Question"/>

          {questions.length > 0 ? (
              questions.map((question, index) => (
                  <QuestionFormComponent
                      key={question.id}
                      index={index}
                      question={question}
                      onRemove={handleRemoveQuestion}
                      setQuestions={setQuestions}
                      questions={questions}
                  />
              ))
            ) : (
              <p>No questions available</p>
          )}
          <ButtonComponent type="submit" label="Create Quiz" className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
        </form>
    </div>
  )
}

export default CreateQuizComponent
