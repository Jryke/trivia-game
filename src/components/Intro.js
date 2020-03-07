import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories, setQuestionOptions } from '../actions'

class Intro extends React.Component {
  // fetch categories on initial page render
  componentDidMount() {
    this.props.fetchCategories()
  }
  // send values picked by user to Redux store
  sendToRedux = (e, name) => {
    let value = e.target.value
    this.props.setQuestionOptions({
      [name]: value
    })
  }
  render() {
    return (
      <div className='ui center aligned container'>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Select your game parameters:</p>
        <div className='ui relaxed stackable grid' style={{paddingBottom: '1rem'}}>
          <div className='four column row'>
            <div className='four wide column'>
              <h4>Category:</h4>
              <select className='ui dropdown' style={{width: '12rem'}} onChange={e => this.sendToRedux(e, 'category')}>
                <option value=''>Any Category</option>
                {this.props.categories.map(category => {
                  return(
                    <option value={category.id} key={category.id}>{category.name}</option>
                  )
                })}
              </select>
            </div>
            <div className='four wide column'>
              <h4>Difficulty:</h4>
              <select className='ui dropdown' style={{width: '12rem'}} onChange={e => this.sendToRedux(e, 'difficulty')}>
                <option value=''>Any Difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div className='four wide column'>
              <h4>Question Type:</h4>
              <select className='ui dropdown' style={{width: '12rem'}} onChange={e => this.sendToRedux(e, 'type')}>
                <option value=''>Any Type</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
              </select>
            </div>
            <div className='four wide column'>
              <h4>Number of Questions:</h4>
              <div className="ui input" style={{width: '12rem'}}>
                <input type="number" placeholder="# of questions" value={this.props.options.number} min='1' max='50' onChange={e => this.sendToRedux(e, 'number')} />
              </div>
            </div>
          </div>
        </div>

        <p>Can you score 100%?</p>
        <Link to={'/quiz'}><button className='ui button'>BEGIN</button></Link>
      </div>
    )
  }
}

// mapStateToProps to update props when redux state changes
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    options: state.options
  }
}

export default connect(mapStateToProps, { fetchCategories, setQuestionOptions })(Intro)