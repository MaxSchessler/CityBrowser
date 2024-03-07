import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Button from "./Button";

const Drawer = createDrawerNavigator();

export function ArtInstituteOfChicago() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/art.png")} style={styles.image} />
      <Button text="More Information" url="https://www.artic.edu/" />
    </View>
  );
}
export function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/mile.png")} style={styles.image} />
      <Button
        text="More Information"
        url="https://www.themagnificentmile.com/"
      />
    </View>
  );
}
export function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/pier.png")} style={styles.image} />
      <Button
        text="More Information"
        url="https://www.themagnificentmile.com/"
      />
    </View>
  );
}
export function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/water.png")} style={styles.image} />
      <Button text="More Information" url="https://navypier.org/" />
    </View>
  );
}
export function WillsTower() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/willis.png")} style={styles.image} />
      <Button text="More Information" url="https://www.willistower.com/" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Art Institute of Chicago"
          component={ArtInstituteOfChicago}
        />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Peir" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WillsTower} />
        <Drawer.Screen name="Wills Tower" component={WillsTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 360,
    width: 240,
  },
});
