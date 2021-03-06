import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import Slide from "./Slide";

const { width, heigth } = Dimensions.get("window");
let flatList;

function infiniteScroll(dataList, cleaner) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  let time = setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    try {
      this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
    } catch (e) {
      clearInterval(time);
    }
  }, 4000);

  if (cleaner) {
    clearInterval(time);
  }
}

const Banner = ({ data }) => {
  const scrollX = new Animated.Value(0);
  const [dataList, setDataList] = useState(data);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList, false);
    return () => {
      infiniteScroll(dataList, true);
    };
  }, []);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(flatList) => {
            try {
              this.flatList = flatList;
            } catch (e) {}
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Slide item={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 8,
                  width: 8,
                  backgroundColor: "#D4E1E1",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  dotView: { flexDirection: "row", justifyContent: "center" },
});

export default Banner;
