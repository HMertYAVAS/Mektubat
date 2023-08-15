import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import TopHeader from "./TopHeader";

const { width, height } = Dimensions.get("window");

export default PeopleProfilePage = ({ navigation, route }) => {
  const { id, nickName, bio } = route.params;

  const handleMessagePress = () => {
    // Burada mesaj gönderme ekranına yönlendirme işlemleri yapabilirsiniz
    // Örneğin:
    navigation.navigate("ChatScreen", {
      id: id,
      nickName: nickName,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
     <TopHeader navigation={navigation} backButton={true} />

      <View style={styles.container}>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings-outline" size={30} color="#75C9FA" />
        </TouchableOpacity>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
            }}
            style={styles.profilePhoto}
            resizeMode="cover"
          />
          <View style={styles.statusIndicator}></View>
        </View>
        <View style={styles.userInfo}>
          <Text numberOfLines={1} style={styles.nickname}>
            {nickName}
          </Text>
          <View style={styles.ageAndMessage}>
            <Text style={styles.age}>28 years old</Text>
            <TouchableOpacity
              style={styles.messageButton}
              onPress={handleMessagePress}
            >
              <Icon
                name="chatbubble-ellipses-outline"
                size={width * 0.07}
                color="#75C9FA"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text numberOfLines={8} style={styles.bio}>
            {bio}
          </Text>
        </View>
        {/* Diğer bilgiler buraya eklenebilir */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
  profileImageContainer: {
    position: "relative",
    marginBottom: width * 0.05,
  },
  profilePhoto: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    backgroundColor: "white",
  },
  statusIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.08,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "white",
  },
  userInfo: {
    alignItems: "center",
    marginBottom: width * 0.03,
  },
  nickname: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: width * 0.03,
    color: "#0099ff",
  },
  ageAndMessage: {
    flexDirection: "row",
    alignItems: "center",
  },
  age: {
    fontSize: width * 0.04,
    color: "#666",
    marginRight: 10,
  },
  bioContainer: {
    marginTop: height * 0.05,
    height: height * 0.3,
    width: width * 0.7,
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
  messageButton: {
    //backgroundColor: "#75C9FA",
    borderRadius: 50, // Yuvarlaklık için daha büyük bir değer
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messageButtonText: {
    color: "#75C9FA",
    fontWeight: "bold",
    fontSize: 16,
  },
});
