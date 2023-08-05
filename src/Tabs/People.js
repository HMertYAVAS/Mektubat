import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PeopleDiscoverCard from "../component/PeopleDiscoverCard";
import TopHeader from "../component/TopHeader";

const DATA = [
  {
    id: "bd7acbea",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default People = () => {
  return (
    <SafeAreaView>
        <TopHeader />
      <View style={{ backgroundColor: "#F6F9FA", height: "100%",marginTop:1 }}>
        <ScrollView horizontal="false" onMomentumScrollEnd={()=>console.log("This is rendered new peoples")} >
          {DATA.map((item) => {
            return <PeopleDiscoverCard id={item.id} title={item.title} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
