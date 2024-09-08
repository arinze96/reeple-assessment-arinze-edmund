import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useCallback, useMemo } from "react";
import { FontAwesome, Feather } from "@expo/vector-icons"; // Feather icon set
import { CURRENCY_DATA } from "@/src/mock/currencyData";
import styles from "./styles";

type SelectCurrencyModalProps = {
  onSelectCurrency: (currency: any) => void;
  closeModal: () => void;
  baseCurrency?: string; // Pass the base currency abbreviation
};

const SelectCurrencyModal: React.FC<SelectCurrencyModalProps> = ({
  onSelectCurrency,
  closeModal,
  baseCurrency,
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // holds the searched country

  // Memoize filteredData to avoid unnecessary recalculations
  const filteredData = useMemo(() => {
    if (!searchTerm) return CURRENCY_DATA;
    return CURRENCY_DATA.filter((item) => {
      const itemData = `${item.currency} `;
      return itemData.indexOf(searchTerm) > -1;
    });
  }, [searchTerm]);

  const handleSearch = useCallback((text: string) => {
    setSearchTerm(text);
  }, []);

  const renderItem = useCallback(
    ({ item }: any) => {
      const isDisabled = item.abbreviation === baseCurrency;

      return (
        <TouchableOpacity
          onPress={() => {
            if (!isDisabled) {
              onSelectCurrency(item);
            }
          }}
          style={[
            styles.currencyTabContainer,
            isDisabled && { backgroundColor: "#d3d3d3" }, // Change background color if disabled
          ]}
          disabled={isDisabled} // Disable the touchable if it's the base currency
        >
          <View style={styles.currencyDetails}>
            <View style={styles.currencyDetailsContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: `${item.flag}`,
                  }}
                  resizeMode="cover"
                  style={styles.imageStyles}
                />
              </View>
              <Text style={styles.seperator}>|</Text>
              <Text style={styles.currency}>{item.abbreviation}</Text>
              <Text style={styles.currencyFullName}>{item.currency}</Text>
              {isDisabled && (
                <Text style={{ ...styles.currencyFullName, color: "red" }}>
                  Disabled
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [onSelectCurrency, baseCurrency]
  );

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.modalWrapper}>
        <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <FontAwesome name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search Currency"
            value={searchTerm}
            onChangeText={handleSearch}
            style={styles.searchBarStyles}
          />
        </View>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.currency}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={10}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SelectCurrencyModal;

