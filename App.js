import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import EventoList from './src/components/EventoList';

const App = () => (
  <View>
    <Header />
    <EventoList />
  </View>
)

export default App;
AppRegistry.registerComponent('albums', () => App);