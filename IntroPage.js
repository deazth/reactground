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
  Image, Button
} from 'react-native';
import { connect } from 'react-redux';
import { userAddAge } from './action/user';

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099ff',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#999966',
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      mainlogo: {
        marginBottom: 15,
      },

    });

const bg_img = require('./img/582035.jpg');
const nox_btn = require('./img/nox.png');

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserAddAge: () => {
      dispatch(userAddAge())
    }
  }
}


class IntroPage extends Component {

  static navigationOptions = {
    title: 'TM NOX',
  };


  render() {

    const luser = this.props.user;

    return (
      
      <View style={styles.container}>
        <Image source={nox_btn} style={styles.mainlogo} />
        <Text style={styles.welcome}>Neo Operation eXchange</Text>
        <Text>{luser.name} {luser.age}</Text>
        <Button title="Begin" onPress={()=>{this.props.navigation.navigate('ModeSelect')}}/>
        <Button title="Add Age" onPress={()=>this.props.onUserAddAge()} />
      </View>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (IntroPage);
