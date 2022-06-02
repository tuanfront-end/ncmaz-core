import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		categories,
		//
		blockLayoutStyle,
		postCardName,
		gridClass,
		gridClassCustom,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		//new
		enableLoadMoreButton,
		loadMoreButtonHref,
		//
		expectedNumberResults,
	} = attributes;
	//

	const ncGutenbergSectionsData = {
		blockName: "nc-block-posts-grid",
		graphQLvariables,
		settings: {
			blockLayoutStyle,
			postCardName,
			gridClass,
			gridClassCustom,
			showFilterTab,
			viewMoreHref,
			heading,
			subHeading,
			hasBackground,
			categories,
			enableLoadMoreButton,
			loadMoreButtonHref,
			filterDataBy,
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-posts-grid"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
