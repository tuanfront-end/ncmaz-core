import React, { FC } from "react";
import HeaderSectionFilter, {
	TypeOnClickTabHeaderSectionFilterTabs,
} from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
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

interface SectionGridPostsProps {
	blockLayoutStyle: string;
	heading: string;
	subHeading: string;
	listPosts: any[];
	gridClassCustom: string;
	gridClass: string;
	showFilterTab: boolean;
	viewMoreHref: string;
	categories: any[];
	postCardName: string;
	hasBackground: boolean;
	loading: boolean;
	tabActiveId: number;
	handleClickTab: TypeOnClickTabHeaderSectionFilterTabs;
}

const SectionGridPosts: FC<SectionGridPostsProps> = ({
	blockLayoutStyle,
	heading,
	subHeading,
	listPosts = [],
	gridClassCustom,
	gridClass,
	showFilterTab,
	viewMoreHref,
	categories = [],
	postCardName,
	hasBackground,
	//
	loading,
	tabActiveId,
	handleClickTab,
}) => {
	const renderHeading = () => {
		if (blockLayoutStyle === "layout-1") {
			return <Heading desc={subHeading}>{heading}</Heading>;
		}
		return (
			<Heading desc={subHeading} isCenter>
				{heading}
			</Heading>
		);
	};

	const renderCard = (post) => {
		switch (postCardName) {
			case "card3":
				return (
					<Card3
						key={post.id}
						isSkeleton={loading}
						className="p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"
						post={post}
					/>
				);
			case "card4":
				return <Card4 key={post.id} isSkeleton={loading} post={post} />;
			case "card7":
				return (
					<Card7
						key={post.id}
						post={post}
						isSkeleton={loading}
						ratio="aspect-w-5 aspect-h-5"
					/>
				);
			case "card9":
				return <Card9 key={post.id} isSkeleton={loading} post={post} />;
			case "card10":
				return <Card10 key={post.id} isSkeleton={loading} post={post} />;
			case "card10V2":
				return <Card10V2 key={post.id} isSkeleton={loading} post={post} />;
			case "card11":
				return <Card11 key={post.id} isSkeleton={loading} post={post} />;
			case "card14":
				return <Card14 key={post.id} isSkeleton={loading} post={post} />;
			case "card15Podcast":
				return <Card15Podcast key={post.id} isSkeleton={loading} post={post} />;
			default:
				return null;
		}
	};

	return (
		<div className={"relative"}>
			{showFilterTab ? (
				<HeaderSectionFilter
					tabs={categories}
					viewMoreHref={viewMoreHref}
					heading={heading}
					subHeading={subHeading}
					onClickTab={handleClickTab}
					tabActiveId={tabActiveId}
				/>
			) : (
				renderHeading()
			)}
			<div
				className={`grid gap-6 md:gap-8 ${
					!!gridClassCustom ? gridClassCustom : gridClass
				}`}
			>
				{listPosts?.map((post) => renderCard(post.node))}
			</div>
		</div>
	);
};

export default SectionGridPosts;
