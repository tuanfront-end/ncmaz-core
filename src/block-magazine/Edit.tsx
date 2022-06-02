import React, { lazy, Suspense } from "react";
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
	RadioControl,
	FormToggle,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputNumberPerPage from "../components/InputNumberPerPage";
import InputSearchAuthors from "../components/InputSearchAuthors";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import HeaderSectionFilter from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import Heading from "../frontend-components/Heading/Heading";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import usePostGqlQuery from "../hooks/usePostGqlQuery";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";

const SectionMagazine1Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine1")
);
const SectionMagazine2Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine2")
);
const SectionMagazine3Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine3")
);
const SectionMagazine4Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine4")
);
const SectionMagazine5Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine5")
);
const SectionMagazine6Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine6")
);
const SectionMagazine7Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine7")
);
const SectionMagazine8Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine8")
);
const SectionMagazine9Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine9")
);
const SectionLargeSliderLazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionLargeSlider")
);

export interface BlockPostAttributesCommon {
	sectionName: string;
	heading: string;
	subHeading: string;
	filterDataBy: ValueOfOptionFilterDataBy;
	posts: any[];
	categories: any[];
	tags: any[];
	authors: any[];
	orderBy: string;
	order: string;
	viewMoreHref: string;
	numberPerPage: number;
	showFilterTab: boolean;
	hasBackground: boolean;
	graphQLvariables: Record<string, any>;
	graphQLData: Record<string, any>;
	expectedNumberResults: number;
}

export type EditProps<T> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
};

export default function BlockMagazineEdit(
	props: EditProps<BlockPostAttributesCommon>
) {
	const { attributes, setAttributes } = props;

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
	} = attributes;

	const {
		GQL_QUERY__string,
		GQL_QUERY__string_text,
		variables,
		dataLists,
		error,
		loading,
		data,
		tabActiveId,
		handleClickTab,
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

	//
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

	const renderLayoutType = () => {
		switch (sectionName) {
			case "magazine-1":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine1Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-2":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine2Lazy isLoading={loading} activePosts={dataLists} />{" "}
					</Suspense>
				);
			case "magazine-3":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine3Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-4":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine4Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-5":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine5Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-6":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine6Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-7":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine7Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-8":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine8Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-9":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine9Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
			case "large-slider":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionLargeSliderLazy
							isLoading={loading}
							activePosts={dataLists}
						/>
					</Suspense>
				);

			default:
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine1Lazy isLoading={loading} activePosts={dataLists} />
					</Suspense>
				);
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
