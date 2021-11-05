import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card10V3 from "../Card10/Card10V3";
import Card10 from "../Card10/Card10";

const SectionMagazine7 = ({ activePosts, isLoading }) => {
	return (
		<div className={`grid grid-cols-1 gap-6 md:gap-8`}>
			<div className={`grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2`}>
				{activePosts[0] && (
					<Card10V3 isSkeleton={isLoading} post={activePosts[0].node} />
				)}
				{activePosts[1] && (
					<Card10V3
						isSkeleton={isLoading}
						galleryType={2}
						post={activePosts[1].node}
					/>
				)}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
				{activePosts
					.filter((_, i) => i > 1)
					.map((post) => (
						<Card10
							isSkeleton={isLoading}
							key={post.node.id}
							post={post.node}
						/>
					))}
			</div>
		</div>
	);
};

export default SectionMagazine7;
