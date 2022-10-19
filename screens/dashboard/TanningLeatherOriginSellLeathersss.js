import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { Button, Menu, Divider, Provider, TextInput } from "react-native-paper";
import Checkbox from "expo-checkbox";

import Colors from "../../constants/Colors";
import RegisterButton from "../../components/RegisterButton";

const TanningLeatherOriginSellLeathersss = (props) => {
  const [dataLoad, setDataLoaded] = useState(false);
  const [origin, setOrigin] = useState(undefined);
  const [selectedValue, setSelectedValue] = useState("Select Origin");
  const [apiLoader, setApiLoader] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = React.useState([]);
  const [selectedSurface, setSelectedSurface] = React.useState([]);
  const [visibleUnit, setVisibleUnit] = useState(false);
  const [visibleUnitSurface, setVisibleUnitSurface] = useState(false);
  const [visibleUnitTableRoll, setVisibleUnitTableRoll] = useState(false);
  const [visibleUnitLeather, setVisibleUnitLeather] = useState(false);
  const [VisibleSelection, setVisibleSelection] = useState(false);
  const [visiblePrice, setVisiblePrice] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("UM");
  const [selectedUnitSurface, setSelectedUnitSurface] = useState("UM");
  const [selectedUnitTableRoll, setSelectedUnitTableRoll] = useState("UM");
  const [selectedUnitLeather, setSelectedUnitLeather] = useState('UM');
  const [selectionUnit, setSelectionUnit] = useState("AB");
  const [selectedPrice, setSelectedPrice] = useState("UM");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBoxLeather, setToggleCheckBoxLeather] = useState(false);

  var productName=props.route.params.productName;
  var category=props.route.params.category;
  var subCategory=props.route.params.subCategory;
  var size=props.route.params.size;
  var leatherCondition=props.route.params.leatherCondition;
  var tanningLeather=props.route.params.tanningLeather;

  const data = [
    { id: "1", weight: "Min" },
    { id: "2", weight: "Max" },
    { id: "3", weight: "Average" },
  ];
  const dataSurface = [
    { id: "1", surface: "Min" },
    { id: "2", surface: "Max" },
    { id: "3", surface: "Average" },
  ];

  const [weight, setWeight] = useState(data);
  const [surface, setSurface] = useState(dataSurface);
  const [weightDropDown, setWeightDropDown] = useState(undefined);
  const [surfaceDropDown, setSurfaceDropDown] = useState(undefined);
  const [tableRollDropDown, setTableRollDropDown] = useState(undefined);
  const [leatherDropDown, setLeatherDropDown] = useState(undefined);
  const [priceDropDown, setPriceDropDown] = useState(undefined);
  const [selectionDropDown, setSelectionDropDown] = useState(undefined);

  useEffect(() => {
    let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllMeasurementUnits/ViewAllMeasurementUnits.php`;
    axios.get(webApiUrl).then((res) => {
      console.log("response=" + JSON.stringify(res.data));
      setWeightDropDown(res.data.measurement_units);
      //setSurfaceDropDown(res.data.measurement_units);
      //setTableRollDropDown(res.data.measurement_units);
      //setLeatherDropDown(res.data.measurement_units);
    });
  }, []);

  useEffect(() => {
    let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllSurfaceMeasurementUnits/ViewAllSurfaceMeasurementUnits.php`;
    axios.get(webApirUrl).then((res) => {
      setSurfaceDropDown(res.data.surface_measurement_units);
    });
  }, []);

  useEffect(() => {
    let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllSelectionMeasurementUnits/ViewAllSelectionMeasurementUnits.php`;
    axios.get(webApirUrl).then((res) => {
      setTableRollDropDown(res.data.selection_measurement_units);
      setLeatherDropDown(res.data.selection_measurement_units);
    });
  }, []);

  useEffect(() => {
    let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllSelectionPriceMeasurementUnits/ViewAllSelectionPriceMeasurementUnits.php`;
    axios.get(webApirUrl).then((res) => {
      setPriceDropDown(res.data.selection_price_measurement_units);
    });
  }, []);

  useEffect(() => {
    let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllSelectionTypeList/ViewAllSelectionTypeList.php`;
    axios.get(webApirUrl).then((res) => {
      setSelectionDropDown(res.data.Output);
    });
  }, []);

  const renderWeight = ({ item, index }) => {
    const { id, weight } = item;
    const isSelected = selected.filter((i) => i === weight).length > 0;
    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelected((prev) => prev.filter((i) => i !== weight));
          } else {
            setSelected((prev) => [...prev, weight]);
          }
        }}
        style={[
          styles.item,
          isSelected && {
            backgroundColor: Colors.buttonBackground,
            borderColor: Colors.buttonBackground,
          },
        ]}
      >
        <Text
          style={{
            color: isSelected ? "white" : "black",
            fontWeight: "600",
            fontSize: 14,
          }}allowFontScaling={false}
        >
          {weight}
        </Text>
      </TouchableOpacity>
    );
  };
  console.log("selected=" + selected);

  const renderSurface = ({ item, index }) => {
    const { id, surface } = item;
    const isSelected = selectedSurface.filter((i) => i === surface).length > 0;
    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedSurface((prev) => prev.filter((i) => i !== surface));
          } else {
            setSelectedSurface((prev) => [...prev, surface]);
          }
        }}
        style={[
          styles.item,
          isSelected && {
            backgroundColor: Colors.buttonBackground,
            borderColor: Colors.buttonBackground,
          },
        ]}
      >
        <Text
          style={{
            color: isSelected ? "white" : "black",
            fontWeight: "600",
            fontSize: 14,
          }}allowFontScaling={false}
        >
          {surface}
        </Text>
      </TouchableOpacity>
    );
  };

  //console.log('surface='+JSON.stringify(surface));
  console.log("selected surface=" + selectedSurface);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const openUnit = () => setVisibleUnit(true);
  const closeUnit = () => setVisibleUnit(false);
  const openUnitSurface = () => setVisibleUnitSurface(true);
  const closeUnitSurface = () => setVisibleUnitSurface(false);
  const openUnitTableRoll = () => setVisibleUnitTableRoll(true);
  const closeUnitTableRoll = () => setVisibleUnitTableRoll(false);
  const openUnitLeather = () => setVisibleUnitLeather(true);
  const closeUnitLeather = () => setVisibleUnitLeather(false);
  const openUnitPrice = () => setVisiblePrice(true);
  const closeUnitPrice = () => setVisiblePrice(false);
  const openSelection = () => setVisibleSelection(true);
  const closeSelection = () => setVisibleSelection(false);

  useEffect(async () => {
    if (dataLoad == false) {
      setApiLoader(true);
      let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/ViewAllCountryOrOrigin/ViewAllCountryOrOrigin.php`;
      axios.post(webApiUrl).then((res) => {
        setOrigin(res.data.Country_List);
        //console.log('res data='+JSON.stringify(res.data))
        setApiLoader(false);
        setDataLoaded(true);
      });
    }
  }, [origin]);

  // MULTIPLE ADDINPUT

  const [textValue, setTextValue] = useState("");
  const [numInputs, setNumInputs] = useState(1);
  const refInputs = useRef([textValue]);

  // const setInputValue = (index, value) => {
  //   const inputs = refInputs.current;
  //   inputs[index] = value;
  //   setTextValue(value);
  // };

  // const addInput = () => {
  //   refInputs.current.push("");
  //   setNumInputs((value) => value + 1);
  // };

  // const removeInput = (i) => {
  //   refInputs.current.splice(i, 1)[0];
  //   setNumInputs((value) => value - 1);
  // };

  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  //const [unitLeatherArray, setUnitLeatherArray]=useState("");
  const [numInputsTeam, setNumInputsTeam] = useState(1);
  const refInputsQuantity = useRef([quantity]);
  const refInputsPrice = useRef([price]);
  const refInputsQuantityUnit=useRef([selectedUnitLeather]);

  const setInputValueQuality = (index, value) => {
    const inputsQuality = refInputsQuantity.current;
    inputsQuality[index] = value;
    setQuantity(value);
  };

  const setInputValuePrice = (index, value) => {
    const inputsPrice = refInputsPrice.current;
    inputsPrice[index] = value;
    setPrice(value);
  };

  const setInputValueQuantityUnitArray=(index, value)=>{
    const inputsUnitQuantity=refInputsQuantityUnit.current;
    inputsUnitQuantity[index]=value;
    setSelectedUnitLeather(value);
  }

  const addInputTeam = () => {
    refInputsQuantity.current.push("");
    refInputsPrice.current.push("");
    refInputsQuantityUnit.current.push("");
    setNumInputsTeam((value) => value + 1);
  };

  const removeInputTeam = (i) => {
    refInputsQuantity.current.splice(i, 1)[0];
    refInputsPrice.current.splice(i, 1)[0];
    refInputsQuantityUnit.current.splice(i,1)[0];
    setNumInputsTeam((value) => value - 1);
  };

  const inputs = [];

  for (let i = 0; i < numInputs; i++) {
    inputs.push(
      <View key={i}>
        <View>
          <View>
            <Text allowFontScaling={false}>Selected Leathers</Text>
          </View>
          <TextInput
            //selectionColor={Colors.bgColor}
            //style={styles.textInputHighlightStyles}
            onChangeText={(value) => setInputValue(i, value)}
            value={refInputs.current[i]}allowFontScaling={false}maxFontSizeMultiplier={1}
          />
        </View>
      </View>
    );
  }

  const inputTeam = [];
  for (let j = 0; j < numInputsTeam; j++) {
    inputTeam.push(
      <View>
        <View key={j} style={{ marginTop: 20 }}>
          <View>
            <View>
              <Text allowFontScaling={false}>Quantity</Text>
            </View>
            <View style={{flexDirection:'row'}}><TextInput
              style={{ width: 120 }}
              mode="outlined"
              //selectionColor={Colors.bgColor}
              //style={styles.textInputHighlightStyles}
              value={refInputsQuantity.current[j]}
              onChangeText={(value) => setInputValueQuality(j, value)}allowFontScaling={false}maxFontSizeMultiplier={1}
            >{console.log('textinput='+JSON.stringify(refInputsQuantity))}</TextInput>
            <Menu
              visible={visibleUnitLeather}
              onDismiss={closeUnitLeather}
              anchor={
                <View>
                  <TouchableOpacity onPress={openUnitLeather}>
                    <Text allowFontScaling={false}>{selectedUnitLeather}</Text>
                    {/* {console.log('selected unit leather='+JSON.stringify(refInputsQuantityUnit))} */}
                    {/* <Text>{refInputsQuantityUnit.current[j]}</Text> */}
                  </TouchableOpacity>
                </View>
              }
            >
              {leatherDropDown != undefined
                ? leatherDropDown.map((value, i) => (
                    <Menu.Item
                      title={value.unit_code}
                      onPress={() => {
                        setInputValueQuantityUnitArray(j,value.unit_code);
                        closeUnitLeather();
                      }}
                      //key={i}
                    ></Menu.Item>
                  ))
                : null}
            </Menu></View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.viewBorder}>
            <View style={styles.textBoxHeadingHighlight}>
              <Text allowFontScaling={false}>
                Price
                <Text allowFontScaling={false}style={{ color: Colors.cancelButtonBg }}>*</Text>
              </Text>
            </View>
            <TextInput mode="outlined" style={{ width: 120 }}
              // selectionColor={Colors.bgColor}
              // style={styles.textInputHighlightStyles}
              value={refInputsPrice.current[j]}
              onChangeText={(value) => setInputValuePrice(j, value)}allowFontScaling={false}maxFontSizeMultiplier={1}
            ></TextInput>
          </View>
        </View>
      </View>
    );
  }

  //MULTIPLE INPUT END

  console.log("selected unit=" + selectedValue);
  return (
    <Provider>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        {apiLoader ? (
          <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            opacity: 1,
            zIndex: 5,
          }}
        >
          <Image
            source={require("../../assets/loader.jpg")}
            resizeMode="contain"
            resizeMethod="scale"
            style={{ width: 160, height: 160 }}
          />
        </View>
        ) : (
          <View style={{ marginHorizontal: 10, marginTop: 20, flex: 1 }}>
            <ScrollView>
              <View>
                <Text allowFontScaling={false} style={styles.heading}>
                  Origins, Quantities and Prices
                </Text>
                <View style={styles.menuView}>
                  <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    style={{ top: 50 }}
                    anchor={
                      <View style={styles.menuInsideView}>
                        <TouchableOpacity
                          onPress={openMenu}
                          style={styles.touchableOpacityMenu}
                        >
                          <Text allowFontScaling={false}
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {selectedValue}
                          </Text>
                          <Icon
                            style={{ textAlign: "right", flex: 1 }}
                            name="caret-down-outline"
                          />
                        </TouchableOpacity>
                      </View>
                    }
                  >
                    {origin != undefined
                      ? origin.map((value, i) => (
                          <Menu.Item
                            style={{ width: 180, marginHorizontal: 10 }}
                            title={value.country_name}
                            onPress={() => {
                              setSelectedValue(value.country_name);
                              closeMenu();
                            }}
                            key={i}
                          ></Menu.Item>
                        ))
                      : null}
                  </Menu>
                </View>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Divider style={{ borderWidth: 0.5, marginVertical: 15 }} />
                <Text allowFontScaling={false} style={styles.headingIndividual}>Weight Category</Text>
                <View style={{ flexDirection: "row" }}>
                  <FlatList
                    data={weight}
                    renderItem={renderWeight}
                    numColumns={3}
                    scrollEnabled={false}
                  />
                  <Menu
                    visible={visibleUnit}
                    onDismiss={closeUnit}
                    style={{ top: 180 }}
                    anchor={
                      <View style={styles.insideMenuView}>
                        <Text allowFontScaling={false} style={styles.insideMenuText}>UM</Text>
                        <TouchableOpacity
                          onPress={openUnit}
                          style={styles.insideMenuTouchableOpacity}
                        >
                          <Text allowFontScaling={false}
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {selectedUnit}
                          </Text >
                          <Icon
                            style={{ textAlign: "right", flex: 1 }}
                            name="caret-down-outline"
                          />
                        </TouchableOpacity>
                      </View>
                    }
                  >
                    {weightDropDown != undefined
                      ? weightDropDown.map((value, i) => (
                          <Menu.Item
                            style={{ width: 180 }}
                            title={value.unit_code}
                            onPress={() => {
                              setSelectedUnit(value.unit_code);
                              closeUnit();
                            }}
                            key={i}
                          ></Menu.Item>
                        ))
                      : null}
                  </Menu>
                </View>
                <Divider style={{ borderWidth: 0.5, marginVertical: 20 }} />
                <View>
                  <Text allowFontScaling={false} style={styles.headingIndividual}>Surface Category</Text>
                  <View style={{ flexDirection: "row" }}>
                    <FlatList
                      data={surface}
                      renderItem={renderSurface}
                      numColumns={3}
                      scrollEnabled={false}
                    />
                    <Menu
                      visible={visibleUnitSurface}
                      onDismiss={closeUnitSurface}
                      style={{ top: 300 }}
                      anchor={
                        <View style={styles.insideMenuView}>
                          <Text allowFontScaling={false} style={styles.insideMenuText}>UM</Text>
                          <TouchableOpacity
                            onPress={openUnitSurface}
                            style={styles.insideMenuTouchableOpacity}
                          >
                            <Text allowFontScaling={false}
                              style={{
                                textAlign: "left",
                              }}
                            >
                              {selectedUnitSurface}
                            </Text>
                            <Icon
                              style={{ textAlign: "right", flex: 1 }}
                              name="caret-down-outline"
                            />
                          </TouchableOpacity>
                        </View>
                      }
                    >
                      {surfaceDropDown != undefined
                        ? surfaceDropDown.map((value, i) => (
                            <Menu.Item
                              style={{ width: 180 }}
                              title={value.unit_code}
                              onPress={() => {
                                setSelectedUnitSurface(value.unit_code);
                                closeUnitSurface();
                              }}
                              key={i}
                            ></Menu.Item>
                          ))
                        : null}
                    </Menu>
                  </View>
                </View>
                <Divider style={{ borderWidth: 0.5, marginVertical: 20 }} />
                <View>
                  <Text allowFontScaling={false} style={styles.headingIndividual}>
                    Selections, Quantities and Prices
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text allowFontScaling={false} style={{ color: Colors.text, fontWeight: "500" }}>
                        Table Roll Leather
                      </Text>
                      <Checkbox
                        style={{ marginLeft: 10 }}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) =>
                          setToggleCheckBox(newValue)
                        }
                      />
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Text allowFontScaling={false} style={{ alignSelf: "center", marginRight: 20 }}>
                          Quantity
                        </Text>
                        <TextInput
                          mode="outlined"
                          label={"Quantity"}
                          style={{
                            width: 100,
                            height: 35,
                            backgroundColor: "white",
                          }}allowFontScaling={false}
                          activeOutlineColor={Colors.buttonBackground}
                          keyboardType="number-pad"maxFontSizeMultiplier={1}
                        ></TextInput>
                        <Menu
                          visible={visibleUnitTableRoll}
                          onDismiss={closeUnitTableRoll}
                          style={{ top: 470 }}
                          anchor={
                            <View
                              style={{
                                borderWidth: 1,
                                width: 80,
                                height: 30,
                                borderRadius: 6,
                                alignSelf: "center",
                                flex: 1,
                                marginLeft: 10,
                              }}
                            >
                              <Text
                                style={{
                                  bottom: 8,
                                  backgroundColor: "white",
                                  width: 25,
                                  fontSize: 12,
                                  left: 5,
                                }}allowFontScaling={false}
                              >
                                Size
                              </Text>
                              <TouchableOpacity
                                onPress={openUnitTableRoll}
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  flex: 1,
                                  marginHorizontal: 10,
                                  bottom: 5,
                                }}
                              >
                                <Text
                                  style={{
                                    textAlign: "left",
                                  }}allowFontScaling={false}
                                >
                                  {selectedUnitTableRoll}
                                </Text>
                                <Icon
                                  style={{ textAlign: "right", flex: 1 }}
                                  name="caret-down-outline"
                                />
                              </TouchableOpacity>
                            </View>
                          }
                        >
                          {tableRollDropDown != undefined
                            ? tableRollDropDown.map((value, i) => (
                                <Menu.Item
                                  style={{ width: 180 }}
                                  title={value.unit_code}
                                  onPress={() => {
                                    setSelectedUnitTableRoll(value.unit_code);
                                    closeUnitTableRoll();
                                  }}
                                  key={i}
                                ></Menu.Item>
                              ))
                            : null}
                        </Menu>
                      </View>
                    </View>

                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Text allowFontScaling={false} style={{ alignSelf: "center", marginRight: 20 }}>
                          Price
                        </Text>
                        <TextInput
                          mode="outlined"
                          label={"Price"}
                          style={{
                            width: 100,
                            height: 35,
                            backgroundColor: "white",
                          }}allowFontScaling={false}
                          activeOutlineColor={Colors.buttonBackground}
                          keyboardType="number-pad"maxFontSizeMultiplier={1}
                        />

                        <Menu
                          visible={visiblePrice}
                          onDismiss={closeUnitPrice}
                          style={{ top: 530 }}
                          anchor={
                            <View
                              style={{
                                borderWidth: 1,
                                width: 80,
                                height: 30,
                                borderRadius: 6,
                                alignSelf: "center",
                                flex: 1,
                                marginLeft: 10,
                              }}
                            >
                              <Text
                                style={{
                                  bottom: 8,
                                  backgroundColor: "white",
                                  width: 25,
                                  fontSize: 12,
                                  left: 5,
                                }}allowFontScaling={false}
                              >
                                Size
                              </Text>
                              <TouchableOpacity
                                onPress={openUnitPrice}
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  flex: 1,
                                  marginHorizontal: 10,
                                  bottom: 5,
                                }}
                              >
                                <Text
                                  style={{
                                    textAlign: "left",
                                  }}allowFontScaling={false}
                                >
                                  {selectedPrice}
                                </Text>
                                <Icon
                                  style={{ textAlign: "right", flex: 1 }}
                                  name="caret-down-outline"
                                />
                              </TouchableOpacity>
                            </View>
                          }
                        >
                          {priceDropDown != undefined
                            ? priceDropDown.map((value, i) => (
                                <Menu.Item
                                  style={{ width: 180 }}
                                  title={value.unit_code}
                                  onPress={() => {
                                    setSelectedPrice(value.unit_code);
                                    closeUnitPrice();
                                  }}
                                  key={i}
                                ></Menu.Item>
                              ))
                            : null}
                        </Menu>
                      </View>
                    </View>

                    <Divider style={{ borderWidth: 0.5, marginVertical: 15 }} />

                    {/* <View>{inputs}</View> */}

                    <View>{inputTeam}</View>
                    <View style={{ marginTop: 10, alignSelf: "center" }}>
                      <RegisterButton title={"add"} onPress={addInputTeam} />
                      <RegisterButton
                        title={"remove"}
                        onPress={removeInputTeam}
                      />
                    </View>

                    {/* <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 30,
                    }}
                  >
                    <Text style={{ color: Colors.text, fontWeight: "500" }}>
                      Selected Leather
                    </Text>
                    <Checkbox
                      style={{ marginLeft: 10 }}
                      disabled={false}
                      value={toggleCheckBoxLeather}
                      onValueChange={(newValue) =>
                        setToggleCheckBoxLeather(newValue)
                      }
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ alignSelf: "center", marginRight: 20 }}>
                        Quantity
                      </Text>
                      <TextInput
                        mode="outlined"
                        label={"Quantity"}
                        style={{
                          width: 100,
                          height: 35,
                          backgroundColor: "white",
                        }}
                        activeOutlineColor={Colors.buttonBackground}
                        keyboardType="number-pad"
                      ></TextInput>
                      <Menu
                        visible={visibleUnitLeather}
                        onDismiss={closeUnitLeather}
                        style={{ top: 580 }}
                        anchor={
                          <View
                            style={{
                              borderWidth: 1,
                              width: 80,
                              height: 30,
                              borderRadius: 6,
                              alignSelf: "center",
                              flex: 1,
                              marginLeft: 10,
                            }}
                          >
                            <Text
                              style={{
                                bottom: 8,
                                backgroundColor: "white",
                                width: 25,
                                fontSize: 12,
                                left: 5,
                              }}
                            >
                              Size
                            </Text>
                            <TouchableOpacity
                              onPress={openUnitLeather}
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                flex: 1,
                                marginHorizontal: 10,
                                bottom: 5,
                              }}
                            >
                              <Text
                                style={{
                                  textAlign: "left",
                                }}
                              >
                                {selectedUnitLeather}
                              </Text>
                              <Icon
                                style={{ textAlign: "right", flex: 1 }}
                                name="caret-down-outline"
                              />
                            </TouchableOpacity>
                          </View>
                        }
                      >
                        {leatherDropDown != undefined
                          ? leatherDropDown.map((value, i) => (
                              <Menu.Item
                                style={{ width: 180 }}
                                title={value.unit_code}
                                onPress={() => {
                                  setSelectedUnitLeather(value.unit_code);
                                  closeUnitLeather();
                                }}
                                key={i}
                              ></Menu.Item>
                            ))
                          : null}
                      </Menu>
                    </View>
                  </View> */}
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => props.navigation.goBack()}
            >
              <Icon name="chevron-back-outline" size={30} color={Colors.text} />
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  color: Colors.text,
                }}allowFontScaling={false}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View
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
              onPress={() =>
                props.navigation.navigate("SubstanceThicknessSellLeather",{productName:productName, category:category, subCategory:subCategory, size:size,leatherCondition:leatherCondition, tanningLeather:tanningLeather})
              }
            >
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  color: Colors.text,
                }}allowFontScaling={false}
              >
                Next
              </Text>
              <Icon
                name="chevron-forward-outline"
                size={30}
                color={Colors.text}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    //padding: 8,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 8,
    margin: 2,
    width: 100,
    height: 40,
    borderWidth: 0.5,
    //marginHorizontal: 5,
  },
  loader: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    opacity: 1,
    zIndex: 5,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.text,
    fontWeight: "600",
  },
  menuView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  menuInsideView: {
    borderWidth: 2,
    width: 200,
    height: 40,
    borderRadius: 6,
  },
  touchableOpacityMenu: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  headingIndividual: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: Colors.text,
    marginBottom: 10,
  },
  insideMenuView: {
    borderWidth: 1,
    width: 80,
    height: 40,
    borderRadius: 6,
  },
  insideMenuText: {
    bottom: 8,
    backgroundColor: "white",
    width: 20,
    fontSize: 12,
    left: 5,
  },
  insideMenuTouchableOpacity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
    bottom: 5,
  },
});

export default TanningLeatherOriginSellLeathersss;
