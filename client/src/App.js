import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage.js'

import TodoList from './components/TodoList';
import GlobalTimer from './components/GlobalTimer.js';
import ListContainer from './components/ListContainer.js';

class App extends Component {
  constructor() {
    super()
    this.state={
      items: [],
      currentItem: '',
      user: '',
      authorized: false
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

  signupWasClickedCallback = (data) => {
    /*  
      {
        username: 'johndoe',
        password: '1234%##D',
        passwordConfirmation: '1234%##D'
      }; 
    */
    console.log(data);
    alert('Signup callback, see log on the console to see the data.');
  }

  loginWasClickedCallback = (data) => {
    /*  
      {
        username: 'johndoe',
        password: '1234%##D'
      }; 
    */
    console.log(data);
    //alert('Login callback, see log on the console to see the data.');
    this.setState({
      authorized: true
    });
  }

  recoverPasswordWasClickedCallback = (data) => {
    /*  
      {
        username: 'johndoe'
      }; 
    */
    console.log(data);
    alert('Recover password callback, see log on the console to see the data.');
  }

  inputElement = React.createRef();

  render() {

    if (this.state.authorized)
    {
      return (
        <div className="App">
          <GlobalTimer />
          <ListContainer 
            entries={this.state.items}
            deleteItem={this.deleteItem}
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
        </div>
      )
    }
    else
    {
      return (
        <div className="App">
          <ReactSignupLoginComponent
            /*styles={{
              mainWrapper: { backgroundColor: 'blue' },
              mainTitle: { color: 'red' },
              flipper: { transition: '0.1s' },
              signup: {
                wrapper: { backgroundColor: 'yellow' },
                inputWrapper: { backgroundColor: 'AliceBlue' },
                buttonsWrapper: { backgroundColor: 'Aqua' },
                input: { backgroundColor: 'LavenderBlush' },
                recoverPassword: {},
                button: { backgroundColor: 'LightCoral' },
              },
              login: {
                wrapper: { backgroundColor: 'yellow' },
                inputWrapper: { backgroundColor: 'AliceBlue' },
                buttonsWrapper: { backgroundColor: 'Aqua' },
                input: { backgroundColor: 'LavenderBlush' },
                recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
                recoverPasswordButton: { backgroundColor: 'OldLace ' },
                button: { backgroundColor: 'LightCoral' },
              },
              recoverPassword: {
                wrapper: { backgroundColor: 'yellow' },
                inputWrapper: { backgroundColor: 'AliceBlue' },
                buttonsWrapper: { backgroundColor: 'Aqua' },
                input: { backgroundColor: 'LavenderBlush' },
                button: { backgroundColor: 'LightCoral' },
              },
            }}*/
            title="PRO-crastinate"
            handleSignup={this.signupWasClickedCallback}
            handleLogin={this.loginWasClickedCallback}
            handleRecoverPassword={this.recoverPasswordWasClickedCallback}
            submitLoginCustomLabel="Login"
          />
        </div>
      )
    }
  }
}

export default App;
