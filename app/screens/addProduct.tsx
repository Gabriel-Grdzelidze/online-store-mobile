import { View , Text , TextInput } from "react-native";

const addProduct = () => {
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
}

export default addProduct;
