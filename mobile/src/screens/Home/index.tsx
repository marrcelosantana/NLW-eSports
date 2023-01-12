import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Gamecard } from "../../components/Gamecard";
import { Heading } from "../../components/Heading";
import { Game } from "../../models/Game";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: Game) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.1.22:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo."
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Gamecard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
