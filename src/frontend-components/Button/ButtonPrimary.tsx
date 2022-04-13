import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ className = "", ...args }) => {
	return (
		<Button
			className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
			{...args}
		/>
	);
};

export default ButtonPrimary;
