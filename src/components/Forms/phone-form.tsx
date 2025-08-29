import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import * as formStyle from "./string-form-styles";
import { styles } from "./phone-form-styles";

export function PhoneForms() {
interface ErrorMessageProps {
  message: string;
}

  function ErrorMessage(props: ErrorMessageProps) {
    return (
      <Text
        style={[
          styles.errorMessage,
          {
            display: displayErroMessageForPhoneNumber ? "flex" : "none",
          },
        ]}
      >
        {props.message}
      </Text>
    );
  }
  function handleFirstDigitOfInput() {
    if (inputValue.length == 1) setInputValue("9");
  }
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
      <ErrorMessage message="❌ Número  de telefone inválido"></ErrorMessage>
    </View>
  );
}
