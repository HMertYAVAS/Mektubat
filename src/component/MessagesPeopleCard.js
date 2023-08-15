import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
  RefreshControl,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1231afs2gfsda3",
    nickName: "KaŞaŞ",
    lastMessage: "Naber Bro",
  },
  {
    id: "12354afg323",
    nickName: "Nyre",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },
  {
    id: "123fdg54323",
    nickName: "Nyre Sen Ne Anlatıyon Be Abi Ne Diyon Be Abla afsasfasf",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },  {
    id: "1ag231afs2gfsda3",
    nickName: "KaŞaŞ",
    lastMessage: "Naber Bro",
  },
  {
    id: "123as54afg323",
    nickName: "Nyre",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },
  {
    id: "12jk3fdg543hgfkjf23",
    nickName: "Nyre Sen Ne Anlatıyon Be Abi Ne Diyon Be Abla afsasfasf",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },  {
    id: "1231afs2gfsdrturua3",
    nickName: "KaŞaŞ",
    lastMessage: "Naber Bro",
  },
  {
    id: "12354afg32lıy3",
    nickName: "Nyre",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },
  {
    id: "123fdg5432ruuyıo3",
    nickName: "Nyre Sen Ne Anlatıyon Be Abi Ne Diyon Be Abla afsasfasf",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },  {
    id: "1ag2ert31afs2gfsda3",
    nickName: "KaŞaŞ",
    lastMessage: "Naber Bro",
  },
  {
    id: "123askşlo54afg323",
    nickName: "Nyre",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },
  {
    id: "12jk3fdg543opıi23",
    nickName: "Nyre Sen Ne Anlatıyon Be Abi Ne Diyon Be Abla afsasfasf",
    lastMessage:
      "Lorem Ipsum jajjajkfkakfkkkfkakkkkkkkakakkkakakkakafasfasfsaafasfasfasfasfsafasfsglkswanksfngnsfdgsnklnknsfgkgnsdfknsgknnksndkkvbsdnbkvskndsfgkfsknnkfskldfksndfnklsnkld",
  },
];

const MessagesPeopleCard = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() =>
        navigation.navigate("ChatScreen", {
          id: item.id,
          nickName: item.nickName,
          lastMessage: item.lastMessage,
        })
      }
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
          <Text numberOfLines={1} style={styles.nickName}>
            {item.nickName}
          </Text>
          <Text numberOfLines={2} style={styles.lastMessage}>
            {item.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
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
  lastMessage: {
    flex: 4,
    color: "black",
    fontSize: width * 0.035,
    width:width*0.7
  },
  profilePhoto: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
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

export default MessagesPeopleCard;
