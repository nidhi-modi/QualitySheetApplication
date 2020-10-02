import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ImageBackground, useEffect, Alert, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';


var nameSelected;

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class NameJobSelector extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showRealApp: false,
            selected: '',
            items: []
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

                this.setState({ items: JSON.stringify(responseJson) })
                console.log(JSON.stringify(responseJson));

                if (responseJson !== null) {

                    //this.renderEntryData();
                }

            }).catch((error) => {

                console.log(error);
            });

        //END

    }

    renderEntryData = () => {




    }



    render() {



        return (

            <View style={styles.container}>

                <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                    <ScrollView horizontal
                        pagingEnabled={true}
                        showsVerticalScrollIndicator={true}
                        scrollIndicatorInsets={{ top: 5, left: 5, bottom: 5, right: 5 }}>

                        <View style={styles.screenScrolling}>

                           <Text style={styles.headerText}>Clipping</Text>

                        </View>

                        <View style={styles.screenScrolling}>

                        <Text style={styles.headerText}>Pruning</Text>

                        </View>

                        <View style={styles.screenScrolling}>

                        <Text style={styles.headerText}>Twisting</Text>

                        </View>

                        <View style={styles.screenScrolling}>

                        <Text style={styles.headerText}>Picking</Text>

                        </View>

                        <View style={styles.screenScrolling}>

                        <Text style={styles.headerText}>Deleafing</Text>

                        </View>

                        <View style={styles.screenScrolling}>

                        <Text style={styles.headerText}>Dropping</Text>

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
        backgroundColor: '#ebebeb'
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

    buttonContainer: {
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

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
    headerText: {
        color: '#000000',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline',
    },
})


