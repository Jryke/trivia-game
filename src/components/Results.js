import React from 'react'

const Results = () => {
  return(
    <div className='ui center aligned container'>
      <h1>You Scored</h1>
      <h2>3 / 10</h2>
      <p><i className="green check icon"></i>Correct answer</p>
      <p><i className="red times icon"></i>wrong answer</p>
      <button className='ui button'>Play Again</button>
    </div>
  )
}

export default Results