import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		typeOfTerm,
		termCardName,
		termsNumber,
		sectionId,
		option,
		categories,
		tags,
		orderBy,
		order,
		heading,
		subHeading,
		hasBackground,
		blockLayoutType,
		gridClass,
		gridClassCustom,
	} = attributes;

	//
	const uniqueId = "nc-block-terms-grid__" + sectionId;
	//
	let params = {};
	//
	const items = typeOfTerm === "tag" ? tags : categories;
	if (option === "by_term_specific" && !!items && !!items.length) {
		params = { termIds: items.map((item) => item.value) };
	}
	if (option === "by_filter") {
		params = {
			orderby: orderBy,
			order,
			per_page: termsNumber,
		};
	}

	const ncGutenbergSectionsData = {
		blockName: "nc-block-terms-slider",
		endpoint: "/wp/v2/posts",
		params,
		option,
		typeOfTerm,
		settings: {
			termCardName,
			heading,
			subHeading,
			hasBackground,
			blockLayoutType,
			gridClass,
			gridClassCustom,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-type="block-terms-grid"
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		></div>
	);
}
