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
import { gql, useQuery } from "@apollo/client";
import {
	POSTS_SECTION_BY_FILTER__string,
	POSTS_SECTION_SPECIFIC__string,
} from "./queryGraphql";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	//
	const {
		filterDataBy,
		posts,
		categories,
		tags,
		orderBy,
		order,
		numberPerPage,
		authors,
		//
		blockLayoutStyle,
		postCardName,
		itemPerView,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
	} = attributes;

	//
	let GQL_QUERY__string = "";
	let variables = {};
	//

	if (filterDataBy === "by_specific") {
		variables = {
			// arr posts Slugs
			nameIn: posts?.map((item) => item.value) || [],
		};
		GQL_QUERY__string = POSTS_SECTION_SPECIFIC__string;
	} else {
		GQL_QUERY__string = POSTS_SECTION_BY_FILTER__string;
		variables = {
			// term IDs
			categoryIn: categories?.map((item) => item.value) || [],
			tagIn: tags?.map((item) => item.value) || [],
			authorIn: authors?.map((item) => item.value) || [],
			order,
			field: orderBy,
			first: Number(numberPerPage),
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery(gqlQuery, { variables });

	const dataLists = data?.posts?.edges || [];

	// ---- SAVE graphQLvariables ----
	useEffect(() => {
		if (!data) return;
		setAttributes({
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string,
			},
		});
	}, [data]);

	//
	const renderFilterPostsContent = () => {
		if (filterDataBy === "by_specific") {
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
					defaultValue={numberPerPage}
					onChange={(numberPerPage) => setAttributes({ numberPerPage })}
				/>
			</div>
		);
	};

	const renderGeneralSetting = () => {
		return (
			<div className="space-y-2.5">
				<SelectControl
					label={__("Choose type of block", "ncmaz-core")}
					value={blockLayoutStyle}
					options={[
						{ label: "Layout type 1", value: "layout-1" },
						{ label: "Layout type 2", value: "layout-2" },
					]}
					onChange={(blockLayoutStyle) => setAttributes({ blockLayoutStyle })}
				/>

				<SelectControl
					label={__("Choose type of post card", "ncmaz-core")}
					value={postCardName}
					options={[
						{ label: "Post card 4", value: "card4" },
						{ label: "Post card 7", value: "card7" },
						{ label: "Post card 9", value: "card9" },
						{ label: "Post card 10", value: "card10" },
						{ label: "Post card 10V2", value: "card10V2" },
						{ label: "Post card 11", value: "card11" },
						{ label: "Post card 14", value: "card14" },
					]}
					onChange={(postCardName) => setAttributes({ postCardName })}
				/>

				<div className="w-full space-y-1">
					<legend>{__("Item per view", "ncmaz-core")}</legend>
					<NumberControl
						isShiftStepEnabled={true}
						onChange={(itemPerView) => {
							setAttributes({ itemPerView: Number(itemPerView) });
						}}
						min={3}
						max={6}
						shiftStep={10}
						value={itemPerView}
					/>
				</div>

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

				{filterDataBy !== "by_specific" && (
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

	const renderSidebarSetting = () => {
		return (
			<InspectorControls key="setting">
				<div data-type="ncmaz-core/sidebar-settings">
					<Panel header="Section settings">
						<PanelBody title="General Settings">
							<PanelRow>{renderGeneralSetting()}</PanelRow>
						</PanelBody>
						<PanelBody initialOpen={false} title="Filter data settings">
							<PanelRow>
								<RadioControl
									label="Posts of the section"
									selected={filterDataBy}
									options={[
										{ label: "Select posts by specific", value: "by_specific" },
										{ label: "Select posts by filter", value: "by_filter" },
									]}
									onChange={(filterDataBy) => setAttributes({ filterDataBy })}
								/>
							</PanelRow>
							<div className="border-b border-gray-600 mt-2 mb-4"></div>
							<PanelRow>{renderFilterPostsContent()}</PanelRow>
						</PanelBody>
					</Panel>
				</div>
			</InspectorControls>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSetting()}

			<div className="p-6 bg-green-300  border border-black">
				<p>{__("Sorry, preview mode is comming soon!", "ncmaz-core")}</p>
				<p className="text-3xl">{__("BLOCK POSTS SLIDER", "ncmaz-core")}</p>
				{loading && "LOADING ....."}
				{error && (
					<pre className="text-xs text-red-500">
						<code>{JSON.stringify(error)}</code>
					</pre>
				)}
				<p>post length: {JSON.stringify(dataLists.length)}</p>
			</div>
		</div>
	);
}
