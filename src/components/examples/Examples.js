import React from 'react';
import {
  View,
  Text,
  Icon,
  Touchable,
} from '../common';

class Examples extends React.PureComponent {

  render() {
    return (
      <View className="screen">
        <Text className="heading m10">Since You Arrived</Text>
          <View className="p10 f-row space-between">
            <Text>ExamplesPage</Text>
          </View>
      </View>
    );
  }
}

export default Examples;
