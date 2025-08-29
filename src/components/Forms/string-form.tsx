import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./string-form-styles";

export function Forms() {
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
