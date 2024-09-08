export type ButtonProps = {
    onPress: () => void;
    width: string;
    height: number;
    backgroundColor: any;
    titleColor: any;
    title: string;
    titleFontSize: number;
    borderRadius?: number;
    disabled?: boolean;
    loading?: boolean;
  };