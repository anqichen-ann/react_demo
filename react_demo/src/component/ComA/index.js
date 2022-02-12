import React from 'react'
import {StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        top: 100 ,
        left: 100 ,
        width: 30,
        height: 30,
        border: 1 + 'px',
        backgroundColor: 'pink',
        lineHeight: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    }
})

const handleClick  = () => {

}

class ComA extends React.Component {
    render = () => {
        return <Text style = {styles.buttonStyle} onClick = {this.handleClick}>+</Text>
    }
}

export default connect(null, )(ComA)