import React from 'react';
import {StyleSheet} from 'react-native';

const Container = StyleSheet.create({
    Maincontainer : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'black'
    },

    Homecontainer : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'black',
    },

    Guidecontainer : {
        flex : 1,
        width : '100%',
        height : '100%',
        paddingHorizontal: '3%',
        backgroundColor : 'black',
    },

    Titlecontainer : {
        marginBottom : '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Logincontainer : {
        width : '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Buttoncontainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Scrollcontainer : {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
    },

    BrainScrollcontainer : {
        flex : 1,
        width : '100%',
        height : '60%',
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        marginTop : '12%',

    },

    addBrainScrollcontainer : {
        flex : 1,
        width : '100%',
        height : '60%',
        paddingVertical: '6%',
        paddingHorizontal: '2%',
        backgroundColor: 'black',

    },

    Thiscontainer : {
        alignItems: 'center'
    }
});

export default Container;