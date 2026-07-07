import { Linking, StyleSheet, Text, View } from "react-native";
export * as Linking from 'expo-linking';

export default function Index() {
  console.log(Linking);

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
