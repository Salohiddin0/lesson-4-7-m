import React from 'react'
import Options from './Options'

const Questions = ({ question, dispatch, answer }) => {
  console.log(question)

  return (
    <div>
      <h3> Questions {question.question}</h3>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

export default Questions
