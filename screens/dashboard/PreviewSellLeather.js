import React,{useState, useEffect} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image, Modal
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-paper";
import Checkbox from "expo-checkbox";

import Colors from "../../constants/Colors";

const PreviewSellLeather = (props) => {

   
    const [inspection, setInspection] = useState(undefined);
    
    const [modalVisible, setModalVisible] = useState(false);

  var productName = props.route.params.productName;
  var category = props.route.params.category;
  var subCategory = props.route.params.subCategory;
  console.log("🚀 ~ file: PreviewSellLeather.js ~ line 27 ~ PreviewSellLeather ~ subCategory", subCategory)
  var size = props.route.params.size;
  var leatherCondition = props.route.params.leatherCondition;
  var tanningLeather = props.route.params.tanningLeather;
  var substanceThickness = props.route.params.substanceThickness;
  var fromValue = props.route.params.fromValue;
  var toValue = props.route.params.toValue;
  var destination = props.route.params.destination;
  var trim = props.route.params.trim;
  var flay = props.route.params.flay;
  var rawDefects = props.route.params.rawDefects;
  var hairLeather = props.route.params.hairLeather;
  var color = props.route.params.color;
  var certificate = props.route.params.certificate;
  var kindOfPacking = props.route.params.kindOfPacking;
  var kindOfShipment = props.route.params.kindOfShipment;
  var lastInfo = props.route.params.lastInfo;
  var goodsInspection = props.route.params.goodsInspection;
  var preservationType = props.route.params.preservationType;
  var images=props.route.params.images;
  var continent=props.route.params.continents;
  var origin=props.route.params.origin
  // var Specification=props.route.param.Specification;
  console.log("preservation=" + preservationType);
  console.log("tanning leather=" + tanningLeather);
  console.log("goods inspection="+goodsInspection);
  console.log("images in preview="+images[0])

  useEffect(()=>{
    if (goodsInspection != "Yes") {
      setInspection(false);
    } else {
      setInspection(true);
    }
  },[])

 

  

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text allowFontScaling={false} style={styles.headingName}>
            {productName} - {leatherCondition} Leather
          </Text>
          <Divider style={{ borderWidth: 0.25, marginVertical: 15 }} />

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    
                    <Text allowFontScaling={false} style={{fontWeight:'bold'}}>Category: {category.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{value} </Text>))} </Text>
                    {/* <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>SubCategory: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{subCategory} </Text>))}</Text> */}

                    
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Size: {size.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{size} </Text>))}</Text>
                    {/* <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Origin: {size.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{origin} </Text>))}</Text> */}
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Conditions: <Text allowFontScaling={false} style={{fontWeight:'normal'}}>{leatherCondition}</Text></Text>
                    {preservationType == "" ||
                    preservationType == undefined ||
                    preservationType == null ? (
                        <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Tanning: {tanningLeather==undefined?(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>Not Selected</Text>):(<Text allowFontScaling={false}>{tanningLeather}</Text>)}</Text>
                    ) : (
                        <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Preservation: <Text allowFontScaling={false}style={{fontWeight:'normal'}}>{preservationType}</Text></Text>
                    )}
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Inspection: {goodsInspection==""?(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>Not Selected</Text>):(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{goodsInspection}</Text>)}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Destination: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{destination} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Trim: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{trim} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Flay: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{flay} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>RawDefects: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{rawDefects} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Color: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{color} </Text>))}</Text>
                   
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>HairLeather: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{hairLeather} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>Certificate: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{certificate} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>lastInfo: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{lastInfo} </Text>))}</Text>
                    
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>KindOfPacking: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{kindOfPacking} </Text>))}</Text>
                    <Text allowFontScaling={false} style={{fontWeight:'bold',marginVertical:5}}>KindOfShipment: {subCategory.map((value)=>(<Text allowFontScaling={false} style={{fontWeight:'normal'}}>{kindOfShipment} </Text>))}</Text>

                </View>
                <View style={{}}>
                    {/* <Image
                        source={require("../../assets/IconDocuments.png")}
                        style={{ width: 120, height: 120 }}
                        resizeMode="contain"
                    /> */}
                    {images.length!=0?(<Image
                        source={{ uri: `data:image/png;base64,${images[0]}` }}
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 8,
                        }} resizeMode='contain'
                      />):<Image source={require('../../assets/IconUpload3.png')} style={{width:120, height:120}}  />}
                </View>
            </View>

            <Divider style={{ borderWidth: 0.5, marginVertical: 15 }} />

            <View style={{marginTop:10}}>
              <Text allowFontScaling={false} style={styles.document}>
                View Documents and Certificates
              </Text>

              <ScrollView
                contentContainerStyle={{
                  justifyContent: "space-around",
                  flex: 1,alignItems:'center'
                }}
                horizontal={true}
              >
                <View style={{}}>
                  <TouchableOpacity>
                    {/* <Image
                      source={require("../../assets/IconDocuments.png")}
                      style={{
                        width: 80,
                        height: 80,
                        marginTop: 10,
                        alignSelf: "center",
                      }}
                      resizeMode="contain"
                    /> */}
                     <Image
                    style={{ width: 80, height: 80, marginTop:10, alignSelf:'center' }}
                    source={require("../../assets/IconUpload6.png")}
                  />
                    <Text allowFontScaling={false}>Docs/Certificates</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                  <Image
                    style={{ width: 80, height: 80, marginTop:10, alignSelf:'center' }}
                    source={require("../../assets/ByClient/IconPakinglist.png")} resizeMode='contain'
                  />
                    <Text allowFontScaling={false}>Paking List</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{ flex: 1 }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    marginVertical: 240,
                    backgroundColor: "white",
                    marginHorizontal: 40,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => !setModalVisible(!modalVisible)}
                  >
                    <Text allowFontScaling={false}>Address Here(Press me to close)</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <ScrollView
                contentContainerStyle={{
                  justifyContent: "space-around",
                  flex: 1,
                  marginTop: 25,alignItems:'center'
                }}
                horizontal={true}
              >
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/IconDocuments.png")}
                      style={{
                        width: 80,
                        height: 80,
                        marginTop: 10,
                        alignSelf: "center",
                      }}
                      resizeMode="contain"
                    />
                    <Text allowFontScaling={false} style={{textAlign:'center'}}>Where?</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ justifyContent: "flex-end" }}>
                  <TouchableOpacity style={{marginLeft:20}}>
                    <View style={{ width: 60, height: 60, alignSelf: "center", borderColor: '#000', borderWidth: 1 ,}}>
                      {inspection ?
                        <Image source={require('../../assets/check.png')} style={{flex: 1, width: undefined, height: undefined, resizeMode: 'contain'}}/>
                        :
                        <Image source={require('../../assets/cross.png')} style={{flex: 1, width: undefined, height: undefined, resizeMode: 'contain'}}/>
                      }
                    </View>
                    {/* <Checkbox
                   
                      style={{ width: 50, height: 50, alignSelf: "center" }}
                      //value={goodsInspection}
                      // disabled={false}
                      value={inspection}
                      // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /> */}
                    <Text allowFontScaling={false}>Inspection</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <Divider style={{ borderWidth: 0.5, marginVertical: 15 }} />


        </View>
      </ScrollView>

      <View>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => props.navigation.goBack()}
             >
              <Image source={require('../../assets/ByClient/BOTTOMBACK.png')} style={{width:20, height:20, marginHorizontal:10,alignSelf:'center' }} />
                  <Text
                    style={{
                      fontSize: 22,
                      alignSelf: "center",
                      color: "#9EBDB8" ,
                    }}allowFontScaling={false}
                  >
                    Back
                  </Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  color: Colors.text,
                }}
              >
                Next
              </Text>
              <Icon
                name="chevron-forward-outline"
                size={30}
                color={Colors.text}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingName: {
    color: Colors.headerBackground,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  document: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.headerBackground,
    fontSize: 20,
    paddingBottom:20
  },
});

export default PreviewSellLeather;
