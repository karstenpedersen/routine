import React from "react";
import { Tabs } from "expo-router";
import TabBarIcon from "@/components/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Routines",
          tabBarIcon: ({ color }) => <TabBarIcon name="check" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create-routine"
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
          href: "(modals)/create-routine"
        }}
      />
      <Tabs.Screen
        name="insight"
        options={{
          tabBarLabel: "Insight",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
