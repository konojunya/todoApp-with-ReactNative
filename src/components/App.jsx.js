import React from "react"
import { View,Text,ListView,Button } from "react-native"

import AppStore from "../store/AppStore"

import TodoListView from "./list/TodoListView.jsx.js"
import InputText from "./input/InputText.jsx.js"

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount = () => {
    this.setState({
      todos: this.state.todos.cloneWithRows(AppStore.getAll())
    })
    AppStore.addChangeListener(this._onChange)
  }

  componentWillUnmount = () => AppStore.removeChangeListener(this._onChange)

  render(){
    return(
      <View>
        <InputText/>
        <TodoListView todos={this.state.todos}/>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: "#FFEB3B",
          position: "absolute",
          bottom: 30,
          right: 30,
          borderRadius: 50
        }} />
      </View>
    )
  }

  _onChange = () => {
    this.setState({
      todos: this.state.todos.cloneWithRows(AppStore.getAll())
    })
  }

}