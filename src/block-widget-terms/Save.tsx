import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function save(props) {
	const { attributes } = props;
	const {
		termCardName,
		heading,
		graphQLvariables,
		//
		expectedNumberResults,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-widget-terms",
		graphQLvariables,
		settings: {
			termCardName,
			heading,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section="true"
			data-nc-gutenberg-section-type="block-widget-terms"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
