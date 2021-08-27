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
import {
	TERMSQUERY_FILTER,
	TERMSQUERY_SPECIFIC,
	TERMSQUERY_SPECIFIC_TAGS,
	TERMSQUERY_FILTER_TAGS,
} from "../graphql/termQuery";
import { useQuery, gql } from "@apollo/client";
import SectionSliderNewCategories from "../frontend-components/SectionSliderNewCategories/SectionSliderNewCategories";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "../frontend-components/SectionGridCategoryBox/SectionGridCategoryBox";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	//
	const {
		blockLayoutType,
		gridClass,
		gridClassCustom,
		typeOfTerm,
		termCardName,
		termsNumber,
		sectionId,
		option,
		categories,
		tags,
		orderBy,
		order,
		heading,
		subHeading,
		hasBackground,
	} = attributes;

	// SAVE ID SECTION
	useEffect(() => {
		setAttributes({ sectionId: clientId });
	}, []);

	let TERMSQUERY;
	let variables = {};

	// CATEGORIES
	if (typeOfTerm === "category") {
		if (option === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(termsNumber),
			};
			TERMSQUERY = TERMSQUERY_FILTER;
		} else {
			variables = {
				termTaxonomId: (categories || []).map((item) => item.value),
			};
			TERMSQUERY = TERMSQUERY_SPECIFIC;
		}
	}

	// TAGS;
	if (typeOfTerm === "tag") {
		if (option === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(termsNumber),
			};
			TERMSQUERY = TERMSQUERY_FILTER_TAGS;
		} else {
			variables = { termTaxonomId: (tags || []).map((item) => item.value) };
			TERMSQUERY = TERMSQUERY_SPECIFIC_TAGS;
		}
	}

	const { loading, error, data } = TERMSQUERY
		? useQuery(TERMSQUERY, { variables })
		: {};

	const termsLists = data?.tags?.edges || data?.categories?.edges || [];

	const renderFilterPostsContent = () => {
		if (option === "by_term_specific") {
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
						onChange={(termsNumber) => {
							setAttributes({ termsNumber: Number(termsNumber) });
						}}
						min={1}
						max={30}
						shiftStep={10}
						value={termsNumber}
					/>
				</div>
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
					label={__("Choose type of term card", "ncmaz-core")}
					value={termCardName}
					options={[
						{ label: "Term card 2", value: "card2" },
						{ label: "Term card 3", value: "card3" },
						{ label: "Term card 4", value: "card4" },
						{ label: "Term card 5", value: "card5" },
					]}
					onChange={(termCardName) => setAttributes({ termCardName })}
				/>

				<SelectControl
					label={__("Choose items per row", "ncmaz-core")}
					value={gridClass}
					options={[
						{
							label: "1 - sm:2 - md:3 - lg:4 - xl:5",
							value:
								"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
						},
						{
							label: "1 - sm:2 - md:2 - lg:3 - xl:4",
							value:
								"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
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
				<div>
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
										label="Term query by"
										selected={option}
										options={[
											{
												label: "Select term by term specific",
												value: "by_term_specific",
											},
											{ label: "Select term by filter", value: "by_filter" },
										]}
										onChange={(option) => setAttributes({ option })}
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
				<SectionGridCategoryBox
					heading={heading}
					subHeading={subHeading}
					categoryCardType={termCardName}
					categories={termsLists}
					gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
					headingCenter={blockLayoutType === "type-2"}
				/>
			</div>
		);
		return (
			<div className="grid grid-cols-3 gap-5">
				{termsLists.map(({ node }) => (
					<div key={node.id} className="flex items-center space-x-2">
						<span
							className={"w-5 h-5"}
							style={{ backgroundColor: node.ncTaxonomyMeta.color }}
						></span>
						<span>{node.name}</span>
					</div>
				))}
			</div>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSettings()}

			{renderPreviewContent()}

			{loading && "LOADING ....."}
			{error && (
				<pre className="text-xs text-red-500">
					<code>{JSON.stringify(error)}</code>
				</pre>
			)}
		</div>
	);
}