import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Card = React.memo((id, title,image,price) => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => router.push(`/product/${id}`)}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>
          <Text style={styles.span1}>Price: </Text>
          <Text style={styles.span2}>{price}$</Text>
        </Text>
        <Image
          source={{ uri: img }}
          style={styles.image}
          onLoad={() => setLoaded(true)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => router.push(`/product/${id}`)}
          >
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => {}}>
            <Text style={styles.buttonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
});

export const styles = StyleSheet.create({
  card: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    fontWeight: "700",
    height: 525,
    minWidth: 250,
    width: "100%",
    maxWidth: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2b2a29",
    marginBottom: 10,
  },
  span1: {
    color: "#fd7e14",
    fontSize: 18,
  },
  span2: {
    color: "#2b2a29",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  button1: {
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  button2: {
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 19,
  },
  icons: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 50, // Replaced gap: 250
  },
  icon: {
    fontSize: 70,
    color: "#f1f1f1",
    backgroundColor: "#2b2a29",
    padding: 20,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default Card;
