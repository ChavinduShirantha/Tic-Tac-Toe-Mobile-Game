/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
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
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const markPosition = (position: number) => {
    if (!markers[position]) {
      let temp = [...markers];
      // @ts-ignore
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    }
  };
  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
  };
  // @ts-ignore
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === 'X') {
      // @ts-ignore
      alert('Player X Won 🎉🥳!');
    } else if (winner === 'O') {
      // @ts-ignore
      alert('Player O Won 🎉🥳!');
    }
  }, [markers]);

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
        <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
          {markers[0] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[0] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Top Mid Cell*/}
        <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
          {markers[1] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[1] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Top Right Cell*/}
        <Pressable
          style={styles.cell_top_right}
          onPress={() => markPosition(2)}>
          {markers[2] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[2] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Mid Left Cell*/}
        <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
          {markers[3] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[3] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Mid Mid Cell*/}
        <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
          {markers[4] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[4] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Mid Right Cell*/}
        <Pressable
          style={styles.cell_mid_right}
          onPress={() => markPosition(5)}>
          {markers[5] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[5] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Bottom Left Cell*/}
        <Pressable
          style={styles.cell_bottom_left}
          onPress={() => markPosition(6)}>
          {markers[6] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[6] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Bottom Mid Cell*/}
        <Pressable
          style={styles.cell_bottom_mid}
          onPress={() => markPosition(7)}>
          {markers[7] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[7] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        {/*Bottom Right Cell*/}
        <Pressable
          style={styles.cell_bottom_right}
          onPress={() => markPosition(8)}>
          {markers[8] === 'X' && (
            <Image
              source={require('./assets/img/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[8] === 'O' && (
            <Image
              source={require('./assets/img/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
      </View>
      <Pressable style={styles.reloadBtn} onPress={() => resetMarkers()}>
        <Image
          source={require('./assets/img/replay.png')}
          style={styles.reloadBtnIcon}
        />
      </Pressable>
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
  reloadBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  reloadBtnIcon: {
    height: 80,
    width: 80,
  },
});
