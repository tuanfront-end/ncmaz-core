import { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import { gql, useLazyQuery } from "@apollo/client";
import Select from "react-select";
import { GQL_QUERY_SEARCH_CATEGORIES } from "../contains/contants";

const InputSearchCategories = ({ onChange, defaultValue = [] }) => {
	const [selected, setSelected] = useState(defaultValue);
	const [searchContent, setSearchContent] = useState("");

	useEffect(() => {
		onChange && onChange(selected);
	}, [selected]);

	//
	useEffect(() => {
		searchContent && loadGreeting();
	}, [searchContent]);
	const hanleChangeSelect = (selected) => setSelected(selected);

	//
	let GQL_QUERY__string = GQL_QUERY_SEARCH_CATEGORIES;
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const [
		loadGreeting,
		{ loading, error, data, called },
	] = useLazyQuery(gqlQuery, { variables: { search: searchContent } });

	let categoriesList = data?.categories?.edges || [];
	if (categoriesList && categoriesList.length) {
		categoriesList = categoriesList.map((item) => ({
			id: item.node.databaseId,
			slug: item.node.slug,
			value: item.node.databaseId,
			label: item.node.name,
			name: item.node.name,
		}));
	}
	//
	const handleInputChange = _.debounce(function (e) {
		setSearchContent(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select categories", "ncmaz-core")}</legend>
			<Select
				placeholder="Select categories..."
				isMulti
				onInputChange={handleInputChange}
				isLoading={loading}
				value={selected}
				onChange={hanleChangeSelect}
				options={categoriesList}
			/>
		</div>
	);
};

export default InputSearchCategories;
