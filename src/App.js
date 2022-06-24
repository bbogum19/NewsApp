import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, } from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";


function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>News</Text>
      <FlatList
        data={news_data}
        renderItem={renderNews}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#000000",
    textAlign: "center",
  },
})

export default App;