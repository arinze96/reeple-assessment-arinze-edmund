import {
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/theme";

const CommingSoon = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* NAVBAR SECTION */}
      <View style={styles.navBarContainer}>
        <Feather name="menu" size={24} color={colors.gray[1000]} />
        <View style={styles.navBarLeft}>
          <Feather name="search" size={24} color={colors.gray[1000]} />
          <View style={styles.notificationContainer}>
            <View style={styles.notificationCountContainer}>
              <Text style={styles.notificationCount}>3</Text>
            </View>
            <MaterialIcons
              name="notifications-none"
              size={30}
              color={colors.gray[1000]}
            />
          </View>
        </View>
      </View>

      <View style={styles.imageStyles}>
        <Image
          source={require("../../../assets/images/coming_soon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default CommingSoon;
