import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default ResponsiveLoginComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" placeholderTextColor={"white"}/>
      <TextInput style={styles.input} placeholder="Şifre" secureTextEntry={true} placeholderTextColor={"white"} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color:"white",
    marginBottom:Dimensions.get('window').width/5,
  },
  input: {
    width: Dimensions.get('window').width - 40,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    color:"white",
  },

  buttonText: {
    color: '#75C9FA',
    fontSize: 18,
  },
});

