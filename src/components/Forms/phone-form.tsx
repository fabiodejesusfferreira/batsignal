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

  function handleDisplayErrorMessageForPhoneNumber() {
    setDisplayErrorMessageForPhoneNumber(!displayErroMessageForPhoneNumber);
  }

  function handleFirstDigitOfInput() {
    if (inputValue.length == 1) setInputValue("9");
  }

  function handleValueChange(newValue: string) {
    const lastValue = newValue[newValue.length - 1];
    if (newValue.length == 0) {
      return setInputValue("9");
    }

    if ([".", ",", " "].includes(lastValue)) return;

    if (newValue.length == 10 && !newValue.includes("-")) return;

    if (newValue.includes("-") && newValue.indexOf("-") !== 5) return;
    if (!newValue.startsWith("9")) return;

    setInputValue(newValue);
  }

  function verifyPhoneNumber(phoneNumber: string) {
    const regex = /^9\d{4}-\d{4}$/;
    return regex.test(phoneNumber);
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
