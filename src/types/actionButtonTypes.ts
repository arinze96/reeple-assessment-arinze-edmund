export type ActionButtonProps = {
  onPress: () => void;
  iconName:
    | undefined
    | "arrow-down-outline"
    | "arrow-up-outline"
    | "swap-horizontal-outline"
    | "rocket-outline"
    | "trending-down-outline"
    | "trending-up-outline";
  iconColor: string;
  iconTitle: string;
};

