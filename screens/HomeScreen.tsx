import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from "@react-navigation/stack";

const auth = getAuth();


const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}</Text>
      <Text>Let's Play</Text>
      <View style={styles.buttons}>
      <Button
        buttonStyle={styles.buttonPlay}
        icon={
          <Icon
            name="play"
            size={16}
            color="black"
          />
        }
        title="Beginner"
        onPress={()=> navigation.navigate('Beginner')}
      />
      <Button
        buttonStyle={styles.buttonPlay}
        icon={
          <Icon
            name="play"
            size={16}
            color="black"
          />
        }
        title="Amateur"
        //onPress={()=> navigation.navigate('Amateur')}
      />
      <Button
        buttonStyle={styles.buttonPlay}
        icon={
          <Icon
            name="play"
            size={16}
            color="black"
          />
        }
        title="Pro"
        //onPress={()=> navigation.navigate('Professional')}
      />
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    flex:1
  },
  button: {
    marginTop: 10,
  },
  buttonPlay: {
    marginTop: 10,
    height: 100,
    width: 100,
    backgroundColor: "#0050EF",
    borderRadius: 60
  }
});
export default HomeScreen;