import React, { Component } from 'react';
import { AppRegistry,View, Text, TextInput, ListView, ScrollView, TouchableHighlight } from 'react-native';

var array = [];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class todoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dataSource: ds.cloneWithRows([])
    };
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          style={{height: 40, padding: 10}}
          placeholder="Type here to translate!"
          onChangeText={this._onChangeText}
          onEndEditing={this._onEndEditing}
          value={this.state.text}
        />
        <ScrollView style={{marginTop: 20}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{fontSize: 20}}>{rowData}</Text>}
          />
        </ScrollView>
      </View>
    );
  }

  _onChangeText = (value) => {
    this.setState({
      text: value
    })
  }

  _onEndEditing = () => {

    array.push(this.state.text)

    this.setState({
      text: "",
      dataSource: ds.cloneWithRows(array)
    })
  }

}

AppRegistry.registerComponent('todoApp', () => todoApp);
