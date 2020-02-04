import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Intro extends React.Component {
  // fetch categories on initial page render
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    return (
      <div className='ui center aligned container'>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Select your game parameters:</p>
        <div>
          <select className='ui search dropdown'>
            <option value=''>Category</option>
            {this.props.categories.map(category => {
              return(
                <option value={category.id} key={category.id}>{category.name}</option>
              )
            })}
          </select>
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