import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'


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

const mapStateToProps = state => {
    return state;
}

class ComB extends React.Component {
    render = () => {
        console.log('COMB:' + this.props)
    return <Text style = {styles.textStyle}>{this.props.count}</Text>
    }
}

export default connect(mapStateToProps)(ComB)