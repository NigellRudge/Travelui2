import React from 'react'
import {View, StyleSheet, Image, Text, StatusBar, TouchableOpacity} from 'react-native'
import {Theme} from '../utils/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SharedElement} from 'react-navigation-shared-element';

const ChoiceItem = ({item, handler}) =>{
    const handleClick = ()=>{
        handler(item)
    }
    return (
        <TouchableOpacity style={styles.page} onPress={handleClick}>
            <SharedElement id={`item.${item.id}.image`} style={{
                flex: 1
            }}>
            <Image source={{uri:item.image}} style={styles.image} />
            </SharedElement>
            <View style={styles.iconContainer}>
                <Ionicon size={26} name='heart' color={Theme.colors.white} style={{...styles.shadow}} />
                <View style={styles.arrowContainer}>
                    <Ionicon size={20} name='arrow-forward' color={Theme.colors.primary} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                   <Text style={styles.name}>{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Ionicon name='location-outline' size={16} color={Theme.colors.dark} />
                        <Text style={styles.country}>{item.country}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ChoiceItem;

const styles = StyleSheet.create({
    page:{
        marginLeft:5,
        overflow:'hidden',
        borderRadius:20,
        width:220,
        height: 220,
        flexDirection:'column'
    },
    name:{
        fontSize:12,
        fontWeight:'bold'
    },
    image:{
        flex:1, resizeMode:'cover',
        width:220,
        height: 220,
    },
    iconContainer:{
        position:'absolute',
        top:0,
        width: '100%',
        flexDirection: 'row',
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    arrowContainer:{
        backgroundColor:'white',
        borderRadius:30, width: 25, height:25, flexDirection: 'row'
        ,justifyContent: 'center',alignItems:'center'
    },
    content:{
        position:'absolute',
        bottom:0,
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
        width: '80%',
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius: 12,
        paddingVertical:10,
        flexDirection: 'column',
        backgroundColor:'white'
    },
    country:{
        fontSize:10,
        fontWeight:'600'
    }
})
