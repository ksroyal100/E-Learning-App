import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import OptionalItem from './OptionalItem'

export default function DetailSection({course,enrollCourse, userEnrolledCourse}) {
    return (
      
    <View style={{padding:10,borderRadius:15,backgroundColor:Colors.WHITE}}>
          {/* <Image source={{ uri: course?.banner?.url }} */}
          <Image source={{ uri: "https://ap-south-1.graphassets.com/clujle9xr00ks08pe79yc2yzm/clujxilkg03pf07o01hyrnhib" }}
              style={{ width: Dimensions.get('screen').width * 0.8, height: 190, borderRadius: 15, marginLeft: 5 }} />
          <Text style={{ fontSize: 24, fontFamily: "outfit-medium", paddingLeft: 10, paddingTop: 10 }}>{course.name}</Text>
           
          <View style={{padding:10}}>
          <View>
              <View style={styles.rowStyle }>
              <OptionalItem icon={'book-open-variant'} value={course.chapters?.length + " Chapters"} />
              <OptionalItem icon={'clock'} value={course.time} />
              </View>
              <View style={styles.rowStyle }>
              
              <OptionalItem icon={'book-open-variant'} value={course?.author} />
                  <OptionalItem icon={'book-open-variant'} value={course.level} />
                  </View>
              </View>
              <View>
                  <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>Description</Text>
                  <Text style={{fontFamily:"outfit",color:"grey",lineHeight:23,}}>{course.description?.markdown}</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: 20 }}>
                    {userEnrolledCourse?.length==0 ?
                        <TouchableOpacity
                            onPress={() => enrollCourse()}
                            style={{ padding: 13, backgroundColor: Colors.PRIMARY, borderRadius: 10 }}>
                            <Text style={{ fontFamily: "outfit", color: Colors.WHITE, textAlign: "center", fontSize: 17 }}>Enroll For Free</Text>
                    </TouchableOpacity>
                         : null}
          <TouchableOpacity style={{padding:13, backgroundColor:Colors.SECONDARY,borderRadius:10}}>
              <Text style={{fontFamily:"outfit",color:Colors.WHITE, textAlign:"center",fontSize:17}}>Start $2.99/month</Text>
          </TouchableOpacity>
              </View>
          </View>
         
    </View>
    )
    
}
const styles = StyleSheet.create({
    rowStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    }

})