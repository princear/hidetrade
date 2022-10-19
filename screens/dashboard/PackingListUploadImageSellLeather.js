import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Colors from "../../constants/Colors";
import SpinView from "../../components/Spin";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
const PackingListUploadImageSellLeather = (props) => {
  const [image, setImage] = useState("");
  const [apiLoader, setApiLoader] = useState(false);
  const [document, setDocument] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [uploadedFlag, setUploadedFlag] = useState(false);

  const pickImage = async () => {
    setApiLoader(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      //base64: true,
    });

    if (!result.cancelled) {
      setImage((value) => [result.uri]);
      AsyncStorage.setItem("image", JSON.stringify(image));
      uploadImage({ uri: result.uri });
      setApiLoader(false);
    }
    setTimeout(() => {
      setApiLoader(false);
    }, 5000);
  };

  const uploadImage = async (imageUri) => {
    var imageUriPath = `${imageUri.uri}`;
    console.log("imageuri path inside upload=" + imageUriPath);

    let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/UploadPackagingSingleImage/UploadPackagingSingleImage.php`;
    const data = new FormData();
    data.append("packaging_image", {
      uri: imageUri.uri,
      name: "image.jpg",
      type: "image/jpg",
    });

    let res = await fetch(webApiUrl, {
      method: "post",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    let responseJSON = await res.json();
    console.log("response json====" + JSON.stringify(responseJSON));

    // console.log("data=" + JSON.stringify(data));
  };

  console.log("image=" + image);
  
  let fileBase64;

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
    console.log("uploaded?" + result.uri);

    if ((result.type = "success")) {
      setUploadedFlag(true)
      setDocument((value) => [...value, result.uri]);
      setDocuments((value) => [...value, result]);
      fileBase64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: "base64",
      });
      setDocuments((value) => [...value, fileBase64]);
      console.log("filebase 64=" + fileBase64);
      uploadDocument({ uri: fileBase64 });
    }

    //console.log(result);
  };

  const uploadDocument = async (fileBase64) => {
    // var document64Param = `${fileBase64.uri}`;
    var document64Param = fileBase64.uri;
    console.log("document 64 param=" + document64Param);
    let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/AddProduct/AddProductMultiImages.php`;
    let object = [{ product_id: "0" }, { pdocument: document64Param }];
    console.log("insisde upload document=" + JSON.stringify(object));

    axios
      .post(webApiUrl, object)
      .then((res) => {
        console.log("response of document=" + JSON.stringify(res.data));
      })
      .catch((err) => {
        setUploadedFlag(false)
        console.log("error in document=" + err);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" ,}}>
      {apiLoader ? (
      //   <View
      //   style={{
      //     width: "100%",
      //     height: "100%",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     backgroundColor: "#ffffff",
      //     opacity: 1,
      //     zIndex: 5,
      //   }}
      // >
      //   <Image
      //     source={require("../../assets/loader.jpg")}
      //     resizeMode="contain"
      //     resizeMethod="scale"
      //     style={{ width: 100, height: 100, marginBottom:10 }}
      //     /><ActivityIndicator size={"large"} color='red' />
      // </View>
      <SpinView style={{alignItems:'center', justifyContent:'center', flex:1}}>
           <Image
            source={require("../../assets/loader.jpg")}
            resizeMode="contain"
            resizeMethod="scale"
            style={{ width: 80, height: 80 }}
          /><Text style={{fontWeight:'bold', marginTop:10}}>Loading...</Text>
        </SpinView>
      ) : (
        <View style={{ height: "100%" }}>
          <ScrollView>
            <Image
              source={{ uri: `${image}` }}
              style={{ width: 350, height: 350, alignSelf: "center" }}
              resizeMode="contain"
            />
              {uploadedFlag &&
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text allowFontScaling={false}>Uploaded</Text>
                </View>
              }
          </ScrollView>
          
          <View style={{ marginBottom: 20 }}>
            {/* <TouchableOpacity onPress={pickImage}> */}
            <TouchableOpacity onPress={pickDocument}>
              <Image
                source={require("../../assets/packingList.png")}
                style={{ width: 80, height: 80, alignSelf: "center" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default PackingListUploadImageSellLeather;
