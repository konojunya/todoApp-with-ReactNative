import React from "react"
import { ScrollView, ListView, View, Text, StyleSheet } from "react-native"

export default class TodoListView extends React.Component {

  render(){
    return(
      <ScrollView style={{ paddingTop: 22 }}>
        <View style={{ flex: 1 }}>
          <ListView>
          </ListView>
        </View>
      </ScrollView>
    )
  }

}