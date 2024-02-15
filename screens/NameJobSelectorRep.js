import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  useEffect,
  Alert,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
  YellowBox,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Carousel from 'react-native-looped-carousel';
import _ from 'lodash';

const {width, height} = Dimensions.get('window');

var nameSelected;

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
var responseData = [];
var houseSelected;
let houseName = 'REP 1';

export default class NameJobSelectorRep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: true,
      selected: '',
      combinedData: [],
      offlineData: [],
      activeIndex: 0,
      isLoading: true,
      filteredClippingData: [],
      filteredPruningData: [],
      filteredTwistingData: [],
      filteredPickingData: [],
      filteredDeleafingData: [],
      filteredDroppingData: [],
      filteredClipPruneData: [],
      filteredArchingData: [],
      filteredTrussPickingData: [],
      filteredDensityData: [],

      size: {width, height},
      demo: '',
    };
  }

  //CHECKING CONNECTION

  handleConnectivityChange = (state) => {
    if (state.isConnected) {
      this.setState({isItConnected: 'Online'});

      //TESTING

      const scriptUrl =
        'https://script.google.com/macros/s/AKfycbw5FuMoLBGffUAQTn3fqbfsTVgwEWCOsTooxkFo/exec';
      const url = `${scriptUrl}?callback=ctrlq&action=${'doGetDataRep2'}`;

      console.log('URL : ' + url);
      fetch(url, {mode: 'no-cors'})
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({combinedData: responseJson, isLoading: false});
          if (responseJson !== null) {
            AsyncStorage.setItem('jsondata', JSON.stringify(responseJson));
            this.renderEntryData();
          }
        })
        .catch((error) => {
          console.log(error);
        });

      //END
    } else {
      this.setState({isItConnected: 'Offline'});

      try {
        AsyncStorage.getItem('jsondata')
          .then((text1Value) => {
            responseData = JSON.parse(text1Value);
            this.setState({
              combinedData: JSON.parse(text1Value),
              isLoading: false,
            });

            if (this.state.combinedData !== null) {
              this.renderEntryData();
            }
          })
          .done();
      } catch (error) {}
    }
  };

  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          Alert.alert('You are online!');
        } else {
          Alert.alert('You are offline!');
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange,
      );
    }
  };

  handleFirstConnectivityChange = (isConnected) => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange,
    );

    if (isConnected === false) {
      Alert.alert('You are offline!');
    } else {
      Alert.alert('You are online!');
    }
  };

  //END

  componentDidMount() {
    nameSelected = this.props.route.params.name;
    this.setState({selected: nameSelected});
    console.log("AUDITOR'S NAME : " + nameSelected);

    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000000',
        }}
      />
    );
  };

  GetFlatListItem(adi, name, job, site, score) {
    if (site === 'GER') {
      try {
        AsyncStorage.setItem('ADI', JSON.stringify(adi));
        AsyncStorage.setItem('NAME', JSON.stringify(name));
        AsyncStorage.setItem('JOB', JSON.stringify(job));
        AsyncStorage.setItem('SCORE', JSON.stringify(score));
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate('GerQualityActivity');
    } else if (site === 'HAR') {
      try {
        AsyncStorage.setItem('ADI', JSON.stringify(adi));
        AsyncStorage.setItem('NAME', JSON.stringify(name));
        AsyncStorage.setItem('JOB', JSON.stringify(job));
        AsyncStorage.setItem('SCORE', JSON.stringify(score));
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate('HarQualityActivity');
    } else if (site === 'FAV') {
      try {
        AsyncStorage.setItem('ADI', JSON.stringify(adi));
        AsyncStorage.setItem('NAME', JSON.stringify(name));
        AsyncStorage.setItem('JOB', JSON.stringify(job));
        AsyncStorage.setItem('SCORE', JSON.stringify(score));
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate('FavQualityActivity');
    } else if (site === 'OHA') {
      try {
        AsyncStorage.setItem('ADI', JSON.stringify(adi));
        AsyncStorage.setItem('NAME', JSON.stringify(name));
        AsyncStorage.setItem('JOB', JSON.stringify(job));
        AsyncStorage.setItem('SCORE', JSON.stringify(score));
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate('OhaQualityActivity');
    } else if (site === 'REP') {
      try {
        AsyncStorage.setItem('ADI', JSON.stringify(adi));
        AsyncStorage.setItem('NAME', JSON.stringify(name));
        AsyncStorage.setItem('JOB', JSON.stringify(job));
        AsyncStorage.setItem('SCORE', JSON.stringify(score));
      } catch (error) {
        console.log(error);
      }

      this.props.navigation.navigate('RepQualityActivity');
    }
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };

  renderEntryData = () => {
    //CLIPPING
    const jobAndTeamLeaderClipping = (d) =>
      d.Job === 'Clipping' && d.TeamLeader === 'REP Teams';

    const filteredDataClipping = this.state.combinedData.items.filter(
      jobAndTeamLeaderClipping,
    );

    this.setState({filteredClippingData: filteredDataClipping});
    //END

    //DENSITY
    const jobAndTeamLeaderDensity = (d) =>
      d.Job === 'Density' && d.TeamLeader === 'REP Teams';

    const filteredDataDensity = this.state.combinedData.items.filter(
      jobAndTeamLeaderDensity,
    );

    this.setState({filteredDensityData: filteredDataDensity});
    //END

    //PRUNING
    const jobAndTeamLeaderPruning = (d) =>
      d.Job === 'Pruning' && d.TeamLeader === 'REP Teams';

    const filteredDataPruning = this.state.combinedData.items.filter(
      jobAndTeamLeaderPruning,
    );

    this.setState({filteredPruningData: filteredDataPruning});
    //END

    //TWISTING
    const jobAndTeamLeaderTwisting = (d) =>
      d.Job === 'Twisting' && d.TeamLeader === 'REP Teams';

    const filteredDataTwisting = this.state.combinedData.items.filter(
      jobAndTeamLeaderTwisting,
    );

    this.setState({filteredTwistingData: filteredDataTwisting});
    //END

    //PICKING
    const jobAndTeamLeaderPicking = (d) =>
      d.Job === 'Picking' && d.TeamLeader === 'REP Teams';

    const filteredDataPicking = this.state.combinedData.items.filter(
      jobAndTeamLeaderPicking,
    );

    this.setState({filteredPickingData: filteredDataPicking});
    //END

    //DELEAFING
    const jobAndTeamLeaderDeleafing = (d) =>
      d.Job === 'Deleafing' && d.TeamLeader === 'REP Teams';

    const filteredDataDeleafing = this.state.combinedData.items.filter(
      jobAndTeamLeaderDeleafing,
    );

    this.setState({filteredDeleafingData: filteredDataDeleafing});
    //END

    //DELEAFING
    const jobAndTeamLeaderDropping = (d) =>
      d.Job === 'Dropping' && d.TeamLeader === 'REP Teams';

    const filteredDataDropping = this.state.combinedData.items.filter(
      jobAndTeamLeaderDropping,
    );

    this.setState({filteredDroppingData: filteredDataDropping});
    //END

    //CLIP PRUNE
    const jobAndTeamLeaderClipPrune = (d) =>
      d.Job === 'Clip And Prune' && d.TeamLeader === 'REP Teams';

    const filteredDataClipPrune = this.state.combinedData.items.filter(
      jobAndTeamLeaderClipPrune,
    );

    this.setState({filteredClipPruneData: filteredDataClipPrune});
    //END

    //ARCHING
    const jobAndTeamLeaderArching = (d) =>
      d.Job === 'Arching' && d.TeamLeader === 'REP Teams';

    const filteredDataArching = this.state.combinedData.items.filter(
      jobAndTeamLeaderArching,
    );

    this.setState({filteredArchingData: filteredDataArching});
    //END

    //TRUSS PICKING
    const jobAndTeamLeaderTrussPicking = (d) =>
      d.Job === 'Truss Picking' && d.TeamLeader === 'REP Teams';

    const filteredDataTrussPicking = this.state.combinedData.items.filter(
      jobAndTeamLeaderTrussPicking,
    );

    this.setState({filteredTrussPickingData: filteredDataTrussPicking});
    //END
  };

  ListViewItemSeparator = () => {
    return (
      <View style={{height: 0.6, width: '100%', backgroundColor: '#000'}} />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background2.png')}
          style={styles.backgroundImage}>
          <View
            style={styles.screenScrolling}
            onLayout={this._onLayoutDidChange}>
            <Carousel
              style={this.state.size}
              autoplay={false}
              pageInfo={true}
              arrow={true}>
              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Clipping</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredClippingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Density</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredDensityData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Pruning</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredPruningData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Twisting</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredTwistingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Picking</Text>

                <View style={styles.listContainer}>
                  <FlatList
                    data={this.state.filteredPickingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Deleafing</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredDeleafingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Dropping</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredDroppingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Clip &amp; Prune</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredClipPruneData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Arching</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredArchingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>

              <View style={[this.state.size]}>
                <Text style={styles.headerText}>Truss Picking</Text>

                <View style={styles.container}>
                  <FlatList
                    data={this.state.filteredTrussPickingData.sort(
                      (a, b) =>
                        a.ActualChecks - b.ActualChecks || a.Name - b.Name,
                    )}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => (
                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          height: 55,
                          color: item.Colour,
                        }}
                        onPress={this.GetFlatListItem.bind(
                          this,
                          item.Adi,
                          item.Name,
                          item.Job,
                          item.Site,
                          item.Score,
                        )}>
                        {' '}
                        {item.Combined}{' '}
                      </Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </Carousel>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 10,
  },

  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenScrolling: {
    flex: 1,
    width: screenWidth,
    marginTop: 20,
  },

  carouselScreenScrolling: {
    flex: 1,
    marginTop: 20,
  },

  buttonContainer1: {
    //backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 50,
  },

  buttonContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderDimensions: {
    margin: 15,
  },

  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',
  },

  buttonText: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  arrow: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#000000',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
});
