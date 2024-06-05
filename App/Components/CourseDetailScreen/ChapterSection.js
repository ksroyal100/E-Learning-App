import { View, Text, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({ chapterList, userEnrolledCourse }) { 
    const navigation = useNavigation()

    const OnChapterPress = (chapter) => {
        if (userEnrolledCourse?.length == 0) {
            ToastAndroid.show('Please Enrolled First', ToastAndroid.LONG)
            return
        }
        else { 
            navigation.navigate('chapter-content', {
                content:chapter.content,
                chapterId: chapter.id, 
                // userCourseRecordId:userEnrolledCourse[0]?.id
            })
        } 
    }
    const checkIsChapterCompleted = (chapterId) => {
        if (userEnrolledCourse[0]?.completedChapter?.length <= 0) {
            return false
        }
        const resp = userEnrolledCourse[0]?.completedChapter.find(item => item.chapterId == chapterId)
        return resp; 
    }
  return chapterList &&(
      <View style={{ padding: 10, backgroundColor: Colors.WHITE, marginTop: 20, borderRadius: 15,paddingBottom:40 }}>
          
          <Text style={{fontFamily:"outfit-medium",fontSize:20}}>Chapters</Text>
          {chapterList.map((item, index) => (
              <TouchableOpacity key={index}
                  style=
                  
                  {[ 
                    //   checkIsChapterCompleted(item.id) ? styles.CompleteChapter :
                      
                  styles.inCompleteChapter]} onPress={() => OnChapterPress(item)}>
                  
              <View style={{
                  display: "flex", flexDirection: "row",
              alignItems:"center",gap:10}}>
                  <Text style={{fontFamily:"outfit-medium",fontSize:27,color:"grey"}}>{index + 1}</Text>
                      <Text style={{ fontFamily: "outfit", fontSize: 21,color:"grey" }}>{item.title}</Text>
                  </View>
                  {
                     userEnrolledCourse?.length==0 ?
                          <Ionicons name="lock-closed" size={25} color="grey" />
                          : <Ionicons name="play" size={25} color="grey" />
                  } 
         </TouchableOpacity>
          ))}
          
    </View>
  )
}  

const styles = StyleSheet.create({
    inCompleteChapter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1, borderRadius: 10, marginTop: 10,
        borderColor:"grey"
    },
    CompleteChapter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1, borderRadius: 10, marginTop: 10,
        borderColor: "green",
        backgroundColor:"green"
    }
})