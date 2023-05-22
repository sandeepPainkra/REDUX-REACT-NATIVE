import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [cartItem, setCartItem] = useState(0);
  const cartData = useSelector((state) => state.reducer);
  console.warn(cartData);
  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text
        style={{
          backgroundColor: "orange",
          textAlign: "right",
          paddingVertical: 16,
          paddingHorizontal: 16,
          fontSize: 46,
          color: "white",
        }}
      >
        {cartItem}
      </Text>
    </View>
  );
};

export default Header;
