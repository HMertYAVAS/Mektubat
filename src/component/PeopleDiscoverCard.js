import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
            uri: "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
          }}
          style={styles.profilPhoto}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nickName}>{props.title}</Text>
          <Text style={styles.bio}>{props.id}</Text>
        </View>
        <View style={styles.messageButton}>
          <Icon
            style={{textAlign:"center",marginLeft:width*0.01}}
            name={Platform.OS === "ios" ? "ios-send" : "md-send"}
            size={width * 0.07}
            color={"white"}
          ></Icon>
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
  bio: {
    flex: 4,
    color: "black",
    fontSize: width * 0.035,
  },
  profilPhoto: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
    backgroundColor: "red",
    marginLeft: width * 0.02,
    marginRight: width * 0.05,
    marginBottom: width * 0.02,
    marginTop: width * 0.02,
  },
  messageButton: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    backgroundColor: "#75C9FA",
    marginTop: width * 0.02,
    marginLeft: "auto",
    marginRight: width * 0.02,
  },
  textContainer: {
    flex: 1,
  },
});
