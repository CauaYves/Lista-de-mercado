import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import { theme } from "../styles";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			{...rest}
			disabled={disabled}
			activeOpacity={0.8}
			style={[styles.button, disabled && styles.buttonDisabled]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.primary,
		paddingVertical: theme.spacing * 4,
		borderRadius: theme.radius,
		width: "100%",
		alignItems: "center",
	},
	buttonDisabled: {
		backgroundColor: `${theme.colors.primary}50`,
	},
	text: {
		color: theme.colors["primary-foreground"],
	},
});
