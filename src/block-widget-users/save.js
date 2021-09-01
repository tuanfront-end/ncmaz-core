import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		numberPerPage,
		order,
		orderBy,
		userIds,
		roleIn,
		//
		heading,
		//
		graphQLvariables,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-widget-users",
		graphQLvariables,
		settings: {
			heading,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-widget-users"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
