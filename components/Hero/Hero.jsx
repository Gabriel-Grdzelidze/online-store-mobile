import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { UserIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import theme from "../../theme/index";

const Hero = () => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={css.safeAreaView}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={css.mainView}>
          <Image
            style={css.backgroundImg}
            source={require("../../assets/images/back.jpg")}
          />
          <View style={css.ul}>
            <Link style={css.link} href={""}>
              Best Sellers
            </Link>
            <Link style={css.link} href={""}>
              Gift Ideas
            </Link>
            <Link style={css.link} href={""}>
              New Releases
            </Link>
            <Link style={css.link} href={""}>
              Customer Service
            </Link>
            <Link style={css.link} href={"/(tabs)/Account"}>
              Dashboard
            </Link>
          </View>

          <View style={css.titleWrapper}>
            <Text style={css.titleText}>
              Eflier {"\n"} Let's Start Your Favorite Shopping
            </Text>
          </View>

          <View style={css.searchDiv}>
            <Picker style={css.picker} mode={"dropdown"}>
              <Picker.Item label="English" value="english" />
              <Picker.Item label="Georgian" value="georgian" />
            </Picker>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: show ? theme.bgWhite(0.2) : null,
                padding: 5,
                borderRadius: 10,
              }}
            >
              {show ? (
                <TextInput
                  placeholder="Search..."
                  placeholderTextColor={"white"}
                  style={{ width: 110 }}
                />
              ) : null}

              <TouchableOpacity
                style={{
                  backgroundColor: theme.bgWhite(0.2),
                  borderRadius: 10,
                  padding: 8,
                  paddingTop: 14,
                }}
                onPress={() => setShow(!show)}
              >
                <MagnifyingGlassIcon size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{ display: "flex", flexDirection: "row", marginBottom: 13 }}
              >
                <UserIcon size={20} color={"white"} />
                <Text style={{ color: "white" }}>Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ display: "flex", flexDirection: "row" }}>
                <ShoppingCartIcon size={20} color={"white"} />
                <Text style={{ color: "white" }}>Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={css.shopButton}><Text>Shop Now</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const css = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ul: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2b2a29",
    paddingVertical: 30,

    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  link: {
    color: "#f1f1f1",
    fontSize: 11,
  },
  safeAreaView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    alignItems: "center",
    marginTop: "25%", 
  },
  titleText: {
    color: "#f1f1f1",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
  },
  searchDiv: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",
    marginTop: 100,
  },
  picker: {
    width: 100,
    backgroundColor: "#fff",
  },
  shopButton:{
    backgroundColor:"#FFA725",
    paddingHorizontal:15,
    paddingVertical:10,
    marginTop:70
  }
});

export default Hero;
