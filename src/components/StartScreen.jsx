import React from 'react'

const StartScreen = ({ numOfQuestions }) => {
  return (
    <div className='start-screen'>
      <h1>Welcome to the Quiz!</h1>
      <p>There are {numOfQuestions} questions.</p>
      <button className='btn btn-ui'>Start</button>
    </div>
  )
}

export default StartScreen
