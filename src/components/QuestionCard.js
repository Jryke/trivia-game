import React from 'react'

const QuestionCard = () => {
  return(
    <div className='ui centered card'>
      <div className='content'>
        <div className='description'>Question here</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">True</div>
          <div className="ui basic red button">False</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard