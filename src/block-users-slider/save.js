import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
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
		graphQLData,
	} = attributes;

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-terms-slider",
					graphQLData,
					settings: {
						userCardName,
						itemPerView,
						heading,
						subHeading,
						hasBackground,
						blockLayoutStyle,
					},
			  }
			: {
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
