import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";

import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export function Game() {
  const route = useRoute();

  const game = route.params as GameParams;

  console.log(game);

  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </Background>
  );
}
