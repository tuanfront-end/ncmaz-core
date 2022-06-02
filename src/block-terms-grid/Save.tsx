import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function Save(props) {
	const { attributes } = props;
	const {
		blockLayoutStyle,
		termCardName,
		heading,
		subHeading,
		hasBackground,
		gridClass,
		gridClassCustom,
		graphQLvariables,
		//
		expectedNumberResults,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-terms-grid",
		graphQLvariables,
		settings: {
			blockLayoutStyle,
			termCardName,
			heading,
			subHeading,
			hasBackground,
			gridClass,
			gridClassCustom,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-terms-grid"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
