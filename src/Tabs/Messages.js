import React from "react";
import { View } from "react-native";
import MessageCard from "../component/MessageCard";
import TopHeader from "../component/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default Messages = () => {

    const DATA = [
        {
            nickname:"alohamora",
            lastMessage: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        },
        {
            nickname:"fingardium",
            lastMessage: "3ac68afc",

        },
        {
            nickname:"Leviyossa",
            lastMessage: "58694a0f-3da1-471f-bd96-145571e29d72",

        },
      ];


  return (
    <SafeAreaView>
      <View style={{backgroundColor:"#F6F9FA",height:"100%"}}>
        <TopHeader />
        {
          DATA.map(item => {
              return(
                <MessageCard lastMessage={item.lastMessage} nickName={item.nickname}/>
              )
          })
        }

      </View>
    </SafeAreaView>
  );
};
