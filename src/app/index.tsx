import { StyleSheet, Text, View } from "react-native";
import Guster from 'react-native-gesture-handler';

export default function Index() {
  console.log(Guster);

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
