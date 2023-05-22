import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
} from "react-native";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import RootComponent from "./Components/RootComponent";

export default function App() {
  return (
    <Provider store={store}>
      <RootComponent key={1} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 45,
  },
});
