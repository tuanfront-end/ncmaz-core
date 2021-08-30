import React, { ButtonHTMLAttributes } from "react";

const ButtonCircle = ({ className = " ", size = " w-9 h-9 ", ...args }) => {
	return (
		<button
			className={`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className} ${size} focus:outline-none`}
			{...args}
		/>
	);
};

export default ButtonCircle;
