export type BottomSheet = {
    lowerSnapPoint: string;
    heigherSnapPoint: string;
    children?: any;
    openModal?: () => void
    closeModal?: () => void
    backgroundComponent: any;
    data?: any;
  };