import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function BlockMagazineSave(props) {
	const { attributes } = props;
	const {
		categories,
		sectionName,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		graphQLvariables,
		// new
		expectedNumberResults,
	} = attributes;
	//

	const ncGutenbergSectionsData = {
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
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section="true"
			data-nc-gutenberg-section-type="block-magazine"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
