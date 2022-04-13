import React from "react";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { RangeControl } from "@wordpress/components";

const InputNumberPerPage = ({ onChange, defaultValue = 6 }) => {
	const [perPage, setPerPage] = useState(defaultValue);

	useEffect(() => {
		onChange && onChange(perPage);
	}, [perPage]);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Number per page", "ncmaz-core")}</legend>
			<RangeControl
				onChange={(e) => {
					setPerPage(e || 6);
				}}
				value={perPage}
			/>
		</div>
	);
};

export default InputNumberPerPage;
