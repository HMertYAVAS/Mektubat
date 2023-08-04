import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default TopHeader = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Chattify</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    backgroundColor:"yellow",
    alignItems:"center",
  },
  header:{
    marginTop:"5%",
    fontSize:30
  }
});
