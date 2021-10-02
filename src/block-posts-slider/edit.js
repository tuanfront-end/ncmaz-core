import React from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import { useEffect, useState } from "@wordpress/element";
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
	Spinner,
	RangeControl,
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
import SectionSliderPosts from "./SectionSliderPosts";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	//
	const [tabActiveId, setTabActiveId] = useState(-1);
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
	let variablesUseNow;
	let variables = {};
	//

	if (filterDataBy === "by_specific") {
		variablesUseNow = null;
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
		//
		variablesUseNow = {
			...variables,
			categoryIn:
				tabActiveId && tabActiveId !== -1
					? [tabActiveId]
					: categories?.map((item) => item.value) || [],
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery(gqlQuery, {
		variables: variablesUseNow || variables,
	});

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

	const handleClickTab = (item) => {
		if (item === -1) {
			setTabActiveId(item);
			return;
		}
		if (item.id === tabActiveId) {
			return;
		}
		setTabActiveId(item.id);
	};

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
				<RangeControl
					label={__("Number per page", "ncmaz-core")}
					value={numberPerPage}
					onChange={(numberPerPage) => setAttributes({ numberPerPage })}
					min={1}
					max={20}
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
					<RangeControl
						label={__("Item per view", "ncmaz-core")}
						value={itemPerView}
						onChange={(itemPerView) => setAttributes({ itemPerView })}
						min={3}
						max={5}
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
			<div
				className={`nc-SectionSliderPosts relative ${
					hasBackground ? "py-16" : ""
				} `}
			>
				{hasBackground && <BackgroundSection />}

				<SectionSliderPosts
					{...attributes}
					listData={dataLists}
					loading={loading}
					tabActiveId={tabActiveId}
					handleClickTab={handleClickTab}
					className=" "
				/>

				<div className="relative">
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!dataLists.length && !loading && <EmptyState />}
				</div>
			</div>
		</div>
	);
}
