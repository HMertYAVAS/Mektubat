import React,{useState} from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");


const DATA = [
  {
    id: "bd7acbeaas",
    nickName: "First Item",
    bio:"gakhjkjsgfjksfdgs"
  },
  {
    id: "3ac68afc-c605-48d3das",
    nickName: "Second Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72fsdf",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72k",
    nickName: "Nyre Sen Ne Anlatıyon Be Abi Ne Diyon Be Abla afsasfasf",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72jş",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7mö2",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dmn.72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-471f-bd96sdf-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3da1-47gj1f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3sjkda1-471f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "5869ıy4a0f-3da1-471f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "5869fjfga0f-3da1-471f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58d694a0lf-3da1-471f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694aj0f-3da1-4g71f-bd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
  {
    id: "58694a0f-3dad1-471f-bhkd96-145571e29d72",
    nickName: "Third Item",
    bio:"gakhjkjsgfjksfdgs"

  },
];
const PeopleDiscoverCard = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() =>
        navigation.navigate("PeopleProfilePage", {
          id: item.id,
          nickName: item.nickName,
          bio: item.bio,
        })
      }
    >
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
          }}
          style={styles.profilPhoto}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.nickName}>
            {item.nickName}
          </Text>
          <Text numberOfLines={2} style={styles.bio}>
            {item.bio}
          </Text>
        </View>
        <View style={styles.messageButton}>
          <Icon
            style={{ textAlign: "center", marginLeft: width * 0.01 }}
            name={Platform.OS === "ios" ? "ios-send" : "md-send"}
            size={width * 0.08}
            color={"#bae4fd"}
          ></Icon>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
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
    borderBottomWidth: 0.5,
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
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    backgroundColor: "red",
    marginLeft: width * 0.02,
    marginRight: width * 0.05,
    marginBottom: width * 0.02,
    marginTop: width * 0.02,
  },
  messageButton: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.1,
    //backgroundColor: "#75C9FA",
    marginTop: width * 0.02,
    marginLeft: "auto",
    marginRight: width * 0.02,
    borderColor: "#bae4fd",
    borderWidth: 3,
  },
  textContainer: {
    flex: 1,
  },
});

export default PeopleDiscoverCard;
