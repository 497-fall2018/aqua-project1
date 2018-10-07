import React, { Component } from 'react'
import '../App.css';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render(){
    return(
      <div className="todoListMain">
          <form className="header" onSubmit={this.props.addItem}>
            <input
              className="todo-input"
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} />
            <button className="todo-submit" type="submit"> add it. </button>
          </form>
      </div>
    )
  }
}

export default TodoList
