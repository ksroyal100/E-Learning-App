import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RenderHTML from 'react-native-render-html'
import Colors from '../../Utils/Colors'

export default function ContentItem({description,output}) {
  const { width } = useWindowDimensions()
  const [isRun, setIsRun] = useState(false)
  const descriptionSource = {
    html:description
  }
  const outputSource = {
    html:output
  }
  return description &&(
    <View>
      
      {/* <Text>{description}</Text> */}
      <RenderHTML 
        contentWidth={width}
        source={descriptionSource}
        tagsStyles={tagsStyles}
      />
      {output != null ?
        <TouchableOpacity
        onPress={()=>setIsRun(true)}>
          <Text style={{ padding: 10, backgroundColor: Colors.PRIMARY, color: Colors.WHITE, borderRadius: 10, fontFamily: "outfit", width: 100, fontSize: 15, textAlign: "center" }}>Run</Text>
        
        </TouchableOpacity> : null} 
      {isRun ?
        <>
          <Text style={{fontFamily:"outfit-medium",fontSize:17,marginBottom:10,paddingTop:10}}>Output</Text>
          <RenderHTML
            contentWidth={width}
            source={outputSource}
            tagsStyles={tagsStyles}
          />
        </> :null }
    </View>
  )

}

const tagsStyles = {
  body: { 
    fontFamily: "san",
    fontSize: 16
  },
  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius:15
   }
}
