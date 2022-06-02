import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function save(props) {
	const { attributes } = props;
	const { heading, graphQLvariables, expectedNumberResults } = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-widget-users",
		graphQLvariables,
		settings: {
			heading,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section="true"
			data-nc-gutenberg-section-type="block-widget-users"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
