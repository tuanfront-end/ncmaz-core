import React, { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
	radius?: string;
	onClick?: () => void;
	isActive?: boolean;
	renderX?: ReactNode;
}

const NavItem: FC<Props> = ({
	className = "px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",
	radius = "rounded-full",
	children,
	onClick = () => {},
	isActive = false,
	renderX,
}) => {
	return (
		<li className="nc-NavItem relative" data-nc-id="NavItem">
			{renderX && renderX}
			<button
				className={`block !leading-none font-medium ${className} ${radius} ${
					isActive
						? "bg-secondary-900 text-secondary-50 "
						: "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
				} `}
				onClick={() => {
					onClick && onClick();
				}}
			>
				{children}
			</button>
		</li>
	);
};

export default NavItem;
