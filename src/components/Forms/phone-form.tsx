import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import * as formStyle from "./string-form-styles";
import { styles } from "./phone-form-styles";

interface PhoneFormsProps {
  label: string;
  customplaceholder: string;
  autocomplete:
    | "additional-name"
    | "address-line1"
    | "address-line2"
    | "birthdate-day"
    | "birthdate-full"
    | "birthdate-month"
    | "birthdate-year"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "cc-name"
    | "cc-given-name"
    | "cc-middle-name"
    | "cc-family-name"
    | "cc-type"
    | "country"
    | "current-password"
    | "email"
    | "family-name"
    | "gender"
    | "given-name"
    | "honorific-prefix"
    | "honorific-suffix"
    | "name"
    | "name-family"
    | "name-given"
    | "name-middle"
    | "name-middle-initial"
    | "name-prefix"
    | "name-suffix"
    | "new-password"
    | "nickname"
    | "one-time-code"
    | "organization"
    | "organization-title"
    | "password"
    | "password-new"
    | "postal-address"
    | "postal-address-country"
    | "postal-address-extended"
    | "postal-address-extended-postal-code"
    | "postal-address-locality"
    | "postal-address-region"
    | "postal-code"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-device"
    | "url"
    | "username"
    | "username-new"
    | "off";
}

interface ErrorMessageProps {
  message: string;
}

export function PhoneForms(props: PhoneFormsProps) {
  const [inputValue, setInputValue] = useState("");
  const [
    displayErroMessageForPhoneNumber,
    setDisplayErrorMessageForPhoneNumber,
  ] = useState(false);
  const [displayInputBorderColor, setDisplayInputBorderColor] = useState(styles.inputColorForCorrectValue)

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

  function handleEndEditing(inputText: string) {
    let numberSplited = inputText.split("");
    let numberTratado = [];
    for (let index = 0; index < numberSplited.length; index++) {
      if (index !== 5) {
        numberTratado.push(numberSplited[index]);
      } else if (numberSplited[index] == "-") {
        numberTratado.push(numberSplited[index]);
      } else {
        numberTratado.push("-", numberSplited[index]);
      }
    }

    setInputValue(numberTratado.join(""));
    const verifyIfPhoneNumberIsOK = verifyPhoneNumber(numberTratado.join(""));

    if (verifyIfPhoneNumberIsOK === false) {
      handleDisplayErrorMessageForPhoneNumber();
      setDisplayInputBorderColor(styles.inputColorForInvalidValue)
    } else if (displayErroMessageForPhoneNumber) {
        handleInputFocus()
        handleDisplayErrorMessageForPhoneNumber()
        setDisplayInputBorderColor(styles.inputColorForCorrectValue)
    }
  }

  function handleInputFocus() {
    
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
