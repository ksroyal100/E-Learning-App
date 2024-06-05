import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SubHeading from '../SubHeading'



export default function CourseItem({item}) {
  return (
       <View style={{padding:10,backgroundColor:Colors.WHITE,marginRight:15,borderRadius:15}}>
              {/* <Text style={{ color: Colors.BLACK }}>{item.name}</Text> */}
              {/* <Image source={{ uri: item?.banner?.url }} /> */}
               <Image source={{ uri: "https://ap-south-1.graphassets.com/clujle9xr00ks08pe79yc2yzm/clujxilkg03pf07o01hyrnhib" }} 
        style={{ width: 210, height: 120, borderRadius: 15 }} />
      
              <View>
                <Text style={{ fontFamily: "outfit-medium", fontSize: 17, padding: 5 }}>{item.name} </Text>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{ display: "flex",flexDirection:"row",alignItems:"center",gap:5,marginTop:5}}>
                <MaterialCommunityIcons name="book-open-variant" size={22} color="black" />
                <Text style={{fontFamily:"outfit"}}>{ item?.chapters.length} Chapters</Text>
                </View>
                <View>
                <View style={{ display: "flex",flexDirection:"row",alignItems:"center",gap:5,marginTop:5}}>
                <Feather name="clock" size={18} color="black" />
                <Text>{ item?.time}</Text>
                    </View>
                    </View>  
                </View>
                <Text style={{marginTop:5,fontFamily:"outfit"}}>
                  {item.price==0?"Free":item.price}
                </Text>
              </View>

          </View>
  )
}