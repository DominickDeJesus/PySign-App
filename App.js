/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
} from 'react-native';
// import axios from 'axios';

const SERVER_URL = '';
const changeSign = image => {
  try {
    // const res = await axios.get(`${SERVER_URL}?img=${image}`);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //   const backgroundStyle = {
  //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //     height: '100%',
  //   };
  const backgroundStyle = {
    backgroundColor: '#2E3532',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    minHeight: '200',
  };

  return (
    <SafeAreaView style={{backgroundStyle, ...styles.buttonContainer}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('thumbsup')}>
        <Text>Thumbs Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('onair')}>
        <Text>On Air</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('meeting')}>
        <Text>Meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('filming')}>
        <Text>Filming</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('smile')}>
        <Text>Smiley Face</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeSign('sleep')}>
        <Text>Sleeping Face</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    width: '100%',
    flexWrap: 'wrap',
    margin: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: '50%',
    padding: 1,
    borderWidth: 1,
    backgroundColor: '#28AFB0',
  },
});

export default App;
