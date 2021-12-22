import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import { categories, sources } from "../API/api";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  const windowWidth = Dimensions.get("window").width;
  const slideWidth = Math.round(windowWidth / 3.5);
  return (
    <View style={styles.discover}>
      {/* search */}

      <Search />
      {/* Categories */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}
          >
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text
              style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={slideWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* sources */}

      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        {" "}
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            style={styles.sourceContainer}
            key={s.id}
            onPress={() => setSource(s.id)}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
  },
  categoryImage: {
    height: "60%",
    width: "80%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  category: {
    height: 120,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sourceImage: {
    height: "90%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 120,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
});

export default DiscoverScreen;

{
  /* <View style={styles.Carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View> */
}

// const {
//   news: { articles },
// } = useContext(NewsContext);

// const [activeindex, setActiveIndex] = useState();
// const windowHeight = Dimensions.get("window").height;
