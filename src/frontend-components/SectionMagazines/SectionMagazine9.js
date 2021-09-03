import React, { FC } from "react";
import Card15Podcast from "../Card15Podcast/Card15Podcast";
import Card9 from "../Card9/Card9";

const SectionMagazine9 = ({ activePosts, isLoading }) => {
	return (
		<div>
			<div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`}>
				{activePosts[0] && (
					<Card9
						isSkeleton={isLoading}
						ratio="aspect-w-4 aspect-h-3 "
						post={activePosts[0].node}
					/>
				)}
				{activePosts[1] && (
					<Card9
						isSkeleton={isLoading}
						ratio="aspect-w-4 aspect-h-3 "
						post={activePosts[1].node}
					/>
				)}
				{activePosts[2] && (
					<Card9
						isSkeleton={isLoading}
						ratio="aspect-w-4 aspect-h-3 "
						post={activePosts[2].node}
					/>
				)}
			</div>
			<div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8`}>
				{activePosts
					.filter((_, i) => i > 2)
					.map((p) => (
						<Card15Podcast
							isSkeleton={isLoading}
							key={p.node.id}
							post={p.node}
						/>
					))}
			</div>
		</div>
	);
};

export default SectionMagazine9;
