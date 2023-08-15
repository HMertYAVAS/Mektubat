import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons"; // Expo kullanıyorsanız

const { width } = Dimensions.get("window");

const TopHeader = ({navigation,backButton}) => {
  return (
    <View style={styles.container}>
      {backButton?
            <TouchableOpacity style={styles.backArrowCss} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>:null}
      <Image
        source={require("../assets/MektubatMaviLogo.png")} // .png uzantısı eklenmeli
        style={backButton?styles.image:styles.imageNonBackArrow}
      />
      <View style={styles.viewStyleForLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: width / 3.5,
    backgroundColor: "#38B6FF",
    alignItems: "center",
    flexDirection:"row"
  },
  header: {
    marginTop: "5%",
    fontSize: 30,
  },
  image: {
    marginLeft:width*0.25,
    width: width / 3.2, // Görsele uygun genişlik ve yükseklik değerleri verilmelidir
    height: width / 3.5,
  },
  imageNonBackArrow:{
    marginLeft:width*0.35,
    width: width / 3.2, // Görsele uygun genişlik ve yükseklik değerleri verilmelidir
    height: width / 3.5,
  },
  viewStyleForLine: {
    borderBottomColor: "#F6F9FA",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "100%",
  },
  backArrowCss: {
    marginTop: width*0.03,
    marginLeft:width*0.03
  },
});

export default TopHeader;
