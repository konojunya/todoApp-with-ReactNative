import React from "react"
import { Text } from "react-native"

import AppStore from "../store/AppStore"

import TodoListView from "./list/TodoListView.jsx.js"

let getAll = () => AppStore.getAll()

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos: getAll()
    }
  }

  componentDidMount = () => AppStore.addChangeListener(this._onChange)
  componentWillUnmount = () => AppStore.removeChangeListener(this._onChange)

  render(){
    return(
      <TodoListView/>
    )
  }

  _onChange = () => {
    this.setState(getAll())
  }

}