import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import NetInfo from '@react-native-community/netinfo';
import { errorToast } from "@/src/utils/toaster";


const Network = ({ navigation }: any) => {
  const [isConnected, setIsConnected] = useState<any>(true);

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

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Image
          source={require("../../../assets/images/network.gif")}
          style={styles.imageStyles}
          resizeMode="contain"
        />
        <Text style={styles.title}>No Internet Signal</Text>
        <TouchableOpacity
          onPress={() => {
            isConnected
              ? navigation.replace("OnboardingScreen")
              : errorToast("No Internet Signal");
          }}
          style={styles.refreshButton}
        >
          <Ionicons name="refresh" size={24} color="black" />
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default Network;
