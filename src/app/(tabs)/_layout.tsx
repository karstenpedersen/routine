import React from "react";
import { Tabs } from "expo-router";
import TabBarIcon from "@/components/TabBarIcon";
import { CheckIcon, PlusIcon, UserIcon } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Routines",
          tabBarIcon: ({ size, color }) => (
            <CheckIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-routine"
        options={{
          headerShown: false,
          tabBarLabel: "New",
          tabBarIcon: ({ size, color }) => (
            <PlusIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insight"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <UserIcon size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
