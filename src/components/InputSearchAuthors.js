import { useEffect, useState } from "react";
import _ from "lodash";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
import axios from "axios";
import Select from "react-select";

const InputSearchAuthors = ({ onChange, defaultValue = [] }) => {
	//  * loading | err | done
	const [isState, setIsState] = useState("");
	const [selected, setSelected] = useState(defaultValue);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	const hanleChangeSelect = (selected) => setSelected(selected);

	const getAuthorsAxios = async (search) => {
		setIsState("loading");
		try {
			const response = await axios({
				url: "/wp-json/wp/v2/users",
				params: { search },
			});
			setIsState("done");
			const converted = response.data.map((item) => ({
				value: item.id,
				label: item.name,
			}));
			setAuthors(converted);
		} catch (error) {
			setIsState("err");
			console.error(error);
		}
	};

	const handleInputChange = _.debounce(function (e) {
		!!e && getAuthorsAxios(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select authors", "ncmaz-core")}</legend>
			<Select
				placeholder="Select authors..."
				isMulti
				isLoading={isState === "loading"}
				value={selected}
				onInputChange={handleInputChange}
				onChange={hanleChangeSelect}
				options={authors}
			/>
		</div>
	);
};

export default InputSearchAuthors;
