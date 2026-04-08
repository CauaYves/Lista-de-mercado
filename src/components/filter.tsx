import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import type { MarketItems } from "../storage/market-items";
import { theme } from "../styles";
import { StatusIcon } from "./status-icon";

interface FilterProps extends TouchableOpacityProps {
	status: MarketItems[number]["status"];
	title: string;
	setFilter: React.Dispatch<
		React.SetStateAction<MarketItems[number]["status"]>
	>;
	filter: MarketItems[number]["status"];
}
export function Filter({
	filter,
	title,
	status,
	setFilter,
	...props
}: FilterProps) {
	const isActive = filter === status;
	const styles = StyleSheet.create({
		TouchableOpacity: {
			flexDirection: "row",
			alignItems: "center",
			gap: theme.spacing * 2,
		},
		text: {
			color: isActive ? theme.colors.foreground : theme.colors.muted,
			fontWeight: "600",
		},
	});

	return (
		<TouchableOpacity
			{...props}
			style={styles.TouchableOpacity}
			onPress={() => setFilter(status)}
		>
			<StatusIcon isActive={isActive} status={status} />
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}
