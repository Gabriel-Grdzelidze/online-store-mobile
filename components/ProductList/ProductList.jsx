import {StyleSheet,View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/solid";
import Card from "../Card";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const result = fecth("/api/get-products", {
        method: "GET",
        header: {
          "Context-type": "aplication/json",
        },
      });
      const data = await result.json();
      setLoading(true);
      setProducts(data);
    };

    fecthProducts();
    setLoading(false);
  }, []);

  if (loading) return <Text>loading</Text>;
  return (
    <View className={css.section}>
      <View>
        <Text className={css.h1}>New Fashion</Text>
        <View className={css.maindiv}>
          <TouchableOpacity>
            <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
          {products?.map((product) => (
            <TouchableOpacity key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.mainImg}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity>
            <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Electronics Section */}
      <View>
        <Text>Electronics</Text>
        <View>
          <TouchableOpacity>
            <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
          {/* {Electronics?.map((product) => (
            <TouchableOpacity key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.mainImg}
              />
            </TouchableOpacity>
          ))} */}
          <TouchableOpacity>
            <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Jewelry Section */}
      <View>
        <Text>Jewelry</Text>
        <View>
          <TouchableOpacity>
            <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
          {/* {Jewelry?.map((product) => (
            <TouchableOpacity key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.mainImg}
              />
            </TouchableOpacity>
          ))} */}
          <TouchableOpacity>
            <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const css = StyleSheet.create({
  thediv: {
    alignItems: "center",
  },
  section: {
    width: "100%",
    marginBottom: 250,
  },
  maindiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 1300,
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: 100,
  },
  h1: {
    fontSize: 50,
    fontWeight: "700",
    color: "#2b2a29",
    marginVertical: 30,
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
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
  card: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    fontWeight: "700",
    elevation: 5,
    height: 525,
    minWidth: 250,
    width: "100%",
    maxWidth: 300,
    boxSizing: "border-box",
    transitionDuration: "0.6s",
    cursor: "pointer",
  },
  adiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  a1: {
    color: "#fd7e14",
    fontWeight: "600",
    fontSize: 19,
  },
  adiv2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 90,
  },
  a2: {
    color: "#2b2a29",
    fontWeight: "600",
    fontSize: 19,
  },
  otherdiv: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adivelectro: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 92,
  },
  li: {
    color: "#f1f1f1",
    transitionDuration: "0.6s",
  },
  sectionBlack: {
    backgroundColor: "#252525",
    width: "100%",
    paddingVertical: 50,
  },
  h1B: {
    fontSize: 50,
    color: "#f1f1f1",
    fontWeight: "800",
    letterSpacing: 1.4,
    margin: 10,
  },
  inputdiv: {
    width: "40%",
    borderBottomWidth: 3,
    borderBottomColor: "#f1f1f1",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  input: {
    backgroundColor: "transparent",
    width: "80%",
    color: "#f1f1f1",
    padding: 5,
    fontWeight: "600",
    fontSize: 19,
  },
  inputPlaceholder: {
    color: "#f1f1f1",
    fontWeight: "600",
    fontSize: 19,
  },
  inputFocus: {
    outline: "none",
    borderWidth: 0,
  },
  button: {
    color: "#fd7e14",
    fontSize: 19,
    fontWeight: "500",
    transitionDuration: "0.6s",
  },
  sectionBlackList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    margin: 20,
    fontSize: 18,
  },
  sectionBlackP: {
    color: "#f1f1f1",
    marginBottom: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 250,
    marginTop: 100,
  },
  icon: {
    fontSize: 70,
    color: "#f1f1f1",
    backgroundColor: "#2b2a29",
    padding: 20,
    borderRadius: 5,
    transitionDuration: "0.6s",
  },
});

export default ProductList;
