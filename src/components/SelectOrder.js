import React from "react";
import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const SelectOrder = ({ onChange, defaultValue = "DESC" }) => {
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
					{ label: "DESC", value: "DESC" },
					{ label: "ASC", value: "ASC" },
				]}
				onChange={setOrder}
			/>
		</div>
	);
};

export default SelectOrder;
