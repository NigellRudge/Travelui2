import {View, StyleSheet, Text, ImageBackground} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react';
import {Theme} from '../utils/Theme';

const DealItem = ({item})=>{
    return(
        <View style={styles.container}>
            <ImageBackground source={item.image} style={styles.image}>
            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            </ImageBackground>
        </View>
    )
}
export default DealItem;

const  styles = StyleSheet.create({
    container:{
        borderRadius:20,
        marginRight:5,
        width: 200,
        height: 200,
        overflow:'hidden'
    },
    image:{
        width: 200,
        height:200,
        resizeMode:'cover',
        justifyContent:'flex-end',
        paddingBottom:10,
        paddingHorizontal: 15
    },
    content:{
        backgroundColor:Theme.colors.light,
        paddingHorizontal:15,
        paddingVertical:10,
        width: '90%',
        borderRadius: 15,
    },
    title:{
        fontSize: 12,
        fontWeight:'bold',
        color:Theme.colors.dark
    },
    price:{
        fontWeight:'600',
        fontSize:11,
    }
})
