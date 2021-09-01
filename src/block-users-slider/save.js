import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		roleIn,
		userIds,
		orderBy,
		order,
		numberPerPage,
		//
		blockLayoutStyle,
		userCardName,
		itemPerView,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-terms-slider",
		graphQLvariables,
		settings: {
			userCardName,
			itemPerView,
			heading,
			subHeading,
			hasBackground,
			blockLayoutStyle,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-users-slider"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}