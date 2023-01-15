import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Heading } from "../Heading";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle, Copy } from "phosphor-react-native";
import { THEME } from "../../theme";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscord() {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert("Discord copiado!");
    setIsCopying(false);
  }

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
              onPress={onClose}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscord}
            disabled={isCopying}
          >
            {isCopying ? (
              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
            ) : (
              <View style={styles.discordButtonContent}>
                <View />
                <Text style={styles.discord}>{discord}</Text>
                <Copy size={24} color={THEME.COLORS.TEXT} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
