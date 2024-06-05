import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Headers from '../Components/HomeScreen/Headers'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
      <ScrollView style={{position:"relative"}}>
          <View style={{backgroundColor:Colors.PRIMARY, height:250,padding:10}}>
          <Headers />
      </View>
      <View style={{ padding: 5 }}>
        <View style={{marginTop:-100}}>
        <CourseList level={`Basic`} />
        </View>
        <CourseList level={`Basic`} />
      </View>
    </ScrollView>
  )
}
