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
	FormToggle,
	SelectControl,
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
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		sectionName,
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
					label={__("Choose type of section", "ncmaz-core")}
					value={sectionName}
					options={[
						{ label: "Magazine 1", value: "magazine-1" },
						{ label: "Magazine 2", value: "magazine-2" },
						{ label: "Magazine 3", value: "magazine-3" },
						{ label: "Magazine 4", value: "magazine-4" },
						{ label: "Magazine 5", value: "magazine-5" },
						{ label: "Magazine 6", value: "magazine-6" },
						{ label: "Magazine 7", value: "magazine-7" },
						{ label: "Magazine 8", value: "magazine-8" },
						{ label: "Magazine 9", value: "magazine-9" },
						{ label: "Large slider", value: "large-slider" },
					]}
					onChange={(sectionName) => setAttributes({ sectionName })}
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

				<div className="w-full space-x-3 flex ">
					<FormToggle
						checked={showFilterTab}
						onChange={() => setAttributes({ showFilterTab: !showFilterTab })}
						label={__("Show filter tab", "ncmaz-core")}
					/>
					<legend>{__("Show filter tab", "ncmaz-core")}</legend>
				</div>

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

			<div className="p-6 bg-indigo-200 text-3xl border border-black">
				{__("Preview is comming soon!", "ncmaz-core")}
			</div>
		</div>
	);
}
