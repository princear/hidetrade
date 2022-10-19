import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,FlatList, ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import Colors from "../../constants/Colors";
import ButtonComp from "../../components/ButtonComp";
import ButtonForProfile from "../../components/ButtonForProfile";
import SpinView from "../../components/Spin";
import ButtonForLogout from "../../components/ButtonForLogout";

const Profile = (props) => {
  const [id, setId] = useState(undefined);
  const [user_type, setUser_type] = useState(undefined);
  const [dataLoad, setDataLoaded] = useState(false);
  const [apiLoader, setApiLoader] = useState(true);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [mob, setMob] = useState(undefined);
  const [civic, setCivic] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [cap, setCap] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [vat, setVat] = useState(undefined);
  const [fiscal, setFiscal] = useState(undefined);
  const [pec, setPec] = useState(undefined);
  const [http, setHttp] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [profileImage, setProfileImage]=useState('');
  const [profile, setProfile]=useState(undefined);

  // const [image, setImage] = useState([]);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    setProfileImage('')
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true,
    });

    // console.log("result=" + JSON.stringify(result));
    // console.log("image=" + image);

    // const tempArr = [];
    // tempArr.push({data:result, uri:result.uri})

    if (!result.cancelled) {
      // setImage((value) => [result.uri]);
      setImage(result.uri);
      setProfileImage(result.base64)
      //AsyncStorage.setItem("image", JSON.stringify(image));
      //uploadImage({ uri: result.base64 });
    }
  };


  const [image64, setImage64]=useState('');
  const [dataLoadImage, setDataLoadImage]=useState(false);
  const [apiLoaderImage, setApiLoaderImage]=useState(true);
  //var image64Param;
  const uploadImage = async (base64String) => {
    if(dataLoadImage==false){
      setApiLoaderImage(true);
    //var image64Param=`data:image/jpg;base64,${base64String.uri}`;
    var image64Param = `${base64String.uri}`;
    setImage64(base64String.uri);
    setProfileImage(base64String.uri);
    let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/UpdateProfile/UpdateProfileImagesAndDocuments.php`;
    let object = [{ user_id: id }, { profile_image: image64Param }];
    //console.log('object='+JSON.stringify(object))

    axios
      .post(webApiUrl, object)
      .then((res) => {
        // console.log("response of picture=" + JSON.stringify(res.data));
        setDataLoadImage(true);
        setApiLoaderImage(false);
      })
      .catch((err) => console.log(err));
    }
  };

  


const [category, setCategory]=useState([]);
const [subCategory, setSubCategory]=useState([]);

// file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540eastsons%252FHide/ImagePicker/bf0178bc-9ba4-430a-84e0-fe34a7fef018.jpg
// file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540eastsons%252FHide/ImagePicker/bf0178bc-9ba4-430a-84e0-fe34a7fef018.jpg

  useEffect(async () => {
    if (dataLoad == false) {
      setApiLoader(true);
      setId(await AsyncStorage.getItem("user_id"));
      setUser_type(await AsyncStorage.getItem("user_type"));
      //console.log("type in profile=" + user_type);
      //console.log("id in profile=" + id);
      //let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/SingleUserProfile/SingleUserProfile.php?id=${id}`;
      let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/ViewSingleUserList/ViewSingleUserList.php?user_type=${user_type}&user_id=${id}`;
      axios
        .get(webApiUrl)
        .then((res) => {
          //console.log("response in profile=" + JSON.stringify(res.data));
          setProfile(res.data.User_Details[0])
          setFirstName(res.data.User_Details[0].first_name);
          setLastName(res.data.User_Details[0].last_name);
          // setUserName(res.data.User_Details[0].user_name);
          setEmail(res.data.User_Details[0].email);
          setPassword(res.data.User_Details[0].password);
          setMob(res.data.User_Details[0].mobile);
          setCivic(res.data.User_Details[0].Civic_Nr);
          setCity(res.data.User_Details[0].City);
          setCap(res.data.User_Details[0].C_A_P);
          setCountry(res.data.User_Details[0].Country);
          setVat(res.data.User_Details[0].VAT_nr);
          setFiscal(res.data.User_Details[0].Fiscal_Code);
          setPec(res.data.User_Details[0].PEC);
          setHttp(res.data.User_Details[0].HTTP);
          setAddress(res.data.User_Details[0].address);
          setProfileImage(res.data.User_Details[0].profile_image)
          setCategory(res.data.User_Details[0].leather_condition.map((value)=>value.Leather_Condition))
          setSubCategory(res.data.User_Details[0].kind_of_leather.map((value)=>value.kind_of_leather_on_sell))
          setDataLoaded(true);
          setApiLoader(false);
        })
        .catch((err) => console.log(err));
      //console.log("webapi url new=" + webApiUrl);
    }
  }, [
    id,
    user_type,
    firstName,
    lastName,
    // userName,
    email,
    mob,
    civic,
    city,
    cap,
    country,
    vat,
    fiscal,
    pec,
    http,
    address,
    profileImage, category, subCategory, profile, image
  ]);

 

  const user_id = { ["user_id"]: id };
  //console.log("abc in profile=" + JSON.stringify(user_id));
  const type = { ["user_type"]: user_type };
  var name = { ["first_name"]: firstName };
  var last_name = { ["last_name"]: lastName };
  // var user_name = { ["user_name"]: userName };
  //console.log("user name=" + JSON.stringify(user_name));
  var email_id = { ["email"]: email };
  var mobile = { ["mobile"]: mob };
  var address1 = { ["address1"]: address };
  var civic_Nr = { ["Civic_Nr"]: civic };
  var City = { ["City"]: city };
  var C_A_P = { ["C_A_P"]: cap };
  var Country = { ["Country"]: country };
  var VAT_nr = { ["VAT_nr"]: vat };
  var Fiscal_Code = { ["Fiscal_Code"]: fiscal };
  var PEC = { ["PEC"]: pec };
  var HTTP = { ["HTTP"]: http };
  //var profile_image={['profile_image']:image64}
  var profile_image={['profile_image']:profileImage}
  //console.log('profile_image='+JSON.stringify(profile_image))
  //var pcategory;

  // function pcategory(item, index){
  //   var xyz={"pcategory":item}
  //   return xyz
  // }
  // var output=category.map(pcategory)
  // console.log('output='+JSON.stringify(output))

  // const result={...output}
  // console.log('result='+JSON.stringify(result))



  //console.log('category='+category)
  var pcategory=category.map((value)=>({['pcategory']:value}))
  // console.log('kadfbv='+JSON.stringify(pcategory))
  // console.log('sub category='+subCategory)
  var sub_category=subCategory.map((value)=>({['sub_category']:value}))

  // [{"pcategory":"Finished"},{"pcategory":"Pickled"},{"pcategory":"Raw"},{"pcategory":"Crust"}]
  // {"pcategory":"Finished"}
  // {"pcategory":"Pickled"},{"pcategory":"Raw"},{"pcategory":"Crust"}


 

  let final = [];
  final.push(
    user_id,
    type,
    name,
    last_name,
    // user_name,
    email_id,
    mobile,
    address1,
    civic_Nr,
    City,
    C_A_P,
    Country,
    VAT_nr,
    Fiscal_Code,
    PEC,
    HTTP, profile_image
  );
  let finalForCategoryAndSub=[];
  finalForCategoryAndSub=final.concat(pcategory,sub_category)
  // console.log('final for category='+JSON.stringify(finalForCategoryAndSub))

  // console.log('final='+JSON.stringify(final))

  let finalWithoutImage=[];
  finalWithoutImage.push(user_id,
    type,
    name,
    last_name,
    // user_name,
    email_id,
    mobile,
    address1,
    civic_Nr,
    City,
    C_A_P,
    Country,
    VAT_nr,
    Fiscal_Code,
    PEC,
    HTTP)

   // console.log('final without image='+JSON.stringify(finalWithoutImage))
  //final.push(type);
  // const final=user_id.concat(type)
  // console.log("final=" + JSON.stringify(final));

  const editProfile = useCallback(async () => {
    setApiLoader(true)
      console.log('inside edit profile')

    let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/UpdateProfile/UpdateProfile.php`;
    // 
    axios.post(webApirUrl, finalForCategoryAndSub).then((res) => {
      // console.log("updated? =" + JSON.stringify(res.data));
      setApiLoader(false)
      Alert.alert("", res.data.message, [{ text: "Ok", style: "cancel" }]);
 
    }).catch((err)=>console.log('error in update profile='+err));
  }, [
    id,
    user_type,
    firstName,
    lastName,
    // userName,
    email,
    mob,
    civic,
    city,
    cap,
    country,
    vat,
    fiscal,
    pec,
    http,
    address,
    password,profile_image, profileImage, category, subCategory
  ]);

  // const editProfile=useCallback(async()=>{
  //   const data = new FormData();
  //   data.append("id",id);
  //   data.append("user_type", user_type);
  //   data.append("fname", firstName);
  //     data.append("lname", lastName);
  //     data.append("user_name", userName);
  //     data.append("email", email);
  //     data.append("password", password);
  //     data.append("mobile", mob);
  //     data.append("address", address);
  //     data.append("Civic_Nr", civic);
  //     data.append("City", city);
  //     data.append("C_A_P", cap);
  //     data.append("Country", country);
  //     data.append("VAT_nr", vat);
  //     data.append("Fiscal_Code", fiscal);
  //     data.append("PEC", pec);
  //     data.append("HTTP", http);
  //     data.append("logo_upload");
  //     let webApirUrl=`https://refuel.site/projects/hidetrade/APIs/UpdateProfile/UpdateProfile.php`
  //     let res = await fetch(webApirUrl, {
  //       method: "POST",
  //       body: data,
  //       headers: {
  //         Accept: "*/*",
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     let responseJSON = await res.json();
  //     console.log("response=" + JSON.stringify(responseJSON));

  // },[id,user_type, firstName, lastName, userName, email, mob, civic, city, cap, country, vat, fiscal, pec, http, address, password])

  const doLogout = async () => {
    setApiLoader(true)
    // await AsyncStorage.setItem("loginStatus", "false");
    // await AsyncStorage.setItem("user_id", "");
    // await AsyncStorage.setItem("user_type", "");
    await AsyncStorage.removeItem("LoginStatus")
    await AsyncStorage.removeItem("user_id")
    await AsyncStorage.removeItem("user_type");
    setApiLoader(false)
    Alert.alert('','Do you want to logout?',[{text:"Yes",style:'cancel',onPress:()=>props.navigation.navigate("Login")},{text:'No', style:'cancel'}])
    
    
  };

  // console.log('after log out='+JSON.stringify(profile))

  // console.log('profile Image='+JSON.stringify(profileImage))

  // console.log(image)



  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {apiLoader?(
        // <View
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
        //   source={require("../../assets/loader.jpg")}
        //   resizeMode="contain"
        //   resizeMethod="scale"
        //   style={{ width: 100, height: 100, marginBottom:10 }}
        // /><ActivityIndicator size={"large"} color='red' />
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
        <ScrollView>
          <View style={{ marginHorizontal: 10 }}>
            <View style={{ alignItems: "center" }}>
              {/* <Icon name="person-circle-outline" size={100}></Icon> */}
              <TouchableOpacity onPress={pickImage} style={{marginTop:10}}>
                {/* {image != null || image != undefined || image!=[] || image!=""? ( */}
                  {/* {profileImage != null || profileImage != undefined || profileImage!=[] || profileImage!=""? ( */}
                  {/* {profile.profile_image!="" || profileImage!=null || profileImage != undefined || profileImage!=[] || profileImage!="" ? ( */}
                  {profile.profile_image.length>0 ?(
                  <View>
                  <Image
                    // source={{ uri: profileImage.includes('jpeg')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):profileImage.includes('png')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):profileImage.includes('jpg')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):(image.slice(-1).pop()) }}
                      source={{ uri:image!=null?(image): profileImage.includes('jpeg')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):profileImage.includes('png')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):profileImage.includes('jpg')?('https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage):null }}
                    // source={{uri:image}}
                    style={{ width: 120, height: 120,borderRadius:20 }}
                  />
                  {/* <Image source={{uri:'https://refuel.site/projects/hidetrade/UPLOAD_file/'+profileImage}} style={{ width: 120, height: 120,borderRadius:20 }} /> */}
                  </View>
                ) : image!=null?(<Image source={{uri:image}} style={{ width: 120, height: 120,borderRadius:20 }}  />) :
                (
                  <Icon name="person-circle-outline" size={100} ></Icon>
                )}
                {/* <Image source={{uri:"https://refuel.site/projects/hidetrade/UPLOAD_file/"+profileImage}} style={{width:120, height:120}} /> */}
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outlined"
                  label={"First Name"}
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                  style={{
                    marginTop: 5,
                    width: "50%",
                    marginRight: 5,
                    backgroundColor: "white",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
                <TextInput
                  mode="outlined"
                  label={"Last Name"}
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                  style={{
                    marginTop: 5,
                    width: "50%",
                    backgroundColor: "white",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>
              {/* <TextInput
                mode="outlined"
                label={"Enter Username"}
                value={userName}
                onChangeText={(value) => setUserName(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              /> */}
              <TextInput
                mode="outlined"
                label={"Enter EmailID"}
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Mobile No."}
                value={mob}
                onChangeText={(value) => setMob(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Address"}
                value={address}
                onChangeText={(value) => setAddress(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Civic Nr"}
                value={civic}
                onChangeText={(value) => setCivic(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
               <TextInput
                mode="outlined"
                label={"C.A.P"}
                value={cap}
                onChangeText={(value) => setCap(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"City"}
                value={city}
                onChangeText={(value) => setCity(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Country"}
                value={country}
                onChangeText={(value) => setCountry(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"VAT nr"}
                value={vat}
                onChangeText={(value) => setVat(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Fiscal Code"}
                value={fiscal}
                onChangeText={(value) => setFiscal(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"PEC"}
                value={pec}
                onChangeText={(value) => setPec(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"HTTP"}
                value={http}
                onChangeText={(value) => setHttp(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              
              <TextInput
                mode="outlined"
                label={"Category"}
                value={category.toString()} editable={false}
                //onChangeText={(value) => setAddress(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Sub-Category"}
                value={subCategory.toString()} editable={false}
                //onChangeText={(value) => setAddress(value)}
                style={{ marginTop: 5, backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              {/* <View style={{ marginTop: 10, marginBottom: 5 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Upload Documents :
                </Text>
                <View
                  style={{
                    height: 100,
                    marginHorizontal: 10,
                    backgroundColor: "#D3D3D3",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: Colors.text,
                      fontWeight: "700",
                    }}
                  >
                    Click to select file
                  </Text>
                </View>
              </View> */}


              {/* <View style={{ marginVertical: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Category ", {
                      final: finalWithoutImage,
                    })
                  }
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Insert/Update Leather Details
                  </Text>
                </TouchableOpacity>
              </View> */}

              <View style={{marginTop:20, marginHorizontal:'10%'}}><ButtonComp title={"Insert/Update Leather Details"} onPress={() =>
                    props.navigation.navigate("Category ", {
                      final: finalWithoutImage,
                    })
                  } /></View>


              <View style={{ marginVertical: 10, flexDirection:'row', justifyContent:'space-evenly' }}>
                <View style={{}}><ButtonForProfile title={"Update"} onPress={editProfile} /></View><View><ButtonForLogout title={"Logout"} onPress={doLogout} /></View>
              </View>
              {/* <View style={{ marginVertical: 10 }}>
                
              </View> */}
            </View>
          </View>
        </ScrollView>
      )}
      {/* <ButtonComp title={"Logout"} onPress={doLogout} /> */}
    </View>
  );
};

export default Profile;
