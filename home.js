import React from 'react';
import * as jsonfile from './test.json';
import {Text, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends React.Component {
  jsonfile = jsonfile;

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'CUSTOM TITLE',
      headerRight: () => {
        return (
          <View>
            <TouchableOpacity
              onPress={this.jsonfile ? this.handleClick : undefined}>
              <Text>button</Text>
            </TouchableOpacity>
          </View>
        );
      },
    });
  }

  handleClick = () => {
    if (this.jsonfile) {
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
