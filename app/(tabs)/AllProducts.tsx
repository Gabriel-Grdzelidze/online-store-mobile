import { Text, View, StyleSheet , TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Card from "@/components/Card";

export default function AccountScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://192.168.100.146:3000/api/get-products";
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View className="w-screen">
      <View style={css.topView}>
        <View className="flex-1 justify-center items-center }">
          <Text style={{color:"#f1f1f1"}} className="text-4xl">All Products</Text>
        </View>
      </View>
      <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row',flexWrap:'wrap'}}>
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
