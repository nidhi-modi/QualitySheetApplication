/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen'
import MainStackNavigator from './navigation/MainStackNavigator'
import Realm from 'realm';


let realm;

export default class App extends Component {

  constructor(props) {
    super(props);

    //CREATE SCHEMA FOR REALM DB

    realm = new Realm({
      path: 'QualitySheetDB.realm',
      schema: [
        {
          name: 'qualitySheet',
          properties: {
            entry_id: { type: 'int', default: 0 },
            auditor_name: 'string',
            house_number: 'string',
            job_name: 'string',
            worker_name: 'string',
            row_number: 'string',
            week_number: 'int',
            adi_code: 'string',
            comments: 'string',
            quality_percent: 'string',
            data1: 'string',
            data2: 'string',
            data3: 'string',
            data4: 'string',
            data5: 'string',
            data6: 'string',
            data7: 'string',
            data8: 'string',
            data_send: 'string',

          },
        },
      ],
    });

    //ENDS

    this.state = {

    }


  }



  async componentDidMount() {

    SplashScreen.hide();

  }

  render() {
    return (


      <MainStackNavigator />


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});