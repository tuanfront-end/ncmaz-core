import React from "react";
import Button, { ButtonProps } from "./Button";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonSecondary: React.FC<ButtonPrimaryProps> = ({
	className = " ",
	...args
}) => {
	return (
		<Button
			className={`ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${className}`}
			{...args}
		/>
	);
};

export default ButtonSecondary;
