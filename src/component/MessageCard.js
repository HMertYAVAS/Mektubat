import React from "react";
import { View, Text, TouchableHighlight, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default PeopleDiscoverCard = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => console.log("Pressed!")}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
          }}
          style={styles.profilePhoto}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.nickName}>{props.nickName}</Text>
          <Text style={styles.lastMessage}>{props.lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7fbff",
    flexDirection: "row",
    borderBottomColor: "#38B6FF",
    marginBottom: width * 0.002,
    paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.02,
    alignItems: "center",
    borderBottomWidth:0.5

  },
  nickName: {
    flex: 2,
    color: "#0099ff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  lastMessage: {
    flex: 4,
    color: "black",
    fontSize: width * 0.035,
  },
  profilePhoto: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
    backgroundColor: "red",
    marginLeft: width * 0.02,
    marginRight: width * 0.01,
    marginBottom: width * 0.02,
    marginTop: width * 0.02,
  },
  textContainer: {
    flex: 1,
    marginLeft: width * 0.05, // Yüzde değerine göre ayarlanabilir
  },
});
