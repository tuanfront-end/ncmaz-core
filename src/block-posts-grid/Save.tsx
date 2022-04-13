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
		graphQLData,
		//new
		enableLoadMoreButton,
		loadMoreButtonHref,
	} = attributes;
	//

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-posts-grid",
					graphQLData,
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
					},
			  }
			: {
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
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-posts-grid"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
