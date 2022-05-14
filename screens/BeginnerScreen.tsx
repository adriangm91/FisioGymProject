import { StyleSheet, Text, View } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native";
// const auth: Auth = getAuth(); 

export default function BeginnerScreen() {
  // const { user } = useAuthentication();
  //const playerRef = useRef<YoutubeIframeRef>(null);

  return (
    <View style={styles.videoContainer}>

      <View style={styles.videos}>
        <Text>Primer Ejercicio</Text>
        <ScrollView>
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
            videoId={'IODxDxX7oi4'}
          />
          
         
          {/* 
          <YoutubePlayer
            //ref={playerRef}
            height={400}
            width={400}
            //play={true}
            videoId={'pc2xlLuCp4Y'}
          />
          <YoutubePlayer
            //ref={playerRef}
            height={400}
            width={400}
            //play={true}
            videoId={'CqTtScFQ5-c'}
          />
           */}


        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  videos: {
    flex: 1
  }
});