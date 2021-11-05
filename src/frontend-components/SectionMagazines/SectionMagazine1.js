import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";

const SectionMagazine1 = ({ activePosts, isLoading }) => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
				{activePosts[0] && (
					<Card2
						isSkeleton={isLoading}
						size="large"
						post={activePosts[0].node}
					/>
				)}
				<div className="grid grid-cols-1 gap-6 md:gap-8">
					{activePosts
						.filter((_, i) => i < 4 && i > 0)
						.map((item, index) => (
							<Card6 isSkeleton={isLoading} key={index} post={item.node} />
						))}
				</div>
			</div>
		</div>
	);
};

export default SectionMagazine1;
