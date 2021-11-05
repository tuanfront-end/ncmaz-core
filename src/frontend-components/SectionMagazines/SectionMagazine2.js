import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card11 from "../Card11/Card11";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";

const SectionMagazine2 = ({ activePosts, isLoading }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			<div className="grid grid-cols-1 gap-6">
				{activePosts
					.filter((_, i) => i < 3 && i > 0)
					.map((item, index) => {
						return (
							<Card11
								isSkeleton={isLoading}
								ratio="aspect-w-5 aspect-h-3"
								key={index}
								post={item.node}
							/>
						);
					})}
			</div>
			<div className="lg:col-span-2">
				{activePosts[0] && (
					<Card2
						isSkeleton={isLoading}
						size="large"
						post={activePosts[0].node}
					/>
				)}
			</div>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
				{activePosts
					.filter((_, i) => i < 5 && i >= 3)
					.map((item, index) => {
						return (
							<Card11
								isSkeleton={isLoading}
								ratio="aspect-w-5 aspect-h-3"
								key={index}
								post={item.node}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default SectionMagazine2;
