import React, { useState, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import {
	BaseControl,
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	FormToggle,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputNumberPerPage from "../components/InputNumberPerPage";
import InputSearchAuthors from "../components/InputSearchAuthors";
import { gql, useQuery } from "@apollo/client";
import {
	GQL_QUERY_GET_POSTS_BY_FILTER,
	GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "../contains/contants";
import SectionGridPosts from "./SectionGridPosts";
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
		gridClass,
		gridClassCustom,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
		graphQLData,
		//NEWS
		enableLoadMoreButton,
		loadMoreButtonHref,
	} = attributes;

	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_xxx = "";
	let variables = {};
	let variablesUseNow;
	//

	if (filterDataBy === "by_specific") {
		variablesUseNow = null;
		variables = {
			// arr posts Slugs
			nameIn: posts?.map((item) => item.value) || [],
		};
		GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
		GQL_QUERY__string_xxx = "GQL_QUERY_GET_POSTS_BY_SPECIFIC";
	} else {
		GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
		GQL_QUERY__string_xxx = "GQL_QUERY_GET_POSTS_BY_FILTER";
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
			graphQLvariables:
				filterDataBy !== "by_specific"
					? {
							variables,
							queryString: GQL_QUERY__string_xxx,
					  }
					: {},
			graphQLData: filterDataBy === "by_specific" ? data : {},
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
							label: "1",
							value: "grid-cols-1",
						},
						{
							label: "1 - sm:2",
							value: "grid-cols-1 sm:grid-cols-2",
						},
						{
							label: "1 - sm:2 - lg:3",
							value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
						},
						{
							label: "1 - sm:2 - lg:3 - xl:4",
							value:
								"grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
						},
					]}
					onChange={(gridClass) => setAttributes({ gridClass })}
				/>

				<div>
					<TextControl
						label={__("Items per row custom (advance)", "ncmaz-core")}
						value={gridClassCustom}
						type="text"
						onChange={(gridClassCustom) => setAttributes({ gridClassCustom })}
						help={__(
							`If you enter this field will overwrite the field 'Choose items per row' above`,
							"ncmaz-core"
						)}
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

				{filterDataBy !== "by_specific" && showFilterTab && (
					<TextControl
						label={__("View more href", "ncmaz-core")}
						value={viewMoreHref}
						type="url"
						onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
					/>
				)}

				<>
					<div className="w-full space-x-3 flex ">
						<BaseControl
							id="FormToggle-1-Enable-Loadmore-mode"
							label={__("Enable Loadmore button", "ncmaz-core")}
							help={__(
								"Show Load-more button (Loadmore infinite mode only work at Select posts by filter)",
								"ncmaz-core"
							)}
						>
							<FormToggle
								id="FormToggle-1-Enable-Loadmore-mode"
								checked={enableLoadMoreButton}
								onChange={() =>
									setAttributes({ enableLoadMoreButton: !enableLoadMoreButton })
								}
							/>
						</BaseControl>
					</div>
					<TextControl
						label={__(
							"Load-more button href (leave empty and Select posts by filter if want use load more infinite post)",
							"ncmaz-core"
						)}
						help={__(
							"If you want use loadmore mode please do not enter this field.)",
							"ncmaz-core"
						)}
						value={loadMoreButtonHref}
						type="text"
						onChange={(loadMoreButtonHref) =>
							setAttributes({ loadMoreButtonHref })
						}
					/>
				</>

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
			<div className={hasBackground ? "relative py-16" : "relative"}>
				{hasBackground && <BackgroundSection />}
				<SectionGridPosts
					{...attributes}
					listPosts={dataLists}
					loading={loading}
					tabActiveId={tabActiveId}
					handleClickTab={handleClickTab}
				/>

				<div className="relative">
					{/*  */}
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500 ">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!dataLists.length && !loading && <EmptyState />}
					{/*  */}
				</div>
			</div>
		</div>
	);
}
