import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      
      <Pressable onPress={() => props.onNavigate(RootScreens.WELCOME2)}>
      <Image
        source={require('../../../assets/Logo.png')} // Replace with the correct path to your splash screen image
        style={styles.Logo}
      />
      </Pressable>
     
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
  }
});
