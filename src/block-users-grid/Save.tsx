import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function Save(props) {
	const { attributes } = props;
	const {
		blockLayoutStyle,
		userCardName,
		gridClass,
		gridClassCustom,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		expectedNumberResults,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-user-grid",
		graphQLvariables,
		settings: {
			userCardName,
			gridClass,
			gridClassCustom,
			heading,
			subHeading,
			hasBackground,
			blockLayoutStyle,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section="true"
			data-nc-gutenberg-section-type="block-users-grid"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
