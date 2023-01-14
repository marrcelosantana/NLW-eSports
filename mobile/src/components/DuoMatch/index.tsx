import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
      );
    </Modal>
  );
}
