import React from 'react'
import { connect } from 'react-redux'
import { questionIncrement } from '../actions'

class QuestionCard extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className='ui centered card'>
        <div className='content'>
          <div className='description'>{this.props.renderQuestionInfo('question')}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => this.props.questionIncrement()}>True</div>
            <div className="ui basic red button">False</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    questions: state.questions,
    questionNumber: state.count
  }
}

export default connect(mapStateToProps, { questionIncrement })(QuestionCard)