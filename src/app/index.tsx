import { StyleSheet, Text, View } from "react-native";
import kEY from 'react-native-keyboard-controller';

export default function Index() {
  console.log(kEY);

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
