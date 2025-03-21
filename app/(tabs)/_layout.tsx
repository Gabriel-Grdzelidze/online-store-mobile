import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HomeIcon , ListBulletIcon } from 'react-native-heroicons/solid';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Active tab color
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2b2a29', 
          borderTopWidth: 0,
          height: 60, 
          position: 'absolute',
          ...Platform.select({
            ios: {
              position: 'absolute', 
            },
            default: {},
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="AllProducts"
        options={{
          title: 'All Products',
          tabBarIcon: ({ color, size }) => (
            <ListBulletIcon  size={size} color={color} /> 
          ),
        }}
      />
    </Tabs>
  );
}
