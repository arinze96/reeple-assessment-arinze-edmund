import React from "react";
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
  } from "react-native";
  
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
  
  type StatusBarProps = {
    backgroundColor: string;
    barStyle: any;
  };
  

  const CustomStatusBar: React.FC<StatusBarProps> = ({
    backgroundColor,
    barStyle,
  }) => {
    return (
      <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar
            translucent
            barStyle={barStyle}
            backgroundColor={backgroundColor}
          />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
    appBar: {
      backgroundColor: "#79B45D",
      height: APPBAR_HEIGHT,
    },
    content: {
      flex: 1,
      backgroundColor: "#33373B",
    },
  });
  
  export  default CustomStatusBar ;
 
  
 
  
  