import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		posts,
		categories,
		tags,
		orderBy,
		order,
		numberPerPage,
		authors,
		//
		sectionName,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		//
		graphQLData,
	} = attributes;
	//

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-magazine",
					graphQLData,
					settings: {
						sectionName,
						showFilterTab,
						viewMoreHref,
						heading,
						subHeading,
						hasBackground,
						categories,
					},
			  }
			: {
					blockName: "nc-block-magazine",
					graphQLvariables,
					settings: {
						sectionName,
						showFilterTab,
						viewMoreHref,
						heading,
						subHeading,
						hasBackground,
						categories,
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-magazine"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
