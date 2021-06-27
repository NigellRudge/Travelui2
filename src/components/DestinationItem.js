import React from 'react'
import {View, StyleSheet, Image, Text, StatusBar, TouchableOpacity} from 'react-native'
import {Theme} from '../utils/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons'
import RatingComponent from './RatingComponent';
import { SharedElement} from 'react-navigation-shared-element';

const DestinationItem = ({item, handler}) =>{
    const handleClick = ()=>{
        handler(item)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
                <View style={{
                    position:'absolute',
                    bottom:10,
                    left:10,
                    zIndex:20,
                    backgroundColor:'white',
                    borderRadius:30, width: 25, height:25, flexDirection: 'row'
                    ,justifyContent: 'center',alignItems:'center'
                }}>
                    <Ionicon size={20} name='arrow-forward' color={Theme.colors.primary} />
                </View>
            <SharedElement id={`item.${item.id}.image`} style={{
                flex: 1
            }}>
                <Image source={{uri:item.image}} style={styles.image} />
            </SharedElement>
                <View style={styles.content}>
                    <Text style={{
                        fontSize:Theme.textSize.h3 * 0.9,
                        fontWeight:'bold'
                    }}>{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Ionicon name='location-outline' size={18} color={Theme.colors.dark} />
                        <Text style={{
                            fontSize:12,
                            fontWeight:'600'
                        }}>{item.country}, {item.continent}</Text>
                    </View>
                    <Text style={{
                        marginTop: 10
                    }}>${item.price}</Text>
                    <RatingComponent rating={item.rating} />
                </View>
        </TouchableOpacity>
    )
}
export default DestinationItem;

const styles = StyleSheet.create({
    container:{
        height: 150,
        marginLeft:10,
        width: Theme.dimensions.screenWidth  *0.75,
        flexDirection:'row',
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:'#fafafa',
    },
    image:{
        height: 150,
        width: Theme.dimensions.screenWidth * 0.30,
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12,
        borderTopRightRadius:45,
        borderBottomRightRadius:45
    },
    content:{
        paddingLeft:10,
        flexDirection: 'column',
        paddingTop:10,
        flex:1,
    }
})
