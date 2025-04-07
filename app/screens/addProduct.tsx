import { View , Text , TextInput , StyleSheet, Button } from "react-native";
import { useState } from "react";
const addProduct = () => {
   const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [mainimg, setMainimg] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [description, setDescription] = useState("");
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
            <Text style={{ fontSize: 40 }}>Create Product</Text>
          </View>
          <View>
            <Text style={css.label}>Product Title</Text>
            <TextInput
              onChangeText={setTitle}
              style={css.input}
              value={title}
              placeholder="Enter title"
            />
          </View>
          <View>
            <Text style={css.label}>Product Price</Text>
            <TextInput
              onChangeText={setPrice}
              style={css.input}
              value={price}
              placeholder="Enter price"
            />
          </View>
          <View>
            <Text style={css.label}>image of Product</Text>
            <TextInput
              onChangeText={setMainimg}
              style={css.input}
              value={mainimg}
              placeholder="Enter mainImage URL"
            />
          </View>
          <View>
            <Text style={css.label}>image of Product</Text>
            <TextInput
              onChangeText={setImg1}
              style={css.input}
              value={img1}
              placeholder="Enter image 1 URL"
            />
          </View>
          <View>
            <Text style={css.label}>image of Product</Text>
            <TextInput
              onChangeText={setImg2}
              style={css.input}
              value={img2}
              placeholder="Enter image 2 URL"
            />
          </View>
          <View>
            <Text style={css.label}>Product description</Text>
            <TextInput
              onChangeText={setDescription}
              style={css.input}
              value={description}
              placeholder="Enter description"
              multiline
              numberOfLines={4}
            />
          </View>
    
          <View style={{ marginTop: 20 }}>
            
          </View>
        </View>
      );
}

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

export default addProduct;
