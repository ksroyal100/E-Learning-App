import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import loginimg from './../../assets/images/loginimg.jpg'
import Colors from '../Utils/Colors'
import google from '../../assets/images/googleIcon.png'
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });


  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MF
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View style={{display:'flex',alignItems:'center', bottom:0}}>
      <Image source={loginimg} style={{ width: 350, height: 400, marginTop: -10 }} />
      <View style={{ height: 600, backgroundColor: Colors.PRIMARY, width: "100%", padding: 20,borderTopLeftRadius:40,borderTopRightRadius:40 }}>
        <Text style={{ textAlign: "center", fontSize: 35, color: Colors.WHITE, fontFamily: "outfit"}}>WELCOME!</Text>
        
        <Text style={{ textAlign: "center", fontSize: 20, color: Colors.LIGHT_PRIMARY, fontFamily: "outfit" }}>Your Programming Learning Box</Text>
        
        <TouchableOpacity
          onPress={onPress}
          style={{ backgroundColor: Colors.WHITE, marginTop: 60, display: "flex", flexDirection: "row", justifyContent: "center", padding: 10, borderRadius: 90 }}>
          <Image source={google} style={{width:40,height:40}} />
          <Text style={{fontSize:20,color:Colors.PRIMARY,fontFamily:"outfit",textAlign:"center",marginTop:5,marginLeft:8}}>Sign In with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}