import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeProvider } from "react-native-elements";

import Profile from "./src/Tabs/Profile";
import Messages from "./src/Tabs/Messages";
import People from "./src/Tabs/People";
import LoginPage from "./src/pages/LoginPage";
import ResponsiveLoginComponent from "./src/component/ResponsiveLoginComponent";
import MessagesPeopleCard from "./src/component/MessagesPeopleCard";
import ChatScreen from "./src/component/ChatScreen";
import PeopleDiscoverCard from "./src/component/PeopleDiscoverCard";
import PeopleProfilePage from "./src/component/PeopleProfilePage";





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
      <Tab.Navigator initialRouteName="People" screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="People"
          component={People}
          options={{
            tabBarLabel: "People",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                focused={focused}
                name={
                  Platform.OS === "ios"
                    ? "ios-people-outline"
                    : "md-people-outline"
                }
                color={color}
                size={size}
              />
            ),
            tabBarOptions: {
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            },
          }}
        />

        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                focused={focused}
                name={
                  Platform.OS === "ios"
                    ? "ios-chatbox-outline"
                    : "md-chatbox-outline"
                }
                color={color}
                size={size}
              />
            ),
            tabBarOptions: {
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                focused={focused}
                name={Platform.OS === "ios" ? "ios-person-outline" : "md-person-outline"}
                color={color}
                size={size}
              />
            ),
            tabBarOptions: {
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            },
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="ResponsiveLoginPage" component={ResponsiveLoginComponent} options={{ headerShown: false }} />
        <Stack.Screen name="MessagesPeopleCard" component={MessagesPeopleCard} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PeopleDiscoverCard" component={PeopleDiscoverCard} options={{ headerShown: false }} />
        <Stack.Screen name="PeopleProfilePage" component={PeopleProfilePage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
