import React from 'react'

class Pet extends React.Component {
  state = {
    isAdopted: this.props.pet.isAdopted
  }

  render() {
    const {name, age, gender, type, weight } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <h3 className="header">
            {name}
            {gender === "female" ? '♀' : '♂'}
          </h3>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.state.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={!this.state.isAdopted ? "ui primary button" : "ui disabled button"} onClick={this.clickHandler}>Adopt pet</button>
        </div>
      </div>
    )
  }

  clickHandler = () => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({isAdopted: true})
  }
}

export default Pet
