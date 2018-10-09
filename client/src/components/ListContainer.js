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
        console.log("pressedthebutton")
        return(
            <div>higuys</div>
        )
    }

    render(){
        if (this.state.addingItem){
            return(
                <div className="listcontainer-container">
                    <TodoItems 
                        entries={this.props.entries}
                        deleteItem={this.props.deleteItem}/>
                    <button onClick={this.showTodoList} className="listcontainer-addbutton">+</button>
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