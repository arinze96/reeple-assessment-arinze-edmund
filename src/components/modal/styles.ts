import { StyleSheet } from "react-native";
import { height } from "@src/constants/dimensions";
import { colors } from "@/src/theme";
import { normalize } from "@/src/utils/helpers";

const styles = StyleSheet.create({
    innerContainer: {
      height: height,
      width: '100%',
      paddingHorizontal: 10,
      backgroundColor: colors.primary[1400],
      marginBottom: 200
    },
    animationContainer: {
      width: '100%',
      backgroundColor: 'pink',
      height: '100%',
    },
    successText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: normalize(20),
      color: 'red',
    },
    closeButton: {
      paddingHorizontal: normalize(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      height: '10%',
    },
    closeButtonContainer:{
        width: "100%",
        height: "10%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      iconContainer:{
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      },
    closeText: {
      color: 'pink',
      fontSize: normalize(20),
    },
    title:{
        color: colors.primary[10],
        fontSize: 30,
        marginTop: normalize(30),
        fontWeight: "400",
      },
      question:{
        color: colors.primary[10],
        fontSize: 16,
        marginTop: 10,
        textAlign: 'justify',
        fontWeight: "400",
      },
      answer:{
        color: colors.primary[10],
        fontSize: 13,
        marginTop: 30,
        textAlign: 'justify',
        fontWeight: "400",
        lineHeight: 20
      },
      contentContainerStyles: {
        flexGrow: 1,
      },
  
});

export default styles;
