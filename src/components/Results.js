import React from 'react'
import { connect } from 'react-redux'


class Results extends React.Component {
  render() {
    console.log(this.props)
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
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers
  }
}

export default connect(mapStateToProps)(Results)