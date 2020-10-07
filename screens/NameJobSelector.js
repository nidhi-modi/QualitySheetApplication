import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ImageBackground, useEffect, Alert, Dimensions, Image, FlatList, ActivityIndicator } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';



var nameSelected;

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
var responseData = [];

export default class NameJobSelector extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showRealApp: true,
            selected: '',
            combinedData: [],
            activeIndex: 0,
            isLoading: true,
            filteredClippingData: [],
            filteredPruningData: [],
            filteredTwistingData: [],
            filteredPickingData: [],
            filteredDeleafingData: [],
            filteredDroppingData: [],



        }

    }

    componentDidMount() {

        nameSelected = this.props.route.params.name;
        this.setState({ selected: nameSelected })
        console.log("AUDITOR'S NAME : " + nameSelected);

        //TESTING

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
        const url = `${scriptUrl}?callback=ctrlq&action=${'doGetData'}`;

        console.log("URL : " + url);
        fetch(url, { mode: 'no-cors' }).then((response) => response.json())
            .then((responseJson) => {


                this.setState({ combinedData: responseJson, isLoading: false })
                //console.log(this.state.combinedData);
                if (responseJson !== null) {

                    this.renderEntryData();
                }

            }).catch((error) => {

                console.log(error);
            });

        //END

    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000000",

                }}
            />
        );
    }

    GetFlatListItem(adi, name, job, site) {


        if (site === 'GER') {

            try {

                AsyncStorage.setItem('ADI', JSON.stringify(adi));
                AsyncStorage.setItem('NAME', JSON.stringify(name));
                AsyncStorage.setItem('JOB', JSON.stringify(job));


            } catch (error) {

                console.log(error);
            }


            this.props.navigation.navigate('GerQualityActivity')

        } else if (site === 'HAR') {

            try {

                AsyncStorage.setItem('ADI', JSON.stringify(adi));
                AsyncStorage.setItem('NAME', JSON.stringify(name));
                AsyncStorage.setItem('JOB', JSON.stringify(job));


            } catch (error) {

                console.log(error);
            }


            this.props.navigation.navigate('HarQualityActivity')

        } else if (site === 'FAV') {

            try {

                AsyncStorage.setItem('ADI', JSON.stringify(adi));
                AsyncStorage.setItem('NAME', JSON.stringify(name));
                AsyncStorage.setItem('JOB', JSON.stringify(job));


            } catch (error) {

                console.log(error);
            }

            this.props.navigation.navigate('FavQualityActivity')

        } else if (site === 'OHA') {

            try {

                AsyncStorage.setItem('ADI', JSON.stringify(adi));
                AsyncStorage.setItem('NAME', JSON.stringify(name));
                AsyncStorage.setItem('JOB', JSON.stringify(job));


            } catch (error) {

                console.log(error);
            }

            this.props.navigation.navigate('OhaQualityActivity')

        }

    }



    renderEntryData = () => {



        //CLIPPING
        const jobAndTeamLeaderClipping = d => d.Job === 'Clipping' && d.TeamLeader === this.state.selected;

        const filteredDataClipping = this.state.combinedData.items.filter(jobAndTeamLeaderClipping);

        this.setState({ filteredClippingData: filteredDataClipping })
        //END

        //PRUNING
        const jobAndTeamLeaderPruning = d => d.Job === 'Pruning' && d.TeamLeader === this.state.selected;

        const filteredDataPruning = this.state.combinedData.items.filter(jobAndTeamLeaderPruning);

        this.setState({ filteredPruningData: filteredDataPruning })
        //END

        //TWISTING
        const jobAndTeamLeaderTwisting = d => d.Job === 'Twisting' && d.TeamLeader === this.state.selected;

        const filteredDataTwisting = this.state.combinedData.items.filter(jobAndTeamLeaderTwisting);

        this.setState({ filteredTwistingData: filteredDataTwisting })
        //END

        //PICKING
        const jobAndTeamLeaderPicking = d => d.Job === 'Picking' && d.TeamLeader === this.state.selected;

        const filteredDataPicking = this.state.combinedData.items.filter(jobAndTeamLeaderPicking);

        this.setState({ filteredPickingData: filteredDataPicking })
        //END

        //DELEAFING
        const jobAndTeamLeaderDeleafing = d => d.Job === 'Deleafing' && d.TeamLeader === this.state.selected;

        const filteredDataDeleafing = this.state.combinedData.items.filter(jobAndTeamLeaderDeleafing);

        this.setState({ filteredDeleafingData: filteredDataDeleafing })
        //END

        //DELEAFING
        const jobAndTeamLeaderDropping = d => d.Job === 'Dropping' && d.TeamLeader === this.state.selected;

        const filteredDataDropping = this.state.combinedData.items.filter(jobAndTeamLeaderDropping);

        this.setState({ filteredDroppingData: filteredDataDropping })
        //END


    }

    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.6, width: '100%', backgroundColor: '#000' }} />
        );
    };


    render() {


        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }



        return (

            <View style={styles.container}>

                <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                    <ScrollView horizontal
                        pagingEnabled={true}
                        showsVerticalScrollIndicator={true}
                        scrollIndicatorInsets={{ top: 5, left: 5, bottom: 5, right: 5 }}>

                        <View style={styles.screenScrolling}>

                            <Text style={styles.headerText}>Clipping</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredClippingData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>
                        </View>

                        <View style={styles.screenScrolling}
                        >

                            <Text style={styles.headerText}>Pruning</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredPruningData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>

                        </View>

                        <View style={styles.screenScrolling}>

                            <Text style={styles.headerText}>Twisting</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredTwistingData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>

                        </View>

                        <View style={styles.screenScrolling}>

                            <Text style={styles.headerText}>Picking</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredPickingData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>

                        </View>

                        <View style={styles.screenScrolling}>

                            <Text style={styles.headerText}>Deleafing</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredDeleafingData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>

                        </View>

                        <View style={styles.screenScrolling}>

                            <Text style={styles.headerText}>Dropping</Text>

                            <View style={styles.container}>

                                <View style={styles.listContainer}>


                                    <FlatList

                                        data={this.state.filteredDroppingData}

                                        ItemSeparatorComponent={this.FlatListItemSeparator}

                                        renderItem={({ item }) => <Text style={{
                                            padding: 10,
                                            fontSize: 18,
                                            height: 55,
                                            color: item.Colour
                                        }} onPress={this.GetFlatListItem.bind(this, item.Adi, item.Name, item.Job, item.Site)} > {item.Combined} </Text>}

                                        keyExtractor={(item, index) => index.toString()}

                                    />

                                </View>

                                <View style={styles.footerContainer}>

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        flexDirection: 'row',
                                        marginBottom: 20
                                    }}>

                                        <Image source={require('../assets/left.png')} style={{ marginBottom: 5 }}></Image>

                                        <Text style={{
                                            fontSize: 18,
                                            color: 'black',
                                            textAlign: 'center',
                                            marginBottom: 10
                                        }}>Swipe for other jobs</Text>

                                        <Image source={require('../assets/right.png')} ></Image>


                                    </View>

                                </View>

                            </View>

                        </View>


                    </ScrollView>


                </ImageBackground>

            </View>
        )


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
        justifyContent: 'center'
    },

    screenScrolling: {

        flex: 1,
        width: screenWidth,
        marginTop: 20,


    },

    buttonContainer1: {
        //backgroundColor: 'rgba(0,0,0,0.65)',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

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
        alignItems: 'center'

    },

    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontWeight: 'bold'

    },

    buttonText: {
        fontSize: 19,
        color: '#000000',
        fontWeight: 'bold',

    },
    backgroundImage: {

        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    arrow: {

        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    headerText: {
        color: '#000000',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline',
        marginBottom: 15
    },
})


