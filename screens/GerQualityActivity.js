import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, ImageBackground, TouchableHighlight, BackHandler, Alert, TextInput, Button, Keyboard, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Realm from 'realm';
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';


let realm;
var currentWeekNumber = require('current-week-number');
var count = 0;

class RadioButton extends Component {
    constructor() {
        super();


    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                    {
                        (this.props.button.selected)
                            ?
                            (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    }
                </View>
                <Text style={[styles.label, { color: this.props.button.color }]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default class QualityActivity extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            radioClippingItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioClippingItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioClippingItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioClippingItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDroppingItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDroppingItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDroppingItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDroppingItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruningItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruningItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruningItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruningItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioTwistingItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioTwistingItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioTwistingItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioTwistingItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDeleafingItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDeleafingItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDeleafingItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioDeleafingItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPickingItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPickingItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPickingItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPickingItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems1:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems2:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems3:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems4:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems5:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems6:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems7:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],

            radioPruneArchItems8:
                [

                    {
                        label: 'Pass',
                        size: 40,
                        color: 'green',
                        selected: false
                    },

                    {
                        label: 'Fail',
                        size: 40,
                        color: 'red',
                        selected: false
                    }
                ],


            clippingOption1: '',
            clippingOption2: '',
            clippingOption3: '',
            clippingOption4: '',

            droppingOption1: '',
            droppingOption2: '',
            droppingOption3: '',
            droppingOption4: '',

            pruningOption1: '',
            pruningOption2: '',
            pruningOption3: '',
            pruningOption4: '',

            twistingOption1: '',
            twistingOption2: '',
            twistingOption3: '',
            twistingOption4: '',

            deleafingOption1: '',
            deleafingOption2: '',
            deleafingOption3: '',
            deleafingOption4: '',

            pickingOption1: '',
            pickingOption2: '',
            pickingOption3: '',
            pickingOption4: '',

            pruneArchOption1: '',
            pruneArchOption2: '',
            pruneArchOption3: '',
            pruneArchOption4: '',
            pruneArchOption5: '',
            pruneArchOption6: '',
            pruneArchOption7: '',
            pruneArchOption8: '',

            isLoading: false,
            auditorsName: '',
            houseNumber: '',
            rowNumber: '',
            weekNumber: '',
            jobSelected: '',
            workersName: '',
            adiCode: '',
            comments: '',
            avgScore: '',

            isScoreSet: false,
            isItConnected: '',
            isDataSend: false,
            qualityPercentage: 0,


        }

        realm = new Realm({ path: 'QualitySheetDB.realm' });



    }

    //CHECKING CONNECTION

    handleConnectivityChange = state => {
        if (state.isConnected) {

            this.setState({ isItConnected: 'Online' });

        } else {

            this.setState({ isItConnected: 'Offline' });
        }
    };

    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    Alert.alert("You are online!");
                } else {
                    Alert.alert("You are offline!");
                }
            });
        } else {
            // For iOS devices
            NetInfo.isConnected.addEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
        }
    };

    handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );

        if (isConnected === false) {
            Alert.alert("You are offline!");
        } else {
            Alert.alert("You are online!");
        }
    };

    //END

    handleBackButton = () => {

        BackHandler.exitApp();

    }

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('NewScreen');
    }



    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        var numberWeek = 2100 + currentWeekNumber(new Date());
        console.log("Current Week Number: ", numberWeek);
        this.setState({ weekNumber: numberWeek })

        NetInfo.addEventListener(this.handleConnectivityChange);



        //GET ASYNC VALUES

        try {
            AsyncStorage.getItem('auditorsName').then((name) => {
                this.setState({ auditorsName: JSON.parse(name) });

            }).done();
        } catch (error) {
        }

        try {
            AsyncStorage.getItem('houseNumber').then((house) => {
                this.setState({ houseNumber: JSON.parse(house) });

            }).done();
        } catch (error) {
        }

        try {
            AsyncStorage.getItem('rowNumber').then((row) => {
                this.setState({ rowNumber: JSON.parse(row) });

            }).done();
        } catch (error) {
        }


        //END

        this.getAsyncData();


        //DATA PARSING FROM NAMEJOBSELECTOR SCREEN

        this.focusListener = this.props.navigation.addListener('focus', () => {

            this.getAsyncData();


        });

    }

    getAsyncData = () => {


        try {
            AsyncStorage.getItem('ADI').then((adi) => {
                const adi1 = (JSON.parse(adi))
                console.log(adi1);
                if (adi1 !== null) {
                    this.setState({ adiCode: adi1.toString() })

                }

            }).done();
        } catch (error) {
        }

        try {
            AsyncStorage.getItem('NAME').then((name) => {
                const name1 = (JSON.parse(name))
                this.setState({ workersName: name1 })

            }).done();
        } catch (error) {
        }

        try {
            AsyncStorage.getItem('JOB').then((job) => {
                const job1 = (JSON.parse(job))
                this.setState({ jobSelected: job1 })

            }).done();
        } catch (error) {
        }

        try {
            AsyncStorage.getItem('SCORE').then((score) => {
                const score1 = (JSON.parse(score))
                this.setState({ avgScore: score1 })

                if (score1 !== '') {

                    if (score1 !== null) {

                        this.setState({ isScoreSet: true })

                    } else {
                        this.setState({ isScoreSet: false })


                    }

                } else {
                    this.setState({ isScoreSet: false })


                }


                console.log("SCORE : ", this.state.avgScore);
                console.log("CONDITION : ", this.state.isScoreSet);
            }).done();
        } catch (error) {
        }

    }
    /*if(this.props.route.params.ADI !== null && this.props.route.params.NAME == null && this.props.route.params.JOB !== null){

    const adi = this.props.route.params.ADI;
    const name = this.props.route.params.NAME;
    const job = this.props.route.params.JOB;

    console.log("Data from screen : "+ adi + " "+name+ " "+job);

    }*/
    //END


    async setItem(myKey, value) {
        try {
            this.setState({
                isDataSend: false,

            });
            abc = '0';

            return await AsyncStorage.setItem(myKey, JSON.stringify(value));
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    }

    //CLIPPING

    changeActiveRadioClippingButton1(index) {
        this.state.radioClippingItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioClippingItems1[index].selected = true;

        this.setState({ radioClippingItems1: this.state.radioClippingItems1 }, () => {
            this.setState({ clippingOption1: this.state.radioClippingItems1[index].label });
        });
    }

    changeActiveRadioClippingButton2(index) {
        this.state.radioClippingItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioClippingItems2[index].selected = true;

        this.setState({ radioClippingItems2: this.state.radioClippingItems2 }, () => {
            this.setState({ clippingOption2: this.state.radioClippingItems2[index].label });
        });
    }

    changeActiveRadioClippingButton3(index) {
        this.state.radioClippingItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioClippingItems3[index].selected = true;

        this.setState({ radioClippingItems3: this.state.radioClippingItems3 }, () => {
            this.setState({ clippingOption3: this.state.radioClippingItems3[index].label });
        });
    }

    changeActiveRadioClippingButton4(index) {
        this.state.radioClippingItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioClippingItems4[index].selected = true;

        this.setState({ radioClippingItems4: this.state.radioClippingItems4 }, () => {
            this.setState({ clippingOption4: this.state.radioClippingItems4[index].label });
        });
    }

    //PRUNE AND ARCH

    changeActiveRadioPruneArchButton1(index) {
        this.state.radioPruneArchItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems1[index].selected = true;

        this.setState({ radioPruneArchItems1: this.state.radioPruneArchItems1 }, () => {
            this.setState({ pruneArchOption1: this.state.radioPruneArchItems1[index].label });
        });
    }

    changeActiveRadioPruneArchButton2(index) {
        this.state.radioPruneArchItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems2[index].selected = true;

        this.setState({ radioPruneArchItems2: this.state.radioPruneArchItems2 }, () => {
            this.setState({ pruneArchOption2: this.state.radioPruneArchItems2[index].label });
        });
    }

    changeActiveRadioPruneArchButton3(index) {
        this.state.radioPruneArchItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems3[index].selected = true;

        this.setState({ radioPruneArchItems3: this.state.radioPruneArchItems3 }, () => {
            this.setState({ pruneArchOption3: this.state.radioPruneArchItems3[index].label });
        });
    }

    changeActiveRadioPruneArchButton4(index) {
        this.state.radioPruneArchItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems4[index].selected = true;

        this.setState({ radioPruneArchItems4: this.state.radioPruneArchItems4 }, () => {
            this.setState({ pruneArchOption4: this.state.radioPruneArchItems4[index].label });
        });
    }

    changeActiveRadioPruneArchButton5(index) {
        this.state.radioPruneArchItems5.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems5[index].selected = true;

        this.setState({ radioPruneArchItems5: this.state.radioPruneArchItems5 }, () => {
            this.setState({ pruneArchOption5: this.state.radioPruneArchItems5[index].label });
        });
    }

    changeActiveRadioPruneArchButton6(index) {
        this.state.radioPruneArchItems6.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems6[index].selected = true;

        this.setState({ radioPruneArchItems6: this.state.radioPruneArchItems6 }, () => {
            this.setState({ pruneArchOption6: this.state.radioPruneArchItems6[index].label });
        });
    }

    changeActiveRadioPruneArchButton7(index) {
        this.state.radioPruneArchItems7.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems7[index].selected = true;

        this.setState({ radioPruneArchItems7: this.state.radioPruneArchItems7 }, () => {
            this.setState({ pruneArchOption7: this.state.radioPruneArchItems7[index].label });
        });
    }

    changeActiveRadioPruneArchButton8(index) {
        this.state.radioPruneArchItems8.map((item) => {
            item.selected = false;
        });

        this.state.radioPruneArchItems8[index].selected = true;

        this.setState({ radioPruneArchItems8: this.state.radioPruneArchItems8 }, () => {
            this.setState({ pruneArchOption8: this.state.radioPruneArchItems8[index].label });
        });
    }

    //DROPPING

    changeActiveRadioDroppingButton1(index) {
        this.state.radioDroppingItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioDroppingItems1[index].selected = true;

        this.setState({ radioDroppingItems1: this.state.radioDroppingItems1 }, () => {
            this.setState({ droppingOption1: this.state.radioDroppingItems1[index].label });
        });
    }

    changeActiveRadioDroppingButton2(index) {
        this.state.radioDroppingItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioDroppingItems2[index].selected = true;

        this.setState({ radioDroppingItems2: this.state.radioDroppingItems2 }, () => {
            this.setState({ droppingOption2: this.state.radioDroppingItems2[index].label });
        });
    }


    changeActiveRadioDroppingButton3(index) {
        this.state.radioDroppingItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioDroppingItems3[index].selected = true;

        this.setState({ radioDroppingItems3: this.state.radioDroppingItems3 }, () => {
            this.setState({ droppingOption3: this.state.radioDroppingItems3[index].label });
        });
    }

    changeActiveRadioDroppingButton4(index) {
        this.state.radioDroppingItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioDroppingItems4[index].selected = true;

        this.setState({ radioDroppingItems4: this.state.radioDroppingItems4 }, () => {
            this.setState({ droppingOption4: this.state.radioDroppingItems4[index].label });
        });
    }

    //PRUNING

    changeActiveRadioPruningButton1(index) {
        this.state.radioPruningItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioPruningItems1[index].selected = true;

        this.setState({ radioPruningItems1: this.state.radioPruningItems1 }, () => {
            this.setState({ pruningOption1: this.state.radioPruningItems1[index].label });
        });
    }

    changeActiveRadioPruningButton2(index) {
        this.state.radioPruningItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioPruningItems2[index].selected = true;

        this.setState({ radioPruningItems2: this.state.radioPruningItems2 }, () => {
            this.setState({ pruningOption2: this.state.radioPruningItems2[index].label });
        });
    }

    changeActiveRadioPruningButton3(index) {
        this.state.radioPruningItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioPruningItems3[index].selected = true;

        this.setState({ radioPruningItems3: this.state.radioPruningItems3 }, () => {
            this.setState({ pruningOption3: this.state.radioPruningItems3[index].label });
        });
    }

    changeActiveRadioPruningButton4(index) {
        this.state.radioPruningItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioPruningItems4[index].selected = true;

        this.setState({ radioPruningItems4: this.state.radioPruningItems4 }, () => {
            this.setState({ pruningOption4: this.state.radioPruningItems4[index].label });
        });
    }

    //TWISTING

    changeActiveRadioTwistingButton1(index) {
        this.state.radioTwistingItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioTwistingItems1[index].selected = true;

        this.setState({ radioTwistingItems1: this.state.radioTwistingItems1 }, () => {
            this.setState({ twistingOption1: this.state.radioTwistingItems1[index].label });
        });
    }

    changeActiveRadioTwistingButton2(index) {
        this.state.radioTwistingItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioTwistingItems2[index].selected = true;

        this.setState({ radioTwistingItems2: this.state.radioTwistingItems2 }, () => {
            this.setState({ twistingOption2: this.state.radioTwistingItems2[index].label });
        });
    }

    changeActiveRadioTwistingButton3(index) {
        this.state.radioTwistingItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioTwistingItems3[index].selected = true;

        this.setState({ radioTwistingItems3: this.state.radioTwistingItems3 }, () => {
            this.setState({ twistingOption3: this.state.radioTwistingItems3[index].label });
        });
    }

    changeActiveRadioTwistingButton4(index) {
        this.state.radioTwistingItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioTwistingItems4[index].selected = true;

        this.setState({ radioTwistingItems4: this.state.radioTwistingItems4 }, () => {
            this.setState({ twistingOption4: this.state.radioTwistingItems4[index].label });
        });
    }

    //DELEAFING

    changeActiveRadioDeleafingButton1(index) {
        this.state.radioDeleafingItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioDeleafingItems1[index].selected = true;

        this.setState({ radioDeleafingItems1: this.state.radioDeleafingItems1 }, () => {
            this.setState({ deleafingOption1: this.state.radioDeleafingItems1[index].label });
        });
    }

    changeActiveRadioDeleafingButton2(index) {
        this.state.radioDeleafingItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioDeleafingItems2[index].selected = true;

        this.setState({ radioDeleafingItems2: this.state.radioDeleafingItems2 }, () => {
            this.setState({ deleafingOption2: this.state.radioDeleafingItems2[index].label });
        });
    }

    changeActiveRadioDeleafingButton3(index) {
        this.state.radioDeleafingItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioDeleafingItems3[index].selected = true;

        this.setState({ radioDeleafingItems3: this.state.radioDeleafingItems3 }, () => {
            this.setState({ deleafingOption3: this.state.radioDeleafingItems3[index].label });
        });
    }

    changeActiveRadioDeleafingButton4(index) {
        this.state.radioDeleafingItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioDeleafingItems4[index].selected = true;

        this.setState({ radioDeleafingItems4: this.state.radioDeleafingItems4 }, () => {
            this.setState({ deleafingOption4: this.state.radioDeleafingItems4[index].label });
        });
    }

    //PICKING

    changeActiveRadioPickingButton1(index) {
        this.state.radioPickingItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioPickingItems1[index].selected = true;

        this.setState({ radioPickingItems1: this.state.radioPickingItems1 }, () => {
            this.setState({ pickingOption1: this.state.radioPickingItems1[index].label });
        });
    }

    changeActiveRadioPickingButton2(index) {
        this.state.radioPickingItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioPickingItems2[index].selected = true;

        this.setState({ radioPickingItems2: this.state.radioPickingItems2 }, () => {
            this.setState({ pickingOption2: this.state.radioPickingItems2[index].label });
        });
    }

    changeActiveRadioPickingButton3(index) {
        this.state.radioPickingItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioPickingItems3[index].selected = true;

        this.setState({ radioPickingItems3: this.state.radioPickingItems3 }, () => {
            this.setState({ pickingOption3: this.state.radioPickingItems3[index].label });
        });
    }

    changeActiveRadioPickingButton4(index) {
        this.state.radioPickingItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioPickingItems4[index].selected = true;

        this.setState({ radioPickingItems4: this.state.radioPickingItems4 }, () => {
            this.setState({ pickingOption4: this.state.radioPickingItems4[index].label });
        });
    }

    resetClippingRadioButton = () => {

        //CLIPPING 1
        this.state.radioClippingItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioClippingItems1: this.state.radioClippingItems1 }, () => {
            this.setState({ clippingOption1: this.state.radioClippingItems1[0].label });
        });
        //END

        //CLIPPING 2
        this.state.radioClippingItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioClippingItems2: this.state.radioClippingItems2 }, () => {
            this.setState({ clippingOption2: this.state.radioClippingItems2[0].label });
        });
        //END

        //CLIPPING 3
        this.state.radioClippingItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioClippingItems3: this.state.radioClippingItems3 }, () => {
            this.setState({ clippingOption3: this.state.radioClippingItems3[0].label });
        });
        //END

        //CLIPPING 4
        this.state.radioClippingItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioClippingItems4: this.state.radioClippingItems4 }, () => {
            this.setState({ clippingOption4: this.state.radioClippingItems4[0].label });
        });
        //END

    }

    resetPruneArchRadioButton = () => {

        //PRUNE ARCH 1
        this.state.radioPruneArchItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems1: this.state.radioPruneArchItems1 }, () => {
            this.setState({ pruneArchOption1: this.state.radioPruneArchItems1[0].label });
        });
        //END

        //PRUNE ARCH 2
        this.state.radioPruneArchItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems2: this.state.radioPruneArchItems2 }, () => {
            this.setState({ pruneArchOption2: this.state.radioPruneArchItems2[0].label });
        });
        //END

        //PRUNE ARCH 3
        this.state.radioPruneArchItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems3: this.state.radioPruneArchItems3 }, () => {
            this.setState({ pruneArchOption3: this.state.radioPruneArchItems3[0].label });
        });
        //END

        //PRUNE ARCH 4
        this.state.radioPruneArchItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems4: this.state.radioPruneArchItems4 }, () => {
            this.setState({ pruneArchOption4: this.state.radioPruneArchItems4[0].label });
        });
        //END

        //PRUNE ARCH 5
        this.state.radioPruneArchItems5.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems5: this.state.radioPruneArchItems5 }, () => {
            this.setState({ pruneArchOption5: this.state.radioPruneArchItems5[0].label });
        });
        //END

        //PRUNE ARCH 6
        this.state.radioPruneArchItems6.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems6: this.state.radioPruneArchItems6 }, () => {
            this.setState({ pruneArchOption6: this.state.radioPruneArchItems6[0].label });
        });
        //END

        //PRUNE ARCH 7
        this.state.radioPruneArchItems7.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems7: this.state.radioPruneArchItems7 }, () => {
            this.setState({ pruneArchOption7: this.state.radioPruneArchItems7[0].label });
        });
        //END

        //PRUNE ARCH 8
        this.state.radioPruneArchItems8.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruneArchItems8: this.state.radioPruneArchItems8 }, () => {
            this.setState({ pruneArchOption8: this.state.radioPruneArchItems8[0].label });
        });
        //END

    }


    resetPruningRadioButton = () => {


        //PRUNING 1
        this.state.radioPruningItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruningItems1: this.state.radioPruningItems1 }, () => {
            this.setState({ pruningOption1: this.state.radioPruningItems1[0].label });
        });
        //END

        //PRUNING 2
        this.state.radioPruningItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruningItems2: this.state.radioPruningItems2 }, () => {
            this.setState({ pruningOption2: this.state.radioPruningItems2[0].label });
        });
        //END

        //PRUNING 3
        this.state.radioPruningItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruningItems3: this.state.radioPruningItems3 }, () => {
            this.setState({ pruningOption3: this.state.radioPruningItems3[0].label });
        });
        //END

        //PRUNING 4
        this.state.radioPruningItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPruningItems4: this.state.radioPruningItems4 }, () => {
            this.setState({ pruningOption4: this.state.radioPruningItems4[0].label });
        });
        //END
    }

    resetTwistingRadioButton = () => {


        //TWISTING 1
        this.state.radioTwistingItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioTwistingItems1: this.state.radioTwistingItems1 }, () => {
            this.setState({ twistingOption1: this.state.radioTwistingItems1[0].label });
        });
        //END

        //TWISTING 2
        this.state.radioTwistingItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioTwistingItems2: this.state.radioTwistingItems2 }, () => {
            this.setState({ twistingOption2: this.state.radioTwistingItems2[0].label });
        });
        //END

        //TWISTING 3
        this.state.radioTwistingItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioTwistingItems3: this.state.radioTwistingItems3 }, () => {
            this.setState({ twistingOption3: this.state.radioTwistingItems3[0].label });
        });
        //END

        //TWISTING 4
        this.state.radioTwistingItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioTwistingItems4: this.state.radioTwistingItems4 }, () => {
            this.setState({ twistingOption4: this.state.radioTwistingItems4[0].label });
        });
        //END
    }

    resetPickingRadioButton = () => {


        //PICKING 1
        this.state.radioPickingItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPickingItems1: this.state.radioPickingItems1 }, () => {
            this.setState({ pickingOption1: this.state.radioPickingItems1[0].label });
        });
        //END

        //PICKING 2
        this.state.radioPickingItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPickingItems2: this.state.radioPickingItems2 }, () => {
            this.setState({ pickingOption2: this.state.radioPickingItems2[0].label });
        });
        //END

        //PICKING 3
        this.state.radioPickingItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPickingItems3: this.state.radioPickingItems3 }, () => {
            this.setState({ pickingOption3: this.state.radioPickingItems3[0].label });
        });
        //END

        //PICKING 4
        this.state.radioPickingItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioPickingItems4: this.state.radioPickingItems4 }, () => {
            this.setState({ pickingOption4: this.state.radioPickingItems4[0].label });
        });
        //END
    }

    resetDeleafingRadioButton = () => {

        //DELEAFING 1
        this.state.radioDeleafingItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDeleafingItems1: this.state.radioDeleafingItems1 }, () => {
            this.setState({ deleafingOption1: this.state.radioDeleafingItems1[0].label });
        });
        //END

        //DELEAFING 2
        this.state.radioDeleafingItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDeleafingItems2: this.state.radioDeleafingItems2 }, () => {
            this.setState({ deleafingOption2: this.state.radioDeleafingItems2[0].label });
        });
        //END

        //DELEAFING 3
        this.state.radioDeleafingItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDeleafingItems3: this.state.radioDeleafingItems3 }, () => {
            this.setState({ deleafingOption3: this.state.radioDeleafingItems3[0].label });
        });
        //END

        //DELEAFING 4
        this.state.radioDeleafingItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDeleafingItems4: this.state.radioDeleafingItems4 }, () => {
            this.setState({ deleafingOption4: this.state.radioDeleafingItems4[0].label });
        });
        //END

    }

    resetDroppingRadioButton = () => {


        //DROPPING 1
        this.state.radioDroppingItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDroppingItems1: this.state.radioDroppingItems1 }, () => {
            this.setState({ droppingOption1: this.state.radioDroppingItems1[0].label });
        });
        //END

        //DROPPING 2
        this.state.radioDroppingItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDroppingItems2: this.state.radioDroppingItems2 }, () => {
            this.setState({ droppingOption2: this.state.radioDroppingItems2[0].label });
        });
        //END

        //DROPPING 3
        this.state.radioDroppingItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDroppingItems3: this.state.radioDroppingItems3 }, () => {
            this.setState({ droppingOption3: this.state.radioDroppingItems3[0].label });
        });
        //END

        //DROPPING 4
        this.state.radioDroppingItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioDroppingItems4: this.state.radioDroppingItems4 }, () => {
            this.setState({ droppingOption4: this.state.radioDroppingItems4[0].label });
        });
        //END
    }

    calculateClippingQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.clippingOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.clippingOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.clippingOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.clippingOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.saveClippingDataToDB();

        }, 1500);


    }

    calculatePrunArchQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.pruneArchOption1 === 'Pass') {

                count = count + 12.50;

            } else {



            }


            if (this.state.pruneArchOption2 === 'Pass') {

                count = count + 12.50;

            } else {



            }


            if (this.state.pruneArchOption3 === 'Pass') {

                count = count + 12.50;

            } else {



            }


            if (this.state.pruneArchOption4 === 'Pass') {

                count = count + 12.50;

            } else {


            }

            if (this.state.pruneArchOption5 === 'Pass') {

                count = count + 12.50;

            } else {


            }

            if (this.state.pruneArchOption6 === 'Pass') {

                count = count + 12.50;

            } else {


            }

            if (this.state.pruneArchOption7 === 'Pass') {

                count = count + 12.50;

            } else {


            }

            if (this.state.pruneArchOption8 === 'Pass') {

                count = count + 12.50;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.savePruneArchDataToDB();

        }, 1500)


    }

    calculatePruningQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.pruningOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pruningOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pruningOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pruningOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.savePruningDataToDB();

        }, 1500);


    }

    calculateTwistingQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.twistingOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.twistingOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.twistingOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.twistingOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.saveTwistingDataToDB();

        }, 1500);


    }

    calculatePickingQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.pickingOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pickingOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pickingOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.pickingOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.savePickingDataToDB();

        }, 1500);


    }

    calculateDeleafingQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.deleafingOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.deleafingOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.deleafingOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.deleafingOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.saveDeleafingDataToDB();

        }, 1500);


    }

    calculateDroppingQualityPercentage = () => {

        setTimeout(() => {

            if (this.state.droppingOption1 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.droppingOption2 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.droppingOption3 === 'Pass') {

                count = count + 25;

            } else {



            }


            if (this.state.droppingOption4 === 'Pass') {

                count = count + 25;

            } else {


            }

            this.setState({ qualityPercentage: count.toString() })

            console.log("COUNT : " + count);

            count = 0;

        }, 1000);

        setTimeout(() => {
            this.saveDroppingDataToDB();

        }, 1500);


    }

    saveClippingDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { clippingOption1 } = this.state;
        const { clippingOption2 } = this.state;
        const { clippingOption3 } = this.state;
        const { clippingOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (clippingOption1) {
                                if (clippingOption2) {
                                    if (clippingOption3) {
                                        if (clippingOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.clippingOption1}&data2=${that.state.clippingOption2}&data3=${that.state.clippingOption3}&data4=${that.state.clippingOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.clippingOption1,
                                                        data2: that.state.clippingOption2,
                                                        data3: that.state.clippingOption3,
                                                        data4: that.state.clippingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetClippingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })

                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.clippingOption1,
                                                        data2: that.state.clippingOption2,
                                                        data3: that.state.clippingOption3,
                                                        data4: that.state.clippingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });

                                                    this.resetClippingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });

                                                this.setState({ auditorsName: null })

                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from clipping quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from clipping quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from clipping quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from clipping quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }

    savePruningDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { pruningOption1 } = this.state;
        const { pruningOption2 } = this.state;
        const { pruningOption3 } = this.state;
        const { pruningOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (pruningOption1) {
                                if (pruningOption2) {
                                    if (pruningOption3) {
                                        if (pruningOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.pruningOption1}&data2=${that.state.pruningOption2}&data3=${that.state.pruningOption3}&data4=${that.state.pruningOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.pruningOption1,
                                                        data2: that.state.pruningOption2,
                                                        data3: that.state.pruningOption3,
                                                        data4: that.state.pruningOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetPruningRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })

                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.pruningOption1,
                                                        data2: that.state.pruningOption2,
                                                        data3: that.state.pruningOption3,
                                                        data4: that.state.pruningOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });

                                                    this.resetPruningRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });

                                                this.setState({ auditorsName: null })

                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from pruning quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from pruning quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from pruning quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from pruning quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }

    saveTwistingDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { twistingOption1 } = this.state;
        const { twistingOption2 } = this.state;
        const { twistingOption3 } = this.state;
        const { twistingOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (twistingOption1) {
                                if (twistingOption2) {
                                    if (twistingOption3) {
                                        if (twistingOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.twistingOption1}&data2=${that.state.twistingOption2}&data3=${that.state.twistingOption3}&data4=${that.state.twistingOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.twistingOption1,
                                                        data2: that.state.twistingOption2,
                                                        data3: that.state.twistingOption3,
                                                        data4: that.state.twistingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetTwistingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })

                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.twistingOption1,
                                                        data2: that.state.twistingOption2,
                                                        data3: that.state.twistingOption3,
                                                        data4: that.state.twistingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });

                                                    this.resetTwistingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });

                                                this.setState({ auditorsName: null })

                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from twisting quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from twisting quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from twisting quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from twisting quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }



    }

    savePickingDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { pickingOption1 } = this.state;
        const { pickingOption2 } = this.state;
        const { pickingOption3 } = this.state;
        const { pickingOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (pickingOption1) {
                                if (pickingOption2) {
                                    if (pickingOption3) {
                                        if (pickingOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.pickingOption1}&data2=${that.state.pickingOption2}&data3=${that.state.pickingOption3}&data4=${that.state.pickingOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.pickingOption1,
                                                        data2: that.state.pickingOption2,
                                                        data3: that.state.pickingOption3,
                                                        data4: that.state.pickingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetPickingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })


                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.pickingOption1,
                                                        data2: that.state.pickingOption2,
                                                        data3: that.state.pickingOption3,
                                                        data4: that.state.pickingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });

                                                    this.resetPickingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });
                                                this.setState({ auditorsName: null })


                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from picking quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from picking quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from picking quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from picking quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }

    saveDeleafingDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { deleafingOption1 } = this.state;
        const { deleafingOption2 } = this.state;
        const { deleafingOption3 } = this.state;
        const { deleafingOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (deleafingOption1) {
                                if (deleafingOption2) {
                                    if (deleafingOption3) {
                                        if (deleafingOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.deleafingOption1}&data2=${that.state.deleafingOption2}&data3=${that.state.deleafingOption3}&data4=${that.state.deleafingOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.deleafingOption1,
                                                        data2: that.state.deleafingOption2,
                                                        data3: that.state.deleafingOption3,
                                                        data4: that.state.deleafingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetDeleafingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })



                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.deleafingOption1,
                                                        data2: that.state.deleafingOption2,
                                                        data3: that.state.deleafingOption3,
                                                        data4: that.state.deleafingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });



                                                    this.resetDeleafingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });

                                                this.setState({ auditorsName: null })


                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from deleafing quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from deleafing quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from deleafing quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from deleafing quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }

    savePruneArchDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { pruneArchOption1 } = this.state;
        const { pruneArchOption2 } = this.state;
        const { pruneArchOption3 } = this.state;
        const { pruneArchOption4 } = this.state;
        const { pruneArchOption5 } = this.state;
        const { pruneArchOption6 } = this.state;
        const { pruneArchOption7 } = this.state;
        const { pruneArchOption8 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (pruneArchOption1) {
                                if (pruneArchOption2) {
                                    if (pruneArchOption3) {
                                        if (pruneArchOption4) {
                                            if (pruneArchOption5) {
                                                if (pruneArchOption6) {
                                                    if (pruneArchOption7) {
                                                        if (pruneArchOption8) {

                                                            if (this.state.isItConnected === 'Online') {



                                                                console.log("Connected to internet");

                                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                                const url = `${scriptUrl}?
                                                                callback=ctrlq&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.pruneArchOption1}&data2=${that.state.pruneArchOption2}&data3=${that.state.pruneArchOption3}&data4=${that.state.pruneArchOption4}&data5=${that.state.pruneArchOption5}&data6=${that.state.pruneArchOption6}&data7=${that.state.pruneArchOption7}&data8=${that.state.pruneArchOption8}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                                console.log("URL : " + url);
                                                                fetch(url, { mode: 'no-cors' }).then(
                                                                    () => { console.log("Data Send"); },
                                                                );
                                                                realm.write(() => {
                                                                    var ID =
                                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                                .entry_id + 1
                                                                            : 1;
                                                                    realm.create('qualitySheet', {
                                                                        entry_id: ID,
                                                                        auditor_name: that.state.auditorsName,
                                                                        house_number: that.state.houseNumber,
                                                                        job_name: that.state.jobSelected,
                                                                        worker_name: that.state.workersName,
                                                                        row_number: that.state.rowNumber,
                                                                        week_number: that.state.weekNumber,
                                                                        adi_code: that.state.adiCode,
                                                                        comments: that.state.comments,
                                                                        quality_percent: that.state.qualityPercentage,
                                                                        data1: that.state.pruneArchOption1,
                                                                        data2: that.state.pruneArchOption2,
                                                                        data3: that.state.pruneArchOption3,
                                                                        data4: that.state.pruneArchOption4,
                                                                        data5: that.state.pruneArchOption5,
                                                                        data6: that.state.pruneArchOption6,
                                                                        data7: that.state.pruneArchOption7,
                                                                        data8: that.state.pruneArchOption8,
                                                                        data_send: 'Y',
                                                                    });



                                                                    this.resetPruneArchRadioButton();
                                                                    AsyncStorage.clear();
                                                                    AsyncStorage.removeItem('auditorsName');
                                                                    AsyncStorage.removeItem('workersName');
                                                                    AsyncStorage.removeItem('houseNumber');
                                                                    AsyncStorage.removeItem('jobSelected');
                                                                    AsyncStorage.removeItem('rowNumber');
                                                                    this.setState({ auditorsName: null })
                                                                    this.setState({ workersName: '' })
                                                                    this.setState({ houseNumber: '' })
                                                                    this.setState({ jobSelected: '' })
                                                                    this.setState({ rowNumber: '' })
                                                                    this.setState({ isScoreSet: false })
                                                                    count1 = 0;

                                                                    this.props.navigation.navigate('HarQualityActivity')
                                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                                    this.setState({ isLoading: false })


                                                                });

                                                                this.setState({ auditorsName: null })

                                                            } else {

                                                                console.log("Not connected to internet");

                                                                realm.write(() => {
                                                                    var ID =
                                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                                .entry_id + 1
                                                                            : 1;
                                                                    realm.create('qualitySheet', {
                                                                        entry_id: ID,
                                                                        auditor_name: that.state.auditorsName,
                                                                        house_number: that.state.houseNumber,
                                                                        job_name: that.state.jobSelected,
                                                                        worker_name: that.state.workersName,
                                                                        row_number: that.state.rowNumber,
                                                                        week_number: that.state.weekNumber,
                                                                        adi_code: that.state.adiCode,
                                                                        comments: that.state.comments,
                                                                        quality_percent: that.state.qualityPercentage,
                                                                        data1: that.state.pruneArchOption1,
                                                                        data2: that.state.pruneArchOption2,
                                                                        data3: that.state.pruneArchOption3,
                                                                        data4: that.state.pruneArchOption4,
                                                                        data5: that.state.pruneArchOption5,
                                                                        data6: that.state.pruneArchOption6,
                                                                        data7: that.state.pruneArchOption7,
                                                                        data8: that.state.pruneArchOption8,
                                                                        data_send: 'N',
                                                                    });

                                                                    this.resetPruneArchRadioButton();
                                                                    AsyncStorage.clear();
                                                                    AsyncStorage.removeItem('auditorsName');
                                                                    AsyncStorage.removeItem('workersName');
                                                                    AsyncStorage.removeItem('houseNumber');
                                                                    AsyncStorage.removeItem('jobSelected');
                                                                    AsyncStorage.removeItem('rowNumber');
                                                                    this.setState({ auditorsName: null })
                                                                    this.setState({ workersName: '' })
                                                                    this.setState({ houseNumber: '' })
                                                                    this.setState({ jobSelected: '' })
                                                                    this.setState({ rowNumber: '' })
                                                                    this.setState({ isScoreSet: false })
                                                                    count1 = 0;
                                                                    this.props.navigation.navigate('HarQualityActivity')

                                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                                    this.setState({ isLoading: false })

                                                                });

                                                                this.setState({ auditorsName: null })

                                                            }

                                                        } else {
                                                            this.setState({ isLoading: false })
                                                            alert('Choose one option from Pruning and arching quality check 8')

                                                        }

                                                    } else {
                                                        this.setState({ isLoading: false })
                                                        alert('Choose one option from Pruning and arching quality check 7')

                                                    }

                                                } else {
                                                    this.setState({ isLoading: false })
                                                    alert('Choose one option from Pruning and arching quality check 6')

                                                }

                                            } else {
                                                this.setState({ isLoading: false })
                                                alert('Choose one option from Pruning and arching quality check 5')

                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from Pruning and arching quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from Pruning and arching quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from Pruning and arching quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from Pruning and arching quality check 1')
                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }

    saveDroppingDataToDB = () => {

        var that = this;
        this.setState({ isLoading: true })


        const { auditorsName } = this.state;
        const { houseNumber } = this.state;
        const { rowNumber } = this.state;
        const { weekNumber } = this.state;
        const { workersName } = this.state;
        const { jobSelected } = this.state;
        const { droppingOption1 } = this.state;
        const { droppingOption2 } = this.state;
        const { droppingOption3 } = this.state;
        const { droppingOption4 } = this.state;
        const { data_send } = this.state;



        if (auditorsName) {
            if (houseNumber) {
                if (rowNumber) {
                    if (workersName) {
                        if (jobSelected) {
                            if (droppingOption1) {
                                if (droppingOption2) {
                                    if (droppingOption3) {
                                        if (droppingOption4) {

                                            if (this.state.isItConnected === 'Online') {



                                                console.log("Connected to internet");

                                                const scriptUrl = 'https://script.google.com/macros/s/AKfycbwStGsVHmBl83tHHZpzJCLWZV5lmQcNMmINRrSSvqnrq6kyglM/exec';
                                                const url = `${scriptUrl}?
                                                callback=ctrlq&action=${'doPostGer'}&action=${'doPostGer'}&week_number=${that.state.weekNumber}&auditor_name=${that.state.auditorsName}&job=${that.state.jobSelected}&house_number=${that.state.houseNumber}&row_number=${that.state.rowNumber}&worker_name=${that.state.workersName}&adi_code=${that.state.adiCode}&data1=${that.state.droppingOption1}&data2=${that.state.droppingOption2}&data3=${that.state.droppingOption3}&data4=${that.state.droppingOption4}&data5=${''}&data6=${''}&data7=${''}&data8=${''}&comments=${that.state.comments}&quality_percent=${that.state.qualityPercentage}`;

                                                console.log("URL : " + url);
                                                fetch(url, { mode: 'no-cors' }).then(
                                                    () => { console.log("Data Send"); },
                                                );
                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.droppingOption1,
                                                        data2: that.state.droppingOption2,
                                                        data3: that.state.droppingOption3,
                                                        data4: that.state.droppingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'Y',
                                                    });



                                                    this.resetDroppingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')
                                                    Toast.showWithGravity('Success!! \nDetails Added Successfully.', Toast.LONG, Toast.CENTER);
                                                    this.setState({ isLoading: false })


                                                });

                                                this.setState({ auditorsName: null })
                                            } else {

                                                console.log("Not connected to internet");

                                                realm.write(() => {
                                                    var ID =
                                                        realm.objects('qualitySheet').sorted('entry_id', true).length > 0
                                                            ? realm.objects('qualitySheet').sorted('entry_id', true)[0]
                                                                .entry_id + 1
                                                            : 1;
                                                    realm.create('qualitySheet', {
                                                        entry_id: ID,
                                                        auditor_name: that.state.auditorsName,
                                                        house_number: that.state.houseNumber,
                                                        job_name: that.state.jobSelected,
                                                        worker_name: that.state.workersName,
                                                        row_number: that.state.rowNumber,
                                                        week_number: that.state.weekNumber,
                                                        adi_code: that.state.adiCode,
                                                        comments: that.state.comments,
                                                        quality_percent: that.state.qualityPercentage,
                                                        data1: that.state.droppingOption1,
                                                        data2: that.state.droppingOption2,
                                                        data3: that.state.droppingOption3,
                                                        data4: that.state.droppingOption4,
                                                        data5: '',
                                                        data6: '',
                                                        data7: '',
                                                        data8: '',
                                                        data_send: 'N',
                                                    });



                                                    this.resetDroppingRadioButton();
                                                    AsyncStorage.clear();
                                                    AsyncStorage.removeItem('auditorsName');
                                                    AsyncStorage.removeItem('workersName');
                                                    AsyncStorage.removeItem('houseNumber');
                                                    AsyncStorage.removeItem('jobSelected');
                                                    AsyncStorage.removeItem('rowNumber');
                                                    this.setState({ auditorsName: null })
                                                    this.setState({ workersName: '' })
                                                    this.setState({ houseNumber: '' })
                                                    this.setState({ jobSelected: '' })
                                                    this.setState({ rowNumber: '' })
                                                    this.setState({ isScoreSet: false })

                                                    this.props.navigation.navigate('GerQualityActivity')

                                                    Toast.show('Success!! \nDetails Added Successfully.', Toast.LONG);
                                                    this.setState({ isLoading: false })

                                                });

                                                this.setState({ auditorsName: null })


                                            }

                                        } else {
                                            this.setState({ isLoading: false })
                                            alert('Choose one option from dropping quality check 4')

                                        }

                                    } else {
                                        this.setState({ isLoading: false })
                                        alert('Choose one option from dropping quality check 3')

                                    }

                                } else {
                                    this.setState({ isLoading: false })
                                    alert('Choose one option from dropping quality check 2')

                                }

                            } else {
                                this.setState({ isLoading: false })
                                alert('Choose one option from dropping quality check 1')

                            }

                        } else {
                            this.setState({ isLoading: false })
                            alert('Please select job')

                        }

                    } else {
                        this.setState({ isLoading: false })
                        alert('Please select name')

                    }

                } else {
                    this.setState({ isLoading: false })
                    alert('Please fill row number')

                }

            } else {
                this.setState({ isLoading: false })
                alert('Please select house number')

            }

        } else {
            this.setState({ isLoading: false })
            alert('Please select auditor name')

        }

    }




    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    updateTextInput = (text, field) => {
        this.setItem(field, text)
        const state = this.state
        state[field] = text;
        this.setState(state);
    }

    navigateToScreen = () => {

        this.props.navigation.navigate('NameJobSelectorGer', { name: this.state.auditorsName })

    }



    render() {


        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                <ScrollView style={styles.formContainer}
                    keyboardShouldPersistTaps='handled'>



                    <Text style={styles.headerText}>Enter Quality Details</Text>

                    <View style={styles.marginDimension}></View>

                    <View style={styles.marginDimension}></View>

                    <View style={styles.marginDimension}></View>

                    <Text style={styles.titleHeadingText}>Select Auditor's Name</Text>

                    <View style={styles.marginDimension}></View>

                    <View
                        style={{

                            // The solution: Apply zIndex to any device except Android
                            ...(Platform.OS !== 'android' && {
                                zIndex: 20
                            })

                        }}
                    >

                        <DropDownPicker
                            items={[
                                { label: 'Deep Singh', value: 'Deep Singh' },
                                { label: 'Marsha Stone', value: 'Marsha Stone' },
                                { label: 'Nau Pesa', value: 'Nau Pesa' },
                                { label: 'Tevita Fetuani', value: 'Tevita Fetuani' },
                                { label: 'Francis Dee', value: 'Francis Dee' },
                                { label: 'Gurjant Singh', value: 'Gurjant Singh' },
                                { label: 'Heather Feetham', value: 'Heather Feetham' },




                            ]}
                            placeholder="SELECT"
                            containerStyle={{ height: 50 }}
                            style={{
                                backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                borderWidth: 1
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            labelStyle={{
                                fontSize: 15,
                                textAlign: 'left',
                                color: '#000000'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={(item) => this.updateTextInput(item.value, 'auditorsName')}
                            value={this.state.auditorsName}


                        />


                    </View>

                    <View style={styles.inBtnmarginDimension}></View>



                    <Text style={styles.titleHeadingText}>Select Name</Text>


                    {Platform.OS === 'ios' ?
                        (<View style={styles.borderEdit}>

                            {(this.state.auditorsName !== null) ?
                                (<TouchableOpacity style={styles.buttonContainerTextInput} onPress={() => this.navigateToScreen()}>
                                    <TextInput style={styles.textInputStyle}
                                        autoCapitalize="none"
                                        multiline={false}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={this.navigateToScreen}
                                        showSoftInputOnFocus={false}
                                        keyboardType={'numeric'}
                                        value={this.state.workersName}
                                        editable={true}
                                        pointerEvents='none'
                                        selectTextOnFocus={true}

                                    /></TouchableOpacity>) :
                                (<TouchableOpacity style={styles.buttonContainerTextInput}>
                                    <TextInput style={styles.textInputStyle}
                                        autoCapitalize="none"
                                        multiline={false}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        showSoftInputOnFocus={false}
                                        keyboardType={'numeric'}
                                        editable={false}
                                        pointerEvents='none'
                                        selectTextOnFocus={false}


                                    /></TouchableOpacity>)}


                        </View>) :
                        (<View style={styles.borderEdit}>

                            {(this.state.auditorsName !== null) ?
                                (<TextInput style={styles.textInputStyle}
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    showSoftInputOnFocus={false}
                                    keyboardType={'numeric'}
                                    onFocus={this.navigateToScreen}
                                    value={this.state.workersName}
                                    editable={true}
                                    pointerEvents='none'
                                    selectTextOnFocus={true}

                                />) :
                                (<TextInput style={styles.textInputStyle}
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    showSoftInputOnFocus={false}
                                    keyboardType={'numeric'}
                                    editable={false}
                                    pointerEvents='none'
                                    selectTextOnFocus={false}


                                />)}


                        </View>)}




                    <View style={styles.inBtnmarginDimension}></View>

                    <Text style={styles.titleHeadingText}>Select House Number</Text>

                    <View style={styles.marginDimension}></View>

                    <View
                        style={{

                            // The solution: Apply zIndex to any device except Android
                            ...(Platform.OS !== 'android' && {
                                zIndex: 10
                            })

                        }}
                    >


                        <DropDownPicker
                            items={[
                                { label: 'GER 1', value: 'GER 1' },
                                { label: 'GER 2', value: 'GER 2' },
                                { label: 'GER 3', value: 'GER 3' },
                                { label: 'GER 4', value: 'GER 4' },
                                { label: 'GER 5', value: 'GER 5' },
                            ]}
                            placeholder="SELECT"
                            containerStyle={{ height: 50 }}
                            style={{
                                backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                borderWidth: 1
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            labelStyle={{
                                fontSize: 15,
                                textAlign: 'left',
                                color: '#000000'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={(item) => this.updateTextInput(item.value, 'houseNumber')}
                            value={this.state.houseNumber}

                        />
                    </View>
                    <View style={styles.inBtnmarginDimension}></View>

                    <Text style={styles.titleHeadingText}>Select Job</Text>

                    <View style={styles.borderEdit}>
                        <TextInput style={styles.textInputStyle}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            multiline={false}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={this.navigateToScreen}
                            returnKeyType={"done"}
                            onFocus={this.navigateToScreen}
                            keyboardType={'numeric'}
                            editable={false}
                            selectTextOnFocus={false}
                            value={this.state.jobSelected}

                        />

                    </View>


                    <View style={styles.inBtnmarginDimension}></View>

                    <Text style={styles.titleHeadingText}>Enter Row Number</Text>

                    <View style={styles.borderEdit}>
                        <TextInput style={styles.textInputStyle}
                            autoCapitalize="none"
                            multiline={false}
                            maxLength={5}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={(text) => this.updateTextInput(text, 'rowNumber')}
                            returnKeyType={"done"}
                            keyboardType={'numeric'}
                            value={this.state.rowNumber}

                        />

                    </View>

                    <View style={styles.inBtnmarginDimension}></View>


                    {this.state.isScoreSet ?
                        (<Text style={styles.scoreText}>Average 4 weeks score :  <Text style={styles.redTextColor}>{this.state.avgScore}%</Text></Text>) :
                        null}

                    <View style={styles.btnmarginDimension}></View>

                    {this.state.jobSelected === 'Clipping' ?

                        (<View>
                            <Text style={styles.titleHeading2Text}>1) Clip position: not above a truss/one clip between truss/half twist <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioClippingItems1.map((item, key) =>
                                        (

                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioClippingButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Broken heads and trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioClippingItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioClippingButton2.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Broken heads replaced and bobbin hung <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioClippingItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioClippingButton3.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) Laterals: take laterals from previous clip to the head, fail if larger than finger nail <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioClippingItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioClippingButton4.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}eg: 10 broken heads, no half twist, clipping height poor, needs training (Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculateClippingQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>
                        </View>) : null}

                    {this.state.jobSelected === 'Pruning' ? (

                        <View>
                            <Text style={styles.titleHeading2Text}>1) Accuracy: prune to the correct number and remove flag leaf + King fruit <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruningItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruningButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Pruning at the right stage <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruningItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruningButton2.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Remove double trusses <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruningItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruningButton3.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) No broken trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruningItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruningButton4.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}(Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculatePruningQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>

                        </View>) : null}

                    {this.state.jobSelected === 'Twisting' ? (

                        <View>
                            <Text style={styles.titleHeading2Text}>1) Trusses and leaves not trapped, and not wound too much <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioTwistingItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioTwistingButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Broken heads and trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioTwistingItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioTwistingButton2.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Broken heads replaced and bobbin hung <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioTwistingItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioTwistingButton3.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) Laterals: take laterals from previous twist to the head, fail if larger than finger nail <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioTwistingItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioTwistingButton4.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}eg: 10 broken heads, twisting the wrong way, needs training, trusses cught under string (Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculateTwistingQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>
                        </View>) : null}

                    {this.state.jobSelected === 'Prune And Arch' ?

                        (<View>
                            <Text style={styles.titleHeading2Text}>1) Accuracy: prune to the correct number and remove flag leaf + King fruit <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Pruning at the right stage <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton2.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Remove double trusses <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton3.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) No broken trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton4.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Position of arch: proper <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems5.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton5.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>6) Arching at the right stage. Arch: as long as it fits and doesn't touch last bud <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems6.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton6.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>7) De-skinning of truss. Not forcing truss on to tear skin <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems7.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton7.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>8) No broken trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPruneArchItems8.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPruneArchButton8.bind(this, key)} />
                                        ))
                                }


                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>9) Comments {"\n"}(Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>


                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                                <View style={styles.inBtnmarginDimension}></View>


                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={this.calculatePrunArchQualityPercentage}>
                                    <Text style={styles.buttonText1}>Submit</Text>
                                </TouchableOpacity>

                            </View>
                        </View>) : null}

                    {this.state.jobSelected === 'Picking' ? (
                        <View>
                            <Text style={styles.titleHeading2Text}>1) No floor fruit <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPickingItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPickingButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Colour stage and missing fruit <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPickingItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPickingButton2.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Fruit graded out: rotten, damaged, miss-set <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPickingItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPickingButton3.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) No plant materials and calyx <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioPickingItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioPickingButton4.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}eg: 10 broken heads, no half twist, clipping height poor, needs training (Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculatePickingQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>

                        </View>) : null}

                    {this.state.jobSelected === 'Deleafing' ? (

                        <View>
                            <Text style={styles.titleHeading2Text}>1) Clean cut - minimize stubs and bad cuts <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDeleafingItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDeleafingButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Accuracy: correct range of leaves removed for whole line <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDeleafingItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDeleafingButton2.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Stem and middle laterals taken, stems on hoops <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDeleafingItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDeleafingButton3.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) Laterals: no sliced fruit, minimizes broken trusses, dead plants reported <Text style={styles.redColor}>(1 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDeleafingItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDeleafingButton4.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}eg: sent back to fix stubs, sliced through a stem, string not cut (Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },
                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculateDeleafingQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>

                        </View>) : null}

                    {this.state.jobSelected === 'Dropping' ? (

                        <View>

                            <Text style={styles.titleHeading2Text}>1) Spacing: heads levelled and vines going down are spaced <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDroppingItems1.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDroppingButton1.bind(this, key)} />
                                        ))
                                }


                            </View>


                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>2) Angle is correct - drop and shift the same - Cubes not ripped <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDroppingItems2.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDroppingButton2.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>3) Stems on the hoops, turning around properly <Text style={styles.redColor}>(0)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDroppingItems3.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDroppingButton3.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.inBtnmarginDimension}></View>

                            <Text style={styles.titleHeading2Text}>4) Minimize floor fruit and broken trusses <Text style={styles.redColor}>(3 each)</Text> </Text>

                            <View style={styles.inBtnmarginDimension}></View>

                            <View style={styles.flexDirection}>

                                {
                                    this.state.radioDroppingItems4.map((item, key) =>
                                        (
                                            <RadioButton key={key} button={item} onClick={this.changeActiveRadioDroppingButton4.bind(this, key)} />
                                        ))
                                }



                            </View>

                            <View style={styles.marginDimension}></View>

                            <Text style={styles.titleHeading2Text}>5) Comments {"\n"}eg: vines are braided and bunchy but heads are levelled well, turning at the fronts/ backs needs improvement (Select comment if needed) </Text>

                            <View style={styles.btnmarginDimension}></View>

                            <View
                                style={{

                                    // The solution: Apply zIndex to any device except Android
                                    ...(Platform.OS !== 'android' && {
                                        zIndex: 20
                                    })

                                }}
                            >

                                <DropDownPicker
                                    items={[
                                        { label: 'Sent staff back to fix the issue', value: 'Sent staff back to fix the issue' },
                                        { label: 'Will check more of his/her rows', value: 'Will check more of his/her rows' },
                                        { label: 'Recurring issue, needs to be escalated', value: 'Recurring issue, needs to be escalated' },
                                        { label: 'Informal talk conducted', value: 'Informal talk conducted' },
                                        { label: '--', value: '--' },

                                    ]}
                                    placeholder="SELECT"
                                    containerStyle={{ height: 50 }}
                                    style={{
                                        backgroundColor: '#ffffff', marginRight: 20, borderColor: '#000000',
                                        borderWidth: 1
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    labelStyle={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        color: '#000000'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={(item) => this.updateTextInput(item.value, 'comments')}
                                    value={this.state.comments}


                                />


                            </View>

                            <View style={styles.inBtnmarginDimension}></View>


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.calculateDroppingQualityPercentage}>
                                <Text style={styles.buttonText1}>Submit</Text>
                            </TouchableOpacity>
                        </View>) : null}

                </ScrollView>

            </ImageBackground>
        )

    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },

    buttonText1: {
        fontSize: 23,
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic'

    },

    flexDirection: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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

    titleHeadingText: {

        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },

    redColor: {

        color: 'blue'

    },

    titleHeading2Text: {

        color: 'black',
        fontSize: 16,

    },
    text: {
        color: 'blue',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
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

    scoreText: {
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },



    textInputStyle: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        marginRight: 20,
        height: 50,
        backgroundColor: '#ffffff',




    },

    borderEdit: {

        marginTop: 8,
        marginRight: 16,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    marginDimension: {

        marginTop: 10,

    },

    inBtnmarginDimension: {

        marginTop: 25,

    },

    btnmarginDimension: {

        marginTop: 35,

    },


    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#54B948',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        textAlign: 'center'

    },

    formContainer: {

        //backgroundColor: 'rgba(192,192,192,0.55)',
        //borderRadius: 5,
        padding: 5,
        margin: 10,
        height: '100%',
        width: '100%'


    },

    buttonContainer: {
        backgroundColor: '#2C903D',
        borderRadius: 5,
        padding: 10,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonContainerTextInput: {
        borderRadius: 5,
        fontSize: 15,
        color: 'black',
        height: 50,
        backgroundColor: '#ffffff',

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
    FloatingButtonStyle2: {

        resizeMode: 'contain',
        marginLeft: 15
    },

    radioButton:
    {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    radioButtonHolder:
    {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioIcon:
    {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label:
    {
        marginLeft: 10,
        fontSize: 20
    },

    selectedTextHolder:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectedText:
    {
        fontSize: 18,
        color: 'white'
    }
})
