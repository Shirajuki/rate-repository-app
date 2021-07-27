import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
    border: "1px solid #0c0c0c",
    borderRadius: 2,
    backgroundColor: "#fff",
  },
});
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];
  return <NativeTextInput style={textInputStyle} {...props} />;
};
export default TextInput;
