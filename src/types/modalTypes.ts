export type ModalProp = {
  modalVisible?: boolean;
  title?: string;
  transactionDetails?: any;
  displayQuestion?: "flex" | "none" | undefined;
  firstAnswer?: string;
  secondAnswer?: string;
  thirdAnswer?: string;
  fourthAnswer?: string;
  fifthAnswer?: string;
  sixthAnswer?: string;
  onPress?: () => void;
  navigation?: any
};
