import { Button } from "@/src/components/button";
import { colors } from "@/src/styles";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image source={require("@/src/assets/images/logo.png")}/>
      <Button title="Adicionar">
        
      </Button>
    </View>
  );
}
