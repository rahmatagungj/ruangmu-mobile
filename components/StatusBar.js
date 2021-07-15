import React from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ({
  backgroundColor = "#000000",
  barStyle = "dark-content",
  hidden = false,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        hidden={hidden}
        animated={false}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
