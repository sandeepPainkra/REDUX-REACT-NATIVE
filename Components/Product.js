import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/action";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handelAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        paddingBottom: 20,
      }}
      key={item.id}
    >
      <Text style={{ fontSize: 20, color: "white", marginTop: 20 }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 20, color: "white", marginBottom: 4 }}>
        {item.price}
      </Text>
      <Image
        style={{ width: 200, height: 200, marginBottom: 10 }}
        source={{
          uri: item.image,
        }}
      />
      <Button
        onPress={() => {
          handelAddToCart(item);
        }}
        title="Add to Cart"
      />
    </View>
  );
};

export default Product;
