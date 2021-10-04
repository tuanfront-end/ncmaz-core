import React from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import { useEffect, useState } from "@wordpress/element";
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
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import HeaderSectionFilter from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import Heading from "../frontend-components/Heading/Heading";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import SectionMagazine1 from "../frontend-components/SectionMagazines/SectionMagazine1";
import SectionMagazine2 from "../frontend-components/SectionMagazines/SectionMagazine2";
import SectionMagazine3 from "../frontend-components/SectionMagazines/SectionMagazine3";
import SectionMagazine4 from "../frontend-components/SectionMagazines/SectionMagazine4";
import SectionMagazine5 from "../frontend-components/SectionMagazines/SectionMagazine5";
import SectionMagazine6 from "../frontend-components/SectionMagazines/SectionMagazine6";
import SectionMagazine7 from "../frontend-components/SectionMagazines/SectionMagazine7";
import SectionMagazine8 from "../frontend-components/SectionMagazines/SectionMagazine8";
import SectionMagazine9 from "../frontend-components/SectionMagazines/SectionMagazine9";
import SectionLargeSlider from "../frontend-components/SectionMagazines/SectionLargeSlider";
import {
	GQL_QUERY_GET_POSTS_BY_FILTER,
	GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "../contains/contants";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;

	const [tabActiveId, setTabActiveId] = useState(-1);
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
		sectionName,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//
		graphQLvariables,
	} = attributes;

	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_xxx = "";
	let variables = {};
	let variablesUseNow;
	//

	if (filterDataBy === "by_specific") {
		variablesUseNow = null;
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
		variablesUseNow = {
			...variables,
			categoryIn:
				tabActiveId && tabActiveId !== -1
					? [tabActiveId]
					: categories?.map((item) => item.value) || [],
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery(gqlQuery, {
		variables: variablesUseNow || variables,
	});

	const dataLists = data?.posts?.edges || [];

	// ---- SAVE graphQLvariables ----
	useEffect(() => {
		if (!data) return;
		setAttributes({
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string_xxx,
			},
		});
	}, [data]);

	const handleClickTab = (item) => {
		if (item === -1) {
			setTabActiveId(item);
			return;
		}
		if (item.id === tabActiveId) {
			return;
		}
		setTabActiveId(item.id);
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
					label={__("Choose type of section", "ncmaz-core")}
					value={sectionName}
					options={[
						{ label: "Magazine 1", value: "magazine-1" },
						{ label: "Magazine 2", value: "magazine-2" },
						{ label: "Magazine 3", value: "magazine-3" },
						{ label: "Magazine 4", value: "magazine-4" },
						{ label: "Magazine 5", value: "magazine-5" },
						{ label: "Magazine 6", value: "magazine-6" },
						{ label: "Magazine 7", value: "magazine-7" },
						{ label: "Magazine 8", value: "magazine-8" },
						{ label: "Magazine 9", value: "magazine-9" },
						{ label: "Large slider", value: "large-slider" },
					]}
					onChange={(sectionName) => setAttributes({ sectionName })}
				/>

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

				{filterDataBy !== "by_specific" && (
					<div className="w-full space-x-3 flex ">
						<FormToggle
							checked={showFilterTab}
							onChange={() => setAttributes({ showFilterTab: !showFilterTab })}
							label={__("Show filter tab", "ncmaz-core")}
						/>
						<legend>{__("Show filter tab", "ncmaz-core")}</legend>
					</div>
				)}

				<TextControl
					label={__("View more href", "ncmaz-core")}
					value={viewMoreHref}
					type="url"
					onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
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

	const renderSidebarSetting = () => {
		return (
			<InspectorControls key="setting">
				<div className="z-10 relative" data-type="ncmaz-core/sidebar-settings">
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

	const renderLayoutType = () => {
		switch (sectionName) {
			case "magazine-1":
				return <SectionMagazine1 isLoading={loading} activePosts={dataLists} />;
			case "magazine-2":
				return <SectionMagazine2 isLoading={loading} activePosts={dataLists} />;
			case "magazine-3":
				return <SectionMagazine3 isLoading={loading} activePosts={dataLists} />;
			case "magazine-4":
				return <SectionMagazine4 isLoading={loading} activePosts={dataLists} />;
			case "magazine-5":
				return <SectionMagazine5 isLoading={loading} activePosts={dataLists} />;
			case "magazine-6":
				return <SectionMagazine6 isLoading={loading} activePosts={dataLists} />;
			case "magazine-7":
				return <SectionMagazine7 isLoading={loading} activePosts={dataLists} />;
			case "magazine-8":
				return <SectionMagazine8 isLoading={loading} activePosts={dataLists} />;
			case "magazine-9":
				return <SectionMagazine9 isLoading={loading} activePosts={dataLists} />;
			case "large-slider":
				return (
					<SectionLargeSlider isLoading={loading} activePosts={dataLists} />
				);

			default:
				return <SectionMagazine1 isLoading={loading} activePosts={dataLists} />;
		}
	};

	const renderContent = () => {
		const isBg = hasBackground;
		return (
			<div
				className={`nc-FactoryBlockMagazine relative ${isBg ? "py-16" : ""}  `}
			>
				{isBg && <BackgroundSection />}

				{showFilterTab ? (
					<HeaderSectionFilter
						tabActiveId={tabActiveId}
						tabs={categories}
						viewMoreHref={viewMoreHref}
						heading={heading}
						subHeading={subHeading}
						onClickTab={handleClickTab}
					/>
				) : (
					<Heading desc={subHeading}>{heading}</Heading>
				)}

				<div className="relative">
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}

					{!dataLists.length && !loading && <EmptyState />}
				</div>

				{renderLayoutType()}
			</div>
		);
	};
	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSetting()}

			{renderContent()}
		</div>
	);
}
