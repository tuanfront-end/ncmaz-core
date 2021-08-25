import { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import apiFetch from "@wordpress/api-fetch";
import axios from "axios";
import Select from "react-select";

const InputSearchCategories = ({ onChange, defaultValue = [] }) => {
	//  * loading | err | done
	const [isState, setIsState] = useState("");
	const [selected, setSelected] = useState(defaultValue);

	// Why need/ Readmore from InputSearchPost component
	const [objData, setObjData] = useState({});

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	const hanleChangeSelect = (selected) => setSelected(selected);

	const getCategoriesAxios = async (search) => {
		setIsState("loading");
		try {
			const response = await axios({
				url: "/wp-json/wp/v2/categories",
				params: { search },
			});
			setIsState("done");
			const converted = response.data.reduce(
				(obj, item) => ({
					...obj,
					[item.slug]: {
						...item,
						value: item.id,
						label: item.name,
					},
				}),
				{}
			);
			setObjData({ ...objData, ...converted });
		} catch (error) {
			setIsState("err");
			console.error(error);
		}
	};

	const handleInputChange = _.debounce(function (e) {
		!!e && getCategoriesAxios(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select categories", "ncmaz-core")}</legend>
			<Select
				placeholder="Select categories..."
				isMulti
				onInputChange={handleInputChange}
				isLoading={isState === "loading"}
				value={selected}
				onChange={hanleChangeSelect}
				options={Object.values(objData)}
			/>
		</div>
	);
};

export default InputSearchCategories;
