import React from 'react'
import QuestionCard from './QuestionCard'

class Quiz extends React.Component {
  render() {
    return(
      <div className='ui center aligned container'>
        <h1>Title</h1>
        <QuestionCard />
      </div>
    )
  }
}

export default Quiz