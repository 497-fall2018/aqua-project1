import React, { Component } from 'react';
import "../App.css";

import TodoItems from './TodoItems'
import TodoList from './TodoList'

class ListContainer extends Component{
    constructor() {
        super()
        this.state={
          selectedItem: null,
          addingItem: false,
        }
      }

    showTodoList= () => {
        this.setState({
            addingItem: !this.state.addingItem,
        })
        console.log(this.state.addingItem)
    }

    render(){
        if (this.state.addingItem){
            return(
                <div className="listcontainer-container">
                    <TodoItems 
                        entries={this.props.entries}
                        deleteItem={this.props.deleteItem}/>
                    <button onClick={this.showTodoList} className="listcontainer-addbutton">-</button>
                    <TodoList
                        addItem={this.props.addItem}
                        inputElement={this.props.inputElement}
                        handleInput={this.props.handleInput}
                        currentItem={this.props.currentItem}/>
                </div>
            )
        }
        else
        {
            return(
                <div className="listcontainer-container">
                    <TodoItems 
                        entries={this.props.entries}
                        deleteItem={this.props.deleteItem}/>
                    <button onClick={this.showTodoList} className="listcontainer-addbutton">+</button>
                </div>
            )
        }
    }
}

export default ListContainer;