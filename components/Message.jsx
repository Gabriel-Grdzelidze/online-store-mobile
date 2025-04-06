import { View, Text, TouchableOpacity } from "react-native";
import { useState,useEffect } from "react";
import { useAppState } from "@/appContext";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "@/graphql/mutations";
import { GET_PRODUCTS } from "@/graphql/query";


const Message = ({id,refetch}) => {
  const { deleteActive, setDeleteActive } = useAppState();
  const { message, setMessage } = useAppState();
   const [deleteLoading, setDeleteLoading] = useState(false);

  const [deleteProduct] = useMutation(DELETE_PRODUCT,{
    refetchQueries: [
      { query: GET_PRODUCTS }, 
    ],
  })
  function handleDelete(id) {
    try{
        setDeleteLoading(true);
        deleteProduct({
          variables: { id: id },
        });
        setDeleteLoading(false);
        
    }catch(error){
        console.log(error);
    }finally{
        setDeleteActive(false);
    }

  }
  
  return (
    <View style={{}}>
      <Text style={{ fontSize: 17 }}>
        Are you sure you want to delete this product?
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 50,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setDeleteActive(false);
            setMessage(false);
          }}
          style={{
            borderWidth: 2,
            borderColor: "#66D2CE",
            paddingVertical: 5,
            paddingHorizontal: 17,
            borderRadius: 10,
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#66D2CE",
            paddingVertical: 5,
            paddingHorizontal: 17,
            borderRadius: 10,
          }}
          onPress={()=>{handleDelete(id);setMessage(false);refetch()}}
        >
          <Text>{deleteLoading?"Deleting...":"Delete now"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;
