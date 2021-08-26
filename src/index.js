import { registerBlockType } from "@wordpress/blocks";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import "./style.scss";
//
//
import BlockMagazineEdit from "./block-magazine/edit";
import BlockMagazineSave from "./block-magazine/save";
//
import BlockPostsSliderEdit from "./block-posts-slider/edit";
import BlockPostsSliderSave from "./block-posts-slider/save";
//
import BlockPostsGridEdit from "./block-posts-grid/edit";
import BlockPostsGridSave from "./block-posts-grid/save";
//

//
const client = new ApolloClient({
	uri: "http://localhost/wordpress-1/graphql",
	cache: new InMemoryCache(),
});

//
import axios from "axios";
axios.defaults.baseURL = "http://localhost/wordpress-1/";
//

// sectionName: magazine-1 .... magazine-9
registerBlockType("ncmaz-core/block-magazine", {
	title: "Ncmaz Block Magazine",
	edit: (props) => (
		<ApolloProvider client={client}>
			<BlockMagazineEdit {...props} />
		</ApolloProvider>
	),
	save: BlockMagazineSave,
	attributes: {
		sectionName: { type: "string", default: "magazine-1" },
		sectionId: { type: "string", default: "gutenberg_section_id" },
		option: { type: "string", default: "by_filter" },
		posts: { type: "array", default: [] },
		categories: { type: "array", default: [] },
		authors: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "AUTHOR" },
		order: { type: "string", default: "DESC" },
		viewMoreHref: { type: "string", default: "#" },
		heading: { type: "string", default: "Heading of section magazine" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		postNumber: { type: "number", default: 6 },
		showFilterTab: { type: "boolean", default: true },
		hasBackground: { type: "boolean", default: false },
	},
});

//
registerBlockType("ncmaz-core/block-posts-slider", {
	title: "Ncmaz Block Posts Slider",
	edit: (props) => (
		<ApolloProvider client={client}>
			<BlockPostsSliderEdit {...props} />
		</ApolloProvider>
	),
	save: BlockPostsSliderSave,
	attributes: {
		blockLayoutType: { type: "string", default: "type-1" },
		postCardName: { type: "string", default: "card4" },
		itemPerView: { type: "number", default: 4 },
		sectionId: { type: "string", default: "gutenberg_section_id" },
		option: { type: "string", default: "by_filter" },
		posts: { type: "array", default: [] },
		categories: { type: "array", default: [] },
		authors: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "AUTHOR" },
		order: { type: "string", default: "DESC" },
		viewMoreHref: { type: "string", default: "#" },
		heading: { type: "string", default: "Heading of section slider" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		postNumber: { type: "number", default: 6 },
		showFilterTab: { type: "boolean", default: false },
		hasBackground: { type: "boolean", default: false },
	},
});

//
registerBlockType("ncmaz-core/block-posts-grid", {
	title: "Ncmaz Block Posts Grid",
	edit: (props) => (
		<ApolloProvider client={client}>
			<BlockPostsGridEdit {...props} />
		</ApolloProvider>
	),
	save: BlockPostsGridSave,
	attributes: {
		blockLayoutType: { type: "string", default: "type-1" },
		postCardName: { type: "string", default: "card4" },
		gridClass: {
			type: "string",
			default: "grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
		},
		sectionId: { type: "string", default: "gutenberg_section_id" },
		option: { type: "string", default: "by_filter" },
		posts: { type: "array", default: [] },
		categories: { type: "array", default: [] },
		authors: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "AUTHOR" },
		order: { type: "string", default: "DESC" },
		viewMoreHref: { type: "string", default: "#" },
		heading: { type: "string", default: "Heading of section grid" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		postNumber: { type: "number", default: 8 },
		showFilterTab: { type: "boolean", default: false },
		hasBackground: { type: "boolean", default: false },
	},
});
