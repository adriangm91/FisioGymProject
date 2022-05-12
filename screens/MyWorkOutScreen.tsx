import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";


export default function MyWorkOutScreen() {
  // const { user } = useAuthentication();
  //const playerRef = useRef<YoutubeIframeRef>(null);

  return(

    <View style={styles.videoContainer}>
        
    <View style={styles.videos}>
    <Text>Primer Ejercicio</Text>
  <YoutubePlayer
  //ref={playerRef}
    height={400}
    width={400}
    //play={true}
    videoId={'IiHH0EWo8-k'}
  />
  <Text>Segundo Ejercicio</Text>
      <YoutubePlayer
  //ref={playerRef}
    height={400}
    width={400}
    //play={true}
    videoId={'IiHH0EWo8-k'}
  />
  </View>
</View>

);
}

const styles = StyleSheet.create({
videoContainer:{
flex:1,
paddingTop: 20,
alignItems:'center',
justifyContent:'center',

},
videos:{
flex:1
}
});