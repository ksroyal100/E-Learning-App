import { View, Text, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services';

export default function ChapterContent() {
  const param = useRoute().params;
  const navigation = useNavigation()

  //chapterId
  //recordId  

  useEffect(() => {
    console.log("ChapterId:", param.chapterId)
    console.log("RecordId:", param.userCourseRecordId)
  },[param])
  const onChapterFinish = () => {
    MarkChapterCompleted(param.chapterId,param.userCourseRecordId).then(resp => {
      // console.log(resp) 
      if (resp) {
        ToastAndroid.show("Congratulation!!", ToastAndroid.LONG)
        
        navigation.goBack()
        
      }
    }).catch((e)=>console.warn(e))
  }
  
  return param.content&&(
    <ScrollView>
      <Content content={param.content} 
        onChapterFinish={()=>onChapterFinish()}
      />
    </ScrollView> 
  )
}

