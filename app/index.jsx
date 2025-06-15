import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import entryImg from "../assets/images/Frame.png";

export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ height: '100%' }} >
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ height: 300, width: 300 }} />
          <View className={"w-3/4"}>
            <TouchableOpacity onPress={() => router.push('/signup')} className="p-2 my-2 bg-[#f49b33] text-black rounded-lg">
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/home')} className="p-2 my-2 border border-[#f49b33] rounded-lg max-w-fit">
              <Text className="text-lg font-semibold text-[#f49b33] text-center">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity className="flex flex-row justify-center items-center gap-2 my-10" onPress={() => router.push('signin')}>
              <Text className="text-white font-semibold">Already a User?</Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image source={entryImg} className="w-full h-full" resizeMode="contain" />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
}
