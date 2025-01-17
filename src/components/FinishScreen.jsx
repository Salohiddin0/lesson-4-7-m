import React from 'react'

const FinishScreen = ({ points, maxPossiblePoints, dispatch }) => {
  const percentge = Math.round((points / maxPossiblePoints) * 100)

  return (
    <div className='result'>
      Your score <span> {points} </span> out of {maxPossiblePoints} ({percentge}
      %)
      {/* <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button> */}
    </div>
  )
}

export default FinishScreen
