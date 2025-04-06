import { Text, View, StyleSheet,  TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import {  useState } from "react";
import theme from "@/theme";
import Statistics from "./Statistics";
import Inventory from "./inventory";
import Custumers from "./customers";

const Dashboard = () => {
const [selected, setSelected] = useState("Statistics");

    function handleSelection(value) {
    setSelected(value);
    }
  return (
    <>
      <Stack.Screen name="Dashboard" options={{ title: "Dashboard" }} />
      <View>
        <View style={css.selection}>
          <TouchableOpacity onPress={()=>handleSelection('Statistics')} ><Text style={selected==="Statistics"?css.selectedOption:css.options}>Statistics</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleSelection('Inventory')} ><Text style={selected==="Inventory"?css.selectedOption:css.options}>Inventory</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleSelection('Costumers')} ><Text style={selected==="Costumers"?css.selectedOption:css.options}>Customers</Text></TouchableOpacity>
        </View>
        {selected==="Statistics" &&  <Statistics />}
        {selected==="Inventory" &&  <Inventory />}
        {selected==="Costumers" &&  <Custumers />}
      </View>
    </>
  );
};
export const css = StyleSheet.create({
  selection: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    backgroundColor:theme.bgBlack(0.7)
  },
  options:{
    color:'#f1f1f1'
  },
  selectedOption: {
    color:"#66D2CE",
    borderBottomWidth: 1.2,
    borderBottomColor: "#66D2CE",
    paddingBottom: 2,
  }

});

export default Dashboard;
