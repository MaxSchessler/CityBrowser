import React, { component } from "react";
import { Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default Button = (props) => {
  // when button is clicked, get url pased when componenet is created
  // url.props
  const handleButtonPress = () => {
    // open web browser on the app
    Linking.openURL(props.url).catch((message) => {
      console.log(message);
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleButtonPress}
      style={styles.Button}
    >
      <Text style={styles.Label}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#3498db",
    marginTop: 20,
  },
  Label: {
    color: "#fff",
  },
});
