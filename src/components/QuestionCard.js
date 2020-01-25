import React from 'react'
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
    // increment question number
    this.props.questionIncrement()
  }
  render() {
    console.log(this.props)
    return(
      <div className='ui centered card'>
        <div className='content'>
          <div className='description'>{this.props.renderQuestionInfo('question')}</div>
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