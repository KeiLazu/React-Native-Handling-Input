import React, { Component } from 'react';
import { 
  View,
  TextInput,
  Text
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''} ;
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, marginTop: 60}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}