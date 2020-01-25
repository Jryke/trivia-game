import React from 'react'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'

class Quiz extends React.Component {
  // fetch questions at initial page load
  componentDidMount() {
    this.props.fetchQuestions()
  }
  renderQuestionInfo = (type) => {
    // conditional to avoid error before questions are fetched
    if(this.props.questions.length > 0) {
      return this.props.questions[this.props.questionNumber][type]
    }
  }
  render() {
    // check that questions are being fetched
    console.log(this.props)
    return(
      <div className='ui center aligned container'>
        <h1>{this.renderQuestionInfo('category')}</h1>
        <QuestionCard renderQuestionInfo={this.renderQuestionInfo} />
        <p>{this.props.questionNumber + 1} of {this.props.questions.length}</p>
      </div>
    )
  }
}

// mapStateToProps to update props when redux state changes
const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    questionNumber: state.count
  }
}

export default connect(mapStateToProps, { fetchQuestions })(Quiz)