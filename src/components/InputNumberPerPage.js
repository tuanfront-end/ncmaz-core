import React from "react";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

const InputNumberPerPage = ({ onChange, defaultValue = 6 }) => {
	const [perPage, setPerPage] = useState(defaultValue);

	useEffect(() => {
		onChange && onChange(perPage);
	}, [perPage]);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Number per page", "ncmaz-core")}</legend>
			<NumberControl
				isShiftStepEnabled={true}
				onChange={(e) => {
					setPerPage(Number(e || 6));
				}}
				shiftStep={10}
				value={perPage}
			/>
		</div>
	);
};

export default InputNumberPerPage;
