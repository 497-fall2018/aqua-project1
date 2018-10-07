import React, { Component } from 'react';
import "../App.css";
class TodoItems extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDone: false,
    }
    this.finishTask = this.finishTask.bind(this);
  }

  finishTask(e) {
    if (e.target.style.textDecoration === 'line-through'){
      e.target.style.color = 'black';
      e.target.style.textDecoration = 'none';
      this.setState({isDone: false})
    }
    else{
      e.target.style.color = 'green';
      e.target.style.textDecoration = 'line-through';
      this.setState({isDone: true})
    }

  }

  createTasks= item => {
    return (
      <div>
        <li
          className={`todo-list-item`}
          onClick={this.finishTask}>
          {item}
          <button onClick={() => this.props.deleteItem(item)}>x</button>

        </li>
      </div>
      )
  }

  render(){

    let todoEntries;

    if (localStorage.getItem("items")) {
       todoEntries = JSON.parse(localStorage.getItem("items"))
    }
    else {
      todoEntries = this.props.entries;
    }

    // const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks)

    return <ul className = "theList">{listItems}</ul>
  }
}

export default TodoItems;
