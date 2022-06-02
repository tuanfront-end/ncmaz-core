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
import WidgetPosts from "../frontend-components/WidgetPosts/WidgetPosts";
import { BlockPostAttributesCommon, EditProps } from "../block-magazine/Edit";
import usePostGqlQuery from "../hooks/usePostGqlQuery";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";

interface Props extends BlockPostAttributesCommon {
	postCardName: string;
}

export default function Edit(props: EditProps<Props>) {
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
	} = attributes;

	//
	const {
		GQL_QUERY__string,
		GQL_QUERY__string_text,
		variables,
		dataLists,
		error,
		loading,
		data,
	} = usePostGqlQuery(attributes);

	// ---- SAVE graphQLvariables ----
	useEffect(() => {
		if (!data) return;
		setAttributes({
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string_text,
			},
			expectedNumberResults: dataLists.length || numberPerPage,
		});
	}, [data]);

	const handleChangeFilterDataBy = (value: ValueOfOptionFilterDataBy) => {
		if (value === "by_specific") {
			setAttributes({
				filterDataBy: value,
				showFilterTab: false,
				categories: [],
				tags: [],
				authors: [],
			});
		} else {
			setAttributes({
				filterDataBy: value,
				showFilterTab: true,
				posts: [],
			});
		}
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
									label=""
									selected={filterDataBy}
									options={OPTIONS_FILTER_DATA_BY}
									onChange={handleChangeFilterDataBy}
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
