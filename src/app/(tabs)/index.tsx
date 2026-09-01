import { BANNERS } from "@/assets/assets";
import Header from "@/components/header";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORIES } from "../../../constants";
import CategoryItem from "@/components/CategoryItem";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");
const Home = () => {
  const router = useRouter();
  const categories = [{ id: "all", name: "All", icon: "grid" }, ...CATEGORIES];
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header showMenu showCart showLogo />
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* banner slider */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="w-full h-48 rounded-xl"
          scrollEventThrottle={16}
        >
          {BANNERS?.map((banner, idx) => (
            <View
              key={idx}
              className="relative w-full h-48 bg-gray-200 overflow-hidden"
              style={{ width: width - 32 }}
            >
              <Image
                className="w-full h-full"
                resizeMode="cover"
                source={{ uri: banner.image }}
              />
              {/*  */}
              <View className="absolute bottom-4 left-4 z-10">
                <Text className="text-white text-2xl font-bold">
                  {banner.title}
                </Text>
                <Text className="text-white text-sm font-medium">
                  {banner.subtitle}
                </Text>
                <TouchableOpacity className="mt-2 bg-white px-4 py-2 rounded-full self-start">
                  <Text className="text-primary font-bold text-xs">
                    Get Now
                  </Text>
                </TouchableOpacity>
              </View>
              {/* overlay  */}
              <View className="absolute inset-0 bg-black/40"></View>
            </View>
          ))}
        </ScrollView>
        {/* categories */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-primary">Categories</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="w-full"
          >
            {categories?.map((cat: any) => (
              <CategoryItem
                key={cat.id}
                item={cat}
                isSelected={false}
                onPress={() =>
                  router.push({
                    pathname: "/shop",
                    params: { category: cat.id === "all" ? "" : cat.name },
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
