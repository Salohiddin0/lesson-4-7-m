import React from 'react'

const Footer = ({ dispatch, index, numOfQuestions }) => {
  const isFinished = index + 1 === numOfQuestions

  if (isFinished) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finished' })}
      >
        Finish
      </button>
    )
  }

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      Next
    </button>
  )
}

export default Footer
