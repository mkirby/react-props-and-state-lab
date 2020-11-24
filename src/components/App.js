import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount() {
    fetch(`/api/pets`)
    .then(r=>r.json())
    .then(data => this.setState({pets: data}))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onAdoptPet = (id) => {
    const newPets = [...this.state.pets]
    const pet = newPets.find(pet => pet.id === id)
    pet.isAdopted = true
    this.setState({api: newPets}, () => console.log(this.state.pets))
  }

  onChangeType = (filter) => {
    this.setState({ filters: { type: filter} })
    console.log("changed filter to: ", filter)
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch(`/api/pets`)
      .then(r=>r.json())
      .then(data => this.setState({pets: data}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r=>r.json())
      .then(data => this.setState({pets: data}))
    }
  }

}

export default App
