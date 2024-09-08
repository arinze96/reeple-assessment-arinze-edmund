import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import CustomStatusBar from "@src/components/customStatusBar";
import { colors } from "@src/theme";
import { useFonts } from "expo-font";
import Button from "@/src/components/button";
import styles from "./styles";
import NetInfo from "@react-native-community/netinfo";
import Modal from "@/src/components/modal";

const OnboardingScreen = ({ navigation }: any) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isConnected, setIsConnected] = useState<any>(true);

  let [fontsLoaded] = useFonts({
    Katibeh: require("../../../assets/fonts/Katibeh-Regular.ttf"),
  });

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected && state.isInternetReachable);
    });

    // Cleanup the subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.primary.main} />
      </View>
    );
  } else {
    return (
      <>
        <CustomStatusBar
          backgroundColor={colors.primary[1000]}
          barStyle={"light"}
        />
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/gifs/hexwave.gif")}
            style={styles.imageBackground}
          >
            <View style={styles.detailsWrapper}>
              <View style={styles.upperSection}></View>
              <View style={styles.middleSection}>
                <Text style={styles.middleLogoText}>Reeple Finance</Text>
                <Text style={styles.title}>
                  Experience the Forex Exchange cutting-edge Technology
                  technology.
                </Text>
                <Text style={styles.description}>
                  The app provides an intuitive interface for selecting
                  currencies and displays real-time conversion rates.
                </Text>
              </View>
              <View style={styles.bottomSection}>
                <Button
                  onPress={() => {
                    isConnected
                      ? navigation.replace("BottomTabNavigator")
                      : navigation.replace("Network");
                  }}
                  backgroundColor={colors.primary.offset}
                  width={"100%"}
                  height={60}
                  title={"Get Started"}
                  titleColor={colors.primary[10]}
                  titleFontSize={18}
                />
                <Text style={styles.agreement}>
                  By clicking "Get Started" you are agreeing to the{" "}
                  <Text style={styles.terms}>Terms of Service</Text>{" "}
                  <Text> </Text>
                  <Text style={styles.promotionalTerms}>
                    Promotional Terms and Conditions
                  </Text>{" "}
                  and <Text style={styles.privacyPolicy}>Privacy Policy</Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
          <Modal
            modalVisible={isModalVisible}
            displayQuestion="none"
            title="FortLink.AI investing offers several advantages, including:"
            firstAnswer="The app provides an intuitive interface for selecting currencies and displays real-time conversion rates.
            "
          />
        </View>
      </>
    );
  }
};

export default OnboardingScreen;
