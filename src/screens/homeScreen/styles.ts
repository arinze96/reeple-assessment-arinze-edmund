import { StyleSheet } from "react-native";
import { GeneralPadding, height, width } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },

  navBarContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: GeneralPadding,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  navBarLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  notificationContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationCountContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary.offset,
    position: "absolute",
    zIndex: 200,
    top: -5,
    left: 12,
  },

  notificationCount: {
    fontWeight: "bold",
    color: colors.primary[10],
  },

  contentContainerStyles: {
    flexGrow: 1,
  },

  titleContainer: {
    width: "100%",
    height: 80,
    paddingHorizontal: GeneralPadding,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  titleDescription: {
    color: "gray",
    fontSize: 18,
    marginTop: 5,
  },

  baseCurrencyWrapper: {
    width: "100%",
    height: 150,
    paddingHorizontal: GeneralPadding,
    marginTop: 30,
  },

  baseCurrencyContainer: {
    width: "100%",
    height: 80,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    flexDirection: "row",
  },

  label: { marginVertical: 15, color: colors.gray[1000], fontSize: 18 },

  selectCurrency: {
    width: "40%",
    height: "100%",
    backgroundColor: colors.gray[100],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: "25%",
    height: "40%",
    marginRight: 5,
  },

  textInputContainer: {
    width: "60%",
    height: "100%",
  },

  textInput: {
    width: "100%",
    height: "100%",
    color: "gray",
    paddingHorizontal: GeneralPadding,
    textAlign: "right",
  },

  imageStyles: { width: "100%", height: "100%" },

  currency: { fontSize: 18, paddingHorizontal: 5 },

  exchangeDetailContainer: {
    width: "100%",
    height: 50,
    marginTop: 30,
    paddingHorizontal: GeneralPadding,
  },

  exchangeDetails: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: GeneralPadding,
    backgroundColor: colors.gray[100],
  },

  rate: { color: "gray", fontSize: 17 },

  base: { fontWeight: "bold", fontSize: 17 },

  diffIcon: { marginHorizontal: 7 },

  toCurrency: { fontWeight: "bold", fontSize: 17 },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: GeneralPadding,
    marginTop: 10,
  },

  button: {
    width: "100%",
    height: 60,
    backgroundColor: colors.primary.offset,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  activityIndicator: { marginLeft: 5 },

  buttonTitle:{ color: colors.primary[10], fontSize: 18 }
});

export default styles;
