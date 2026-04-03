import { Trash2 } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { ItemStatus } from "../app/constants/status";
import { theme } from "../styles";
import { StatusIcon } from "./status-icon";

interface ListItemProps {
	isActive: boolean;
	status: ItemStatus;
	description: string;
}

export function ListItem({ description, isActive, status }: ListItemProps) {
	return (
		<View style={styles.view}>
			<TouchableOpacity>
				<StatusIcon isActive={isActive} status={status} />
			</TouchableOpacity>
			<Text>{description}</Text>
			<TouchableOpacity style={styles.trash}>
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
		gap: 4,
	},
	trash: {
		marginLeft: "auto",
	},
});
