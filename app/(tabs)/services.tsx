import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  background: "#F8FAFC",
  card: "#FFFFFF",
  text: "#0F172A",
  primary: "#007BFF",
};

const SHADOW = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
};

const { width } = Dimensions.get("window");
const cardWidth = (width - 60) / 2;

const SERVICES = [
  { id: "1", name: "Web Dev", icon: "🌐" },
  { id: "2", name: "Mobile Apps", icon: "📱" },
  { id: "3", name: "UI/UX Design", icon: "" },
  { id: "4", name: "Consulting", icon: "" },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
      </View>
      <FlatList
        data={SERVICES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, SHADOW]}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: "800", color: COLORS.text },
  card: {
    backgroundColor: COLORS.card,
    width: cardWidth,
    height: 140,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { fontSize: 32, marginBottom: 10 },
  cardName: { fontSize: 15, fontWeight: "600", color: COLORS.text },
});
