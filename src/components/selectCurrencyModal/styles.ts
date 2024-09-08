import { StyleSheet } from "react-native";
import { GeneralPadding, height, width } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    position: "absolute",
    justifyContent: "flex-end",
  },

  modalWrapper: {
    width: "100%",
    paddingHorizontal: GeneralPadding,
    backgroundColor: "#fff",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  closeIcon: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: GeneralPadding,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
  searchBarStyles: {
    width: "90%",
    height: "100%",
  },

  currencyTabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    marginTop: 12,
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
  },

  currencyDetails: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#e5e7eb",
  },

  currencyDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60%",
  },

  imageContainer: {
    width: "10%",
    height: "50%",
    marginRight: 5,
  },

  imageStyles: { width: "100%", height: "100%" },

  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    height: "100%",
    backgroundColor: "#e5e7eb",
  },

  seperator: { fontSize: 20, color: "gray", marginHorizontal: 10 },

  currency: { fontSize: 20, color: "gray" },

  currencyFullName: { fontSize: 16, color: colors.gray[1000], marginLeft: 10 },
});

export default styles;
