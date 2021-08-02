import React from "react";
import { useHistory } from "react-router-native";
import { StyleSheet, Pressable, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username length must be greater than 3")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password length must be greater than 3")
    .required("Password is required"),
});
const initialValues = {
  username: "",
  password: "",
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundLight,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
    color: theme.colors.textLight,
    textAlign: "center",
    borderRadius: 2,
  },
});
const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit}>
        <Text fontWeight="bold" style={styles.submitButton}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
