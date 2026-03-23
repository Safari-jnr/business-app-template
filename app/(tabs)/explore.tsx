import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const services = [
  { id: "1", name: "Web Development", icon: "💻", color: "#E3F2FD" },
  { id: "2", name: "Mobile Apps", icon: "📱", color: "#F3E5F5" },
  { id: "3", name: "UI/UX Design", icon: "🎨", color: "#FFF3E0" },
  { id: "4", name: "Cloud Solutions", icon: "☁️", color: "#E8F5E9" },
  { id: "5", name: "Cyber Security", icon: "🛡️", color: "#FFEBEE" },
  { id: "6", name: "Data Analytics", icon: "📊", color: "#F1F8E9" },
];

const { width } = Dimensions.get("window");
const cardWidth = (width - 60) / 2; // Perfect spacing for a 2-column grid

export default function ServicesScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardTag}>View Details</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>
          Tailored solutions for your business growth.
        </Text>
      </View>

      <FlatList
        data={services}
        numColumns={2} // This is the secret to making it look like a modern app
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { paddingHorizontal: 20, paddingTop: 20, marginBottom: 15 },
  title: { fontSize: 28, fontWeight: "800", color: "#1A1A1A" },
  subtitle: { fontSize: 15, color: "#666", marginTop: 4 },
  listPadding: { paddingHorizontal: 20, paddingBottom: 20 },
  row: { justifyContent: "space-between" },
  card: {
    width: cardWidth,
    height: 160,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    // Subtle border for that 'clean' look
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  icon: { fontSize: 32 },
  cardName: { fontSize: 16, fontWeight: "700", color: "#333" },
  cardTag: { fontSize: 12, color: "#555", fontWeight: "600", opacity: 0.7 },
});
