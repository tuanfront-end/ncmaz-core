import React from "react";
import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const SelectOrder = ({ onChange, defaultValue = "desc" }) => {
	const [order, setOrder] = useState(defaultValue);

	useEffect(() => {
		onChange && onChange(order);
	}, [order]);

	return (
		<div>
			<SelectControl
				label="Order"
				value={order}
				options={[
					{ label: "desc", value: "desc" },
					{ label: "asc", value: "asc" },
				]}
				onChange={setOrder}
			/>
		</div>
	);
};

export default SelectOrder;
