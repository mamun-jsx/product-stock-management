import Header from "@/components/header";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header  showMenu showCart showLogo />
      
    </SafeAreaView>
  );
};

export default Home;
