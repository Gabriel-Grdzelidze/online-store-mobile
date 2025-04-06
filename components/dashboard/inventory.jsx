import { Text, ScrollView, SafeAreaView, TouchableOpacity, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import "../../global.css";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/query";
import { TrashIcon, PencilSquareIcon } from "react-native-heroicons/solid";
import Message from "../Message";
import { useAppState } from "@/appContext";
import UpdateProduct from './Update'

function Inventory() {
  const [products, setProducts] = useState([]);
  const { deleteActive, setDeleteActive } = useAppState();
  const {editActive, setEditActive} = useAppState();
  const { message, setMessage } = useAppState();
  const { selectedProductId, setSelectedProductId } = useAppState();
  const {updateWindow, setUpdateWindow} = useAppState();
  const { data, error, loading, refetch } = useQuery(GET_PRODUCTS);

  // Update products when new data is fetched
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const Card = ({ title, price, mainimg, img1, img2, description, onDelete, onUpdate }) => {
    return (
      <View className="p-4 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold">
          title: <Text className="font-normal">{title}</Text>
        </Text>
        <Text className="text-lg font-bold">
          Price: <Text className="font-normal">{price}$</Text>
        </Text>
        <Text className="text-lg font-bold">
          Image1: <Text className="font-normal">{mainimg}</Text>
        </Text>
        <Text className="text-lg font-bold">
          Image2: <Text className="font-normal">{img1}</Text>
        </Text>
        <Text className="text-lg font-bold">
          Image3: <Text className="font-normal">{img2}</Text>
        </Text>
        <Text className="text-lg font-bold">
          Description: <Text className="font-normal">{description}</Text>
        </Text>

        {deleteActive && (
          <Pressable onPress={() => { setMessage(true); onDelete(); }} style={{ position: "absolute", top: 10, right: 20 }}>
            <TrashIcon size={20} color="#F93827" />
          </Pressable>
        )}
        {editActive && (
          <Pressable onPress={()=>{
            onUpdate()
            setUpdateWindow(true);
            console.log("hello world")
          }} style={{ position: "absolute", top: 10, right: 20 }}>
            <PencilSquareIcon size={20} color="#3D3BF3" />
          </Pressable>
        )}
      </View>
    );
  };

  const AddressHandler = (image) => {
    if (!image || typeof image !== "string") return null;
    return image.length > 20 ? image.slice(0, 39) + "..." : image;
  };
  if(updateWindow){
    return(
      <UpdateProduct style={{zIndex:10000000}} productId={selectedProductId} />
    )
  }

  return (
    <SafeAreaView>
      {message && (
        <View
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
            zIndex: 1000,
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Message id={selectedProductId} refetch={refetch} />
        </View>


      )}
      <View style={{ paddingBottom: 10, width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 35 }}>Our Inventory</Text>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity style={{ width: "28%", marginLeft: 5 }}>
            <Link
              style={{
                backgroundColor: "#66D2CE",
                padding: 5,
                borderRadius: 3,
                textAlign: "center",
              }}
              href={"/screens/addProduct"}
            >
              Add Product
            </Link>
          </TouchableOpacity>

          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <TrashIcon
              size={30}
              onPress={() => {
                setEditActive(false);
                setDeleteActive(!deleteActive);
              }}
              style={{ opacity: deleteActive ? 0.6 : 1, color: "#F93827" }}
            />
            <PencilSquareIcon
              size={30}
              onPress={() => {
                setEditActive(!editActive);
                setDeleteActive(false);
              }}
              style={{ opacity: editActive ? 0.6 : 1, color: "#3D3BF3" }}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        {products.map((product) => (
          <TouchableOpacity style={{ margin: 10 }} key={product.id}>
            <Card
              title={product.title}
              id={product.id}
              price={product.price}
              description={product.description}
              mainimg={AddressHandler(product.mainimg)}
              img1={AddressHandler(product.img1)}
              img2={AddressHandler(product.img2)}
              onDelete={() => setSelectedProductId(product.id)}  
              onUpdate={() => setSelectedProductId(product.id)} 
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Inventory;
