import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Gamecard } from "../../components/Gamecard";
import { Heading } from "../../components/Heading";
import { Game } from "../../models/Game";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.22:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo."
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Gamecard data={item} />}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
