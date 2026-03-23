import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.badge}>STRATEGY & GROWTH</Text>
          <Text style={styles.title}>Elevate Your Business Presence</Text>
          <Text style={styles.subtitle}>
            We build high-performance digital solutions tailored to your brand's
            unique needs.
          </Text>
        </View>

        {/* Feature/Service Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Custom Web Solutions</Text>
          <Text style={styles.cardDescription}>
            Modern, scalable architectures built for speed and security.
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Learn More →</Text>
          </TouchableOpacity>
        </View>

        {/* Primary Action Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Soft light grey background (more premium than pure white)
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  hero: {
    marginBottom: 40,
  },
  badge: {
    color: "#007AFF",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1A1A1A",
    lineHeight: 40,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  cardDescription: {
    marginTop: 8,
    fontSize: 14,
    color: "#777",
    lineHeight: 20,
  },
  linkText: {
    marginTop: 12,
    color: "#007AFF",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1A1A1A",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
