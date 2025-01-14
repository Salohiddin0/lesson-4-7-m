import React from 'react'

const StartScreen = ({ numOfQuestions, dispatch }) => {
  console.log(numOfQuestions)

  return (
    <>
      <button className='btn' onClick={() => dispatch({ type: 'start' })}>
        Start
      </button>
    </>
  )
}

export default StartScreen
