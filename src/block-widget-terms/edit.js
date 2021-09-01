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
import {
	TERMS_QUERY_FILTER_TAGS__string,
	TERMS_QUERY_FILTER__string,
	TERMS_QUERY_SPECIFIC_TAGS__string,
	TERMS_QUERY_SPECIFIC__string,
} from "./queryGraphql";
import SectionGridCategoryBox from "../frontend-components/SectionGridCategoryBox/SectionGridCategoryBox";
import WidgetCategories from "../frontend-components/WidgetCategories/WidgetCategories";

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
		termCardName,
		heading,
		//
		graphQLvariables,
	} = attributes;

	//
	let GQL_QUERY__string = TERMS_QUERY_FILTER__string;
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
			GQL_QUERY__string = TERMS_QUERY_FILTER__string;
		} else {
			variables = {
				termTaxonomId: (categories || []).map((item) => item.value),
			};
			GQL_QUERY__string = TERMS_QUERY_SPECIFIC__string;
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
			GQL_QUERY__string = TERMS_QUERY_FILTER_TAGS__string;
		} else {
			variables = { termTaxonomId: (tags || []).map((item) => item.value) };
			GQL_QUERY__string = TERMS_QUERY_SPECIFIC_TAGS__string;
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
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string,
			},
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
					label={__("Choose type of card", "ncmaz-core")}
					value={termCardName}
					options={[
						{ label: "Term card 1", value: "card1" },
						{ label: "Term card 2", value: "tag-card" },
					]}
					onChange={(termCardName) => {
						setAttributes({ termCardName });
					}}
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
			<WidgetCategories
				termCardName={termCardName}
				categories={dataLists}
				heading={heading}
			/>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSettings()}

			{renderPreviewContent()}

			{loading && <Spinner />}
			{error && (
				<pre className="text-xs text-red-500">
					<code>{JSON.stringify(error)}</code>
				</pre>
			)}
		</div>
	);
}