import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";
import theme from "../theme";
import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginLeft: 10,
    color: theme.colors.textRed,
  },
  textInput: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
    border: "1px solid #0c0c0c",
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  errorBorder: {
    border: "1px solid " + theme.colors.textRed,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;
  if (showError) props.style = styles.errorBorder;
  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {/* Show the error message if the value of showError variable is true  */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
