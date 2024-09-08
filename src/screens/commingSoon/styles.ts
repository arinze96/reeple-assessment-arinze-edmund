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
  imageStyles:{ flex: 1, justifyContent: "center", alignItems: "center" },
  image:{ width: 200, height: 200 },
});

export default styles;
