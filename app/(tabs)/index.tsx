import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../src/constants/theme";
import { useAuth } from "../_layout";

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome Back</Text>
          <Text style={styles.subtitle}>Business Overview</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Active Projects</Text>
          <Text style={styles.statValue}>12</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Pending Inquiries</Text>
          <Text style={styles.statValue}>5</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  logoutButton: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: "#EF4444",
    fontWeight: "700",
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  statCard: {
    backgroundColor: COLORS.card,
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: "600",
  },
  statValue: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 4,
  },
});
