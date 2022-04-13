import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save(props) {
	const { attributes } = props;
	const {
		filterDataBy,
		roleIn,
		userIds,
		orderBy,
		order,
		numberPerPage,
		//
		blockLayoutStyle,
		userCardName,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		graphQLData,
		// slider settings
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		//
	} = attributes;

	const ncGutenbergSectionsData =
		filterDataBy === "by_specific"
			? {
					blockName: "nc-block-terms-slider",
					graphQLData,
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
						//
					},
			  }
			: {
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
						//
					},
			  };

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-users-slider"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
