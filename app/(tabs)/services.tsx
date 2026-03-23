import React from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Mock data for your "showcase"
const services = [
  {
    id: "1",
    name: "Web Development",
    icon: "🌐",
    color: "#E3F2FD",
    desc: "React & Next.js",
  },
  {
    id: "2",
    name: "Mobile Apps",
    icon: "📱",
    color: "#F3E5F5",
    desc: "Native & Expo",
  },
  {
    id: "3",
    name: "UI/UX Design",
    icon: "🎨",
    color: "#FFF3E0",
    desc: "Figma to Code",
  },
  {
    id: "4",
    name: "Cloud Hosting",
    icon: "☁️",
    color: "#E8F5E9",
    desc: "AWS & Azure",
  },
  {
    id: "5",
    name: "Cyber Security",
    icon: "🛡️",
    color: "#FFEBEE",
    desc: "Data Audits",
  },
  {
    id: "6",
    name: "E-commerce",
    icon: "🛍️",
    color: "#F1F8E9",
    desc: "Shopify & Custom",
  },
];

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) / 2; // Calculation for 2-column spacing

export default function ServicesScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      activeOpacity={0.8}
    >
      <View>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          Professional solutions for modern brands.
        </Text>
      </View>

      {/* The List - key={2} fixes the 'numColumns' crash */}
      <FlatList
        key={2}
        data={services}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  listPadding: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: cardWidth,
    height: 180,
    padding: 20,
    borderRadius: 24,
    marginBottom: 15,
    justifyContent: "space-between",
    // Subtle shadow for iOS/Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  icon: {
    fontSize: 35,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  cardDesc: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },
  arrow: {
    alignSelf: "flex-end",
    fontSize: 18,
    color: "#333",
    opacity: 0.5,
  },
});
