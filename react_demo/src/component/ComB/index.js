import React from 'react'
import {StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        position: 'absolute',
        top: 100,
        left: 180 ,
        width: 30,
        height: 30,
        lineHeight: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontsize: 10,
    }
})

export default class ComB extends React.Component {
    render = () => {
        return <Text style = {styles.textStyle}>0</Text>
    }
}