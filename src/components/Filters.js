import React from 'react'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.clickHandler}>Find pets</button>
        </div>
      </div>
    )
  }

  changeHandler = (e) => {
    this.props.onChangeType(e.target.value)
  }

  clickHandler = () => {
    this.props.onFindPetsClick()
  }
}

export default Filters
