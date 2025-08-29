import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  errorMessage: {
    color: "#f00"
  },
  inputColorForCorrectValue: {
    borderWidth: 1,
    borderColor: '#000'
  },
  inputColorForInvalidValue: {
    borderWidth: 1,
    borderColor: '#f00',
    backgroundColor: "rgba(255, 0, 0, 0.11)"
  },
});