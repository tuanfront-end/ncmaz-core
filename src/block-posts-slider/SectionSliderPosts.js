import React, { useEffect, useState } from "react";
import HeaderSectionFilter from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import Heading from "../frontend-components/Heading/Heading";
import Card3 from "../frontend-components/Card3/Card3";
import Card4 from "../frontend-components/Card4/Card4";
import Card7 from "../frontend-components/Card7/Card7";
import Card9 from "../frontend-components/Card9/Card9";
import Card10 from "../frontend-components/Card10/Card10";
import Card10V2 from "../frontend-components/Card10/Card10V2";
import Card11 from "../frontend-components/Card11/Card11";
import Card14 from "../frontend-components/Card14/Card14";
import Card15Podcast from "../frontend-components/Card15Podcast/Card15Podcast";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import Glide from "@glidejs/glide";
import NextPrev from "../frontend-components/NextPrev/NextPrev";
import ncNanoId from "../utils/ncNanoId";

const SectionSliderPosts = ({
	className = "",
	listData = [],
	itemPerView,
	postCardName,
	loading,
	blockLayoutStyle,
	tabActiveId,
	heading,
	subHeading,
	categories,
	viewMoreHref,
	hasBackground,
	showFilterTab,
	handleClickTab = () => {},
}) => {
	const UNIQUE_CLASS = "glide_" + ncNanoId();

	const enableNexPrevOnFoot = blockLayoutStyle === "layout-2" || showFilterTab;

	const perView = itemPerView;

	useEffect(() => {
		if (!listData) return;
		if (!listData.length) {
			return;
		}
		if (!document.querySelector(`.${UNIQUE_CLASS}`)) {
			return;
		}

		new Glide(`.${UNIQUE_CLASS}`, {
			direction:
				document.querySelector("html")?.getAttribute("dir") === "rtl"
					? "rtl"
					: "ltr",
			perView: perView,
			gap: 32,
			bound: true,
			breakpoints: {
				1280: {
					perView: perView - 1,
				},
				1023: {
					perView: perView - 2 || 1,
					gap: 24,
				},
				767: {
					perView: perView - 2 || 1,
					gap: 20,
				},
				639: {
					perView: 1,
					gap: 20,
				},
			},
		}).mount();
	}, [listData, itemPerView]);

	const renderPostComponent = (post) => {
		switch (postCardName) {
			case "card4":
				return (
					<Card4
						post={post}
						isSkeleton={loading}
						className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
					/>
				);
			case "card7":
				return <Card7 post={post} isSkeleton={loading} />;
			case "card9":
				return <Card9 isSkeleton={loading} post={post} />;
			case "card10":
				return <Card10 isSkeleton={loading} post={post} />;
			case "card10V2":
				return <Card10V2 isSkeleton={loading} post={post} />;
			case "card11":
				return (
					<Card11
						isSkeleton={loading}
						post={post}
						className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
					/>
				);
			case "card14":
				return <Card14 post={post} isSkeleton={loading} />;
			default:
				return (
					<Card4
						className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
						post={post}
						isSkeleton={loading}
					/>
				);
		}
	};

	const renderHeading = () => {
		if (blockLayoutStyle === "layout-1") {
			return (
				<Heading desc={subHeading} hasNextPrev>
					{heading}
				</Heading>
			);
		}
		return (
			<Heading desc={subHeading} isCenter>
				{heading}
			</Heading>
		);
	};

	const isBg = hasBackground;

	return (
		<div className={`${UNIQUE_CLASS}`}>
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
				renderHeading()
			)}
			<div className="glide__track" data-glide-el="track">
				<ul className="glide__slides">
					{listData.map((item, index) => (
						<li
							key={index}
							className={`glide__slide ${
								enableNexPrevOnFoot ? "pb-12 xl:pb-16" : ""
							}`}
						>
							{renderPostComponent(item.node)}
						</li>
					))}
				</ul>
			</div>

			{enableNexPrevOnFoot && (
				<NextPrev
					btnClassName="w-12 h-12"
					containerClassName="justify-center"
				/>
			)}
		</div>
	);
};

export default SectionSliderPosts;
