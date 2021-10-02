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
import {
	USERS_QUERY_FILTER__string,
	USERS_QUERY_SPECIFIC__string,
} from "./queryGraphql";
import EmptyState from "../frontend-components/EmptyState/EmptyState";

export default function Edit(props) {
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
		itemPerView,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
	} = attributes;

	//
	let GQL_QUERY__string = USERS_QUERY_FILTER__string;
	let variables = {};
	//

	if (filterDataBy === "by_specific") {
		variables = { include: userIds.map((item) => item.value) };
		GQL_QUERY__string = USERS_QUERY_SPECIFIC__string;
	} else {
		GQL_QUERY__string = USERS_QUERY_FILTER__string;
		variables = {
			first: numberPerPage,
			field: orderBy,
			order: order,
			roleIn: roleIn.map((item) => item.value),
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery(gqlQuery, { variables });

	const usersList = data?.users?.edges || [];

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
						onChange={(roleIn) => setAttributes({ roleIn })}
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
								<RadioControl
									label="Users query by"
									selected={filterDataBy}
									options={[
										{ label: "Select users specific", value: "by_specific" },
										{ label: "Select users by filter", value: "by_filter" },
									]}
									onChange={(filterDataBy) => setAttributes({ filterDataBy })}
								/>
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
			<div className={hasBackground ? "py-16 " : ""}>
				{hasBackground && <BackgroundSection />}

				<SectionSliderNewAuthors
					blockLayoutStyle={blockLayoutStyle}
					userCardName={userCardName}
					uniqueClass={clientId}
					heading={heading}
					subHeading={subHeading}
					authors={usersList}
					perView={itemPerView}
				/>

				<div className="relative">
					{/* --------------------- */}
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!usersList.length && !loading && <EmptyState />}
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
