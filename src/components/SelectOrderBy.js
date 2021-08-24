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
					{ label: "author", value: "author" },
					{ label: "date", value: "date" },
					{ label: "id", value: "id" },
					{ label: "parent", value: "parent" },
					{ label: "relevance", value: "relevance" },
					{ label: "slug", value: "slug" },
					{ label: "include_slugs", value: "include_slugs" },
					{ label: "title", value: "title" },
					{ label: "modified", value: "modified" },
				]}
				onChange={setOrderBy}
			/>
		</div>
	);
};

export default SelectOrderBy;
