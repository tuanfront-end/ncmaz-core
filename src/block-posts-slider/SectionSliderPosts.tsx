import React, { useRef, FC } from "react";
import HeaderSectionFilter, {
	HeaderSectionFilterTabs,
} from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import Heading from "../frontend-components/Heading/Heading";
import Card4 from "../frontend-components/Card4/Card4";
import Card7 from "../frontend-components/Card7/Card7";
import Card9 from "../frontend-components/Card9/Card9";
import Card10 from "../frontend-components/Card10/Card10";
import Card10V2 from "../frontend-components/Card10/Card10V2";
import Card11 from "../frontend-components/Card11/Card11";
import Card14 from "../frontend-components/Card14/Card14";
import NextPrev from "../frontend-components/NextPrev/NextPrev";
import useSliderGlidejs from "../hooks/useSliderGlidejs";
import { ListPosts } from "../hooks/usePostGqlQuery";
import { BlockPostsSliderEditAttributes } from "./Edit";

interface SectionSliderPostsProps extends BlockPostsSliderEditAttributes {
	className?: string;
	listData?: ListPosts["edges"];
	handleClickTab?: (tab: -1 | HeaderSectionFilterTabs) => void;
	loading: boolean;
	tabActiveId: number;
}

const SectionSliderPosts: FC<SectionSliderPostsProps> = ({
	className = "",
	listData = [],
	loading,
	tabActiveId,
	handleClickTab,
	//
	postCardName,
	blockLayoutStyle,
	heading,
	subHeading,
	categories,
	viewMoreHref,
	showFilterTab,
	//
	itemPerView,
	sliderStartAt,
	sliderAutoplayTime,
	sliderHoverpause,
	sliderAnimationDuration,
	sliderRewind,
}) => {
	const sliderRef = useRef(null);

	useSliderGlidejs({
		sliderRef,
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		listData,
	});

	const enableNexPrevOnFoot = blockLayoutStyle === "layout-2" || showFilterTab;

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

	return (
		<div className={`${className}`} ref={sliderRef}>
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
