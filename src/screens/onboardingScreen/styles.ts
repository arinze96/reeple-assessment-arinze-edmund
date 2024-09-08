import { StyleSheet } from "react-native";
import { width, height, GeneralPadding } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary[1000],
    justifyContent: "center",
  },
  activityIndicator: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: { width: width, height: height },
  detailsWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-between",
  },
  upperSection: {
    width: "100%",
    height: "10%",
    paddingHorizontal: GeneralPadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topLogoText: {
    color: colors.primary[10],
    fontSize: 30,
    fontFamily: "Katibeh",
  },
  loginText: { color: colors.primary[10] },
  middleSection: {
    width: "100%",
    height: "60%",
    paddingHorizontal: GeneralPadding,
    alignItems: "baseline",
    justifyContent: "center",
  },
  middleLogoText: {
    fontSize: 50,
    color: colors.primary[10],
    marginTop: 150,
    fontFamily: "Katibeh",
  },
  title: {
    fontSize: 25,
    color: colors.primary[10],
  },
  description: { color: colors.gray[300], marginTop: 10 },
  toggleModal:{
    width: "50%",
    justifyContent: "center",
    height: 30,
  },
  benefits: { color: colors.primary[500], marginTop: 10 },
  bottomSection: {
    width: "100%",
    height: "20%",
    paddingHorizontal: GeneralPadding,
    alignItems: "center",
  },
  agreement: {
    textAlign: "center",
    color: colors.primary[10],
    marginTop: 10,
    fontSize: 10,
  },
  terms: { color: colors.primary[400] },
  promotionalTerms: { color: colors.primary[400] },
  privacyPolicy: { color: colors.primary[400] },
  insured: { color: colors.primary[400], marginTop: 10 },
  logoContainer: { width: '40%', height: '40%' },
  logoStyles:{ width: '100%', height: '100%', borderRadius: 10 }
});

export default styles;
