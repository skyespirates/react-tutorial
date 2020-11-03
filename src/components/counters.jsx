import React, { Component } from 'react'
import Counter from './counter'
export class Counters extends Component {
  
  render() {
    const { incrementClicked, decrementClicked, handleDelete, handleReset, handleAdd } = this.props;
    return (
      <React.Fragment>
        <button onClick={handleAdd} className="btn btn-success btn-sm m-2">Add</button>
        <button onClick={handleReset} className="btn btn-info btn-sm m-2">Reset</button>
        { this.props.counters.map( counter => (
          <Counter 
            key={counter.id} 
            counter={counter} 
            incrementClicked={incrementClicked} 
            decrementClicked={decrementClicked} 
            handleDelete={handleDelete} 
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters
