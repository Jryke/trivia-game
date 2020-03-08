import React from 'react'
import DOMPurify from 'dompurify'
import { connect } from 'react-redux'
import { questionIncrement, logAnswer } from '../actions'

class QuestionCard extends React.Component {
  renderAnswerButtons = () => {
    // check that questions have been fetched
    if (this.props.questions.length > 0) {
      // render True / False buttons
      if (this.props.questions[this.props.questionNumber].type === 'boolean') {
        return (
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => this.answerQuestion('True')}>True</div>
            <div className="ui basic red button" onClick={() => this.answerQuestion('False')}>False</div>
          </div>
        )
      } else {
        // make array of answer options to reorder at random
        const answerOptions = [this.props.questions[this.props.questionNumber].correct_answer, this.props.questions[this.props.questionNumber].incorrect_answers[0], this.props.questions[this.props.questionNumber].incorrect_answers[1], this.props.questions[this.props.questionNumber].incorrect_answers[2],]
        let randomizedAnswerOptions = []
        const randomizeAnswerOptions = () => {
          // create a random index
          const pickRandomIndex = Math.round(Math.random() * (answerOptions.length - 1))
          // push element at random index from answerOptions to randomizedAnswerOptions array
          randomizedAnswerOptions.push(answerOptions[pickRandomIndex])
          // remove answer from answerOptions array
          answerOptions.splice(pickRandomIndex, 1)
        }
        // repeat until all options are randomized
        while (answerOptions.length > 0) {
          randomizeAnswerOptions()
        }
        // render multiple 4 multiple choice buttons using randomizedAnswerOptions array
        return (
          <React.Fragment>
            <div className="ui grid">
              <div className="two column row">
                <div className="column">
                  <div className="ui fade button" onClick={() => this.answerQuestion(randomizedAnswerOptions[0])}>
                    <div className="visible content">{randomizedAnswerOptions[0]}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui fade button" onClick={() => this.answerQuestion(randomizedAnswerOptions[1])}>
                    <div className="visible content">{randomizedAnswerOptions[1]}</div>
                  </div>
                </div>
              </div>
              <div className="two column row">
                <div className="column">
                  <div className="ui fade button" onClick={() => this.answerQuestion(randomizedAnswerOptions[2])}>
                    <div className="visible content">{randomizedAnswerOptions[2]}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui fade button" onClick={() => this.answerQuestion(randomizedAnswerOptions[3])}>
                    <div className="visible content">{randomizedAnswerOptions[3]}</div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }
    }
    // render temporarily while fetching questions
    return <div>LOADING...</div>
  }
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
          {this.renderAnswerButtons()}
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