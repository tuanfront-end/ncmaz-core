import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";

export default function Save(props) {
	const { attributes } = props;
	const {
		blockLayoutStyle,
		userCardName,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		// slider settings
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		//
		expectedNumberResults,
	} = attributes;

	const ncGutenbergSectionsData = {
		blockName: "nc-block-terms-slider",
		graphQLvariables,
		settings: {
			userCardName,
			heading,
			subHeading,
			hasBackground,
			blockLayoutStyle,
			// slider settings
			itemPerView,
			sliderStartAt,
			sliderAutoplayTime,
			sliderHoverpause,
			sliderAnimationDuration,
			sliderRewind,
			expectedNumberResults,
			//
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section="true"
			data-nc-gutenberg-section-type="block-users-slider"
			data-nc-gutenberg-section-api={_.escape(
				JSON.stringify(ncGutenbergSectionsData)
			)}
		></div>
	);
}
