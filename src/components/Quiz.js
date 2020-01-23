import React from 'react'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'

class Quiz extends React.Component {
  // fetch questions at initial page load
  componentDidMount() {
    this.props.fetchQuestions()
  }
  render() {
    // check that questions are being fetched
    console.log(this.props.questions)
    return(
      <div className='ui center aligned container'>
        <h1>Title</h1>
        <QuestionCard />
        <p>1 of 10</p>
      </div>
    )
  }
}

// mapStateToProps to update props when redux state changes
const mapStateToProps = (state) => {
  return { questions: state.questions }
}

export default connect(mapStateToProps, { fetchQuestions })(Quiz)