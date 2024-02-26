/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerTxt}>Player X's Turn</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
});
