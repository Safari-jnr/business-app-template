import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Let’s Talk</Text>
          <Text style={styles.subtitle}>
            Have a project in mind? Reach out and we'll get back to you within
            24 hours.
          </Text>
        </View>

        {/* Contact Method Tiles */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.icon}>📞</Text>
            <Text style={styles.infoLabel}>Call Us</Text>
            <Text style={styles.infoValue}>+234 901...</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.infoLabel}>Office</Text>
            <Text style={styles.infoValue}>Lagos, NG</Text>
          </View>
        </View>

        {/* The Contact Form */}
        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. John Doe"
            placeholderTextColor="#AAA"
          />

          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="john@example.com"
            keyboardType="email-address"
            placeholderTextColor="#AAA"
          />

          <Text style={styles.inputLabel}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tell us about your project..."
            multiline
            numberOfLines={4}
            placeholderTextColor="#AAA"
          />

          <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
            <Text style={styles.submitText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB", // High-end tech background color
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 8,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: "#FFF",
    width: "48%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  icon: { fontSize: 24, marginBottom: 4 },
  infoLabel: {
    fontSize: 12,
    color: "#999",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  infoValue: { fontSize: 13, color: "#333", fontWeight: "700", marginTop: 2 },

  formCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: "#333",
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
