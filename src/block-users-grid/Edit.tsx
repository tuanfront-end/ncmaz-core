import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	FormToggle,
	SelectControl,
	Spinner,
	RangeControl,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrder from "../components/SelectOrder";
import InputSearchAuthors from "../components/InputSearchAuthors";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import Select from "react-select";
import SectionGridAuthorBox from "../frontend-components/SectionGridAuthorBox/SectionGridAuthorBox";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";
import { EditProps } from "../block-magazine/Edit";
import useUserGqlQuery from "../hooks/useUserGqlQuery";

export interface BlockUserAttributesCommon {
	filterDataBy: ValueOfOptionFilterDataBy;
	numberPerPage: number;
	orderBy: string;
	order: string;
	userIds: any[];
	roleIn: any[];
	blockLayoutStyle: "layout-1" | "layout-2";
	userCardName: string;
	heading: string;
	subHeading: string;
	hasBackground: boolean;
	graphQLvariables: Record<string, any>;
	graphQLData: Record<string, any>;
	expectedNumberResults: number;
}

interface Props extends BlockUserAttributesCommon {
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
		userIds,
		roleIn,
		//
		blockLayoutStyle,
		userCardName,
		heading,
		subHeading,
		hasBackground,
		gridClass,
		gridClassCustom,
	} = attributes;

	//
	const {
		GQL_QUERY__string_text,
		data,
		dataLists,
		error,
		loading,
		variables,
	} = useUserGqlQuery(attributes);
	const usersList = dataLists;
	// ---- SAVE graphQLvariables ----
	useEffect(() => {
		if (!data) return;
		setAttributes({
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string_text,
			},
			expectedNumberResults: usersList.length || numberPerPage,
		});
	}, [data]);

	//
	const handleChangeFilterDataBy = (value: ValueOfOptionFilterDataBy) => {
		setAttributes({ filterDataBy: value });

		if (value === "by_filter") {
			setAttributes({ userIds: [] });
		}
	};
	//

	const renderFilterPostsContent = () => {
		if (filterDataBy === "by_specific") {
			return (
				<InputSearchAuthors
					defaultValue={userIds}
					onChange={(userIds) => setAttributes({ userIds })}
				/>
			);
		}

		return (
			<div className="w-full space-y-2.5">
				<div className="w-full space-y-1">
					<legend>{__("Choose user role-in", "ncmaz-core")}</legend>
					<Select
						placeholder="Select authors..."
						isMulti
						value={roleIn}
						options={[
							{ label: "ADMINISTRATOR", value: "ADMINISTRATOR" },
							{ label: "AUTHOR", value: "AUTHOR" },
							{ label: "CONTRIBUTOR", value: "CONTRIBUTOR" },
							{ label: "EDITOR", value: "EDITOR" },
							{ label: "SUBSCRIBER", value: "SUBSCRIBER" },
						]}
						onChange={(roleIn: any) => setAttributes({ roleIn })}
					/>
				</div>

				<SelectControl
					label={__("OrderBy", "ncmaz-core")}
					value={orderBy}
					options={[
						{ label: "DISPLAY_NAME", value: "DISPLAY_NAME" },
						{ label: "EMAIL", value: "EMAIL" },
						{ label: "NICE_NAME", value: "NICE_NAME" },
						{ label: "REGISTERED", value: "REGISTERED" },
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
					label={__("Choose type of user card", "ncmaz-core")}
					value={userCardName}
					options={[
						{ label: "User card 1", value: "card1" },
						{ label: "User card 2", value: "card2" },
					]}
					onChange={(userCardName) => {
						setAttributes({ userCardName });
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
							label: "Phone(1)/Tab(2)/Lap(3)/OTHER(4)",
							value:
								"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						},
						{
							label: "Phone(1)/Tab(2,3)/Lap(4)/OTHER(5)",
							value:
								"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
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
								<RadioControl
									label="Users query by"
									selected={filterDataBy}
									options={OPTIONS_FILTER_DATA_BY}
									onChange={handleChangeFilterDataBy}
								/>
							</PanelRow>
							<div className="border-b border-gray-600 mt-3 mb-4 "></div>
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

				<SectionGridAuthorBox
					blockLayoutStyle={blockLayoutStyle}
					userCardName={userCardName}
					heading={heading}
					subHeading={subHeading}
					authors={usersList}
					gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
				/>

				{/* --------------------- */}
				<div className="relative">
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!usersList.length && !loading && <EmptyState />}
				</div>
				{/* --------------------- */}
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
