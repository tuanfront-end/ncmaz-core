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
import WidgetAuthors from "../frontend-components/WidgetAuthors/WidgetAuthors";
import {
	GQL_QUERY_GET_USERS_BY_FILTER,
	GQL_QUERY_GET_USERS_BY_SPECIFIC,
} from "../contains/contants";

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
		variables = { include: userIds.map((item) => item.value) };
		GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_SPECIFIC;
		GQL_QUERY__string_xxx = "GQL_QUERY_GET_USERS_BY_SPECIFIC";
	} else {
		GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_FILTER;
		GQL_QUERY__string_xxx = "GQL_QUERY_GET_USERS_BY_FILTER";
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
		return <WidgetAuthors heading={heading} authors={usersList} />;
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
