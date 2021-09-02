import React, { FC } from "react";

const Nav = ({ containerClassName = "", className = "", children }) => {
	return (
		<nav className={`nc-Nav ${containerClassName}`} data-nc-id="Nav">
			<ul className={`flex  ${className}`}>{children}</ul>
		</nav>
	);
};

export default Nav;
