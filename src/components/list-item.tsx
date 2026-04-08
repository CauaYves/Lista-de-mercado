import { Trash2 } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { MarketItems } from "../storage/market-items";
import { theme } from "../styles";
import { StatusIcon } from "./status-icon";

interface ListItemProps {
	data: MarketItems[number];
	onDelete: (id: string) => Promise<void>;
}

export function ListItem({ data, onDelete }: ListItemProps) {
	return (
		<View style={styles.view}>
			<TouchableOpacity>
				<StatusIcon isActive={true} status={data.status} />
			</TouchableOpacity>
			<Text style={styles.text}>{data.name}</Text>
			<TouchableOpacity
				style={styles.trash}
				onPress={() => {
					onDelete(data.id);
				}}
			>
				<Trash2 size={16} color={theme.colors.muted} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		gap: theme.spacing * 4,
	},
	trash: {
		marginLeft: "auto",
		alignItems: "center",
		justifyContent: "center",
		height: theme.spacing * 12,
		width: theme.spacing * 12,
	},
	text: {
		fontWeight: "600",
	},
});
