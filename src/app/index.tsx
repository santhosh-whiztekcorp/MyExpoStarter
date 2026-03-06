import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar style="dark" />
      <Text>Index Screen.</Text>
    </View>
  );
}
