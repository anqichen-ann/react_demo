import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'

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


const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: "add_action"
            })
        }
    }
}

class ComA extends React.Component {

handleClick  = () => {
    this.props.sendAction()
}

    render = () => {
        return <Text style = {styles.buttonStyle} onClick = {this.handleClick}>+</Text>
    }
}

export default connect(null, mapDispatchToProps)(ComA)