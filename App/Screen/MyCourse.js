import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Utils/Colors'
import { useUser } from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native';

export default function MyCourse() {
  const { user } = useUser();
  const navigation = useNavigation()
  const [progressCourseList, setProgressCourseList] = useState()
  useEffect(() => {
    user&&GetAllProgressCourseList()  
  }, [user])
  const GetAllProgressCourseList = () => {
    // GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then(resp => {
    //   setProgressCourseList(resp.userEnrolledCourses)
    // })
  }
  return (
    <View>
     <View style={{height:160,backgroundColor:Colors.PRIMARY,padding:30}}>
      <Text style={{fontFamily:"outfit-bold",color:Colors.WHITE,fontSize:30,position:"absolute",bottom:70,paddingLeft:20}}>My Course</Text>
      </View>
    </View>
  )
}