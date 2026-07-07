import { FlashList } from '@shopify/flash-list';
import { isGlassEffectAPIAvailable } from 'expo-glass-effect';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, View } from "react-native";

const renderItem = ({ item }: { item: { title: string } }) => (
  <Text>{item.title}</Text>
);

export default function Index() {
  console.log(Linking);
  console.log(isGlassEffectAPIAvailable);

  return (
    <View style={styles.container}>
      <FlashList renderItem={renderItem} data={[]} />
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
