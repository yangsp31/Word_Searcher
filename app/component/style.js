import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
    },

    singupbackground : {
        width : '100%',
        height : '103%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10101E',
    },

    title : {
        fontSize: 45,
        color: 'white',
    },

    input : {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 6,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        marginBottom: 15,
        color : 'white',
        width : '85%'
    },

    Searchinput : {
        paddingVertical: '3%',
        paddingHorizontal: '2%',
        color : 'white',
        fontSize : 17,
        width : '100%',
        backgroundColor: '#20103E',
    },

    Titleinput : {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 6,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        marginBottom: 15,
        color : 'white',
        width : '85%'
    },

    Roleinput : {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 6,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        marginBottom: 15,
        color : 'white',
        width : '85%'
    },

    SelectText : {
        fontSize: 16,
        color: 'white',
    },

    BrainText : {
        marginTop : '10%',
        fontSize: 25,
        color: 'white',
    },

    HomeText : {
        fontSize: 16,
        color: 'white',
    },

    button : {
        flex : 1,
        width : '80%',
        height : '30%',
        backgroundColor : 'white',
        paddingVertical: '3%',
        paddingHorizontal: '2%',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    addbutton : {
        width : '100%',
        height : '8%',
        backgroundColor : '#20103E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addText : {
        fontSize: 25,
        color: '#aaa',
    },

    GuideText : {
        fontSize: 15,
        color: 'white',
    }
})

export default Style;