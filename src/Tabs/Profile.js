import React from "react";
import { View, Text } from "react-native";
import TopHeader from "../component/TopHeader";
import ProfileComponent from "../component/ProfileComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import ResponsiveBoxWithText from "../component/ResponsiveBoxWithText";

export default Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#F6F9FA", height: "100%" }}>
      <TopHeader navigation={navigation} backButton={false} />
        <ProfileComponent />
      </View>
    </SafeAreaView>
  );
};
