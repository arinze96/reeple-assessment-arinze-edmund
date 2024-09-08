import { StyleSheet } from "react-native";
import { GeneralPadding, height, width } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageStyles:{ width: 150, height: 150 },
  title: { fontWeight: 'bold', fontSize: 18 },
  refreshButton: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
  }
});

export default styles;
