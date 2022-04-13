import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card11 from "../Card11/Card11";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import Card9 from "../Card9/Card9";
import Card8 from "../Card8/Card8";
import Card12 from "../Card12/Card12";
import Card13 from "../Card13/Card13";

const SectionMagazine5 = ({ activePosts, isLoading }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
			{activePosts[0] && (
				<Card12 isSkeleton={isLoading} post={activePosts[0].node} />
			)}
			<div className="grid grid-cols-1 gap-5 md:gap-7">
				{activePosts
					.filter((_, i) => i < 4 && i > 0)
					.map((item, index) => (
						<Card13 isSkeleton={isLoading} key={index} post={item.node} />
					))}
			</div>
		</div>
	);
};

export default SectionMagazine5;
