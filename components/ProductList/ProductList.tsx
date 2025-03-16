
import { useQuery } from "@apollo/client";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "react-native-heroicons/solid";
import Card from "../Card";

const ProductList = () => {

  // Loading state


  // Success - Render products
 
  // return (
  //   <View>
  //     {/* Clothes Section */}
  //     <View>
  //       <Text>New Fashion</Text>
  //       <View>
  //         <TouchableOpacity>
  //           <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //         {Clothes?.map((product) => (
  //           <TouchableOpacity key={product.id}>
  //             <Card
  //               id={product.id}
  //               title={product.title}
  //               price={product.price}
  //               image={product.mainImg}
  //             />
  //           </TouchableOpacity>
  //         ))}
  //         <TouchableOpacity>
  //           <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //       </View>
  //     </View>

  //     {/* Electronics Section */}
  //     <View>
  //       <Text>Electronics</Text>
  //       <View>
  //         <TouchableOpacity>
  //           <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //         {Electronics?.map((product) => (
  //           <TouchableOpacity key={product.id}>
  //             <Card
  //               id={product.id}
  //               title={product.title}
  //               price={product.price}
  //               image={product.mainImg}
  //             />
  //           </TouchableOpacity>
  //         ))}
  //         <TouchableOpacity>
  //           <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //       </View>
  //     </View>

  //     {/* Jewelry Section */}
  //     <View>
  //       <Text>Jewelry</Text>
  //       <View>
  //         <TouchableOpacity>
  //           <ArrowLeftCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //         {Jewelry?.map((product) => (
  //           <TouchableOpacity key={product.id}>
  //             <Card
  //               id={product.id}
  //               title={product.title}
  //               price={product.price}
  //               image={product.mainImg}
  //             />
  //           </TouchableOpacity>
  //         ))}
  //         <TouchableOpacity>
  //           <ArrowRightCircleIcon size={30} color={"#f1f1f1"} />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   </View>
  // );
};

export default ProductList;
