import React from "react";
import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const SelectPostFormat = ({ onChange, defaultValue }) => {
	const [format, setFormat] = useState(defaultValue);

	useEffect(() => {
		onChange && onChange(format);
	}, [format]);

	return (
		<div>
			<SelectControl
				label="Format"
				value={format}
				options={[
					{ label: "standard", value: "standard" },
					{ label: "gallery", value: "gallery" },
					{ label: "video", value: "video" },
					{ label: "audio", value: "audio" },
				]}
				onChange={setFormat}
			/>
		</div>
	);
};

export default SelectPostFormat;
