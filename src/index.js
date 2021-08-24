import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

//
import axios from "axios";
axios.defaults.baseURL = "http://localhost/wordpress-1/";
//

registerBlockType("create-block/ncmaz-core", {
	edit: Edit,
	save,
	attributes: {
		sectionId: { type: "string", default: "gutenberg_section_id" },
		option: { type: "string", default: "by_post_specific" },
		posts: { type: "array" },
		categories: { type: "array" },
		authors: { type: "array" },
		tags: { type: "array" },
		orderBy: { type: "string" },
		order: { type: "string" },
		postNumber: { type: "number", default: 6 },
	},
});
