import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [activeindex, setActiveIndex] = useState();
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.Carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 26)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Carousel: {
    flex: 1,
    backgroundColor: "black",
    // height: "100%",
    // width: "100",
    transform: [{ scaleY: -1 }],
  },
});

export default NewsScreen;
