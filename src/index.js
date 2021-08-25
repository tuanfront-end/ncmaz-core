import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

//
import axios from "axios";
axios.defaults.baseURL = "http://localhost/wordpress-1/";
//

// sectionName: magazine-1 .... magazine-6
// sectionName: grid-1 .... grid-6

registerBlockType("create-block/ncmaz-core", {
	edit: Edit,
	save,
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
		heading: { type: "string", default: "Heading of section" },
		subHeading: {
			type: "string",
			default: "This is sub heading of section...",
		},
		postNumber: { type: "number", default: 6 },
		showFilterTab: { type: "boolean", default: false },
		hasBackground: { type: "boolean", default: false },
	},
});
