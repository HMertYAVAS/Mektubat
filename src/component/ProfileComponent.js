import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="settings-outline" size={30} color="#75C9FA" />
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
        }}
        style={styles.profilePhoto}
        resizeMode="cover"
      />
      <View style={styles.userInfo}>
        <Text style={styles.nickname}>JohnDoe123</Text>
        <Text style={styles.age}>28 years old</Text>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          Hi, I'm John Doe. I love coding and exploring new technologies!
        </Text>
      </View>
      {/* Diğer bilgiler buraya eklenebilir */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.05,
  },
  settingsButton: {
    position: "absolute",
    top: height * 0.02,
    right: width * 0.05,
    zIndex: 1,
  },
  profilePhoto: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    marginBottom: width * 0.05,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: width * 0.03,
  },
  nickname: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: width * 0.03,
    color:"#0099ff"
  },
  age: {
    fontSize: width * 0.04,
    color: "#666",
    marginBottom: width * 0.03,
  },
  bioContainer: {
    marginTop: height * 0.05,
    height: height * 0.2,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: width * 0.03,
    borderRadius: 10,
    backgroundColor: "white",
  },
  bio: {
    fontSize: width * 0.04,
    color: "#666",
  },
});
