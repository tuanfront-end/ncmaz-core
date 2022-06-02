import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function BlockPostsSliderSave(props) {
	const { attributes } = props;
	const {
		categories,
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
		graphQLvariables,
		// new
		expectedNumberResults,
	} = attributes;
	//

	const ncGutenbergSectionsData = {
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
			expectedNumberResults,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-posts-slider"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
