import { Stack } from "expo-router";
import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const AuthContext = createContext<any>(null);

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/*  */}
        {!isAuthenticated ? (
          <Stack.Screen name="login" />
        ) : (
          <Stack.Screen name="(tabs)" />
        )}
      </Stack>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
