import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		sectionId,
		option,
		posts,
		categories,
		tags,
		orderBy,
		order,
		postNumber,
		authors = [],
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		sectionName,
	} = attributes;
	//
	const uniqueId = "nc-block__" + sectionId;
	//
	let params = {};
	//
	if (option === "by_post_specific" && !!posts && !!posts.length) {
		params = { slug: posts.map((item) => item.value) };
	}
	if (option === "by_filter") {
		params = {
			categories: categories.map((item) => item.value),
			tags: tags.map((item) => item.value),
			author: authors.map((item) => item.value),
			orderby: orderBy,
			order,
			per_page: postNumber,
		};
	}

	const ncGutenbergSectionsData = {
		endpoint: "/wp/v2/posts",
		params,
		option,
		settings: {
			sectionName,
			heading,
			subHeading,
			viewMoreHref,
			showFilterTab,
			hasBackground,
			categoriesFilter: categories,
		},
	};

	return (
		<div
			{...useBlockProps.save()}
			data-nc-gutenberg-section
			data-nc-gutenberg-section-id={uniqueId}
			data-nc-gutenberg-section-api={JSON.stringify(ncGutenbergSectionsData)}
		>
			<span className="py-3 bg-indigo-500 block"></span>
		</div>
	);
}
