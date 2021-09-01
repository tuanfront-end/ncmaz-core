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
		postCardName,
		heading,
		//
		graphQLvariables,
	} = attributes;
	//

	const ncGutenbergSectionsData = {
		blockName: "nc-block-widget-posts",
		graphQLvariables,
		settings: {
			postCardName,
			heading,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-widget-posts"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
