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
		termCardName,
		heading,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-widget-terms",
					graphQLData,
					settings: {
						termCardName,
						heading,
					},
			  }
			: {
					blockName: "nc-block-widget-terms",
					graphQLvariables,
					settings: {
						termCardName,
						heading,
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-widget-terms"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
