import { useEffect, useState } from "react";
import _ from "lodash";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
import axios from "axios";
import Select from "react-select";

const InputSearchTags = ({ onChange, defaultValue = [] }) => {
	//  * loading | err | done
	const [isState, setIsState] = useState("");
	const [selected, setSelected] = useState(defaultValue);

	// Why need? read more IInputSearchPost Component
	const [objData, setObjData] = useState({});

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	const hanleChangeSelect = (selected) => setSelected(selected);

	const getTagsAxios = async (search) => {
		setIsState("loading");
		try {
			const response = await axios({
				url: "/wp-json/wp/v2/tags",
				params: { search },
			});
			setIsState("done");
			const converted = response.data.reduce(
				(obj, item) => ({
					...obj,
					[item.slug]: {
						value: item.slug,
						label: item.name,
					},
				}),
				{}
			);
			setObjData({ ...objData, ...converted });
			// console.log(response.data);
		} catch (error) {
			setIsState("err");
			console.error(error);
		}
	};

	const handleInputChange = _.debounce(function (e) {
		!!e && getTagsAxios(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select tags", "ncmaz-core")}</legend>
			<Select
				placeholder="Select tags..."
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

export default InputSearchTags;
