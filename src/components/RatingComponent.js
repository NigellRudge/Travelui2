import React from 'react'
import {View, StyleSheet} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

const RatingComponent = ({rating, size=14})=>{
    return(
        <View style={{flexDirection:'row', paddingVertical:5, paddingHorizontal:5}}>
            {Array(5).fill(1).map((item,index)=>{
                if(index > rating && index < 5){
                    return <Ionicon name='ios-star' size={size} color='gray' key={index} style={{marginRight:2}} />
                }
                else{
                    return <Ionicon name='ios-star' size={size} color='#fcb100' key={index} style={{marginRight:2}} />
                }
            })}
        </View>
    )
}

export default RatingComponent;

const styles = StyleSheet.create({

})
