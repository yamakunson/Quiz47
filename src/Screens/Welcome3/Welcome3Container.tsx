import React, {useState}from "react";
import { Welcome3 } from "./Welcome3";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type Welcome3ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME3
>;

export const Welcome3Container = ({
  navigation,
}: Welcome3ScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <Welcome3 onNavigate={onNavigate} />;
};
