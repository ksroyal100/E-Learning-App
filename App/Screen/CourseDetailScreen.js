import { View, Text, Touchable, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { enrollCourse, getUserEnrolledCourse } from '../Services/index';
import { useUser } from '@clerk/clerk-expo'; 

export default function CourseDetailScreen() {
  const navigation = useNavigation()
  const params = useRoute().params;
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([])
  const {user} = useUser()
  useEffect(() => {
    console.log(params.course)
    if (user && params.course) {
      GetUserEnrolledCourse()
    }
  }, [params.course,user])
  
  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        // console.log(resp)
        if (resp) {
          ToastAndroid.show('Course Enrolled successfully', ToastAndroid.LONG)
          GetUserEnrolledCourse()
        }
    })
  }

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        console.log("userEnroled course------", resp.userEnrolledCourse)
        setUserEnrolledCourse(resp.userEnrolledCourse)
    })
  }

  return params.course&&(
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course}
        userEnrolledCourse = {userEnrolledCourse}
        enrollCourse={() => UserEnrollCourse()} />
      <ChapterSection chapterList={params.course?.chapters} 
         userEnrolledCourse = {userEnrolledCourse}
      />
    </ScrollView> 
  )
}