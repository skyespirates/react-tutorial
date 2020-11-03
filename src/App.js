import React, { Component } from 'react'

import Counters from './components/counters'
import Navbar from './components/navbar'
export class App extends Component {
  state = {
    counters: [
      {id: 0, value: 0},
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
    ]
  }
  //  Delete
  handleDelete = (id) => {
    const counters = this.state.counters.filter(e => e.id !== id)
    this.setState({counters})
  }
  //  Reset
  handleReset = () => {
    const counters = this.state.counters.map(e => {
      e.value = 0;
      return e;
    })
    this.setState({counters})
  }
  // Increment
  incrementClicked = counter => {
    const counters = [ ...this.state.counters ]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({counters})
  }
  //  Decrement
  decrementClicked = counter => {
    const counters = [ ...this.state.counters ]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter}
    if(counters[index].value > 0) counters[index].value--;
    this.setState({counters})
  }
  // Add item
  id = 4;
  handleAdd = () => {
    const newItem = {
      id: this.id,
      value: 0
    }
    this.id++;
    const counters = this.state.counters;
    this.setState({ counters: [...counters, newItem]})
  }
  render() {
    return (
      <div>
        <Navbar total={this.state.counters.filter( e => e.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            incrementClicked={this.incrementClicked} 
            decrementClicked={this.decrementClicked} 
            handleDelete={this.handleDelete} 
            handleReset={this.handleReset}
            handleAdd={this.handleAdd}
          />
        </main>   
      </div>
    );
  }
}

export default App
