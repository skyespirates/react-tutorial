import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    const { id } = this.props.counter;
    const { incrementClicked, decrementClicked, handleDelete, counter } = this.props;
    return (
      <div>
        <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => incrementClicked(counter)} className="btn btn-sm btn-secondary m-2">Increment</button>
        <button onClick={() => decrementClicked(counter)} className="btn btn-sm btn-warning m-2">Decrement</button>
        <button onClick={handleDelete.bind(this, id)} className="btn btn-sm btn-danger m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter
