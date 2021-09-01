import React from "react";

const NcImage = ({
	src,
	className = "w-full h-full object-cover",
	containerClassName = "",
}) => {
	return (
		<div className={` bg-gray-400 ${containerClassName} `}>
			{src && <img className={className} src={src} alt="" />}
		</div>
	);
};

export default NcImage;
