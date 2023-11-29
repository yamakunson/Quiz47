import React, {useState}from "react";
import { Welcome2 } from "./Welcome2";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type Welcome2ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME2
>;

export const Welcome2Container = ({
  navigation,
}: Welcome2ScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.replace(screen);
  };
  return <Welcome2 onNavigate={onNavigate} />;
};