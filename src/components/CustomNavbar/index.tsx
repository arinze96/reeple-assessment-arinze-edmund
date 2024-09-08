import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import React from "react";
import Constants from "expo-constants";
import styles from "./styles";

type CustomNavbarProps = {
  goBack?: () => void;
  back_icon?: React.ReactNode;
  screen_title?: string;
  nav_icons?: React.ReactNode;
};

// CustomNavbar is a custom component for screen navigation and navigation icons
const CustomNavbar: React.FC<CustomNavbarProps> = ({
  goBack,
  back_icon,
  screen_title,
  nav_icons,
}) => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      
      style={styles.container}
    >
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={goBack}>{back_icon}</TouchableOpacity>
        <Text style={styles.title}>{screen_title}</Text>
      </View>
      <View style={styles.navIcons}>{nav_icons}</View>
    </View>
  );
};

export default CustomNavbar;
