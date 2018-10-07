import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super()
    this.state={
      items: [],
      currentItem: '',
    }
  }
handleInput = e => {
  const currentItem = e.target.value;
  this.setState({
    currentItem,
  })
}
addItem = e => {
  e.preventDefault();
  const newItem = this.state.currentItem;
  if (newItem.text !=='') {
    console.log(newItem)
    
    let items = [...this.state.items, newItem];
    console.log(items)
    if (localStorage.getItem("items")){
      let currItems = JSON.parse(localStorage.getItem("items"));
      currItems.push(newItem)
      localStorage.setItem("items", JSON.stringify(currItems))
      // let storedItems = localStorage["items"];
      // console.log(items);
      // let newPush = JSON.parse(storedItems).push(newItem.text)
      // console.log(newPush)
      // localStorage["items"] = JSON.stringify(newPush)
    }
    else{
 
      localStorage.setItem("items", JSON.stringify(items));
    }
    this.setState({
      items: items,
      currentItem: { text: '', key: ''},
    })
  }
}
deleteItem = item => {

  let itemRef = this.state.items.indexOf(item)
  let loc = JSON.parse(localStorage.getItem("items"))
  loc.splice(itemRef, 1);
  localStorage.setItem("items", JSON.stringify(loc))
  const filteredItems = this.state.items.splice(itemRef, 1)
  console.log(filteredItems)
  
  // this.state.items.filter(item=> {
  //   return item.key !== key
  // })
  this.setState({
    items: filteredItems,
  })
}
inputElement = React.createRef();

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}/>
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
