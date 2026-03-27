import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../src/constants/theme";

export default function ContactScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert("Success", "Message sent.", [
        {
          text: "OK",
          onPress: () => setForm({ name: "", email: "", message: "" }),
        },
      ]);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Let’s Talk</Text>
          <Text style={styles.subtitle}>
            Reach out and we'll get back to you shortly.
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.icon}>📞</Text>
            <Text style={styles.infoValue}>+234 901...</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.infoValue}>Lagos, NG</Text>
          </View>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChangeText={(t) => setForm({ ...form, name: t })}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(t) => setForm({ ...form, email: t })}
          />
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            value={form.message}
            onChangeText={(t) => setForm({ ...form, message: t })}
          />
          <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
            {isSubmitting ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 24 },
  header: { marginBottom: 30 },
  title: { fontSize: 34, fontWeight: "800", color: COLORS.text },
  subtitle: { fontSize: 15, color: COLORS.secondary, marginTop: 8 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: COLORS.card,
    width: "48%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  icon: { fontSize: 24, marginBottom: 4 },
  infoValue: { fontSize: 13, fontWeight: "700" },
  formCard: { backgroundColor: COLORS.card, padding: 20, borderRadius: 20 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 8 },
  input: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  textArea: { height: 100, textAlignVertical: "top" },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontWeight: "700" },
});
