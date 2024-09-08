import React from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme";
import HomeScreen from "../screens/homeScreen";
import OnboardingScreen from "../screens/onboardingScreen";
import CommingSoon from "../screens/commingSoon";
import Network from "../screens/Network";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[1000],
        tabBarInactiveTintColor: colors.primary[10],
        tabBarStyle: {
          backgroundColor: colors.primary.offset,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              size={20}
              color={focused ? colors.primary[10] : colors.gray[50]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Forex"
        component={CommingSoon}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome
              name={focused ? "dollar" : "dollar"}
              size={20}
              color={focused ? colors.primary[10] : colors.gray[50]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Crypto"
        component={CommingSoon}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome
              name={focused ? "bitcoin" : "bitcoin"}
              size={20}
              color={focused ? colors.primary[10] : colors.gray[50]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Exchange"
        component={Network}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome5
              name={focused ? "exchange-alt" : "exchange-alt"}
              size={20}
              color={focused ? colors.primary[10] : colors.gray[50]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen
        component={OnboardingScreen}
        name="OnboardingScreen"
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        component={BottomTabNavigator}
        name="BottomTabNavigator"
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        component={Network}
        name="Network"
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};


const BaseStack = createNativeStackNavigator();
const BaseNavigator = () => {
  return (
    <BaseStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BaseStack.Screen
        component={RootNavigator}
        name="BaseNavigator"
        options={{
          headerShown: false,
        }}
      />
    </BaseStack.Navigator>
  );
};

export default BaseNavigator;
