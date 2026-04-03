import { CircleCheck, CircleDashed } from "lucide-react-native";
import { ItemStatus } from "../app/constants/status";
import { theme } from "../styles";

interface StatusIconProps {
	isActive: boolean;
	status: ItemStatus;
}
export function StatusIcon({ isActive, status }: StatusIconProps) {
	const color = isActive ? theme.colors.foreground : theme.colors.muted;

	return status === ItemStatus.DONE ? (
		<CircleCheck color={color} size={16} />
	) : (
		<CircleDashed color={color} size={16} />
	);
}
