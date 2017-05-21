import React from "react"
import { ScrollView, ListView, View, Text, StyleSheet } from "react-native"

import TodoListItem from "./TodoListItem.jsx.js"

export default class TodoListView extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView style={{ marginBottom: 22 }}>
        <View style={{ flex: 1 }}>
          <ListView dataSource={this.props.todos} renderRow={this._renderItem}/>
        </View>
      </ScrollView>
    )
  }

  _renderItem = todo => <TodoListItem todo={todo} />

}