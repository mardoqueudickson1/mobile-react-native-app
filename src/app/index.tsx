import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="w-full h-full flex items-center justify-center bg-white">
      <Text className="text-3xl text-red-700">Teste</Text>
      <Link href="/profile" className="text-blue-500">
        Go to Profile
      </Link>
    </View>
  );
}
