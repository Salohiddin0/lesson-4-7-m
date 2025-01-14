import React from 'react'
import Options from './Options'

const Questions = ({ question }) => {
  console.log(question)

  return (
    <div>
      <h3>{question.question}</h3>

      <ul className='options'>
        {question.options.map(option => (
          <Options option={option} />
        ))}
      </ul>
    </div>
  )
}

export default Questions
