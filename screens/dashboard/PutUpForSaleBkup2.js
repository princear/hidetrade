import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { TextInput } from "react-native-paper";

import Colors from "../../constants/Colors";
import ButtonComp from "../../components/ButtonComp";
import SpinView from "../../components/Spin";

const PutUpForSale = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [id, setId] = useState();
  const [otherAddress, setOtherAddress] = useState("");
  const [address, setAddress] = useState();
  const [user_type, setUser_type] = useState(undefined);
  const [apiLoader, setApiLoader] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(async () => {
    if (dataLoaded == false) {
      setApiLoader(true)
      setId(await AsyncStorage.getItem("user_id"));
      setUser_type(await AsyncStorage.getItem("user_type"));
      let webApiUrl = `https://refuel.site/projects/hidetrade/APIs/ViewSingleUserList/ViewSingleUserList.php?user_type=${user_type}&user_id=${id}`;
      axios
        .get(webApiUrl)
        .then((res) => {
          setAddress(res.data.User_Details[0].address);
          console.log("console=" + res.data.User_Details[0].address);
          setDataLoaded(true);
          setApiLoader(false)
        })
        .catch((err) => {
          console.log("inside error");
        });
    }
  }, [address, user_type, id]);
  console.log("id in put up for sale=" + JSON.stringify(id));
  console.log("address in put for sale=" + JSON.stringify(address));

  var productName = props.route.params.productName;
  var category = props.route.params.category;
  var subCategory = props.route.params.subCategory;
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
  var origin = props.route.params.origin;
  var continent=props.route.params.continent
  var Specification=props.route.params.Specification

  var weightCatType = props.route.params.weightCatType;
  var weightCatType2 = props.route.params.weightCatType2;
  var weightCatType3 = props.route.params.weightCatType3;
  var weightSelectionSize = props.route.params.weightSelectionSize;
  var surfaceCatType = props.route.params.surfaceCatType;
  var surfaceCatType2 = props.route.params.surfaceCatType2;
  var surfaceCatType3 = props.route.params.surfaceCatType3;
  var surfaceSelectionSize = props.route.params.surfaceSelectionSize;

  var labelTableRoll = props.route.params.labelTableRoll;
  var quantityTableRoll = props.route.params.quantityTableRoll;
  var priceTableRoll = props.route.params.priceTableRoll;
  var labelTablePrice = props.route.params.labelTablePrice;

  var labelSelection = props.route.params.labelSelection;
  var quantitySelection = props.route.params.quantitySelection;
  var labelSelectionUnit = props.route.params.labelSelectionUnit;
  var priceSelection = props.route.params.priceSelection;
  var labelSelectionPrice = props.route.params.labelSelectionPrice;

  var labelSelection2 = props.route.params.labelSelection2;
  var quantitySelection2 = props.route.params.quantitySelection2;
  var labelSelectionUnit2 = props.route.params.labelSelectionUnit2;
  var priceSelection2 = props.route.params.priceSelection2;
  var labelSelectionPrice2 = props.route.params.labelSelectionPrice2;

  var labelSelection3 = props.route.params.labelSelection3;
  var quantitySelection3 = props.route.params.quantitySelection3;
  var labelSelectionUnit3 = props.route.params.labelSelectionUnit3;
  var priceSelection3 = props.route.params.priceSelection3;
  var labelSelectionPrice3 = props.route.params.labelSelectionPrice3;

  var labelSelection4 = props.route.params.labelSelection4;
  var quantitySelection4 = props.route.params.quantitySelection4;
  var labelSelectionUnit4 = props.route.params.labelSelectionUnit4;
  var priceSelection4 = props.route.params.priceSelection4;
  var labelSelectionPrice4 = props.route.params.labelSelectionPrice4;

  var labelSelection5 = props.route.params.labelSelection5;
  var quantitySelection5 = props.route.params.quantitySelection5;
  var labelSelectionUnit5 = props.route.params.labelSelectionUnit5;
  var priceSelection5 = props.route.params.priceSelection5;
  var labelSelectionPrice5 = props.route.params.labelSelectionPrice5;

  var labelSelection6 = props.route.params.labelSelection6;
  var quantitySelection6 = props.route.params.quantitySelection6;
  var labelSelectionUnit6 = props.route.params.labelSelectionUnit6;
  var priceSelection6 = props.route.params.priceSelection6;
  var labelSelectionPrice6 = props.route.params.labelSelectionPrice6;

  var labelSelection7=props.route.params.labelSelection7;
  var quantitySelection7=props.route.params.quantitySelection7;
  var labelSelectionUnit7=props.route.params.labelSelectionUnit7;
  var priceSelection7=props.route.params.priceSelection7;
  var labelSelectionPrice7=props.route.params.labelSelectionPrice7;

  var images = props.route.params.images;
  var document = props.route.params.document;

  var leatherColor = props.route.params.leatherColor;

  console.log('continent',continent)

  console.log("thckness of substance=" + substanceThickness);

  console.log("images from picture upload=" + images[0]);

  console.log("document base 64 in put up for sale=" + document.length);

  let arr = [];
  let final;

  useEffect(async () => {
    
      if (leatherCondition == "Raw") {
        arr = [
          {
            product_title: productName,
            sub_category: subCategory[0],
            inspection_possible: goodsInspection[0],
            logged_in_user_id: id,
            lastInfo: lastInfo,
            product_brand: origin,
            continents:continent,
            Specification:Specification,
            weightCatType: weightCatType,
            weightCatType2: weightCatType2,
            weightCatType3: weightCatType3,
            weightSelectionSize: weightSelectionSize,
            surfaceCatType: surfaceCatType,
            surfaceCatType2: surfaceCatType2,
            surfaceCatType3: surfaceCatType3,
            surfaceSelectionSize: surfaceSelectionSize,
            // product_number: 12,
            // product_price: "4578.98",
            tableRollLeatherQty: quantityTableRoll,
            tableRollLeatherQtySelection: labelTableRoll,
            tableRollLeatherPrice: priceTableRoll,
            tableRollLeatherPriceUnit: labelTablePrice,
            where_are_leathers_comp_address:
              toggleCheckBox == true ? address : null,
            where_are_leathers_other_address:
              toggleCheckBox2 == true && otherAddress != null
                ? otherAddress
                : null,
          },
        ];
        const arr3 = leatherCondition.map((value) => ({
          ["multi_category"]: value,
        }));
        const arr4 = category.map((value) => ({ ["leather_shape"]: value }));
        const arr5 = preservationType.map((value) => ({
          ["preservation"]: value,
        }));
        const arr6 = size.map((value) => ({ ["product_multi_sizes"]: value }));
        const arr7 = trim.map((value) => ({ ["wannasellleather_val"]: value }));
        const arr8 = flay.map((value) => ({ ["Flay_Leather"]: value }));
        const arr9 = rawDefects.map((value) => ({ ["rawdefects_val"]: value }));
        const arr10 = hairLeather.map((value) => ({
          ["haveleathertype_val"]: value,
        }));
        const arr11 = color.map((value) => ({ ["productcolor_val"]: value }));
        const arr12 = certificate.map((value) => ({
          ["productcertificates_val"]: value,
        }));
        const arr13 = kindOfPacking.map((value) => ({
          ["productpakingarrange_val"]: value,
        }));
        const arr14 = kindOfShipment.map((value) => ({
          ["productshipmentarrange_val"]: value,
        }));
        // const arr15 =
        //   labelSelection == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection,
        //           selection_qty: quantitySelection,
        //           selection_qty_unit: labelSelectionUnit,
        //           selection_price: priceSelection,
        //           selection_price_unit: labelSelectionPrice,
        //         },
        //       ];
        // const arr16 =
        //   labelSelection2 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection2,
        //           selection_qty: quantitySelection2,
        //           selection_qty_unit: labelSelectionUnit2,
        //           selection_price: priceSelection2,
        //           selection_price_unit: labelSelectionPrice2,
        //         },
        //       ];
        // const arr17 =
        //   labelSelection3 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection3,
        //           selection_qty: quantitySelection3,
        //           selection_qty_unit: labelSelectionUnit3,
        //           selection_price: priceSelection3,
        //           selection_price_unit: labelSelectionPrice3,
        //         },
        //       ];
        // const arr18 =
        //   labelSelection4 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection4,
        //           selection_qty: quantitySelection4,
        //           selection_qty_unit: labelSelectionUnit4,
        //           selection_price: priceSelection4,
        //           selection_price_unit: labelSelectionPrice4,
        //         },
        //       ];
        // const arr19 =
        //   labelSelection5 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection5,
        //           selection_qty: quantitySelection5,
        //           selection_qty_unit: labelSelectionUnit5,
        //           selection_price: priceSelection5,
        //           selection_price_unit: labelSelectionPrice5,
        //         },
        //       ];
        // const arr20 =
        //   labelSelection6 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection6,
        //           selection_qty: quantitySelection6,
        //           selection_qty_unit: labelSelectionUnit6,
        //           selection_price: priceSelection6,
        //           selection_price_unit: labelSelectionPrice6,
        //         },
        //       ];
        // const arr23 =
        //   labelSelection7 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection7,
        //           selection_qty: quantitySelection7,
        //           selection_qty_unit: labelSelectionUnit7,
        //           selection_price: priceSelection7,
        //           selection_price_unit: labelSelectionPrice7,
        //         },
        //       ];
        const arr21 = images.map((value) => ({ ["pimage"]: value }));
        const arr22 = document.map((value) => ({ ["pdocument"]: value }));
        
        final = arr3.concat(
          arr4,
          arr5,
          arr6,
          arr7,
          arr8,
          arr9,
          arr10,
          arr11,
          arr12,
          arr13,
          arr14,
          // arr15,
          // arr16,
          // arr17,
          // arr18,
          // arr19,
          // arr20,
          arr21,
          arr22, 
          // arr23
        );
        // final1 = arr.push(final);
        // console.log("Raw=" + JSON.stringify(arr));
   
      } else if (
        leatherCondition == "Pickled" ||
        leatherCondition == "Tanned"
      ) {
        arr = [
          {
            product_title: productName,
            sub_category: subCategory[0],
            inspection_possible: goodsInspection[0],
            weightCatType: weightCatType,
            weightCatType2: weightCatType2,
            weightCatType3: weightCatType3,
            weightSelectionSize: weightSelectionSize,
            surfaceCatType: surfaceCatType,
            surfaceCatType2: surfaceCatType2,
            surfaceCatType3: surfaceCatType3,
            surfaceSelectionSize: surfaceSelectionSize,
            logged_in_user_id: id,
            lastInfo: lastInfo,
            product_brand: origin,
            continents:continent,
            Specification:Specification,
            thiknessType: substanceThickness[0],
            thinkessFrom: fromValue,
            thicknessTo: toValue,
            // product_number: 12,
            // product_price: "4578.98",
            tableRollLeatherQty: quantityTableRoll,
            tableRollLeatherQtySelection: labelTableRoll,
            tableRollLeatherPrice: priceTableRoll,
            tableRollLeatherPriceUnit: labelTablePrice,
            Product_Destination: destination,
            where_are_leathers_comp_address:
              toggleCheckBox == true ? address : null,
            where_are_leathers_other_address:
              toggleCheckBox2 == true && otherAddress != null
                ? otherAddress
                : null,
          },
        ];
        const arr1 = tanningLeather.map((value) => ({
          ["tanningLeathers"]: value,
        }));
        const arr2 = leatherCondition.map((value) => ({
          ["multi_category"]: value,
        }));
        // const arr3 =
        //   labelSelection == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection,
        //           selection_qty: quantitySelection,
        //           selection_qty_unit: labelSelectionUnit,
        //           selection_price: priceSelection,
        //           selection_price_unit: labelSelectionPrice,
        //         },
        //       ];
        // const arr4 =
        //   labelSelection2 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection2,
        //           selection_qty: quantitySelection2,
        //           selection_qty_unit: labelSelectionUnit2,
        //           selection_price: priceSelection2,
        //           selection_price_unit: labelSelectionPrice2,
        //         },
        //       ];
        // const arr5 =
        //   labelSelection3 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection3,
        //           selection_qty: quantitySelection3,
        //           selection_qty_unit: labelSelectionUnit3,
        //           selection_price: priceSelection3,
        //           selection_price_unit: labelSelectionPrice3,
        //         },
        //       ];
        // const arr6 =
        //   labelSelection4 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection4,
        //           selection_qty: quantitySelection4,
        //           selection_qty_unit: labelSelectionUnit4,
        //           selection_price: priceSelection4,
        //           selection_price_unit: labelSelectionPrice4,
        //         },
        //       ];
        // const arr7 =
        //   labelSelection5 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection5,
        //           selection_qty: quantitySelection5,
        //           selection_qty_unit: labelSelectionUnit5,
        //           selection_price: priceSelection5,
        //           selection_price_unit: labelSelectionPrice5,
        //         },
        //       ];
        // const arr8 =
        //   labelSelection6 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection6,
        //           selection_qty: quantitySelection6,
        //           selection_qty_unit: labelSelectionUnit6,
        //           selection_price: priceSelection6,
        //           selection_price_unit: labelSelectionPrice6,
        //         },
        //       ];
        //       const arr19 =
        //       labelSelection7 == null
        //         ? null
        //         : [
        //             {
        //               selection: labelSelection7,
        //               selection_qty: quantitySelection7,
        //               selection_qty_unit: labelSelectionUnit7,
        //               selection_price: priceSelection7,
        //               selection_price_unit: labelSelectionPrice7,
        //             },
        //           ];
        const arr9 = trim.map((value) => ({ ["wannasellleather_val"]: value }));
        const arr10 = flay.map((value) => ({ ["Flay_Leather"]: value }));
        const arr11 = rawDefects.map((value) => ({
          ["rawdefects_val"]: value,
        }));
        const arr12 = hairLeather.map((value) => ({
          ["haveleathertype_val"]: value,
        }));
        const arr13 = color.map((value) => ({ ["productcolor_val"]: value }));
        const arr14 = certificate.map((value) => ({
          ["productcertificates_val"]: value,
        }));
        const arr15 = kindOfPacking.map((value) => ({
          ["productpakingarrange_val"]: value,
        }));
        const arr16 = kindOfShipment.map((value) => ({
          ["productshipmentarrange_val"]: value,
        }));
        const arr17 = images.map((value) => ({ ["pimage"]: value }));
        const arr18 = document.map((value) => ({ ["pdocument"]: value }));

        final = arr1.concat(
          arr2,
          // arr3,
          // arr4,
          // arr5,
          // arr6,
          // arr7,
          // arr8,
          arr9,
          arr10,
          arr11,
          arr12,
          arr13,
          arr14,
          arr15,
          arr16,
          arr17,
          arr18, 
          // arr19
        );
        // let final1;
        // final1 = arr.push(final);
        // console.log("Pickled and tanned=" + JSON.stringify(arr));
       
      } else if (
        leatherCondition == "Crust" ||
        leatherCondition == "Finished"
      ) {
        arr = [
          {
            sub_category: subCategory[0],
            other_sub_category: "", //"Crust type",
            origin: "1",
            continents: continent,
            Specification:Specification,
            product_title: productName,
            product_title_itelian: "",//"Prod-1",
            selection_choice:"",// "Nice",
            where_are_leathers_comp_address:
              toggleCheckBox == true ? address : null,
            where_are_leathers_other_address:
              toggleCheckBox2 == true && otherAddress != null
                ? otherAddress
                : null,
            inspection_possible: goodsInspection[0],
            product_desc: "", //"Nice product",
            product_keywords: "", //"Nggggggggice product",
            product_language: "English",
            logged_in_user_id: id,
            needExpert: "yes",
            weightCatType: weightCatType,
            weightCatType2: weightCatType2,
            weightCatType3: weightCatType3,
            weightSelectionSize: weightSelectionSize,
            surfaceCatType: surfaceCatType,
            surfaceCatType2: surfaceCatType2,
            surfaceCatType3: surfaceCatType3,
            surfaceSelectionSize: surfaceSelectionSize,
            tableRollLeatherQty: quantityTableRoll,
            tableRollLeatherQtySelection: labelTableRoll,
            tableRollLeatherPrice: priceTableRoll,
            tableRollLeatherPriceUnit: labelTablePrice,
            selectionQtyPrice: "", //"45",
            Price: "", //"345.00",
            Qty: "", //"33",
            thiknessType: substanceThickness[0],
            thinkessFrom: fromValue,
            thinknessTo: toValue,
            lastInfo:  lastInfo,
            goodsInspected: "", //"Yes",
            addProductType: "", //"Good quality",
            Others_Tanning_Leathers_val: "",
            Other_wannaSellLeather_val: "",
            Other_FlayLeatherF_val: "",
            Other_rawDefects_val: "",
            other_HaveLeatherType_val: "",
            Other_whichColor_val: "",
            leather_color: "", //"Blue",
            Other_certificates_val: "",
            Other_pakingArrange_val: "",
            Other_shipmentArrange_val: "",
            Product_Destination: destination,
            Other_Product_Destination: "",//"Room Furniture",
            Selected_Leathers: "",//"Yes",
            created_date: ""//"2022-03-02"




            // product_title: productName,
            // sub_category: subCategory[0],
            // inspection_possible: goodsInspection[0],
            // logged_in_user_id: id,
            // lastInfo: lastInfo,
            // product_brand: origin,
            // continents:continent,
            // weightCatType: weightCatType,
            // weightCatType2: weightCatType2,
            // weightCatType3: weightCatType3,
            // weightSelectionSize: weightSelectionSize,
            // surfaceCatType: surfaceCatType,
            // surfaceCatType2: surfaceCatType2,
            // surfaceCatType3: surfaceCatType3,
            // surfaceSelectionSize: surfaceSelectionSize,
            // thiknessType: substanceThickness[0],
            // thinkessFrom: fromValue,
            // thinknessTo: toValue,
            // // product_number: 12,
            // // product_price: "4578.98",
            // tableRollLeatherQty: quantityTableRoll,
            // tableRollLeatherQtySelection: labelTableRoll,
            // tableRollLeatherPrice: priceTableRoll,
            // tableRollLeatherPriceUnit: labelTablePrice,
            // Product_Destination: destination,
            // where_are_leathers_comp_address:
            //   toggleCheckBox == true ? address : null,
            // where_are_leathers_other_address:
            //   toggleCheckBox2 == true && otherAddress != null
            //     ? otherAddress
            //     : null,
            // leatherColor: leatherColor,



          },
        ];
        const arr1 = tanningLeather.map((value) => ({
          ["tanningLeathers"]: value,
        }));
        const arr2 = leatherCondition.map((value) => ({
          ["multi_category"]: value,
        }));
        // const arr3 =
        //   labelSelection == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection,
        //           selection_qty: quantitySelection,
        //           selection_qty_unit: labelSelectionUnit,
        //           selection_price: priceSelection,
        //           selection_price_unit: labelSelectionPrice,
        //         },
        //       ];
        // const arr4 =
        //   labelSelection2 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection2,
        //           selection_qty: quantitySelection2,
        //           selection_qty_unit: labelSelectionUnit2,
        //           selection_price: priceSelection2,
        //           selection_price_unit: labelSelectionPrice2,
        //         },
        //       ];
        // const arr5 =
        //   labelSelection3 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection3,
        //           selection_qty: quantitySelection3,
        //           selection_qty_unit: labelSelectionUnit3,
        //           selection_price: priceSelection3,
        //           selection_price_unit: labelSelectionPrice3,
        //         },
        //       ];
        // const arr6 =
        //   labelSelection4 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection4,
        //           selection_qty: quantitySelection4,
        //           selection_qty_unit: labelSelectionUnit4,
        //           selection_price: priceSelection4,
        //           selection_price_unit: labelSelectionPrice4,
        //         },
        //       ];
        // const arr7 =
        //   labelSelection5 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection5,
        //           selection_qty: quantitySelection5,
        //           selection_qty_unit: labelSelectionUnit5,
        //           selection_price: priceSelection5,
        //           selection_price_unit: labelSelectionPrice5,
        //         },
        //       ];
        // const arr8 =
        //   labelSelection6 == null
        //     ? null
        //     : [
        //         {
        //           selection: labelSelection6,
        //           selection_qty: quantitySelection6,
        //           selection_qty_unit: labelSelectionUnit6,
        //           selection_price: priceSelection6,
        //           selection_price_unit: labelSelectionPrice6,
        //         },
        //       ];
        //       const arr19 =
        //       labelSelection7 == null
        //         ? null
        //         : [
        //             {
        //               selection: labelSelection7,
        //               selection_qty: quantitySelection7,
        //               selection_qty_unit: labelSelectionUnit7,
        //               selection_price: priceSelection7,
        //               selection_price_unit: labelSelectionPrice7,
        //             },
        //           ];
        const arr9 = trim.map((value) => ({ ["wannasellleather_val"]: value }));
        const arr10 = flay.map((value) => ({ ["Flay_Leather"]: value }));
        const arr11 = rawDefects.map((value) => ({
          ["rawdefects_val"]: value,
        }));
        const arr12 = hairLeather.map((value) => ({
          ["haveleathertype_val"]: value,
        }));
        const arr13 = color.map((value) => ({ ["productcolor_val"]: value }));
        const arr14 = certificate.map((value) => ({
          ["productcertificates_val"]: value,
        }));
        const arr15 = kindOfPacking.map((value) => ({
          ["productpakingarrange_val"]: value,
        }));
        const arr16 = kindOfShipment.map((value) => ({
          ["productshipmentarrange_val"]: value,
        }));
        const arr17 = images.map((value) => ({ ["pimage"]: value }));
        const arr18 = document.map((value) => ({ ["pdocument"]: value }));

        final = arr1.concat(
          arr2,
          // arr3,
          // arr4,
          // arr5,
          // arr6,
          // arr7,
          // arr8,
          arr9,
          arr10,
          arr11,
          arr12,
          arr13,
          arr14,
          arr15,
          arr16,
          arr17,
          arr18, 
          // arr19
        );
        // let final1;
        // final1 = arr.push(final);
        // console.log("Crust and finished=" + JSON.stringify(arr));
        
      }
    
  }, [arr]);

  console.log("final outside useEffect=" + JSON.stringify(arr));

  //const arr = [{ productName: productName, category: category[0] }];

  // const putUpForSale=async()=>{
  //   let webApiUrl=`https://refuel.site/projects/hidetrade/APIs/AddProduct/AddProductWithLoopData.php`;
  //   console.log('array inside function='+JSON.stringify(await arr));
  //   let final;
  //   final=await arr;
  //   console.log('final for put up for sale='+JSON.stringify(final))
  // }

  let callSubmit = 0
  const putUpForSaleSubmit = (param1, param2, param3, param4, param5) => {
    console.log("🚀 ~ file: PutUpForSale.js ~ line 690 ~ putUpForSaleSubmit ~ param1", param1)
    setApiLoader(true);
    if(!labelTableRoll) {
      const sec1 =   param1  == null
          ? null
          : [
              {
                selection: param1,
                selection_qty: param2,
                selection_qty_unit: param3,
                selection_price: param4,
                selection_price_unit: param5,
              },
            ];
      const final2 = final.concat(sec1)
      const arr1 = [...arr]
      const final1 = arr1.push(final2) 
      // console.log("🚀 ~ file: PutUpForSale.js ~ line 704 ~ putUpForSaleSubmit ~ arr1", JSON.stringify(arr1))
      
      callSubmit++
      callAPIURL(arr1, param1)
    }else if(labelTableRoll){
      const final2 = arr.push(final)
      callAPIURL(arr, null)
    }

    // if(labelSelection2) {
    //   const sec2 =   labelSelection2 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection2,
    //             selection_qty: quantitySelection2,
    //             selection_qty_unit: labelSelectionUnit2,
    //             selection_price: priceSelection2,
    //             selection_price_unit: labelSelectionPrice2,
    //           },
    //         ];
    //   const final2 = final.concat(sec2)
    //   const arr2 = [...arr]
    //   const final1 = arr2.push(final2) 
    //   callAPIURL(arr2)
    // }

    // if(labelSelection3) {
    //   const sec3 =   labelSelection3 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection3,
    //             selection_qty: quantitySelection3,
    //             selection_qty_unit: labelSelectionUnit3,
    //             selection_price: priceSelection3,
    //             selection_price_unit: labelSelectionPrice3,
    //           },
    //         ];
    //   const final2 = final.concat(sec3)
    //   const arr3 = [...arr]
    //   const final1 = arr3.push(final2) 
    //   callAPIURL(arr3)
    // }

    // if(labelSelection4) {
    //   const sec4 =   labelSelection4 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection4,
    //             selection_qty: quantitySelection4,
    //             selection_qty_unit: labelSelectionUnit4,
    //             selection_price: priceSelection4,
    //             selection_price_unit: labelSelectionPrice4,
    //           },
    //         ];
    //   const final2 = final.concat(sec4)
    //   const arr4 = [...arr]
    //   const final1 = arr4.push(final2) 
    //   callAPIURL(arr4)
    // }

    // if(labelSelection5) {
    //   const sec5 =   labelSelection5 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection5,
    //             selection_qty: quantitySelection5,
    //             selection_qty_unit: labelSelectionUnit5,
    //             selection_price: priceSelection5,
    //             selection_price_unit: labelSelectionPrice5,
    //           },
    //         ];
    //   const final2 = final.concat(sec5)
    //   const arr5 = [...arr]
    //   const final1 = arr5.push(final2) 
    //   callAPIURL(arr5)
    // }

    // if(labelSelection6) {
    //   const sec6 =   labelSelection6 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection6,
    //             selection_qty: quantitySelection6,
    //             selection_qty_unit: labelSelectionUnit6,
    //             selection_price: priceSelection6,
    //             selection_price_unit: labelSelectionPrice6,
    //           },
    //         ];
    //   const final2 = final.concat(sec6)
    //   const arr6 = [...arr]
    //   const final1 = arr6.push(final2) 
    //   callAPIURL(arr6)
    // }

    // if(labelSelection7) {
    //   const sec7 =   labelSelection7 == null
    //       ? null
    //       : [
    //           {
    //             selection: labelSelection7,
    //             selection_qty: quantitySelection7,
    //             selection_qty_unit: labelSelectionUnit7,
    //             selection_price: priceSelection7,
    //             selection_price_unit: labelSelectionPrice7,
    //           },
    //         ];
    //   const final2 = final.concat(sec7)
    //   const arr7 = [...arr]
    //   const final1 = arr7.push(final2) 
    //   callAPIURL(arr7)
    // }
  };

  const callAPIURL = async (arrFinal, param) =>{
    
    if(param || labelTableRoll){
      console.log(`[${leatherCondition}] inside use call back = ${JSON.stringify(arrFinal)}  & param is ${param}`);
      // let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/AddProduct/AddProductWithLoopData.php`;
      let webApirUrl = `https://refuel.site/projects/hidetrade/APIs/AddProduct/AddProductWithLoopData_Phase2.php`;
    
      await axios
        .post(webApirUrl, arrFinal)
        .then((res) => {
          // console.log(
          //   `[${leatherCondition}] api response for put up for sale= ${JSON.stringify(res.data)}`
          // );
          if(callSubmit == 1){
            putUpForSaleSubmit(labelSelection2, quantitySelection2,labelSelectionUnit2, priceSelection2, labelSelectionPrice2 )
          }else if(callSubmit == 2){
            putUpForSaleSubmit(labelSelection3, quantitySelection3,labelSelectionUnit3, priceSelection3, labelSelectionPrice3 )
          }else if(callSubmit == 3){
            putUpForSaleSubmit(labelSelection4, quantitySelection4,labelSelectionUnit4, priceSelection4, labelSelectionPrice4 )
          }else if(callSubmit == 4){
            putUpForSaleSubmit(labelSelection5, quantitySelection5,labelSelectionUnit5, priceSelection5, labelSelectionPrice5 )
          }else if(callSubmit == 5){
            putUpForSaleSubmit(labelSelection6, quantitySelection6,labelSelectionUnit6, priceSelection6, labelSelectionPrice6 )
          }else if(callSubmit == 6){
            putUpForSaleSubmit(labelSelection7, quantitySelection7,labelSelectionUnit7, priceSelection7, labelSelectionPrice7 )
          }else{
            Alert.alert("", res.data.Message, [
            {
              text: "Ok",
              style: "cancel",
              onPress: () => props.navigation.navigate("Home"),
            },
          ]);
          setApiLoader(false);
          }
        })
        .catch((err) => console.log(err));
    }else{
      if(callSubmit == 1){
        putUpForSaleSubmit(labelSelection2, quantitySelection2,labelSelectionUnit2, priceSelection2, labelSelectionPrice2 )
      }else if(callSubmit == 2){
        putUpForSaleSubmit(labelSelection3, quantitySelection3,labelSelectionUnit3, priceSelection3, labelSelectionPrice3 )
      }else if(callSubmit == 3){
        putUpForSaleSubmit(labelSelection4, quantitySelection4,labelSelectionUnit4, priceSelection4, labelSelectionPrice4 )
      }else if(callSubmit == 4){
        putUpForSaleSubmit(labelSelection5, quantitySelection5,labelSelectionUnit5, priceSelection5, labelSelectionPrice5 )
      }else if(callSubmit == 5){
        putUpForSaleSubmit(labelSelection6, quantitySelection6,labelSelectionUnit6, priceSelection6, labelSelectionPrice6 )
      }else if(callSubmit == 6){
        putUpForSaleSubmit(labelSelection7, quantitySelection7,labelSelectionUnit7, priceSelection7, labelSelectionPrice7 )
      }else{
        Alert.alert("", "Save successful", [
        {
          text: "Ok",
          style: "cancel",
          onPress: () => props.navigation.navigate("Home"),
        },
      ]);
      setApiLoader(false);
      }
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {apiLoader ? (
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
        //     source={require("../../assets/loader.jpg")}
        //     resizeMode="contain"
        //     resizeMethod="scale"
        //     style={{ width: 100, height: 100, marginBottom: 10 }}
        //   />
        //   <ActivityIndicator size={"large"} color="red" />
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
            <Text
              style={{
                ...styles.textHeading,
                fontSize: 24,
                fontWeight: "bold",
                color: Colors.headerBackground,
              }}allowFontScaling={false}
            >
              Location and Documents
            </Text>
            <Text allowFontScaling={false}style={styles.textHeading}>Where are the leathers?</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <Text allowFontScaling={false}style={{ color: Colors.text, fontWeight: "500" }}>
                In the tannery address
              </Text>
              <Checkbox
                style={{ marginLeft: 23 }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => {
                  setToggleCheckBox(newValue);
                  setToggleCheckBox2(!newValue);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <Text allowFontScaling={false}style={{ color: Colors.text, fontWeight: "500" }}>
                In a different address
              </Text>
              <Checkbox
                style={{ marginLeft: 30 }}
                disabled={false}
                value={toggleCheckBox2}
                onValueChange={(newValue) => {
                  setToggleCheckBox2(newValue);
                  setToggleCheckBox(!newValue);
                }}
              />
            </View>
            {toggleCheckBox2 && (
              <View>
                <TextInput
                  value={otherAddress}
                  onChangeText={(value) => setOtherAddress(value)}
                  mode="outlined"
                  style={{ maxHeight: 70 }}
                  multiline={true}allowFontScaling={false}maxFontSizeMultiplier={1}
                />
              </View>
            )}
            {/* <Divider style={{ borderWidth: 0.25, marginVertical: 15 }} /> */}

            <View style={{ marginVertical: 30 }}>
              <Text
                style={{
                  ...styles.textHeading,
                  fontWeight: "bold",
                  marginBottom: 40,
                  color: Colors.headerBackground,
                }}allowFontScaling={false}
              >
                Uploads
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("Pictures", {
                        productName: productName,
                        category: category,
                        subCategory: subCategory,
                        size: size,
                        leatherCondition: leatherCondition,
                        preservationType: preservationType,
                        destination: destination,
                        trim: trim,
                        flay: flay,
                        rawDefects: rawDefects,
                        hairLeather: hairLeather,
                        color: color,
                        tanningLeather: tanningLeather,
                        substanceThickness: substanceThickness,
                        fromValue: fromValue,
                        toValue: toValue,
                        certificate: certificate,
                        kindOfPacking: kindOfPacking,
                        kindOfShipment: kindOfShipment,
                        lastInfo: lastInfo,
                        goodsInspection: goodsInspection,
                        origin: origin,
                        continent:continent,
                        Specification:Specification,
                        weightCatType: weightCatType,
                        weightCatType2: weightCatType2,
                        weightCatType3: weightCatType3,
                        weightSelectionSize: weightSelectionSize,

                        surfaceCatType: surfaceCatType,
                        surfaceCatType2: surfaceCatType2,
                        surfaceCatType3: surfaceCatType3,
                        surfaceSelectionSize: surfaceSelectionSize,
                        images: images,
                        document: document,

                        labelTableRoll: labelTableRoll,
                        quantityTableRoll: quantityTableRoll,
                        priceTableRoll: priceTableRoll,
                        labelTablePrice: labelTablePrice,

                        labelSelection: labelSelection,
                        quantitySelection: quantitySelection,
                        labelSelectionUnit: labelSelectionUnit,
                        labelSelectionPrice: labelSelectionPrice,
                        priceSelection: priceSelection,

                        labelSelection2: labelSelection2,
                        quantitySelection2: quantitySelection2,
                        labelSelectionUnit2: labelSelectionUnit2,
                        labelSelectionPrice2: labelSelectionPrice2,
                        priceSelection2: priceSelection2,

                        labelSelection3: labelSelection3,
                        quantitySelection3: quantitySelection3,
                        labelSelectionUnit3: labelSelectionUnit3,
                        labelSelectionPrice3: labelSelectionPrice3,
                        priceSelection3: priceSelection3,

                        labelSelection4: labelSelection4,
                        quantitySelection4: quantitySelection4,
                        labelSelectionUnit4: labelSelectionUnit4,
                        labelSelectionPrice4: labelSelectionPrice4,
                        priceSelection4: priceSelection4,

                        labelSelection5: labelSelection5,
                        quantitySelection5: quantitySelection5,
                        labelSelectionUnit5: labelSelectionUnit5,
                        labelSelectionPrice5: labelSelectionPrice5,
                        priceSelection5: priceSelection5,

                        labelSelection6: labelSelection6,
                        quantitySelection6: quantitySelection6,
                        labelSelectionUnit6: labelSelectionUnit6,
                        labelSelectionPrice6: labelSelectionPrice6,
                        priceSelection6: priceSelection6,
                      })
                    }
                  >
                    <Image
                      style={{ width: 80, height: 80 }}
                      source={require("../../assets/IconUpload3.png")}
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: "500",
                        alignSelf: "center",
                      }}allowFontScaling={false}
                    >
                      Pictures
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("Document Upload", {
                        productName: productName,
                        category: category,
                        subCategory: subCategory,
                        size: size,
                        leatherCondition: leatherCondition,
                        preservationType: preservationType,
                        destination: destination,
                        trim: trim,
                        flay: flay,
                        rawDefects: rawDefects,
                        hairLeather: hairLeather,
                        color: color,
                        tanningLeather: tanningLeather,
                        substanceThickness: substanceThickness,
                        fromValue: fromValue,
                        toValue: toValue,
                        certificate: certificate,
                        kindOfPacking: kindOfPacking,
                        kindOfShipment: kindOfShipment,
                        lastInfo: lastInfo,
                        goodsInspection: goodsInspection,
                        origin: origin,
                        continent:continent,
                        Specification:Specification,
                        weightCatType: weightCatType,
                        weightCatType2: weightCatType2,
                        weightCatType3: weightCatType3,
                        weightSelectionSize: weightSelectionSize,

                        surfaceCatType: surfaceCatType,
                        surfaceCatType2: surfaceCatType2,
                        surfaceCatType3: surfaceCatType3,
                        surfaceSelectionSize: surfaceSelectionSize,
                        images: images,
                        document: document,

                        labelTableRoll: labelTableRoll,
                        quantityTableRoll: quantityTableRoll,
                        priceTableRoll: priceTableRoll,
                        labelTablePrice: labelTablePrice,

                        labelSelection: labelSelection,
                        quantitySelection: quantitySelection,
                        labelSelectionUnit: labelSelectionUnit,
                        labelSelectionPrice: labelSelectionPrice,
                        priceSelection: priceSelection,

                        labelSelection2: labelSelection2,
                        quantitySelection2: quantitySelection2,
                        labelSelectionUnit2: labelSelectionUnit2,
                        labelSelectionPrice2: labelSelectionPrice2,
                        priceSelection2: priceSelection2,

                        labelSelection3: labelSelection3,
                        quantitySelection3: quantitySelection3,
                        labelSelectionUnit3: labelSelectionUnit3,
                        labelSelectionPrice3: labelSelectionPrice3,
                        priceSelection3: priceSelection3,

                        labelSelection4: labelSelection4,
                        quantitySelection4: quantitySelection4,
                        labelSelectionUnit4: labelSelectionUnit4,
                        labelSelectionPrice4: labelSelectionPrice4,
                        priceSelection4: priceSelection4,

                        labelSelection5: labelSelection5,
                        quantitySelection5: quantitySelection5,
                        labelSelectionUnit5: labelSelectionUnit5,
                        labelSelectionPrice5: labelSelectionPrice5,
                        priceSelection5: priceSelection5,

                        labelSelection6: labelSelection6,
                        quantitySelection6: quantitySelection6,
                        labelSelectionUnit6: labelSelectionUnit6,
                        labelSelectionPrice6: labelSelectionPrice6,
                        priceSelection6: priceSelection6,
                      })
                    }
                  >
                    <Image
                      style={{ width: 80, height: 80 }}
                      source={require("../../assets/IconUpload6.png")}
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: "500",
                        alignSelf: "center",
                      }}allowFontScaling={false}
                    >
                      Documents
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 25,
                }}
              >
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Packing List")}
                  >
                    <Image
                      style={{ width: 80, height: 80 }}
                      source={require("../../assets/ByClient/IconPakinglist.png")} resizeMode='contain'
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: "500",
                        alignSelf: "center",
                      }}allowFontScaling={false}
                    >
                      Packing List
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("Preview", {
                        productName: productName,
                        category: category,
                        subCategory: subCategory,
                        size: size,
                        leatherCondition: leatherCondition,
                        tanningLeather:
                          tanningLeather != "" ? tanningLeather : null,
                        substanceThickness: substanceThickness,
                        fromValue: fromValue,
                        toValue: toValue,
                        destination: destination,
                        trim: trim,
                        flay: flay,
                        rawDefects: rawDefects,
                        hairLeather: hairLeather,
                        color: color,
                        continent:continent,
                        Specification:Specification,
                        certificate: certificate,
                        kindOfPacking: kindOfPacking,
                        kindOfShipment: kindOfShipment,
                        lastInfo: lastInfo,
                        goodsInspection: goodsInspection,
                        preservationType:
                          preservationType != "" ? preservationType : null,
                        images: images,
                      })
                    }
                  >
                    <Image
                      style={{ width: 80, height: 80 }}
                      resizeMode="contain"
                      source={require("../../assets/IconDocuments.png")}
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: "500",
                        alignSelf: "center",
                      }}allowFontScaling={false}
                    >
                      Preview
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginHorizontal: 30, marginTop: 30 }}>
                <ButtonComp
                  title={"Put up for sale!"}
                  onPress={() => putUpForSaleSubmit(labelSelection, quantitySelection,labelSelectionUnit, priceSelection, labelSelectionPrice)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      <View>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => props.navigation.goBack()}
          >
            <Image source={require('../../assets/ByClient/BOTTOMBACK.png')} style={{width:20, height:20, marginHorizontal:10,alignSelf:'center' }} />
            <Text allowFontScaling={false}
              style={{ fontSize: 22, alignSelf: "center", color: "#9EBDB8" , }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    color: Colors.text,
    fontWeight: "500",
    marginBottom: 10,
  },
});

export default PutUpForSale;
