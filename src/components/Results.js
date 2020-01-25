import React from 'react'
import { connect } from 'react-redux'


class Results extends React.Component {
  numberCorrect = () => {
    return this.props.answers.filter(answer => answer.isCorrect).length
  }
  renderIcon = (answer) => {
    return answer.isCorrect ? <p><i className="green check icon"></i>Correct answer</p> : <p><i className="red times icon"></i>Incorrect</p>
  }
  render() {
    console.log(this.props)
    return(
      <div className='ui center aligned container'>
        <h1>You Scored</h1>
        <h2>{this.numberCorrect()} / {this.props.answers.length}</h2>
        {
          this.props.answers.map((answer, i) => {
            return(
              this.renderIcon(answer)
            )
          })
        }
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