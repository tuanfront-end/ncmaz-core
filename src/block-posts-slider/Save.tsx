import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function BlockPostsSliderSave(props) {
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
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;
	//
	console.log(11, { sliderAutoplayTime });

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-posts-slider",
					graphQLData,
					settings: {
						blockLayoutStyle,
						postCardName,
						showFilterTab,
						viewMoreHref,
						heading,
						subHeading,
						hasBackground,
						categories,
						// slider settings
						itemPerView,
						sliderStartAt,
						sliderAutoplayTime,
						sliderHoverpause,
						sliderAnimationDuration,
						sliderRewind,
						//
					},
			  }
			: {
					blockName: "nc-block-posts-slider",
					graphQLvariables,
					settings: {
						blockLayoutStyle,
						postCardName,
						showFilterTab,
						viewMoreHref,
						heading,
						subHeading,
						hasBackground,
						categories,
						// slider settings
						itemPerView,
						sliderStartAt,
						sliderAutoplayTime,
						sliderHoverpause,
						sliderAnimationDuration,
						sliderRewind,
						//
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-posts-slider"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
