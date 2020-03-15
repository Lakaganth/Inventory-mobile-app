import React from "react";
import styled from "styled-components";
import {
  Dimensions,
  FlatList,
  Animated,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  let scrollX = new Animated.Value(0);

  const renderIllustrations = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <IllustrationContainer>
            <Image source={item.source} resizeMode="contain" />
            <ImageText>{item.text}</ImageText>
          </IllustrationContainer>
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: scrollX } }
          }
        ])}
      />
    );
  };

  const renderImageSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);

    return (
      <StepContainer>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <AnimatedStep
              key={index}
              style={[
                { width: 5, height: 5, borderRadius: 5, marginHorizontal: 2.5 },
                { opacity }
              ]}
            />
          );
        })}
      </StepContainer>
    );
  };

  return (
    <Container>
      <ScrollView>
        <Title>Your Business made</Title>
        <ColorText>Simple.</ColorText>
        <ImageContainer>
          {renderIllustrations()}
          {renderImageSteps()}
        </ImageContainer>

        <Button onPress={() => navigation.navigate("login")}>
          <Text>SignIn</Text>
        </Button>
        <Button
          style={{ backgroundColor: "#ee4540" }}
          onPress={() => navigation.navigate("register")}
        >
          <Text>SignUp</Text>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default WelcomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #24273c;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight + 20
    : 0}px;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 32px;
  color: white;
  /* width: 250px; */
`;

const ColorText = styled.Text`
  text-align: center;
  font-size: 32px;
  color: #ff6363;
`;

const ImageContainer = styled.View`
  /* align-self: center; */
  position: relative;
`;

const Button = styled.TouchableOpacity`
  width: 200px;
  height: 55px;
  background-color: #801336;
  margin: 10px;
  align-self: center;
  border-radius: 10px;
  elevation: 6;
`;
const Text = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;
  padding-top: 10px;
`;

const IllustrationContainer = styled.View`
  flex-direction: column;
  /* margin-bottom: 50px; */
`;

const Image = styled.Image`
  width: ${width}px;
  height: ${height / 2}px;
`;
const ImageText = styled.Text`
  color: white;
  font-size: 18px;
  align-self: center;
`;

const StepContainer = styled.View`
  /* position: absolute;
  bottom: -10px;
  right: 160px; */
  z-index: 10;
  flex-direction: row;
  align-self: center;
`;

const Step = styled.View`
  margin-top: 10px;

  background-color: white;
  flex: none;
  /* z-index: 10; */
`;
const AnimatedStep = Animated.createAnimatedComponent(Step);
const illustrations = [
  {
    id: 1,
    source: require("../../assets/images/welcome/1store.png"),
    text: "Add your products to App"
  },
  {
    id: 2,
    source: require("../../assets/images/welcome/2check.png"),
    text: "Make inventory count"
  },
  {
    id: 3,
    source: require("../../assets/images/welcome/3createlist.png"),
    text: "Create your shopping list"
  },
  {
    id: 4,
    source: require("../../assets/images/welcome/4storelist.png"),
    text: "Save time and grow your business"
  }
];
