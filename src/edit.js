import React from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "./components/InputSearchPosts";
import InputSearchCategories from "./components/InputSearchCategories";
import InputSearchTags from "./components/InputSearchTags";
import { useEffect } from "@wordpress/element";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	Placeholder,
	RadioControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import SelectOrderBy from "./components/SelectOrderBy";
import SelectOrder from "./components/SelectOrder";
import InputNumberPerPage from "./components/InputNumberPerPage";
import InputSearchAuthors from "./components/InputSearchAuthors";
import SelectPostFormat from "./components/SelectPostFormat";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	//
	const {
		sectionId,
		option,
		posts,
		categories,
		tags,
		orderBy,
		order,
		postNumber,
		authors,
	} = attributes;

	// SAVE ID SECTION
	useEffect(() => {
		setAttributes({ sectionId: clientId });
	}, []);

	//
	const renderFilterPostsContent = () => {
		if (option === "by_post_specific") {
			return (
				<InputSearchPosts
					defaultValue={posts}
					onChange={(posts) => setAttributes({ posts })}
				/>
			);
		}

		return (
			<div className="w-full space-y-2">
				{/* ------- */}
				<InputSearchCategories
					defaultValue={categories}
					onChange={(categories) => setAttributes({ categories })}
				/>

				{/* ------- */}
				<InputSearchTags
					defaultValue={tags}
					onChange={(tags) => setAttributes({ tags })}
				/>

				{/* ------- */}
				<InputSearchAuthors
					defaultValue={authors}
					onChange={(authors) => setAttributes({ authors })}
				/>

				{/* ------- */}
				{/* <SelectPostFormat
					defaultValue={postFormat}
					onChange={(postFormat) => setAttributes({ postFormat })}
				/> */}

				{/* ------- */}
				<SelectOrderBy
					defaultValue={orderBy}
					onChange={(orderBy) => setAttributes({ orderBy })}
				/>

				{/* ------- */}
				<SelectOrder
					defaultValue={order}
					onChange={(order) => setAttributes({ order })}
				/>

				{/* ------- */}
				<InputNumberPerPage
					defaultValue={postNumber}
					onChange={(postNumber) => setAttributes({ postNumber })}
				/>
			</div>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<div id="gutenpride-controls">
					<Panel header="General settings">
						<PanelBody title="Filter data settings">
							<PanelRow>
								<RadioControl
									label="Posts of the section"
									selected={option}
									options={[
										{
											label: "Select posts by post specific",
											value: "by_post_specific",
										},
										{ label: "Select posts by filter", value: "by_filter" },
									]}
									onChange={(option) => setAttributes({ option })}
								/>
							</PanelRow>
							<div className="border-b border-gray-600 mt-2 mb-4"></div>
							<PanelRow>{renderFilterPostsContent()}</PanelRow>
						</PanelBody>
						<PanelBody title="Second Settings" initialOpen={false}>
							<PanelRow>
								<Placeholder height={400} />
							</PanelRow>
						</PanelBody>
					</Panel>
				</div>
			</InspectorControls>

			<div className="p-6 bg-indigo-200 text-3xl border border-black">
				{__("Preview is comming soon!", "ncmaz-core")}
			</div>
		</div>
	);
}
