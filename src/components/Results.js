import React from 'react'
import { connect } from 'react-redux'


class Results extends React.Component {
  numberCorrect = () => {
    return this.props.answers.filter(answer => answer.isCorrect).length
  }
  render() {
    console.log(this.props)
    return(
      <div className='ui center aligned container'>
        <h1>You Scored</h1>
        <h2>{this.numberCorrect()} / {this.props.answers.length}</h2>
        <p><i className="green check icon"></i>Correct answer</p>
        <p><i className="red times icon"></i>wrong answer</p>
        <button className='ui button'>Play Again</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers
  }
}

export default connect(mapStateToProps)(Results)