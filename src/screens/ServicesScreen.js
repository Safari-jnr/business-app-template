import { FlatList, StyleSheet, Text, View } from "react-native";

const services = [
  { id: "1", name: "Web Development" },
  { id: "2", name: "Mobile App Development" },
  { id: "3", name: "UI/UX Design" },
];

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  card: {
    padding: 15,
    backgroundColor: "#0A84FF",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: { color: "#fff", fontSize: 16 },
});
