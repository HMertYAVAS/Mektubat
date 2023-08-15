import React from "react";
import { View, Text, TouchableHighlight, Image,StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PeopleDiscoverCard from "../component/PeopleDiscoverCard";
import TopHeader from "../component/TopHeader";



export default People = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader navigation={navigation} backButton={false}/>
      <View style={styles.contentContainer}>
        <PeopleDiscoverCard navigation={navigation} />
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