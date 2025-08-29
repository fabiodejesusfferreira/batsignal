import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./string-form-styles";

interface StringFormsProps {
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

export function StringForms(props: StringFormsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.customplaceholder}
        autoComplete={props.autocomplete}
      ></TextInput>
    </View>
  );
}
