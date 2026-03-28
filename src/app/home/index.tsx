import { Image, Text, View } from "react-native";
import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { theme } from "@/src/styles";

export default function Index() {
	return (
		<View
			style={{
				paddingTop: theme.spacing * 10,
				backgroundColor: theme.colors.background,
			}}
		>
			<View
				style={{
					paddingHorizontal: theme.spacing * 3,
					width: "100%",
					flex: 1,
					alignItems: "center",
					gap: theme.spacing * 3,
				}}
			>
				<Image source={require("@/src/assets/images/logo.png")} />
				<Input placeholder="O que você precisa comprar?"></Input>
				<Button title="Adicionar" />
			</View>
			<View
				style={{
					width: "100%",
					height: "100%",
					padding: theme.spacing * 6,
					marginTop: 50,
					borderRadius: theme.spacing * 6,
					backgroundColor: "#FFFFFF",
					overflow: "hidden",
				}}
			>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui
					quaerat! Dolore reprehenderit voluptates corrupti similique doloremque
					quibusdam adipisci molestias fuga iure animi! Assumenda aspernatur
					odit, corporis sed quod exercitationem!
				</Text>
			</View>
		</View>
	);
}
