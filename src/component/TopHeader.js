import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/MektubatMaviLogo.png')} // .png uzantısı eklenmeli
        style={styles.image}
      />
      <View style = {styles.viewStyleForLine}></View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    height: width/3.5,
    backgroundColor: "#38B6FF",
    alignItems: "center",
  },
  header: {
    marginTop: "5%",
    fontSize: 30,
  },
  image: {
    width: width/3.2, // Görsele uygun genişlik ve yükseklik değerleri verilmelidir
    height: width/3.5,
  },
  viewStyleForLine: {
    borderBottomColor: "#F6F9FA", 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf:'stretch',
    width: "100%"
  }
});

export default TopHeader;
