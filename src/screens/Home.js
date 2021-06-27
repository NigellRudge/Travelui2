import React from 'react'
import {View, StyleSheet, Image, Text, StatusBar, FlatList, ScrollView} from 'react-native'
import {Theme} from '../utils/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Octicon from 'react-native-vector-icons/Octicons'
import DestinationItem from '../components/DestinationItem';
import {deals, destinations} from '../data/database';
import ChoiceItem from '../components/ChoiceItem';
import DealItem from '../components/DealItem';


const Home = ({navigation}) =>{
    const goToDetail = (item)=>{
        navigation.navigate('Detail',{
            item:item
        })
    }
    return (
        <ScrollView style={styles.page}>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
            <View style={styles.headerICons}>
                <Ionicon name='menu' size={32} color={Theme.colors.dark} />
                <View style={styles.settingsIconContainer}>
                    <Octicon name='settings' size={32} color={Theme.colors.light} />
                </View>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>
                    Find the next destination !
                </Text>
            </View>
            <View style={styles.destinationListContainer}>
                <FlatList
                    horizontal={true}
                    data={destinations}
                    keyExtractor={(item)=> item.id}
                    renderItem={ ({item})=>{
                        return <DestinationItem item={item} handler={goToDetail} />
                    }}
                />
            </View>
            <View style={styles.choiceContainer}>
                <Text style={styles.choiceHeaderText}>Travelers Choice</Text>
                <View style={styles.choiceList}>
                    <FlatList
                        horizontal={true}
                        data={destinations}
                        keyExtractor={(item)=> item.id}
                        renderItem={ ({item})=>{
                            return <ChoiceItem  item={item} handler={goToDetail} />
                        }}
                    />
                </View>
            </View>
            <View style={styles.dealsContainer}>
                <Text style={styles.dealsHeaderText}>Best Deals</Text>
                <FlatList
                    horizontal={true}
                    data={deals}
                    keyExtractor={(item)=> item.id}
                    renderItem={ ({item})=>{
                        return <DealItem  item={item} />
                    }}
                />
            </View>
        </ScrollView>
    )
}
export default Home;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        paddingVertical:50,
    },
    headerText:{
        fontSize:Theme.textSize.h1,
        color:Theme.colors.dark,
        fontWeight:'bold'
    },
    headerTextContainer:{
        paddingVertical: 10,
        marginBottom:20,
        width: Theme.dimensions.screenWidth * 0.8,
        paddingHorizontal: 20,
    },
    headerICons:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        height:60,
        justifyContent:'space-between',
        width:Theme.dimensions.screenWidth
    },
    settingsIconContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width: 50,
        borderRadius: 16,
        backgroundColor: Theme.colors.primary
    },
    destinationListContainer:{
        marginTop:10,
        paddingHorizontal: 10,
    },
    choiceContainer: {
        marginTop: 20, paddingHorizontal: 10,
        flexDirection: 'column'
    },
    choiceHeaderText:{
        fontWeight: 'bold',
        paddingLeft:5,
        fontSize: Theme.textSize.h2,
        color: Theme.colors.dark
    },
    choiceList:{
        marginTop:10,
        paddingHorizontal: 10,
    },
    dealsContainer:{
        flexDirection: 'column',
        marginTop:15,
        paddingHorizontal: 10,
        marginBottom: 100,
        width: Theme.dimensions.screenWidth
    },
    dealsHeaderText:{
        marginBottom:15,
        marginTop:10,
        paddingLeft:5,
        fontSize: Theme.textSize.h2,
        fontWeight: 'bold',
        color: Theme.colors.dark
    }
})
