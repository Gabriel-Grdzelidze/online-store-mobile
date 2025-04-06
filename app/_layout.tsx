import { Stack } from "expo-router";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import ".././global.css";
import React from "react";
import { AppProvider } from "@/appContext";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://192.168.100.146:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  return (
    <AppProvider> 
      <ApolloProvider client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ApolloProvider>
    </AppProvider>
  );
}
