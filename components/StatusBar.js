import React from "react";
import { View, StatusBar, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ({
  backgroundColor = "#000000",
  barStyle = "dark-content",
  hidden = false,
}) {
  const height = Platform.OS === "ios" ? 20 : 0;
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        hidden={hidden}
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
