import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card11 from "../Card11/Card11";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import Card9 from "../Card9/Card9";

const SectionMagazine3 = ({ activePosts, isLoading }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
			{activePosts[0] && (
				<Card2 isSkeleton={isLoading} size="large" post={activePosts[0].node} />
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
				{activePosts
					.filter((_, i) => i < 5 && i >= 1)
					.map((item, index) => (
						<Card9
							isSkeleton={isLoading}
							ratio="aspect-w-3 aspect-h-3"
							key={index}
							post={item.node}
						/>
					))}
			</div>
		</div>
	);
};

export default SectionMagazine3;
