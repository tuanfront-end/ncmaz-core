import { useEffect, useState } from "react";
import _ from "lodash";
import { __ } from "@wordpress/i18n";
import { gql, useLazyQuery } from "@apollo/client";
import Select from "react-select";
import { GQL_QUERY_SEARCH_TAGS } from "../contains/contants";

const InputSearchTags = ({ onChange, defaultValue = [] }) => {
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
	let GQL_QUERY__string = GQL_QUERY_SEARCH_TAGS;
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const [
		loadGreeting,
		{ loading, error, data, called },
	] = useLazyQuery(gqlQuery, { variables: { search: searchContent } });

	let tagsList = data?.tags?.edges || [];
	if (tagsList && tagsList.length) {
		tagsList = tagsList.map((item) => ({
			value: item.node.databaseId,
			label: item.node.name,
		}));
	}
	//
	const handleInputChange = _.debounce(function (e) {
		setSearchContent(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select tags", "ncmaz-core")}</legend>
			<Select
				placeholder="Select tags..."
				isMulti
				onInputChange={handleInputChange}
				isLoading={loading}
				value={selected}
				onChange={hanleChangeSelect}
				options={tagsList}
			/>
		</div>
	);
};

export default InputSearchTags;
