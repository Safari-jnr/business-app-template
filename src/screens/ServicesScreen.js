import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ServiceCard } from "../components/ServiceCard";
import { COLORS, SIZES } from "../constants/theme";

const MOCK_SERVICES = [
  {
    id: "1",
    title: "Cloud Infrastructure",
    icon: "",
    desc: "Secure AWS/Azure setups.",
  },
  {
    id: "2",
    title: "Custom CRM",
    icon: "",
    desc: "Manage your leads effectively.",
  },
  {
    id: "3",
    title: "Mobile Solutions",
    icon: "",
    desc: "iOS and Android native apps.",
  },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Service Catalog</Text>
        <Text style={styles.subtext}>
          Select a service to view technical specs.
        </Text>
      </View>

      <FlatList
        data={MOCK_SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard
            title={item.title}
            icon={item.icon}
            description={item.desc}
            onPress={() => console.log(`Selected ${item.title}`)}
          />
        )}
        contentContainerStyle={{ padding: SIZES.padding }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: SIZES.padding, paddingTop: 40 },
  greeting: { fontSize: 28, fontWeight: "800", color: COLORS.text },
  subtext: { fontSize: 16, color: COLORS.secondary, marginTop: 4 },
});
