import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, View, StyleSheet, Button } from "react-native";
import AddQRtoList from "../qr/AddQRtoList";
import * as ProductActions from "../../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const Camera = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(false);
  const dispatch = useDispatch();
  const scannedProduct = useSelector(state => state.product.scannedProduct);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    clearScannedProduct();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScannedData(data);
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    const prodId = data.split("/");
    console.log(prodId[0]);

    navigation.navigate("QRList", { prod: prodId[0] });
  };

  const clearScannedProduct = async () => {
    await dispatch(ProductActions.ClearSingleProduct());
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      {/* {scanned ? <AddQRtoList scannedData={scannedData} /> : null} */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </Container>
  );
};

export default Camera;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
`;
