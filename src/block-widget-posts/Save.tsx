import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function Save(props) {
	const { attributes } = props;
	const {
		postCardName,
		heading,
		graphQLvariables,
		// new
		expectedNumberResults,
	} = attributes;
	//

	const ncGutenbergSectionsData = {
		blockName: "nc-block-widget-posts",
		graphQLvariables,
		settings: {
			postCardName,
			heading,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-widget-posts"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
