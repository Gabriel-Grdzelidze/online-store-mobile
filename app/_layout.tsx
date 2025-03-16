
import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

import ".././global.css";
import "react-native-reanimated";

import { ApolloClient, ApolloProvider , InMemoryCache } from "@apollo/client";

export default function RootLayout() {

const clinet = new ApolloClient( {
  uri: "http://192.168.100.146:8081/graphql",
  cache:new InMemoryCache()
})

  return (
    <ApolloProvider client={clinet}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
