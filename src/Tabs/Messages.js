import React, { useState } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import MessagesPeopleCard from "../component/MessagesPeopleCard";
import TopHeader from "../component/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default Messages = () => {
  const navigation = useNavigation(); // useNavigation kancasını kullanarak navigation prop'unu alın



  return (
    <SafeAreaView style={styles.container}>
      <TopHeader navigation={navigation} backButton={false}/>
      <View
        style={styles.contentContainer}
      >
        <MessagesPeopleCard navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F9FA",
    marginTop: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
