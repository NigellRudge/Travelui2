import React, {useState} from 'react'
import {View, StyleSheet, Image, Text, StatusBar, TouchableOpacity, ImageBackground} from 'react-native'
import {Theme} from '../utils/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons'
import {sideImages} from '../data/database';
import SideImageItem from '../components/SideImageItem';
import * as Animatable from 'react-native-animatable'

const Start = ({navigation}) =>{
    const [selectedImage, setImage] = useState('start')

    const imageClick = (image) => {
        console.log(image)
        setImage(image)
    }

    const goHome = ()=>{
        navigation.navigate('Home')
    }

    return (
        <View style={styles.page}>
            <ImageBackground source={{uri:selectedImage}}  style={styles.image}>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
            <View style={styles.icons}>
                <View style={{
                    ...styles.shadow,
                    backgroundColor:'white',
                    borderRadius:30, width: 40, height:40, flexDirection: 'row'
                    ,justifyContent: 'center',alignItems:'center'
                }}>
                    <Ionicon size={32} name='arrow-back' color={Theme.colors.primary} />
                </View>
                <Ionicon size={38} name='heart' color={Theme.colors.white} style={{...styles.shadow}} />
            </View>
            <Animatable.View
                animation="fadeInUp"
                duration={800}
                delay={200}
                style={styles.images}>
                {sideImages.map((item, key)=>{
                   return <SideImageItem item={item} key={key} handler={imageClick} />
                })}
            </Animatable.View>
            <Animatable.View
                animation="fadeInUp"
                duration={800}
                delay={200}
                style={styles.content}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:24,
                    flex:1,
                    color:Theme.colors.light
                }}>Grindelwald Island</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Ionicon name='location-outline' size={24} color={Theme.colors.light} />
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:18,
                        color:Theme.colors.light
                    }}>Switzerland</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>goHome()}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            </ImageBackground>
        </View>
    )
}
export default Start;

const styles = StyleSheet.create({
    page:{
        flex:1,

    },
    image:{
        resizeMode:'cover',
        position:'absolute',
        width:Theme.dimensions.screenWidth,
        height: Theme.dimensions.screenHeight,
        paddingVertical: 30
    },
    content:{
        flexDirection: 'column',
        width:Theme.dimensions.screenWidth,
        position: 'absolute',
        bottom: 100,
        alignItems:'center',

    },
    icons:{
        flexDirection: 'row',
        width: Theme.dimensions.screenWidth,
        height: 100,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    images:{
        position:'absolute', right:0,
        top: Theme.dimensions.screenHeight * 0.2,
        flexDirection: 'column',
        width: 100, paddingHorizontal: 10
    },
    button:{
        width: Theme.dimensions.screenWidth  * 0.80,
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginTop:20,
        borderRadius: 16,
        width: Theme.dimensions.screenWidth  * 0.80,
        backgroundColor:Theme.colors.primary,
    },
    buttonText:{
        fontWeight:'bold',
        color:Theme.colors.light,
        fontSize: Theme.textSize.h3
    },
    shadow:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }

})
