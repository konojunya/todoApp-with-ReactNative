import React from "react"
import { View, TextInput } from "react-native"

import AppAction from "../../actions/AppActions"

export default class InputText extends React.Component {

  constructor(){
    super()
    this.state = { text: "" }
  }

  render(){
    return(
      <TextInput
        style={{ height: 40, backgroundColor: "#EF5350", padding: 10, marginTop: 22, fontSize: 15 }}
        onChangeText={(text) => this.setState({text})}
        onEndEditing={this._onSubmit}
        value={this.state.text}
      />
    )
  }

  _onSubmit = () => {
    AppAction.create(this.state.text)
    this.setState({ text: "" })
  }

}