import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import type { ItemStatus } from "../app/constants/status";
import { theme } from "../styles";
import { StatusIcon } from "./status-icon";

interface FilterProps extends TouchableOpacityProps {
	status: ItemStatus;
	isActive: boolean;
	title: string;
}
export function Filter({ title, status, isActive, ...props }: FilterProps) {
	const styles = StyleSheet.create({
		TouchableOpacity: {
			flexDirection: "row",
			alignItems: "center",
			gap: 4,
		},
		text: {
			color: isActive ? theme.colors.foreground : theme.colors.muted,
		},
	});

	return (
		<TouchableOpacity {...props} style={styles.TouchableOpacity}>
			<StatusIcon isActive={isActive} status={status} />
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}
