import React from 'react'

const Options = ({ question, dispatch, answer }) => {
  const hasAnswer = answer !== null
  return (
    <div className='options'>
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option
             ${answer === index ? 'answer' : ''}
             ${
               hasAnswer
                 ? index === question.correctOption
                   ? 'correct'
                   : 'wrong'
                 : ''
             }`}
            key={index}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default Options
