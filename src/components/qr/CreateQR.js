import React, { useState } from "react";
import styled from "styled-components";
import QRCode from "react-native-qrcode-svg";
import { Image } from "react-native";

import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";

const CreateQR = ({ route }) => {
  const product = {
    id: route.params.product.id,
    pname: route.params.product.pname,
    unitPrice: route.params.product.unitPrice,
    pack: route.params.product.pack,
    size: route.params.product.size
  };

  const [resultQR, setResultQR] = useState("");

  return (
    <Container>
      <Title>QR CODE</Title>
      <QRBOX>
        <QRCode
          value={[product.id.toString(), "/", product.pname.toString()]}
          size={200}
          getRef={qr => setResultQR(qr)}
        />
      </QRBOX>
      {/* <Button onPress={handleDownload}>
        <ButtonText>Download</ButtonText>
      </Button> */}
    </Container>
  );
};

export default CreateQR;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
`;

const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
`;

const QRBOX = styled.View`
  align-self: center;
  margin-top: 45px;
`;

const Button = styled.TouchableOpacity`
  /* background-color: white; */
  /* width: 50px;
  height: 50px; */
  padding-top: 20px;
  padding-right: 20px;
  border-radius: 50px;
  align-self: flex-end;
  align-self: center;
`;
const ButtonText = styled.Text`
  color: #ff6363;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;
