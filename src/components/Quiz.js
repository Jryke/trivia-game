import React from 'react'

class Quiz extends React.Component {
  render() {
    return(
      <div className='ui center aligned container'>
        <h1>Title</h1>
        <div className='ui centered card'>
          <div className='content'>
            <div className='description'>Question here</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">True</div>
              <div className="ui basic red button">False</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz