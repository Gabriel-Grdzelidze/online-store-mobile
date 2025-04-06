import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/solid";
import Card from "../Card";
import "../../global.css";
import { GET_PRODUCTS } from "@/graphql/query";
import { useQuery } from "@apollo/client";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [fashionPage, setFashionPage] = useState(0);
  const [electronicsPage, setElectronicsPage] = useState(0);
  const [jewelleryPage, setJewelleryPage] = useState(0);
  const itemsPerPage = 3;

  const nextPageFashion = () => {
    if ((fashionPage + 1) * itemsPerPage < fashionProducts.length) {
      setFashionPage(fashionPage + 1);
    }
  };

  const prevPageFashion = () => {
    if (fashionPage > 0) {
      setFashionPage(fashionPage - 1);
    }
  };

  const nextPageElectronics = () => {
    if ((electronicsPage + 1) * itemsPerPage < electronicsProducts.length) {
      setElectronicsPage(electronicsPage + 1);
    }
  };

  const prevPageElectronics = () => {
    if (electronicsPage > 0) {
      setElectronicsPage(electronicsPage - 1);
    }
  };

  const nextPageJewellery = () => {
    if ((jewelleryPage + 1) * itemsPerPage < jewelleryProducts.length) {
      setJewelleryPage(jewelleryPage + 1);
    }
  };

  const prevPageJewellery = () => {
    if (jewelleryPage > 0) {
      setJewelleryPage(jewelleryPage - 1);
    }
  };

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;

  const fashionProducts = products.filter(
    (product) => product.category === "clothes"
  );
  const electronicsProducts = products.filter(
    (product) => product.category === "electronic"
  );
  const jewelleryProducts = products.filter(
    (product) => product.category === "jewllery"
  );

  if (error) {
    console.error("Error fetching products:", error);
    return <Text>Error fetching products</Text>;
  }

  return (
    <View style={{ marginBottom: 200 }}>
      {/* New Fashion Section */}
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 35, display: "flex" }}>New Fashion</Text>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {fashionProducts
              ?.slice(
                fashionPage * itemsPerPage,
                fashionPage * itemsPerPage + itemsPerPage
              )
              .map((product) => (
                <TouchableOpacity key={product.id}>
                  <Card
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.mainImg}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 20,
              gap: 100,
            }}
          >
            <TouchableOpacity
              onPress={prevPageFashion}
              disabled={fashionPage === 0}
            >
              <ArrowLeftCircleIcon
                size={45}
                color={fashionPage === 0 ? "#ccc" : "#2b2a29"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextPageFashion}
              disabled={
                (fashionPage + 1) * itemsPerPage >= fashionProducts.length
              }
            >
              <ArrowRightCircleIcon
                size={45}
                color={
                  (fashionPage + 1) * itemsPerPage >= fashionProducts.length
                    ? "#ccc"
                    : "#2b2a29"
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Newest Electronics Section */}
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 35, marginTop: 50, display: "flex" }}>
            Newest Electronics
          </Text>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {electronicsProducts
              ?.slice(
                electronicsPage * itemsPerPage,
                electronicsPage * itemsPerPage + itemsPerPage
              )
              .map((product) => (
                <TouchableOpacity key={product.id}>
                  <Card
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.mainImg}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 20,
              gap: 100,
            }}
          >
            <TouchableOpacity
              onPress={prevPageElectronics}
              disabled={electronicsPage === 0}
            >
              <ArrowLeftCircleIcon
                size={45}
                color={electronicsPage === 0 ? "#ccc" : "#2b2a29"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextPageElectronics}
              disabled={
                (electronicsPage + 1) * itemsPerPage >=
                electronicsProducts.length
              }
            >
              <ArrowRightCircleIcon
                size={45}
                color={
                  (electronicsPage + 1) * itemsPerPage >=
                  electronicsProducts.length
                    ? "#ccc"
                    : "#2b2a29"
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Finest Jewellery Section */}
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 35, marginTop: 50, display: "flex" }}>
            Finest Jewellery
          </Text>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {jewelleryProducts
              ?.slice(
                jewelleryPage * itemsPerPage,
                jewelleryPage * itemsPerPage + itemsPerPage
              )
              .map((product) => (
                <TouchableOpacity key={product.id}>
                  <Card
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.mainImg}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 20,
              gap: 100,
            }}
          >
            <TouchableOpacity
              onPress={prevPageJewellery}
              disabled={jewelleryPage === 0}
            >
              <ArrowLeftCircleIcon
                size={45}
                color={jewelleryPage === 0 ? "#ccc" : "#2b2a29"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextPageJewellery}
              disabled={
                (jewelleryPage + 1) * itemsPerPage >= jewelleryProducts.length
              }
            >
              <ArrowRightCircleIcon
                size={45}
                color={
                  (jewelleryPage + 1) * itemsPerPage >= jewelleryProducts.length
                    ? "#ccc"
                    : "#2b2a29"
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductList;
