import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PizzaTranslator from './components/PizzaTranslator';
import ButtonTutorial from './components/ButtonTutorial';
import TouchablesTutorial from './components/TouchablesTutorial';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <PizzaTranslator /> */}
        {/* <ButtonTutorial /> */}
        <TouchablesTutorial />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
