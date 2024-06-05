import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({text}) {
  return (
    <View>
          <Text style={{
              fontFamily: "outfit-bold",
        fontSize: 24,
        padding:10,
          }}>{ text}</Text>
    </View>
  )
}