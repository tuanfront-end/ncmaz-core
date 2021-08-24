import { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import apiFetch from "@wordpress/api-fetch";
import axios from "axios";
import Select from "react-select";

const InputSearchPosts = ({ onChange, defaultValue = [] }) => {
	//  * loading | err | done
	const [isState, setIsState] = useState("");
	const [selected, setSelected] = useState(defaultValue);

	// Why need objData? chung ta se sd Object.value(objData) lam data cho select
	// Sau moi lan axios thi du lieu tra ve co the trung voi du lieu cu nen ta phai sd obj de (spread ...) du lieu trung nhau
	const [objData, setObjData] = useState({});

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	const converteArrToObj = (data) => {
		if (!data) return {};
		return data.reduce(
			(obj, item) => ({
				...obj,
				[item.slug]: {
					value: item.slug,
					label: item.title?.rendered,
				},
			}),
			{}
		);
	};

	const hanleChangeSelect = (selected) => setSelected(selected);

	const getCategoriesAxios = async (search) => {
		setIsState("loading");
		try {
			const response = await axios({
				url: "/wp-json/wp/v2/posts",
				params: { search },
			});
			setIsState("done");
			const converted = converteArrToObj(response.data);
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
			<legend>{__("Type and select posts", "ncmaz-core")}</legend>
			<Select
				placeholder="Select posts..."
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

export default InputSearchPosts;
