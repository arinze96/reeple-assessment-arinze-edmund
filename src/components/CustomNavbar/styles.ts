import { StyleSheet } from "react-native";
import { width, height, GeneralPadding } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  backContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  title: { fontWeight: 'bold' },
  navIcons: { flexDirection: 'row', alignItems: 'center' }
});

export default styles;
