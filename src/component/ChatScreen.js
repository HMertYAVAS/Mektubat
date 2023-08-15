import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Expo kullanıyorsanız

import MessageComponent from "./MessageComponent";
import MessageMenuComponent from "./MessageMenuComponent";

const { width } = Dimensions.get("window"); // Eklenmesi gereken satır

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const { id, nickName, lastMessage } = route.params;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length, text: inputText, isMine: true },
      ]);
      setInputText("");
    }
  };

  const handleMenuPress = (messageId) => {
    setShowMenu(true);
    setSelectedMessage(messageId);
  };

  const handleBlock = () => {
    // Block işlemini gerçekleştirme
    console.log("Message blocked:", selectedMessage);
    setShowMenu(false);
  };

  const handleDelete = () => {
    // Silme işlemini gerçekleştirme
    console.log("Message deleted:", selectedMessage);
    setShowMenu(false);
  };

  const handleReport = () => {
    // Şikayet işlemini gerçekleştirme
    console.log("Message reported:", selectedMessage);
    setShowMenu(false);
  };

  const handleClose = () => {
    // Şikayet işlemini gerçekleştirme
    console.log("Message Closed:", selectedMessage);
    setShowMenu(false);
  };

  const maxNickNameLength = 20; // Maksimum karakter sayısı

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={[styles.userInfo, styles.rightAlign]}>
          <Image
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-No-Background-Clip-Art.png",
            }}
            style={styles.profilePhoto}
          />
          <Text style={styles.nickName}>
            {nickName.length > maxNickNameLength
              ? `${nickName.substring(0, maxNickNameLength)}...`
              : nickName}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => handleMenuPress(selectedMessage)}
        >
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Mesaj Listesi */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MessageComponent message={item.text} isMine={item.isMine} />
        )}
      />

      {showMenu && (
        <MessageMenuComponent
          visible={showMenu}
          onBlock={handleBlock}
          onDelete={handleDelete}
          onReport={handleReport}
          onClose={handleClose}
        />
      )}

      {/* Mesaj Gönderme Bölümü */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          {/* İkon kullanımı */}
          <Ionicons
            name={Platform.OS === "ios" ? "ios-send" : "md-send"}
            size={width * 0.07}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#F6F9FA",
  },
  header: {
    backgroundColor: "#38B6FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Sağa yaslanma için
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: "green",
    backgroundColor: "white",
  },
  nickName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.15) / 2, // Yuvarlak yapma
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },

  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuButton: {
    marginLeft: 8,
  },
  leftAlign: {
    justifyContent: "flex-start",
  },
  rightAlign: {
    justifyContent: "flex-end",
  },
});

export default ChatScreen;
