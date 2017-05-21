import React from "react"
import { View, Text, TouchableHighlight } from "react-native"

export default class TodoListItem extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={{ padding: 15, backgroundColor: "#fafafa" }}>
          <Text style={{ fontSize: 15 }}>{this.props.todo.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _onPressButton = () => {
    console.log("hoge")
  }

}