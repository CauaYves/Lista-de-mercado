import { Button } from "@/src/components/button";
import { Filter } from "@/src/components/filter";
import { Input } from "@/src/components/input";
import { ListItem } from "@/src/components/list-item";
import { theme } from "@/src/styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ItemStatus } from "../constants/status";

export default function Index() {
	return (
		<View
			style={{
				paddingTop: theme.spacing * 10,
				backgroundColor: theme.colors.background,
				height: "100%",
			}}
		>
			<View
				style={{
					paddingHorizontal: theme.spacing * 3,
					width: "100%",
					height: "25%",
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
					height: "75%",
					padding: theme.spacing * 6,
					gap: 20,
					marginTop: 50,
					borderRadius: theme.spacing * 6,
					backgroundColor: "#FFFF",
					overflow: "hidden",
				}}
			>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						gap: 16,
						borderBottomWidth: 1,
						borderColor: theme.colors.border,
						paddingBottom: 16,
					}}
				>
					<Filter
						status={ItemStatus.PENDING}
						isActive={true}
						title={"Pendentes"}
					/>
					<Filter
						status={ItemStatus.DONE}
						isActive={false}
						title={"Comprados"}
					/>
					<TouchableOpacity style={{ marginLeft: "auto" }}>
						<Text style={{ color: theme.colors.muted }}>Limpar</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: "100%",
					}}
				>
					<ListItem
						isActive={false}
						status={ItemStatus.DONE}
						description={"3 Tomates"}
					></ListItem>
				</View>
			</View>
		</View>
	);
}
