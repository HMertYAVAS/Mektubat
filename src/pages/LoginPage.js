import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import ResponsiveLoginComponent from "../component/ResponsiveLoginComponent";
import ResponsiveBoxWithText from "../component/ResponsiveBoxWithText";
import { SafeAreaView } from "react-native-safe-area-context";
import TopHeader from "../component/TopHeader";

const {width} = Dimensions.get('window');

export default LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TopHeader/>
        <ResponsiveLoginComponent/>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
        <ResponsiveBoxWithText />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({ 
    container: {
        width:"100%",
        height:"100%",
        backgroundColor:"#75C9FA"
      },
      loginButton: {
        backgroundColor: 'white',
        paddingVertical: width / 30,
        paddingHorizontal: width / 20,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20,
      },
    
})