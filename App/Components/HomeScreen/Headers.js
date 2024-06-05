import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import Coin from "../HomeScreen/coin.png"
import { Ionicons } from '@expo/vector-icons';

export default function Headers() {
    const {isLoaded, isSignedIn, user} = useUser()
  return isLoaded && (
      <View>
    <View style={[styles.rowStyle,{justifyContent:"space-between"}]}>
            <View style={styles.rowStyle}>
                <Image source={{ uri: user?.imageUrl }} style={{ width: 50, height: 50, borderRadius: 90 }} />
                <View>
                    <Text style={{color:Colors.WHITE,fontFamily:"outfit"}}>Welcome!</Text>
                    <Text style={styles.mainHeader}>{ user?.fullName}</Text>
                </View>
        </View>
        <View style={[styles.rowStyle]}>
          <Image source={Coin} style={{width: 40, height: 40 }} />
          <Text style={styles.mainHeader}>3588</Text>
        </View>
      </View>
      <View style={{backgroundColor:Colors.WHITE, paddingLeft:20, display:"flex",flexDirection:"row",justifyContent:"space-between",borderRadius:99,marginTop:25}}>
        <TextInput placeholder='Search Courses' style={{fontFamily:"outfit", fontSize:18}} />
        <Ionicons name="search-circle" size={50} color="grey" />
      </View>
      </View>
  )
}   
 const styles = StyleSheet.create({
   mainHeader: {
     color: Colors.WHITE,
     fontSize: 20,
     fontFamily:"outfit"
   },
   rowStyle: {
     display: 'flex',
     flexDirection: "row",
     gap: 10,
     alignItems:'center'
   }
})