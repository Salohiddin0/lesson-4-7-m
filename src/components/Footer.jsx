import React from 'react'

const Footer = ({ dispatch, index, numOfQuestions }) => {
  const isFinished = numOfQuestions >= index

  return (
    <>
      {isFinished ? (
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      ) : (
        <div>
          <button
            className='btn btn-ui'
            onClick={() => dispatch({ type: 'nextQuestion' })}
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Footer
