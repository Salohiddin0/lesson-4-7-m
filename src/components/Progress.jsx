import React from 'react'

const Progress = ({ index, numOfQuestions, points, maxPossiblePoints }) => {
  return (
    <div className='progress'>
      <p>
        Questions {index + 1} / {numOfQuestions}
      </p>

      <p>
        Points:
        {points} / {maxPossiblePoints}
      </p>

      <progress value={index + 1} max={numOfQuestions}></progress>
    </div>
  )
}

export default Progress
