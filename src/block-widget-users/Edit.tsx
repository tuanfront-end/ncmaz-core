import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	SelectControl,
	Spinner,
	RangeControl,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrder from "../components/SelectOrder";
import InputSearchAuthors from "../components/InputSearchAuthors";
import Select from "react-select";
import WidgetAuthors from "../frontend-components/WidgetAuthors/WidgetAuthors";
import { BlockUserAttributesCommon } from "../block-users-grid/Edit";
import { EditProps } from "../block-magazine/Edit";
import useUserGqlQuery from "../hooks/useUserGqlQuery";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";

interface Props extends BlockUserAttributesCommon {}

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
		heading,
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
									options={OPTIONS_FILTER_DATA_BY}
									onChange={handleChangeFilterDataBy}
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
