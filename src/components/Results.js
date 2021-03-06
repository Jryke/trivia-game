import React from 'react'
import DOMPurify from 'dompurify'
import { connect } from 'react-redux'
import { incrementReset, answersReset } from '../actions'

class Results extends React.Component {
  numberCorrect = () => {
    return this.props.answers.filter(answer => answer.isCorrect).length
  }
  renderIcon = (answer) => {
    return answer.isCorrect ? <p><i className="green check icon"></i>Correct</p> : <p><i className="red times icon"></i>Incorrect</p>
  }
  // reset Redux store for increment and answers, navigate back to /quiz to play again
  playAgain = () => {
    this.props.incrementReset()
    this.props.answersReset()
    this.props.history.push({
      pathname: '/quiz'
    })
  }
  render() {
    return(
      <div className='ui center aligned container'>
        <h1>You Scored</h1>
        <h2>{this.numberCorrect()} / {this.props.answers.length}</h2>
        {
          this.props.answers.map((answer, i) => {
            return(
              <div className='ui grid' key={`Question${i}`}>
                <div className='three wide column'>
                  {this.renderIcon(answer)}
                </div>
                <div className='thirteen wide column'>
                  <div className='ui segment'>
                    <p className='ui center aligned'>
                      Question:
                      <br />
                      {DOMPurify.sanitize(this.props.questions[i].question)}
                    </p>
                    <div className='ui divider'></div>
                    <div className='ui two column very relaxed grid'>
                      <div className='column'>
                        Your answer: {answer.answerChosen}
                      </div>
                      <div className='column'>
                        Correct answer: {answer.correctAnswer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

        <button className='ui button' style={{margin: '2rem'}} onClick={this.playAgain}>Play Again</button>
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

export default connect(mapStateToProps, { incrementReset, answersReset })(Results)