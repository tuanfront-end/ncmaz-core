import React from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
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
	FormToggle,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputNumberPerPage from "../components/InputNumberPerPage";
import InputSearchAuthors from "../components/InputSearchAuthors";
import SelectPostFormat from "../components/SelectPostFormat";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	//
	const {
		postCardName,
		blockLayoutType,
		gridClass,
		sectionId,
		option,
		posts,
		categories,
		tags,
		orderBy,
		order,
		postNumber,
		authors,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
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
			<div className="w-full space-y-2.5">
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

	const renderGeneralSetting = () => {
		return (
			<div className="space-y-2.5">
				<SelectControl
					label={__("Choose type of block", "ncmaz-core")}
					value={blockLayoutType}
					options={[
						{ label: "Layout type 1", value: "type-1" },
						{ label: "Layout type 2", value: "type-2" },
					]}
					onChange={(blockLayoutType) => setAttributes({ blockLayoutType })}
				/>

				<SelectControl
					label={__("Choose type of post card", "ncmaz-core")}
					value={postCardName}
					options={[
						{ label: "Post card 3", value: "card3" },
						{ label: "Post card 4", value: "card4" },
						{ label: "Post card 7", value: "card7" },
						{ label: "Post card 9", value: "card9" },
						{ label: "Post card 10", value: "card10" },
						{ label: "Post card 10V2", value: "card10V2" },
						{ label: "Post card 11", value: "card11" },
						{ label: "Post card 14", value: "card14" },
						{ label: "Post card 15-Podcast", value: "card15Podcast" },
					]}
					onChange={(postCardName) => setAttributes({ postCardName })}
				/>

				<SelectControl
					label={__("Choose items per row", "ncmaz-core")}
					value={gridClass}
					options={[
						{
							label: "1 - sm:2 - lg:3 - xl:4",
							value:
								"grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
						},
						{
							label: "1 - sm:2 - lg:3",
							value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
						},
					]}
					onChange={(gridClass) => setAttributes({ gridClass })}
				/>

				<TextControl
					label={__("Heading", "ncmaz-core")}
					value={heading}
					type="text"
					onChange={(heading) => setAttributes({ heading })}
				/>

				<TextControl
					label={__("Sub heading", "ncmaz-core")}
					value={subHeading}
					type="text"
					onChange={(subHeading) => setAttributes({ subHeading })}
				/>

				{option !== "by_post_specific" && (
					<div className="w-full space-x-3 flex ">
						<FormToggle
							checked={showFilterTab}
							onChange={() => setAttributes({ showFilterTab: !showFilterTab })}
							label={__("Show filter tab", "ncmaz-core")}
						/>
						<legend>{__("Show filter tab", "ncmaz-core")}</legend>
					</div>
				)}

				<TextControl
					label={__("View more href", "ncmaz-core")}
					value={viewMoreHref}
					type="url"
					onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
				/>

				<div className="w-full space-x-3 flex ">
					<FormToggle
						checked={hasBackground}
						onChange={() => setAttributes({ hasBackground: !hasBackground })}
						label={__("Enable Background", "ncmaz-core")}
					/>
					<legend>{__("Enable Background", "ncmaz-core")}</legend>
				</div>
			</div>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<div id="gutenpride-controls">
					<Panel header="Section settings">
						<PanelBody title="General Settings">
							<PanelRow>{renderGeneralSetting()}</PanelRow>
						</PanelBody>
						<PanelBody initialOpen={false} title="Filter data settings">
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
					</Panel>
				</div>
			</InspectorControls>

			<div className="p-6 bg-yellow-500 text-3xl border border-black">
				{__("BLOCK POSTS GRID", "ncmaz-core")}
			</div>
		</div>
	);
}
