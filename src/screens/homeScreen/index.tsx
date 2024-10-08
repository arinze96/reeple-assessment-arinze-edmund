import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  Feather,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { colors } from "@/src/theme";
import {
  useGetPairRateQuery,
} from "@/src/store/currencyRateApi";
import SelectCurrencyModal from "@/src/components/selectCurrencyModal";
import { errorToast, successToast } from "@/src/utils/toaster";
import { BASE_CURRENCY, TARGET_CURRENCY } from "@/src/constants";
import NetInfo from '@react-native-community/netinfo';


const HomeScreen = () => {
  const [baseAmount, setBaseAmount] = useState<any>(""); // this is the base currency amount
  const [convertAmount, setConvertAmount] = useState<any>(""); //this is the target currency amount
  const [fontSize, setFontSize] = useState<any>(30); //this state hold fontSize for adjustment of textInput text
  const [displayBaseModal, setDisplayBaseModal] = useState(false); //holds modal state for base currency modal
  const [displayConvertModal, setDisplayConvertModal] = useState(false); //hold modal state for convert currency modal
  const [isConnected, setIsConnected] = useState<any>(true); //this state holds the state of the internet connection
  const [baseCurrency, setBaseCurrency] = useState(BASE_CURRENCY); //this state holds the base default currency local data
  const [convertCurrency, setConvertCurrency] = useState(TARGET_CURRENCY); //this state holds the convert defsult currency local data


  // this function is used to grab and set base
  // currency and conver currency state data 
  const setCurrencyData = (item: any, type: "base" | "convert") => {
    if (type === "base") {
      setBaseCurrency(item);
      setDisplayBaseModal(false);
    } else if (type === "convert") {
      setConvertCurrency(item);
      setDisplayConvertModal(false);
    }
  };

  // this is an react query api request method for
  // fetching the exchange rate between two currencies
  const {
    data: pairRate,
    isLoading,
    refetch: refetchPairRate,
  } = useGetPairRateQuery({
    base: `${baseCurrency.abbreviation}`,
    convert: `${convertCurrency.abbreviation}`,
  });


  // the data fetched from the RTK query of the exchange rate method
  //above is processed inside this useEffect to become a number
  //and its also formatted properly

  useEffect(() => {
    refetchPairRate();
    if (pairRate?.conversion_rate && baseAmount) {
      const calculatedValue = (
        parseFloat(pairRate.conversion_rate) * parseInt(baseAmount)
      ).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setConvertAmount(calculatedValue);
    } else {
      setConvertAmount(0);
      setBaseAmount(0);
    }
  }, [baseAmount, pairRate]);

  useEffect(() => {
    if (baseCurrency || convertAmount) {
      setConvertAmount("");
    }
  }, [baseCurrency, convertCurrency]);


  // internet connect is checked here for its availability 
  useEffect(() => {

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected && state.isInternetReachable);
      if(!state.isConnected){
      errorToast("No Network Signal");
      }else{
        successToast("Network Signal Available");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
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

          <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyles}
              >

          {/* PAGE TITLE AND DESCRIPTION SECTION */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Convert Currency</Text>
            <Text style={styles.titleDescription}>
              Enter amount and enter currency to convert to
            </Text>
          </View>

          {/* BASE CURRENCY INPUT SECTION */}
          <View style={styles.baseCurrencyWrapper}>
            <View>
              <Text style={styles.label}>Select Base Currency</Text>
            </View>
            <View style={styles.baseCurrencyContainer}>
              <TouchableOpacity
                onPress={() => setDisplayBaseModal(true)}
                style={styles.selectCurrency}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: `${baseCurrency.flag}`,
                    }}
                    resizeMode="cover"
                    style={styles.imageStyles}
                  />
                </View>
                <Text style={styles.currency}>{baseCurrency.abbreviation}</Text>
                <Entypo
                  name="chevron-down"
                  size={24}
                  color={colors.gray[1000]}
                />
              </TouchableOpacity>

              <View style={styles.textInputContainer}>
                <TextInput
                  value={baseAmount}
                  placeholder="0.00"
                  style={{ ...styles.textInput, fontSize: fontSize }}
                  onChangeText={(item) => {
                    setBaseAmount(item ? parseFloat(item) : 0);
                  }}
                  maxLength={12} // Restricts the input to 12 characters
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          {/* CURRENCY EXCHANGE DETAILS */}
          <View style={styles.exchangeDetailContainer}>
            <View style={styles.exchangeDetails}>
              {isLoading ? (
                <>
                  <ActivityIndicator />
                </>
              ) : (
                <>
                  <Text style={styles.rate}>Exchange Rate: </Text>
                  <Text style={styles.base}>{baseCurrency.symbol} 1</Text>
                  <FontAwesome
                    name="arrows-h"
                    size={24}
                    color={colors.gray[300]}
                    style={styles.diffIcon}
                  />
                  <Text style={styles.toCurrency}>
                    {convertCurrency.symbol}{" "}
                    {pairRate?.conversion_rate.toLocaleString()}
                  </Text>
                </>
              )}
            </View>
          </View>

          {/* CONVERT CURRENCY INPUT SECTION */}
          <View style={styles.baseCurrencyWrapper}>
            <View>
              <Text style={styles.label}>Select Convert Currency</Text>
            </View>
            <View style={styles.baseCurrencyContainer}>
              <TouchableOpacity
                onPress={() => setDisplayConvertModal(true)}
                style={styles.selectCurrency}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: `${convertCurrency.flag}`,
                    }}
                    resizeMode="cover"
                    style={styles.imageStyles}
                  />
                </View>
                <Text style={styles.currency}>
                  {convertCurrency.abbreviation}
                </Text>
                <Entypo
                  name="chevron-down"
                  size={24}
                  color={colors.gray[1000]}
                />
              </TouchableOpacity>

              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="0.00"
                  value={convertAmount}
                  style={{ ...styles.textInput, color: colors.primary[1000] }}
                  onChangeText={(item) => {
                    setConvertAmount(item ? parseFloat(item) : 0);
                  }}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          {/* FETCH CURRENCY EXCHANGE BUTTON */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                if (!baseAmount || !convertAmount) {
                  errorToast("Enter Amount you Want To Exchange");
                } else {
                  refetchPairRate();
                }
              }}
              style={styles.button}
            >
              {isLoading ? (
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size={"small"}
                  color={colors.primary[10]}
                />
              ) : (
                <Text style={styles.buttonTitle}>Get Exchange Rate</Text>
              )}
            </TouchableOpacity>
          </View>

          </ScrollView>
        </SafeAreaView>

        {displayBaseModal && (
          <SelectCurrencyModal
            onSelectCurrency={(item) => {
              setCurrencyData(item, "base");
              setFontSize(30);
            }}
            closeModal={() => setDisplayBaseModal(false)}
          />
        )}

        {displayConvertModal && (
          <SelectCurrencyModal
            onSelectCurrency={(item) => {
              setCurrencyData(item, "convert");
              setFontSize(30);
            }}
            closeModal={() => setDisplayConvertModal(false)}
            baseCurrency={baseCurrency.abbreviation}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
