import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, Image,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";
import { TextInput } from "react-native-paper";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import Colors from "../../constants/Colors";
import ButtonComp from "../../components/ButtonComp";
import SpinView from "../../components/Spin";
import { Dropdown } from "react-native-element-dropdown";


const data = [
  // { label: "Admin", value: "1" },
  { label: "Asia", value: "1" },
  { label: "Europe", value: "2" },
  { label: "Australia", value: "3" },
  { label: "South America", value: "4" },
  { label: "North America", value: "5" },
  { label: "Antarctica", value: "6" },
  { label: "Africa", value: "7" },
  

];

const Signup = (props) => {
  const tanneries = props.route.params.Tanneries;
  // console.log("tanniries=" + tanneries);
  const agents = props.route.params.Agents;
  // console.log("agents=" + agents);



  const [value, setValue] = useState(null);
  const [label, setLabel] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  const [cap, setCap] = useState("");
  const [country, setCountry] = useState("");
  const [Continents, setContinents] = useState("");

  const [vat, setVat] = useState("");
  const [fiscal, setFiscal] = useState("");
  const [pec, setPec] = useState("");
  const [http, setHttp] = useState("");
  const [civic, setCivic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");
  const [apiLoader, setApiLoader]=useState(false)

  const [image, setImage] = useState('');
  const [imageUri, setImageUri]=useState('')

  const pickImage = async () => {
    //setApiLoader(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      // setImage((value) => [result.uri]);
      setImage(result.base64);
      setImageUri(result.uri)
      console.log('result uri='+result.uri)
      //signupHandler({ uri: result.uri });
      //setApiLoader(false);
    }
    // setTimeout(() => {
    //   //setApiLoader(false);
    // }, 5000);
  };

  // console.log('image uri='+JSON.stringify(image))

  // const signupHandler = useCallback(async (imageUri) => {
  //   console.log('inside signup handler')
  //   if (
  //     fname != "" &&
  //     lname != "" &&
  //     email != "" &&
  //     password != "" &&
  //     mob != "" &&
  //     address != "" && image!=""
  //   ) {
  //     setApiLoader(true);
  //     console.log('inside if')
  //     const data = new FormData();
  //     data.append("user_type", tanneries != undefined ? 'tanneries' : 'agents');
  //     data.append("fname", fname);
  //     data.append("lname", lname);
  //     data.append("user_name", username);
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
  //     data.append("logo_upload",{uri:image, name: "image.jpg",type: "image/jpg"});
  //     console.log('data in form data='+JSON.stringify(data))
  //     let webapiurl = `https://refuel.site/projects/hidetrade/APIs/UserRegistration/UserRegistration.php`;
  //     let res = await fetch(webapiurl, {
  //       method: "post",
  //       body: data,
  //       headers: {
  //         Accept: "*/*",
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     let responseJSON = await res.json();
  //     console.log("response=" + JSON.stringify(responseJSON));
  //     if (responseJSON.status == true) {
  //       setApiLoader(false)
  //       Alert.alert("", "Success",[{text:'Ok', onPress:()=>props.navigation.navigate("Login")}]);
  //     } else {
  //       setApiLoader(false)
  //       Alert.alert(responseJSON.message);
  //     }
  //   }else if(fname==''){
  //     Alert.alert("","Kindly fill first name")
  //   }else if(lname==''){
  //     Alert.alert("","Kindly fill last name")
  //   }else if(email==''){
  //     Alert.alert("","Kindly fill email")
  //   }else if(password==''){
  //     Alert.alert("","Kindly fill password")
  //   }else if(fname==''){
  //     Alert.alert("","Kindly fill mobile number")
  //   }else if(address==''){
  //     Alert.alert("","Kindly fill address")
  //   } else if(image.length==0){
  //     Alert.alert("","Kindly select image")
  //   } 
  //   else {
  //       Alert.alert("","Kindly fill the important fields")
  //   }
  // }, [
  //   fname,
  //   lname,
  //   username,
  //   email,
  //   password,
  //   mob,
  //   address,
  //   civic,
  //   city,
  //   cap,
  //   country,
  //   vat,
  //   fiscal,
  //   pec,
  //   http,
  //   tanneries,
  //   agents,
  // ]);

  let arr=[]
  const signupHandler=()=>{
    if (fname != "" && lname != "" && email != "" && password != "" && mob != "" && address != "" && image!='') {
        setApiLoader(true);
        arr=[{
            "user_type":tanneries != undefined ? 'Tanneries' : 'Agents',
            "fname":fname,
            "lname":lname,
            "user_name":username,
            "email":email,
            "password":password,
            "mobile":mob,
            "address":address,
            "Civic_Nr":civic,
            "City":city,
            "C_A_P":cap,
            "Country":country,
            "Continents":Continents,
            "VAT_nr":vat,
            "Fiscal_Code":fiscal,
            "PEC":pec,
            "HTTP":http
          },
          [{
            "logo_upload":image
          }]
        ]
        console.log('array='+JSON.stringify(arr))
        
        // let webApirUrl=`https://refuel.site/projects/hidetrade/APIs/UserRegistration/UserRegistration.php`;
        let webApirUrl=`https://refuel.site/projects/hidetrade/APIs/UserRegistration/UserRegistration.php`;

        axios.post(webApirUrl,arr).then((response)=>{
          console.log('response in user registration='+JSON.stringify(response.data))
          setApiLoader(false)
          if(response.data.Status==false){
            Alert.alert('','This Email id already exists. Please use another one.',[{text:'Ok', style:'cancel'}])
          }
          if(response.data.Status==true){
            Alert.alert('','User Registration Successful',[{text:'Ok', style:'cancel',onPress:()=>props.navigation.navigate("Login")}])
          }
        }).catch((err)=>Alert.alert('','Kindly recheck',[{text:'Ok', style:'cancel'}]))
      }
      else if(fname==''){
            Alert.alert("","Kindly fill first name")
          }else if(lname==''){
            Alert.alert("","Kindly fill last name")
          }else if(email==''){
            Alert.alert("","Kindly fill email")
          }else if(password==''){
            Alert.alert("","Kindly fill password")
          }else if(fname==''){
            Alert.alert("","Kindly fill mobile number")
          }else if(address==''){
            Alert.alert("","Kindly fill address")
          } else if(image.length==0){
            Alert.alert("","Kindly select image")
          } 
          else {
              Alert.alert("","Kindly fill the important fields")
          }
    }

  return (
    <KeyboardAvoidingView style={{
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "white",
    }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View
      style={{flex:1}}
    >
      {apiLoader?(<SpinView
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/loader.jpg")}
            resizeMode="contain"
            resizeMethod="scale"
            style={{ width: 80, height: 80 }}
          />
          <Text style={{fontWeight:'bold', marginTop:10}}>Loading...</Text>
        </SpinView>):
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <Icon name="chevron-back-outline" size={30} onPress={()=>props.navigation.goBack()} />
          <View style={{ marginTop: 20 }}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={pickImage}>
                {imageUri.length!=0?<Image 
                  source={{uri:`${imageUri}`}} 
                  // source={{uri:`data:image/jpg;base64,${image}`}}
                  style={{ width: 100, height: 100, borderRadius:20 }} />:
                <Icon name="person-circle-outline" size={100}/>}
              </TouchableOpacity>
              {/* <Text allowFontScaling={false}
                style={{ fontSize: 25, color: Colors.text, fontWeight: "bold" }}
              >
                Logo
              </Text> */}
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                label={"--Select User Type--"}
                value={agents != undefined ? agents : tanneries}
                mode="outlined"
                editable={false}
                style={{ backgroundColor: "white" }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Username"}
                value={username}
                onChangeText={(value) => setUsername(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outlined"
                  label={"First Name"}
                  value={fname}
                  onChangeText={(value) => setFname(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "49%",
                    marginRight: 5,
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
                <TextInput
                  mode="outlined"
                  label={"Last Name"}
                  value={lname}
                  onChangeText={(value) => setLname(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "50%",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>

              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outlined"
                  label={"City"}
                  value={city}
                  onChangeText={(value) => setCity(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "49%",
                    marginRight: 5,
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
                <TextInput
                  mode="outlined"
                  label={"C.A.P"}
                  value={cap}
                  onChangeText={(value) => setCap(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "50%",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>
              <TextInput
                mode="outlined"
                label={"Address"}
                value={address}
                onChangeText={(value) => setAddress(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />

              <TextInput
                mode="outlined"
                label={"Civic Nr"}
                value={civic}
                onChangeText={(value) => setCivic(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />

              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outlined"
                  label={"Country"}
                  value={country}
                  onChangeText={(value) => {
                    setCountry(value);
                  }}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "49%",
                    marginRight: 5,
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
                <TextInput
                  mode="outlined"
                  label={"VAT nr"}
                  value={vat}
                  onChangeText={(value) => setVat(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "50%",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>

              <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "black" }]}
              placeholderStyle={{ fontSize: 16 }}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              //search
              //maxHeight={300}
              labelField="label"
              valueField="value"
              maxHeight={200}
              placeholder={!isFocus ? "Continents" : "..."}
              //searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setLabel(item.label);
                setIsFocus(false);
              }}
            />
              {/* <TextInput
                mode="outlined"
                label={"Continents"}
                value={Continents}
                onChangeText={(value) => setContinents(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              /> */}

              

              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outlined"
                  label={"Fiscal Code"}
                  value={fiscal}
                  onChangeText={(value) => setFiscal(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "49%",
                    marginRight: 5,
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
                <TextInput
                  mode="outlined"
                  label={"PEC"}
                  value={pec}
                  onChangeText={(value) => setPec(value)}
                  style={{
                    backgroundColor: "white",
                    marginTop: 5,
                    width: "50%",
                  }}
                  activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>
              <TextInput
                mode="outlined"
                label={"HTTP"}
                value={http}
                onChangeText={(value) => setHttp(value)} autoCapitalize='none'
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              
              <TextInput
                mode="outlined"
                label={"Enter EmailID"}
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}autoCapitalize='none'
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Enter Password"}
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}autoCapitalize='none'
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              />
              <TextInput
                mode="outlined"
                label={"Mobile No."}
                value={mob}
                keyboardType="number-pad"
                onChangeText={(value) => setMob(value)}
                style={{ backgroundColor: "white", marginTop: 5 }}
                activeOutlineColor={Colors.buttonBackground}allowFontScaling={false}maxFontSizeMultiplier={1}
              /> 
            </View>
            <View style={{ marginVertical: 40 }}>
              <ButtonComp title={"Sign Up"} onPress={signupHandler} />
            </View>
          </View>
        </View>
      </ScrollView>
      }
      
    </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    //borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    opacity:0.7
  },
  icon: {
    marginRight: 5,
  },
})
