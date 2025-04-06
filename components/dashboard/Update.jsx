import { GET_PRODUCT } from "@/graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { UPDATE_PRODUCT } from "@/graphql/mutations";
import { useAppState } from "@/appContext";

const UpdateProduct = ({ productId }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [mainimg, setMainimg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [description, setDescription] = useState("");
  const { updateWindow, setUpdateWindow } = useAppState();
  const {editActive, setEditActive} = useAppState();
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id: productId },
  });
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  
  const productData = data?.product || {};

  useEffect(() => {
    if (data) {
      setTitle(productData.title);
      setPrice(productData.price.toString());
      setMainimg(productData.mainImg);
      setImg1(productData.img1);
      setImg2(productData.img2);
      setDescription(productData.description);
    }
  }, [data]);

  async function handleUpdate({
    id,
    title,
    price,
    mainImg,
    img1,
    img2,
    description,
  }) {
    const parsedPrice = parseFloat(price);
    try {
      await updateProduct({
        variables: {
          id,
          title,
          price: parsedPrice,
          mainImg,
          img1,
          img2,
          description,
        },
      });
    } catch (error) {
      console.error("Error updating product:", error.message);
    } finally {
      setUpdateWindow(false);
      setEditActive(false);
    }
  }

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={{ paddingLeft: 5 }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 40 }}>Update the Product</Text>
      </View>
      <View>
        <Text style={css.label}>Product Title</Text>
        <TextInput
          onChangeText={setTitle}
          style={css.input}
          value={title}
          placeholder="Enter new title"
        />
      </View>
      <View>
        <Text style={css.label}>Product Price</Text>
        <TextInput
          onChangeText={setPrice}
          style={css.input}
          value={price}
          placeholder="Enter new price"
        />
      </View>
      <View>
        <Text style={css.label}>image of Product</Text>
        <TextInput
          onChangeText={setMainimg}
          style={css.input}
          value={mainimg}
          placeholder="Enter new main image URL"
        />
      </View>
      <View>
        <Text style={css.label}>image of Product</Text>
        <TextInput
          onChangeText={setImg1}
          style={css.input}
          value={img1}
          placeholder="Enter new image 1 URL"
        />
      </View>
      <View>
        <Text style={css.label}>image of Product</Text>
        <TextInput
          onChangeText={setImg2}
          style={css.input}
          value={img2}
          placeholder="Enter new image 2 URL"
        />
      </View>
      <View>
        <Text style={css.label}>Product description</Text>
        <TextInput
          onChangeText={setDescription}
          style={css.input}
          value={description}
          placeholder="Enter new description"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          onPress={() => {
            handleUpdate({
              id:productId,
              title,
              price,
              mainImg: mainimg,
              img1,
              img2,
              description,
            });
          }}
          title={loading ? "updating product data..." : "update product data"}
          style={{ backgroundColor: "#48A6A7" }}
        />
      </View>
    </View>
  );
};

export const css = StyleSheet.create({
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#E5E5E5",
    width: "95%",
    fontSize:15
  },
});

export default UpdateProduct;
