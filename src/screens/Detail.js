import React from 'react'
import {View, StyleSheet, Image,ImageBackground, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {Theme} from '../utils/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import RatingComponent from '../components/RatingComponent';
import {SharedElement} from 'react-navigation-shared-element';

const Detail = ({route, navigation}) =>{
    const {item} = route.params
    //console.log(item)
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.page}>
                <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
                <View style={styles.header}>
                    <View style={styles.headerImageContainer}>
                        <SharedElement id={`item.${item.id}.image`}  >
                        <ImageBackground source={{uri:item.image}} style={styles.headerImage} >
                            <View style={styles.headerIconsContainer}>
                                <View style={{
                                    ...styles.shadow,
                                    backgroundColor:'white',
                                    borderRadius:30, width: 38, height:38, flexDirection: 'row'
                                    ,justifyContent: 'center',alignItems:'center'
                                }}>
                                    <Ionicon size={30} name='arrow-back' color={Theme.colors.primary} />
                                </View>
                                <Ionicon size={38} name='heart' color={Theme.colors.white} style={{...styles.shadow}} />
                            </View>
                        </ImageBackground>
                        </SharedElement>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{flexDirection:'column', marginBottom: 10}}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.location}>{item.country}, {item.continent}</Text>
                        <RatingComponent rating={item.rating} size={20} />
                    </View>
                    <View style={styles.swipeContainer}>
                        <Text style={styles.swipeItemActive}>Details</Text>
                        <Text style={styles.swipeItem}>Trip plan</Text>
                        <Text style={styles.swipeItem}>Reviews</Text>
                        <Text style={styles.swipeItem}>Trip mates</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>
                            {item.details + item.details}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoItem}>
                            <Ionicon name='time-outline' size={24} color={Theme.colors.accent} style={styles.infoIcon} />
                            <Text style={styles.infoText}>5 days</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicon name='location' size={24} color={Theme.colors.accent} style={styles.infoIcon} />
                            <Text style={styles.infoText}>11 km</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicon name='thermometer' size={24} color={Theme.colors.accent} style={styles.infoIcon} />
                            <Text style={styles.infoText}>22 c</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.action}>
                    <View style={styles.actionTextContainer}>
                        <Text style={styles.actionText}>$1{item.price}</Text>
                        <Text style={styles.actionSubText}>/person</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('Booked !')}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
export default Detail;

const styles = StyleSheet.create({
    screen:{
      width:Theme.dimensions.screenWidth,
      height: Theme.dimensions.screenHeight,
        backgroundColor:'white'
    },
    page:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        paddingTop:25,
        paddingBottom: 100
    },
    header:{
      width: Theme.dimensions.screenWidth,
      height: Theme.dimensions.screenHeight * 0.4,
      padding:10,
    },
    headerImageContainer:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 130,
        overflow:'hidden',
        width: '100%',
        height:'100%'
    },
    headerImage:{
        resizeMode:'cover',
        width: '100%',
        height:'100%'
    },
    headerIconsContainer:{
        flexDirection: 'row',
        width: Theme.dimensions.screenWidth,
        height: 100,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight:25,
        paddingVertical: 20
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    content:{
        marginTop:15,
        paddingHorizontal:20,
        flexDirection:'column'
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        color:'#515151'
    },
    location:{
        fontWeight:'600',
        fontSize:16,
        color:'#5d5d5d'
    },
    swipeContainer:{
        paddingVertical: 10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    swipeItem:{
        fontSize:16,
        marginRight:10,
        color:'#757575'
    },
    swipeItemActive:{
        color:'black',
        fontWeight:'bold',
        borderBottomWidth: 2,
        borderBottomColor: Theme.colors.primary,
        fontSize:16,
        marginRight:10,
        paddingBottom: 3
    },
    descriptionContainer:{
        width:'100%',
        marginTop: 5,
    },
    description:{
        color: Theme.colors.dark,
        fontWeight:'600',
        fontSize:14
    },
    infoContainer:{
        flexDirection:'row',
        paddingHorizontal: 10,
        marginTop:20,
        width:'100%',
        justifyContent:'space-between'
    },
    infoItem:{
        flex:1,
        margin:2,
        padding: 30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgb(236,239,255)',
        flexDirection:'column'
    },
    infoIcon:{
        marginBottom:5
    },
    infoText:{
        color: Theme.colors.dark,
        fontWeight:'600',
        fontSize:14
    },
    action:{
        width:'100%',
        height: 100,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15, marginBottom: 100
    },
    actionTextContainer:{
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    actionText:{
        fontSize:18,
        fontWeight:'bold',
        color:Theme.colors.dark
    },
    actionSubText:{
        fontSize:14,
        marginLeft: 5,
        fontWeight:'600',
        color:Theme.colors.dark
    },
    buttonContainer:{
        flex:1,
        flexGrow: 3,
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
        backgroundColor:Theme.colors.primary,
    },
    buttonText:{
        fontWeight:'bold',
        color:Theme.colors.light,
        fontSize: Theme.textSize.h3
    },
    button:{
        paddingVertical:20,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
