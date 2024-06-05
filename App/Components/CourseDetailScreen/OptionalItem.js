import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function OptionalItem({icon,value}) {
  return (
    <View style={{ display: "flex",flexDirection:"row",alignItems:"center",gap:5,marginTop:5}}>
                <MaterialCommunityIcons name={icon} size={22} color="black" />
          <Text style={{ fontFamily: "outfit" }}
              >{value}</Text>
                </View>
  )
}