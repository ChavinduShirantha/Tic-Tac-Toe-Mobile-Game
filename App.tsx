/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [active_player, setActive_player] = useState('X');
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075'},
        ]}>
        <Text style={styles.playerTxt}>Player {active_player}'s Turn</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.cell}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
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
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cell: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  icon: {
    width: 62,
    height: 62,
  },
});
