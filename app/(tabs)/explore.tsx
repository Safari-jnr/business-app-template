import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { id: "1", name: "Web Dev", color: "#E3F2FD" },
  { id: "2", name: "Apps", color: "#F3E5F5" },
  { id: "3", name: "Design", color: "#FFF3E0" },
  { id: "4", name: "Cloud", color: "#E8F5E9" },
];

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) / 2;

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.color }]}>
            <Text style={styles.cardName}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: "800" },
  card: {
    width: cardWidth,
    height: 100,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    justifyContent: "center",
  },
  cardName: { fontWeight: "700", fontSize: 16 },
});
