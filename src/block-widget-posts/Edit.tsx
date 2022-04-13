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
	RadioControl,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputNumberPerPage from "../components/InputNumberPerPage";
import InputSearchAuthors from "../components/InputSearchAuthors";
import { gql, useQuery } from "@apollo/client";
import WidgetPosts from "../frontend-components/WidgetPosts/WidgetPosts";
import {
	GQL_QUERY_GET_POSTS_BY_FILTER,
	GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "../contains/contants";

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
		postCardName,
		heading,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;

	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_xxx = "";
	let variables = {};
	//

	if (filterDataBy === "by_specific") {
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

				<TextControl
					label={__("Heading", "ncmaz-core")}
					value={heading}
					type="text"
					onChange={(heading) => setAttributes({ heading })}
				/>
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

	const renderPreview = () => {
		return <WidgetPosts heading={heading} postEdges={dataLists} />;
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSetting()}
			{loading && <Spinner />}
			{error && (
				<pre className="text-xs text-red-500">
					<code>{JSON.stringify(error)}</code>
				</pre>
			)}
			{renderPreview()}
		</div>
	);
}
