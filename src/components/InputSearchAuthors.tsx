import { useEffect, useState } from "react";
import _ from "lodash";
import { __ } from "@wordpress/i18n";
import Select from "react-select";
import { GQL_QUERY_SEARCH_USER } from "../contains/contants";
import { gql, useLazyQuery } from "@apollo/client";

const InputSearchAuthors = ({ onChange, defaultValue = [] }) => {
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
	let GQL_QUERY__string = GQL_QUERY_SEARCH_USER;
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const [
		loadGreeting,
		{ loading, error, data, called },
	] = useLazyQuery(gqlQuery, { variables: { search: searchContent } });

	let usersList = data?.users?.edges || [];
	// CONVERT
	if (usersList && usersList.length) {
		usersList = usersList.map((item) => ({
			value: item.node.userId,
			label: item.node.name,
		}));
	}

	const handleInputChange = _.debounce(function (e) {
		setSearchContent(e);
	}, 200);

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select authors", "ncmaz-core")}</legend>
			<Select
				placeholder="Select authors..."
				isMulti
				isLoading={loading}
				value={selected}
				onInputChange={handleInputChange}
				onChange={hanleChangeSelect}
				options={usersList}
			/>
		</div>
	);
};

export default InputSearchAuthors;
