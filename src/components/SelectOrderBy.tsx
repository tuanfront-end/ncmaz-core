import React from "react";
import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const SelectOrderBy = ({ onChange, defaultValue = "date" }) => {
	const [orderBy, setOrderBy] = useState(defaultValue);

	useEffect(() => {
		onChange && onChange(orderBy);
	}, [orderBy]);

	return (
		<div>
			<SelectControl
				label="Order By"
				value={orderBy}
				options={[
					{ label: "AUTHOR", value: "AUTHOR" },
					{ label: "COMMENT_COUNT", value: "COMMENT_COUNT" },
					{ label: "FAVORITES_COUNT", value: "FAVORITES_COUNT" },
					{ label: "VIEWS_COUNT", value: "VIEWS_COUNT" },
					{ label: "IN", value: "IN" },
					{ label: "DATE", value: "DATE" },
					{ label: "MENU_ORDER", value: "MENU_ORDER" },
					{ label: "MODIFIED", value: "MODIFIED" },
					{ label: "NAME_IN", value: "NAME_IN" },
					{ label: "PARENT", value: "PARENT" },
					{ label: "SLUG", value: "SLUG" },
					{ label: "TITLE", value: "TITLE" },
				]}
				onChange={(value) => setOrderBy(value)}
			/>
		</div>
	);
};

export default SelectOrderBy;
