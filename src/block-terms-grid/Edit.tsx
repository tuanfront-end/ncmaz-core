import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	FormToggle,
	SelectControl,
	RangeControl,
	Spinner,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrder from "../components/SelectOrder";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "../frontend-components/SectionGridCategoryBox/SectionGridCategoryBox";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import { BlockTermAttributesCommon } from "../block-terms-slider/Edit";
import { EditProps } from "../block-magazine/Edit";
import useTermGqlQuery from "../hooks/useTermGqlQuery";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";

interface Props extends BlockTermAttributesCommon {
	gridClass: string;
	gridClassCustom: string;
}

export default function Edit(props: EditProps<Props>) {
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
		gridClass,
		gridClassCustom,
		//
	} = attributes;

	//
	const {
		GQL_QUERY__string,
		GQL_QUERY__string_text,
		data,
		dataLists,
		error,
		loading,
		variables,
	} = useTermGqlQuery(attributes);

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
	//
	const handleChangeFilterDataBy = (value: ValueOfOptionFilterDataBy) => {
		setAttributes({ filterDataBy: value });

		if (value === "by_filter") {
			setAttributes({ categories: [], tags: [] });
		}
	};
	const handleChangeRadioTypeOfTerm = (typeOfTerm: "category" | "tag") => {
		setAttributes({ typeOfTerm });
		if (typeOfTerm === "category") {
			setAttributes({ tags: [] });
		}
		if (typeOfTerm === "tag") {
			setAttributes({ categories: [] });
		}
	};

	//

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
					<RangeControl
						onChange={(numberPerPage) =>
							setAttributes({ numberPerPage: numberPerPage })
						}
						min={4}
						max={30}
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
						{ label: "Term card 1", value: "card1" },
						{ label: "Term card 2", value: "card2" },
						{ label: "Term card 3", value: "card3" },
						{ label: "Term card 4", value: "card4" },
						{ label: "Term card 5", value: "card5" },
					]}
					onChange={(termCardName) => {
						setAttributes({ termCardName });
					}}
				/>

				<SelectControl
					label={__("Choose items per row", "ncmaz-core")}
					value={gridClass}
					help={__(
						`xs: mobile, sm: tablet, lg: laptop, xl: desktop (https://tailwindcss.com/docs/responsive-design)`,
						"ncmaz-core"
					)}
					options={[
						{
							label: "Phone(1)/Tab(2,3)/Lap(4)/OTHER(5)",
							value:
								"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
						},
						{
							label: "Phone(1)/Tab(2)/Lap(3)/OTHER(4)",
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
							`If you enter this field will overwrite the field "Choose items per row" above, (https://tailwindcss.com/docs/responsive-design)`,
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
										onChange={handleChangeRadioTypeOfTerm}
									/>
									<div className="border-b border-gray-600 my-2"></div>
									<RadioControl
										label="Terms query by"
										selected={filterDataBy}
										options={OPTIONS_FILTER_DATA_BY}
										onChange={handleChangeFilterDataBy}
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
					categories={dataLists}
					gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
					headingCenter={blockLayoutStyle === "layout-1"}
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
