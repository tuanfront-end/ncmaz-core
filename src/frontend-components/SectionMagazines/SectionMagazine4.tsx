import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card11 from "../Card11/Card11";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import Card9 from "../Card9/Card9";
import Card8 from "../Card8/Card8";

const SectionMagazine4 = ({ activePosts, isLoading }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
			{activePosts[0] && (
				<Card8
					isSkeleton={isLoading}
					className="sm:col-span-2"
					post={activePosts[0].node}
				/>
			)}
			{activePosts
				.filter((_, i) => i < 3 && i >= 1)
				.map((item, index) => (
					<Card9 isSkeleton={isLoading} key={index} post={item.node} />
				))}
			{activePosts
				.filter((_, i) => i < 5 && i >= 3)
				.map((item, index) => (
					<Card9 isSkeleton={isLoading} key={index} post={item.node} />
				))}
			{activePosts[5] && (
				<Card8
					isSkeleton={isLoading}
					className="sm:col-span-2"
					post={activePosts[5].node}
				/>
			)}
		</div>
	);
};

export default SectionMagazine4;
