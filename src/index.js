import { registerBlockType } from "@wordpress/blocks";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
	HttpLink,
	from,
} from "@apollo/client";
import React, { Suspense, lazy } from "react";
import { RetryLink } from "@apollo/client/link/retry";
//
import "./style.css";
import "./styles/index.scss";
import "@glidejs/glide/dist/css/glide.core.min.css";

//
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
//
const BlockMagazineEditLazy = lazy(() => import("./block-magazine/Edit"));
import BlockMagazineSave from "./block-magazine/Save";
//
const BlockPostsSliderEditLazy = lazy(() =>
	import("./block-posts-slider/Edit")
);
import BlockPostsSliderSave from "./block-posts-slider/Save";
//

const BlockPostsGridEditLazy = lazy(() => import("./block-posts-grid/Edit"));
import BlockPostsGridSave from "./block-posts-grid/Save";
//
//
const BlockTermSliderEditLazy = lazy(() => import("./block-terms-slider/Edit"));
import BlockTermSliderSave from "./block-terms-slider/Save";
//
//
const BlockTermsGridEditLazy = lazy(() => import("./block-terms-grid/Edit"));
import BlockTermsGridSave from "./block-terms-grid/Save";
//
//
const BlockUsersSliderEditLazy = lazy(() =>
	import("./block-users-slider/Edit")
);
import BlockUsersSliderSave from "./block-users-slider/Save";
//
const BlockUsersGridrEditLazy = lazy(() => import("./block-users-grid/Edit"));
import BlockUsersGridrSave from "./block-users-grid/Save";
//
//
const BlockBecomeAuthorEditLazy = lazy(() =>
	import("./block-become-author/Edit")
);
import BlockBecomeAuthorSave from "./block-become-author/Save";
//
//
const BlockVideosEditLazy = lazy(() => import("./block-videos/Edit"));
import BlockVideosSave from "./block-videos/Save";
//
//
const BlockNewsLetterEditLazy = lazy(() => import("./block-newsletter/Edit"));
import BlockNewsLetterSave from "./block-newsletter/Save";
//
//- -------------------------------------------------------
//
const BlockWidgetPostsEditLazy = lazy(() =>
	import("./block-widget-posts/Edit")
);
import BlockWidgetPostsSave from "./block-widget-posts/Save";
//
//
const BlockWidgetUsersEditLazy = lazy(() =>
	import("./block-widget-users/Edit")
);
import BlockWidgetUsersSave from "./block-widget-users/Save";
//
//
const BlockWidgetTermsEditLazy = lazy(() =>
	import("./block-widget-terms/Edit")
);
import BlockWidgetTermsSave from "./block-widget-terms/Save";
//

const cache = new InMemoryCache({
	addTypename: false,
	typePolicies: {
		// Post: {
		// 	keyFields: [
		// 		"ncmazVideoUrl",
		// 		"ncmazAudioUrl",
		// 		"ncPostMetaData",
		// 		"ncmazGalleryImgs",
		// 	],
		// },
		// User: {
		// 	keyFields: ["ncUserMeta"],
		// },
		// Category: {
		// 	keyFields: ["ncTaxonomyMeta"],
		// },
		// Tag: {
		// 	keyFields: ["ncTaxonomyMeta"],
		// },
	},
});

const link = new RetryLink();

const httpLink = new HttpLink({
	uri: ncmazcoreJsData.graphQLBasePath,
});

const client = new ApolloClient({
	uri: ncmazcoreJsData.graphQLBasePath,
	cache,
	link: from([link, httpLink]),
});

//

//
registerBlockType("ncmaz-core/block-magazine", {
	title: "Ncmaz Block Magazine",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockMagazineEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockMagazineSave,
	attributes: {
		sectionName: { type: "string", default: "magazine-1" },
		filterDataBy: { type: "string", default: "by_filter" },
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
		numberPerPage: { type: "number", default: 10 },
		showFilterTab: { type: "boolean", default: true },
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		//
		graphQLData: { type: "object", default: {} },
	},
});

//
registerBlockType("ncmaz-core/block-posts-slider", {
	title: "Ncmaz Block Posts Slider",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockPostsSliderEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockPostsSliderSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		blockLayoutStyle: { type: "string", default: "layout-1" },
		postCardName: { type: "string", default: "card4" },
		//
		itemPerView: { type: "number", default: 4 },
		sliderStartAt: { type: "number", default: 0 },
		sliderAutoplayTime: { type: "number", default: 0 },
		sliderHoverpause: { type: "boolean", default: false },
		sliderAnimationDuration: { type: "number", default: 400 },
		sliderRewind: { type: "boolean", default: true },
		//
		sectionId: { type: "string", default: "gutenberg_section_id" },
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
		numberPerPage: { type: "number", default: 10 },
		showFilterTab: { type: "boolean", default: false },
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});

//
registerBlockType("ncmaz-core/block-posts-grid", {
	title: "Ncmaz Block Posts Grid",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockPostsGridEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockPostsGridSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		posts: { type: "array", default: [] },
		categories: { type: "array", default: [] },
		authors: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "AUTHOR" },
		order: { type: "string", default: "DESC" },
		//
		blockLayoutStyle: { type: "string", default: "layout-1" },
		postCardName: { type: "string", default: "card4" },
		gridClass: {
			type: "string",
			default: "grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
		},
		gridClassCustom: { type: "string", default: "" },
		viewMoreHref: { type: "string", default: "#" },
		heading: { type: "string", default: "Heading of section grid" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		numberPerPage: { type: "number", default: 10 },
		showFilterTab: { type: "boolean", default: false },
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
		// new
		enableLoadMoreButton: { type: "boolean", default: true },
		loadMoreButtonHref: {
			type: "string",
			default: "",
		},
	},
});

//
//
registerBlockType("ncmaz-core/block-terms-slider", {
	title: "Ncmaz Block Terms Slider",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockTermSliderEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockTermSliderSave,
	attributes: {
		typeOfTerm: { type: "string", default: "category" },
		filterDataBy: { type: "string", default: "by_filter" },
		termCardName: { type: "string", default: "card2" },
		sectionId: { type: "string", default: "gutenberg_section_term_slider" },
		//
		itemPerView: { type: "number", default: 4 },
		sliderStartAt: { type: "number", default: 0 },
		sliderAutoplayTime: { type: "number", default: 0 },
		sliderHoverpause: { type: "boolean", default: false },
		sliderAnimationDuration: { type: "number", default: 400 },
		sliderRewind: { type: "boolean", default: true },
		//
		categories: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "NAME" },
		order: { type: "string", default: "DESC" },
		heading: { type: "string", default: "Heading of section slider" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		numberPerPage: { type: "number", default: 10 },
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});

//
//
registerBlockType("ncmaz-core/block-terms-grid", {
	title: "Ncmaz Block Terms Grid",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockTermsGridEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockTermsGridSave,
	attributes: {
		blockLayoutStyle: { type: "string", default: "layout-1" },
		gridClass: {
			type: "string",
			default:
				"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
		},
		gridClassCustom: { type: "string", default: "" },
		typeOfTerm: { type: "string", default: "category" },
		filterDataBy: { type: "string", default: "by_filter" },
		termCardName: { type: "string", default: "card2" },
		sectionId: { type: "string", default: "gutenberg_section_term_grid" },
		categories: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "NAME" },
		order: { type: "string", default: "DESC" },
		heading: { type: "string", default: "Heading of section slider" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		numberPerPage: { type: "number", default: 10 },
		hasBackground: { type: "boolean", default: false },
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});

//
//
registerBlockType("ncmaz-core/block-users-slider", {
	title: "Ncmaz Block Users Slider",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockUsersSliderEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockUsersSliderSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		numberPerPage: { type: "number", default: 10 },
		orderBy: { type: "string", default: "REGISTERED" },
		order: { type: "string", default: "DESC" },
		userIds: { type: "array", default: [] },
		roleIn: { type: "array", default: [] },
		//
		blockLayoutStyle: { type: "string", default: "layout-1" },
		userCardName: { type: "string", default: "card2" },

		//
		itemPerView: { type: "number", default: 4 },
		sliderStartAt: { type: "number", default: 0 },
		sliderAutoplayTime: { type: "number", default: 0 },
		sliderHoverpause: { type: "boolean", default: false },
		sliderAnimationDuration: { type: "number", default: 400 },
		sliderRewind: { type: "boolean", default: true },
		//
		heading: { type: "string", default: "Heading of section slider" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});
//
//
registerBlockType("ncmaz-core/block-users-grid", {
	title: "Ncmaz Block Users Grid",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockUsersGridrEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockUsersGridrSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		numberPerPage: { type: "number", default: 10 },
		orderBy: { type: "string", default: "REGISTERED" },
		order: { type: "string", default: "DESC" },
		userIds: { type: "array", default: [] },
		roleIn: { type: "array", default: [] },
		//
		blockLayoutStyle: { type: "string", default: "layout-1" },
		userCardName: { type: "string", default: "card2" },
		gridClass: {
			type: "string",
			default:
				"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
		},
		gridClassCustom: { type: "string", default: "" },
		heading: { type: "string", default: "Heading of section slider" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		hasBackground: { type: "boolean", default: false },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});

//
registerBlockType("ncmaz-core/block-become-author", {
	title: "Ncmaz Block Become Author",
	edit: withSelect((select, props) => {
		return {
			media: props.attributes.mediaId
				? select("core").getMedia(props.attributes.mediaId)
				: undefined,
		};
	})((props) => (
		<Suspense fallback={<div>Loading...</div>}>
			<BlockBecomeAuthorEditLazy {...props} />
		</Suspense>
	)),
	save: BlockBecomeAuthorSave,
	attributes: {
		hasBackground: { type: "boolean", default: true },
		headingSmallText: {
			type: "string",
			default: "supper change your planning powers",
		},
		heading: {
			type: "string",
			default: "Become an author and share your great stories",
		},
		description: {
			type: "string",
			default: `Become an author you can earn extra income by writing articles. Read
		and share new perspectives on just about any topic. Everyone’s welcome.`,
		},
		buttonText: { type: "string", default: "Become an author" },
		buttonHref: { type: "string", default: "/#" },
		mediaId: { type: "number", default: 0 },
		mediaUrl: { type: "string", default: "" },
		mediaSrcSet: { type: "string", default: "" },
	},
});

//
registerBlockType("ncmaz-core/block-videos", {
	title: "Ncmaz Block Videos",
	edit: (props) => (
		<Suspense fallback={<div>Loading...</div>}>
			<BlockVideosEditLazy {...props} />
		</Suspense>
	),
	save: BlockVideosSave,
	attributes: {
		hasBackground: { type: "boolean", default: false },
		heading: {
			type: "string",
			default: "🎬 The Videos",
		},
		subHeading: {
			type: "string",
			default: `Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.`,
		},
		videoIds: {
			type: "array",
			default: [],
		},
	},
});

//
registerBlockType("ncmaz-core/block-newsletter", {
	title: "Ncmaz Block Newsletter",
	edit: withSelect((select, props) => {
		return {
			media: props.attributes.mediaId
				? select("core").getMedia(props.attributes.mediaId)
				: undefined,
		};
	})((props) => (
		<Suspense fallback={<div>Loading...</div>}>
			<BlockNewsLetterEditLazy {...props} />
		</Suspense>
	)),
	save: BlockNewsLetterSave,
	attributes: {
		hasBackground: { type: "boolean", default: false },
		heading: {
			type: "string",
			default: "Join our newsletter 🎉",
		},
		subHeading: {
			type: "string",
			default:
				"Read and share new perspectives on just about any topic. Everyone’s welcome.",
		},
		mediaId: { type: "number", default: 0 },
		mediaUrl: { type: "string", default: "" },
		mediaSrcSet: { type: "string", default: "" },
		descLists: { type: "array", default: [] },
	},
});

// ===========================================WIDGETS====================================================================
//
registerBlockType("ncmaz-core/block-widget-posts", {
	title: "Ncmaz Block Widget Posts",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockWidgetPostsEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockWidgetPostsSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		posts: { type: "array", default: [] },
		categories: { type: "array", default: [] },
		authors: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "AUTHOR" },
		order: { type: "string", default: "DESC" },
		//
		postCardName: { type: "string", default: "card4" },
		heading: { type: "string", default: "🎯 Popular Posts" },
		numberPerPage: { type: "number", default: 5 },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});
//
registerBlockType("ncmaz-core/block-widget-users", {
	title: "Ncmaz Block Widget Users",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockWidgetUsersEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockWidgetUsersSave,
	attributes: {
		filterDataBy: { type: "string", default: "by_filter" },
		numberPerPage: { type: "number", default: 10 },
		orderBy: { type: "string", default: "REGISTERED" },
		order: { type: "string", default: "DESC" },
		userIds: { type: "array", default: [] },
		roleIn: { type: "array", default: [] },
		//
		heading: { type: "string", default: "🎭 Discover Authors" },
		//
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});
//
//
registerBlockType("ncmaz-core/block-widget-terms", {
	title: "Ncmaz Block Widget Terms",
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<BlockWidgetTermsEditLazy {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save: BlockWidgetTermsSave,
	attributes: {
		termCardName: { type: "string", default: "card1" },
		typeOfTerm: { type: "string", default: "category" },
		filterDataBy: { type: "string", default: "by_filter" },
		categories: { type: "array", default: [] },
		tags: { type: "array", default: [] },
		orderBy: { type: "string", default: "NAME" },
		order: { type: "string", default: "DESC" },
		//
		heading: { type: "string", default: "✨ Trending topic" },
		//
		numberPerPage: { type: "number", default: 10 },
		graphQLvariables: { type: "object", default: {} },
		graphQLData: { type: "object", default: {} },
	},
});
