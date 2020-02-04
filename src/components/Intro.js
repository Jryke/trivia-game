import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Intro extends React.Component {
  state = {
    category: '',
    difficulty: '',
    type: 'multiple',
    number: 10
  }
  // fetch categories on initial page render
  componentDidMount() {
    this.props.fetchCategories()
  }
  sendInputToState = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    return (
      <div className='ui center aligned container'>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Select your game parameters:</p>
        <div className='ui relaxed grid'>
          <div className='four column row'>
            <div className='column'>
              <select className='ui dropdown' onChange={e => this.sendInputToState(e, 'category')}>
                <option value=''>Category</option>
                {this.props.categories.map(category => {
                  return(
                    <option value={category.id} key={category.id}>{category.name}</option>
                  )
                })}
              </select>
            </div>
            <div className='column'>
              <select className='ui dropdown' onChange={e => this.sendInputToState(e, 'difficulty')}>
                <option value=''>Difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div className='column'>
              <select className='ui dropdown' onChange={e => this.sendInputToState(e, 'type')}>
                <option value=''>Type</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
              </select>
            </div>
            <div className='column'>
              <div className="ui input">
                <input type="number" placeholder="# of questions" value={this.state.number} min='1' max='50' onChange={e => this.sendInputToState(e, 'number')} />
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
    categories: state.categories
  }
}

export default connect(mapStateToProps, { fetchCategories })(Intro)