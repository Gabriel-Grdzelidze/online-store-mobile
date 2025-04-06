import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/query";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/solid";

export default function AccountScreen() {
  const itemsPerPage = 9;
  const [products, setProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState(0);

  const { data, loading, error } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const nextPageFashion = () => {
    if ((AllProducts + 1) * itemsPerPage < products.length) {
      setAllProducts(AllProducts + 1);
    }
  };

  const prevPageFashion = () => {
    if (AllProducts > 0) {
      setAllProducts(AllProducts - 1);
    }
  };

  if (loading)
    return <Text className="text-center text-2xl mt-10">Loading...</Text>;
  if (error) {
    console.error(error);
    return (
      <Text className="text-center text-2xl mt-10">Something went wrong</Text>
    );
  }

  return (
    <View className="w-screen">
      <View style={css.topView}>
        <View className="flex-1 justify-center items-center }">
          <Text style={{ color: "#f1f1f1" }} className="text-4xl">
            All Products
          </Text>
        </View>
      </View>
      <View className="flex-row flex-wrap gap-5 items-start mt-2 px-2">
        {products?.map((product) => (
          <TouchableOpacity className="mt-2" key={product.id}>
            <Card
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.img1}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex justify-center items-center mt-5 mb-2 gap-32 flex-row">
        <TouchableOpacity
          onPress={prevPageFashion}
          disabled={AllProducts === 0}
        >
          <ArrowLeftCircleIcon
            size={45}
            color={AllProducts === 0 ? "#ccc" : "#2b2a29"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextPageFashion}
          disabled={(AllProducts + 1) * itemsPerPage >= products.length}
        >
          <ArrowRightCircleIcon
            size={45}
            color={
              (AllProducts + 1) * itemsPerPage >= products.length
                ? "#ccc"
                : "#2b2a29"
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  topView: {
    width: "100%",
    backgroundColor: "#fd7e14",
    height: 100,
  },
});
