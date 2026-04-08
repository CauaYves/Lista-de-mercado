import { CircleCheck, CircleDashed } from "lucide-react-native";
import type { MarketItems } from "../storage/market-items";
import { theme } from "../styles";

interface StatusIconProps {
	isActive: boolean;
	status: MarketItems[number]["status"];
}
export function StatusIcon({ isActive, status }: StatusIconProps) {
	const color = isActive ? theme.colors.foreground : theme.colors.muted;

	return status === "DONE" ? (
		<CircleCheck color={color} size={16} />
	) : (
		<CircleDashed color={color} size={16} />
	);
}
