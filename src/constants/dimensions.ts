import { Dimensions, Platform } from "react-native";

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

const GeneralPadding = 20

export const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

export {
    width, height, GeneralPadding
}