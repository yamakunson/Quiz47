import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";

export const Welcome2 = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      
      <Pressable >
      <Image
        source={require('../../../assets/Logo.png')} // Replace with the correct path to your splash screen image
        style={styles.Logo}
      />
      </Pressable>
      <View style={styles.container2}>
        <Text style={styles.line1}>Let's play</Text>
        <Text style={styles.line2}>Know more about where you go and stay.</Text>
        <Button onPress={() => props.onNavigate(RootScreens.WELCOME3)} style={styles.nextbutton}>
          <Text style={styles.line3}>Let's go <Image
        source={require('../../../assets/arrow-right.png')} // Replace with the correct path to your splash screen image
        style={styles.nexticon}
      /></Text>
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdb623",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo:{
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    width: '100%',
    height: 200,
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  line1:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: -10,
  },
  line2:{
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    width: 320,
    textAlign: 'center',
  },
  nextbutton:{
    width: 320,
    height: 60,
    backgroundColor: '#fdb623',
  },  
  line3:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nexticon:{
    marginLeft: 20,
  },
});
