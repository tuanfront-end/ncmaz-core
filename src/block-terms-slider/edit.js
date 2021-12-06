import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
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
import { useQuery, gql } from "@apollo/client";
import SectionSliderNewCategories from "../frontend-components/SectionSliderNewCategories/SectionSliderNewCategories";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import Select from "react-select";
import SectionSliderNewAuthors from "../frontend-components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionGridAuthorBox from "../frontend-components/SectionGridAuthorBox/SectionGridAuthorBox";

import SectionGridCategoryBox from "../frontend-components/SectionGridCategoryBox/SectionGridCategoryBox";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import {
	GQL_QUERY_GET_CATEGORIES_BY_FILTER,
	GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
	GQL_QUERY_GET_TAGS_BY_FILTER,
	GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "../contains/contants";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	//
	const {
		filterDataBy,
		numberPerPage,
		order,
		orderBy,
		typeOfTerm,
		categories,
		tags,
		//
		blockLayoutStyle,
		termCardName,
		heading,
		subHeading,
		hasBackground,
		itemPerView,
		//
		graphQLvariables,
		graphQLData,
	} = attributes;

	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_xxx = "";
	let variables = {};
	//

	// CATEGORIES
	if (typeOfTerm === "category") {
		if (filterDataBy === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(numberPerPage),
			};
			GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_FILTER;
			GQL_QUERY__string_xxx = "GQL_QUERY_GET_CATEGORIES_BY_FILTER";
		} else {
			variables = {
				termTaxonomId: (categories || []).map((item) => item.value),
			};
			GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
			GQL_QUERY__string_xxx = "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC";
		}
	}

	// TAGS;
	if (typeOfTerm === "tag") {
		if (filterDataBy === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(numberPerPage),
			};
			GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_FILTER;
			GQL_QUERY__string_xxx = "GQL_QUERY_GET_TAGS_BY_FILTER";
		} else {
			variables = { termTaxonomId: (tags || []).map((item) => item.value) };
			GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_SPECIFIC;
			GQL_QUERY__string_xxx = "GQL_QUERY_GET_TAGS_BY_SPECIFIC";
		}
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery(gqlQuery, { variables });

	const dataLists = data?.tags?.edges || data?.categories?.edges || [];

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

	const renderFilterPostsContent = () => {
		if (filterDataBy === "by_specific") {
			return (
				<div className="w-full space-y-2.5">
					{typeOfTerm === "category" && (
						<InputSearchCategories
							defaultValue={categories}
							onChange={(categories) => setAttributes({ categories })}
						/>
					)}

					{/* ------- */}
					{typeOfTerm === "tag" && (
						<InputSearchTags
							defaultValue={tags}
							onChange={(tags) => setAttributes({ tags })}
						/>
					)}
				</div>
			);
		}

		return (
			<div className="w-full space-y-2.5">
				<SelectControl
					label={__("OrderBy", "ncmaz-core")}
					value={orderBy}
					options={[
						{ label: "COUNT", value: "COUNT" },
						{ label: "NAME", value: "NAME" },
						{ label: "TERM_GROUP", value: "TERM_GROUP" },
						{ label: "TERM_ID", value: "TERM_ID" },
						{ label: "TERM_ORDER", value: "TERM_ORDER" },
					]}
					onChange={(orderBy) => setAttributes({ orderBy })}
				/>

				{/* ------- */}
				<SelectOrder
					defaultValue={order}
					onChange={(order) => setAttributes({ order })}
				/>

				{/* ------- */}
				<div className="w-full space-y-1">
					<legend>{__("Number per page", "ncmaz-core")}</legend>
					<NumberControl
						isShiftStepEnabled={true}
						onChange={(numberPerPage) =>
							setAttributes({ numberPerPage: Number(numberPerPage) })
						}
						min={4}
						max={30}
						shiftStep={10}
						value={numberPerPage}
					/>
				</div>
			</div>
		);
	};

	const renderGeneralSetting = () => {
		return (
			<div className="space-y-2.5">
				<SelectControl
					label={__("Choose block layout", "ncmaz-core")}
					value={blockLayoutStyle}
					options={[
						{ label: "layout 1", value: "layout-1" },
						{ label: "layout 2", value: "layout-2" },
					]}
					onChange={(blockLayoutStyle) => {
						setAttributes({ blockLayoutStyle });
					}}
				/>
				<SelectControl
					label={__("Choose type of card", "ncmaz-core")}
					value={termCardName}
					options={[
						{ label: "Term card 2", value: "card2" },
						{ label: "Term card 3", value: "card3" },
						{ label: "Term card 4", value: "card4" },
						{ label: "Term card 5", value: "card5" },
					]}
					onChange={(termCardName) => {
						setAttributes({ termCardName });
					}}
				/>

				<div className="w-full space-y-1">
					<legend>{__("Slide items per view", "ncmaz-core")}</legend>
					<NumberControl
						isShiftStepEnabled={true}
						onChange={(itemPerView) => {
							setAttributes({ itemPerView: Number(itemPerView) });
						}}
						min={4}
						max={7}
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

	const renderSidebarSettings = () => {
		return (
			<InspectorControls key="setting">
				<div data-type="ncmaz-core/sidebar-settings">
					<Panel header="Section settings">
						<PanelBody title="General Settings">
							<PanelRow>{renderGeneralSetting()}</PanelRow>
						</PanelBody>
						<PanelBody initialOpen={false} title="Filter data settings">
							<PanelRow>
								<div>
									<RadioControl
										label="Type of term"
										selected={typeOfTerm}
										options={[
											{ label: "Category", value: "category" },
											{ label: "Tag", value: "tag" },
										]}
										onChange={(typeOfTerm) => setAttributes({ typeOfTerm })}
									/>
									<div className="border-b border-gray-600 my-2"></div>
									<RadioControl
										label="Users query by"
										selected={filterDataBy}
										options={[
											{ label: "Select users specific", value: "by_specific" },
											{ label: "Select users by filter", value: "by_filter" },
										]}
										onChange={(filterDataBy) => setAttributes({ filterDataBy })}
									/>
								</div>
							</PanelRow>
							<div className="border-b border-gray-600 mt-3 mb-4"></div>
							<PanelRow>{renderFilterPostsContent()}</PanelRow>
						</PanelBody>
					</Panel>
				</div>
			</InspectorControls>
		);
	};

	const renderPreviewContent = () => {
		return (
			<div className={hasBackground ? "py-16" : ""}>
				{hasBackground && <BackgroundSection />}

				<SectionSliderNewCategories
					uniqueClass={clientId}
					heading={heading}
					subHeading={subHeading}
					categoryCardType={termCardName}
					categories={dataLists}
					itemPerRow={itemPerView}
					// gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
					// headingCenter={blockLayoutStyle === "layout-1"}
				/>
				<div className="relative">
					{/* --------------------- */}
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!dataLists.length && !loading && <EmptyState />}
					{/* --------------------- */}
				</div>
			</div>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSettings()}

			{renderPreviewContent()}
		</div>
	);
}
