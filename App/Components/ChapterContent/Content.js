import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import ContentItem from './ContentItem'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Content({ content,onChapterFinish }) {

  let contentRef;
  const navigation = useNavigation()
  const [activeIndex, setActiveIndex] = useState(0)

  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1)
    {
      // navigation.goBack()
      onChapterFinish()
      return;
    }
    setActiveIndex(index + 1)
    contentRef.scrollToIndex({animated:true,index:index+1})
  }
  return (
      <View style={{padding:0,height:"100%"}}>
          <ProgressBar contentLength={content?.length} 
              contentIndex={activeIndex} 
          />
      <FlatList
        data={content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          contentRef=ref
        }}
        pagingEnabled
        renderItem={({ item, index }) => (
          <View style={{ width: Dimensions.get("screen").width, padding:20}}>
            <Text
              style={{ fontFamily: "outfit-medium", fontSize: 22, marginTop: 15 }}>{item.heading}</Text>
            <ContentItem description={item?.description?.html} output={item?.output?.html} />  
            <TouchableOpacity
              style={{marginTop:10}}
              onPress={() => onNextBtnPress(index)}
              
            >
              <Text style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: 17, 
                borderRadius: 10,
                marginTop:15
              }}>
                {
                  content?.length>index+1 ? " Next➡️" :"Finish" 
               }
              </Text>
            </TouchableOpacity>
          </View>
        )
          
          
          }

      />
    </View>
  )
}