import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Card = React.memo(({ id, title, image, price }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => router.push(`/product/${id}`)}>
        <Text style={styles.cardTitle }>{title}</Text>
        <Text>
          <Text style={styles.span1}>Price: </Text>
          <Text style={styles.span2}>${price}</Text>
        </Text>
        <Image
          style={styles.image}
          source={{uri:image}}
          resizeMode="cover"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={{fontSize:10}}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{fontSize:10,color:'#fd7e14'}}>See More</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
});

export const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    fontWeight: "700",
    height: 200,
    width: 120,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 11.3,
    fontWeight: "bold",
    color: "#2b2a29",
  },
  span1: {
    color: "#fd7e14",
    fontSize: 10,
  },
  span2: {
    color: "#2b2a29",
    fontSize: 10,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap:15,
  },
});

export default Card;
