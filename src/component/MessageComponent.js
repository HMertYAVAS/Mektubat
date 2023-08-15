// MessageComponent.js
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageComponent = ({ message, isMine }) => {
  return (
    <View style={[styles.messageContainer, isMine? styles.myMessage:styles.theirMessage]}>
      <Text style={styles.messageText}>{message}</Text>
      {console.log(message)}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 8,
    marginVertical: 4,
    maxWidth: "80%",
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#38B6FF",
    marginRight:10
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#38B6FF", // Değiştirilebilir renk
    marginLeft: 10, // Sol boşluk
  },
  messageText: {
    fontSize: 16,
    color:"white"
  },
});

export default MessageComponent;
