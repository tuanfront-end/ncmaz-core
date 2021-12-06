import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		numberPerPage,
		order,
		orderBy,
		typeOfTerm,
		categories,
		tags,
		//
		blockLayoutStyle,
		termCardName,
		heading,
		subHeading,
		hasBackground,
		itemPerView,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-terms-grid",
					graphQLData,
					settings: {
						blockLayoutStyle,
						termCardName,
						heading,
						subHeading,
						hasBackground,
						itemPerView,
					},
			  }
			: {
					blockName: "nc-block-terms-grid",
					graphQLvariables,
					settings: {
						blockLayoutStyle,
						termCardName,
						heading,
						subHeading,
						hasBackground,
						itemPerView,
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-terms-slider"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
