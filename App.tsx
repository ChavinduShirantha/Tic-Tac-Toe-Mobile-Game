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
        {/*Top Left Cell*/}
        <Pressable style={styles.cell_top_left}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Top Mid Cell*/}
        <Pressable style={styles.cell_top_mid}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Top Right Cell*/}
        <Pressable style={styles.cell_top_right}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Mid Left Cell*/}
        <Pressable style={styles.cell_mid_left}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Mid Mid Cell*/}
        <Pressable style={styles.cell_mid_mid}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Mid Right Cell*/}
        <Pressable style={styles.cell_mid_right}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Bottom Left Cell*/}
        <Pressable style={styles.cell_bottom_left}>
          <Image
            source={require('./assets/img/cross.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Bottom Mid Cell*/}
        <Pressable style={styles.cell_bottom_mid}>
          <Image
            source={require('./assets/img/zero.png')}
            style={styles.icon}
          />
        </Pressable>
        {/*Bottom Right Cell*/}
        <Pressable style={styles.cell_bottom_right}>
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
    marginTop: 50,
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 10,
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopWidth: 4,
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderTopRightRadius: 10,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 10,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderBottomRightRadius: 10,
  },
  icon: {
    width: 62,
    height: 62,
  },
});
