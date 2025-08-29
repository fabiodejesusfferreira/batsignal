import React, { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import batmanLogoLightmode from "../../../assets/batman-logo-lightmode.png";
import batmanLogoDarkmode from "../../../assets/batman-logo-darkmode.png";

import { lightStyleMode, darkStyleMode, formsBoxes } from "./home-styles";
import { StringForms } from "../../components/Forms/string-form";
import { PhoneForms } from "../../components/Forms/phone-form";

export function Home() {
  return (
    <View style={currentThemeMode.container}>
      <Pressable onPress={toggleLightThemeMode}>
        <Image style={[currentThemeMode.batLogo, { display: displayHelpScreen ? 'flex' : 'none' }]} source={logo} />
      </Pressable>
      <Text
        onPress={handleButtonPressedInStyle}
        onPressOut={handleButtonPressedOutStyle}
        style={[buttonPressedStyle, { display: displayHelpScreen ? 'flex' : 'none' }]}
      >
        Call for help
      </Text>

    </View>
  );
}