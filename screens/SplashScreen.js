import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = (props) => {
  
  useEffect(async() => {
    var loginStatus = await AsyncStorage.getItem("loginStatus");
    const user_id= await AsyncStorage.getItem("user_id");
    const user_type=  await AsyncStorage.getItem("user_type");
    console.log('login status in splash='+JSON.stringify(loginStatus))
    console.log('user id in splash='+user_id);
    console.log('user type in splash='+JSON.stringify(user_type));
    if (loginStatus == "true" && user_id!=null && user_type!=null) {
      setTimeout(() => {
        props.navigation.navigate("Tabs");
      }, 2000);
    } 
    // else if(loginStatus=="false" || user_id=="" || user_type=="" || user_id==null || user_type==null ){
    //   setTimeout(() => {
    //     props.navigation.navigate("Login");
    //   }, 2000);
    // }
    else if(user_id==null){
      setTimeout(() => {
        props.navigation.navigate("Login");
      }, 2000);
    }else if(user_type==null){
      setTimeout(() => {
        props.navigation.navigate("Login");
      }, 2000);
    }else if(loginStatus=="false"){
      setTimeout(() => {
        props.navigation.navigate("Login");
      }, 2000);
    }else {
      setTimeout(() => {
        props.navigation.navigate("Login");
      }, 2000);
    }
  }, []);

  // useEffect(()=>{
  //   setTimeout(()=>{props.navigation.navigate("Login")},2000);
  // })

  return (
    <View style={styles.layout}>
      {/* <StatusBar backgroundColor={Colors.theme} barStyle={"light-content"} /> */}
      <Image
          //source={require("../assets/loader.jpg")}
          source={require("../assets/300.png")}
          resizeMode="contain"
          resizeMethod="scale"
          style={{ width: 250, height: 250 }}
        />
      {/* <Text>splash screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "column",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default SplashScreen;
