import React from 'react'
import DOMPurify from 'dompurify'
import { connect } from 'react-redux'
import { questionIncrement, logAnswer } from '../actions'

class QuestionCard extends React.Component {
  answerQuestion = (answer) => {
    let correctAnswer = this.props.questions[this.props.questionNumber].correct_answer
    // check if answer is correct, send object to redux with answer chosen, correct answer and isCorrect if they match
    this.props.logAnswer({
      answerChosen: answer,
      correctAnswer: correctAnswer,
      isCorrect: answer === correctAnswer
    })
    // if last question is answered, navigate to results page 
    if (this.props.questionNumber >= this.props.questions.length -1) {
      this.props.navigateToResults()
    }
    // increment question number
    this.props.questionIncrement()
  }
  render() {
    return(
      <div className='ui centered card'>
        <div className='content'>
          <div className='description'>
            {DOMPurify.sanitize(this.props.renderQuestionInfo('question'))}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => this.answerQuestion('True')}>True</div>
            <div className="ui basic red button" onClick={() => this.answerQuestion('False')}>False</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    questions: state.questions,
    questionNumber: state.count,
    answers: state.answers
  }
}

export default connect(mapStateToProps, { questionIncrement, logAnswer })(QuestionCard)