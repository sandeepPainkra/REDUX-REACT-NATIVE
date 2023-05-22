import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Product from "./Product";

const RootComponent = () => {
  const Products = [
    {
      id: 1,
      name: "Samsung Mobile",
      price: 10000,
      image:
        "https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1338&q=80",
    },
    {
      id: 2,
      name: "Apple Mobile",
      price: 100000,
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 3,
      name: "Radmi Note 9 pro Mobile",
      price: 14000,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Nokia Mobile",
      price: 10000,
      image:
        "https://images.unsplash.com/photo-1568706407142-cafe0c91e5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80",
    },
  ];
  return (
    <View style={{ paddingTop: 40 }}>
      <Header />
      <ScrollView>
        {Products.map((item) => {
          return <Product item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default RootComponent;
