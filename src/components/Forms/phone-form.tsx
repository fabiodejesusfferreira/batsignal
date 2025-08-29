import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import * as formStyle from "./string-form-styles";
import { styles } from "./phone-form-styles";

export function PhoneForms() {
  return (
    <View style={formStyle.styles.container}>
      <Text style={formStyle.styles.label}>{props.label}</Text>
      <TextInput
        style={[formStyle.styles.input, displayInputBorderColor]}
        placeholder={props.customplaceholder}
        autoComplete={props.autocomplete}
        onChangeText={(input) => {
          handleValueChange(input);
        }}
        onFocus={handleFirstDigitOfInput}
        value={inputValue}
        onEndEditing={(input) => {
          handleEndEditing(input.nativeEvent.text);
        }}
        keyboardType="number-pad"
        maxLength={10}
      ></TextInput>
    </View>
  );
}
