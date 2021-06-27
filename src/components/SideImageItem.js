import React from 'react'
import {View, StyleSheet, Image, Text, StatusBar, TouchableOpacity} from 'react-native'
import {Theme} from '../utils/Theme';

const SideImageItem = ({item, handler}) =>{
    return (
        <TouchableOpacity style={styles.container} onPress={()=>handler(item.image)}>
            <Image source={{uri:item.image}} style={styles.image} />
        </TouchableOpacity>
    )
}
export default SideImageItem;

const styles = StyleSheet.create({
    container:{
        marginBottom: 5,
        backgroundColor: Theme.colors.primary,
        width: 70,
        height: 70,
        borderRadius: 8,
        borderWidth:2,
        overflow:'hidden',
        borderColor:Theme.colors.light
    },
    image:{
        width: 70,
        height: 70,
        resizeMode:'cover'
    }
})
