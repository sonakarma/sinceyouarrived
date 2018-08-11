import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from './components/common';
import Examples from './components/examples/Examples';

const AppNavigator = StackNavigator({
  Examples: {
    screen: Examples,
    navigationOptions: () => ({
      header: null,
    }),
  }
});

class App extends React.PureComponent {

  render() {
    return (
      <View className="screen app-container">
        <AppNavigator />
      </View>
    );
  }
}

export default App;
