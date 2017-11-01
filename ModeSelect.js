/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, Button, TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#0099ff',
      },
      btncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0099ff',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999966',
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      modebtn: {
        marginBottom: 5,
        width: 100,
        
        backgroundColor: '#ff66cc',
      },

    });

const bg_img = require('./img/582035.jpg');
const nox_btn = require('./img/nox.png');



export default class ModeSelect extends Component<{}> {

  static navigationOptions = {
    title: 'Entry Point',
  };

  state={
    vcolor:'pink'
    , isgreen:true
  }

  render() {

    return (
      
      <View style={styles.container}>
        <Text style={styles.welcome}>Mode Select</Text>
        <View style={styles.btncontainer}>
          <Button title="CTT" style={styles.modebtn} />
          <Button title="Order" style={styles.modebtn} />
        </View>
        <View style={styles.btncontainer}>
          <Button title="BA" style={styles.modebtn} />
          <Button title="IRIS" style={styles.modebtn} />
        </View>
      </View>
    );
  }
}

