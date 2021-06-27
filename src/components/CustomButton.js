import React from 'react'
import {View, StyleSheet, Image, Text, StatusBar} from 'react-native'

const CustomButton = ({   text = 'click me',
                          buttonColor='#007bff',
                          textColor='#fff',
                          textSize=15,
                          borderRadius= 5,
                          width= 80,
                          height=40,
                          handler,
                          icon=null }) =>{
    return (
        <View style={{
            width,
            height,
            borderRadius
        }}>
            <Text style={{

            }}>
                {text}
            </Text>
        </View>
    )
}
export default CustomButton;

