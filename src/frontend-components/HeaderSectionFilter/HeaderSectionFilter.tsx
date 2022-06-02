import React, { FC } from "react";
import { ReactNode } from "react";
import Heading from "../Heading/Heading";
import Nav from "../Nav/Nav";
import NavItem from "../NavItem/NavItem";
import ButtonSecondary from "../Button/ButtonSecondary";

interface HeaderSectionFilterProps {
	tabActiveId: number;
	tabs: HeaderSectionFilterTabs[];
	subHeading: string;
	heading: string;
	viewMoreHref?: string;
	onClickTab: TypeOnClickTabHeaderSectionFilterTabs;
}

export type TypeOnClickTabHeaderSectionFilterTabs = (
	tab: HeaderSectionFilterTabs | -1
) => void;

export interface HeaderSectionFilterTabs {
	id: number;
	name: string;
}

const HeaderSectionFilter: FC<HeaderSectionFilterProps> = ({
	tabActiveId = -1,
	tabs,
	subHeading = "",
	viewMoreHref = "#",
	heading = "🎈 Latest Articles",
	onClickTab,
}) => {
	return (
		<div className="flex flex-col mb-8 relative">
			<Heading desc={subHeading}>{heading}</Heading>
			<div className="flex items-center justify-between">
				<Nav
					className="sm:space-x-2"
					containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
				>
					<NavItem isActive={tabActiveId === -1} onClick={() => onClickTab(-1)}>
						All
					</NavItem>
					{tabs.map((item, index) => (
						<NavItem
							key={index}
							isActive={tabActiveId === item.id}
							onClick={() => onClickTab(item)}
						>
							{item.name}
						</NavItem>
					))}
				</Nav>
				{viewMoreHref && (
					<span className="hidden sm:block flex-shrink-0">
						<ButtonSecondary href={viewMoreHref} className="!leading-none">
							<span>View all</span>
							<i className="ml-3 las la-arrow-right text-xl leading-none"></i>
						</ButtonSecondary>
					</span>
				)}
			</div>
		</div>
	);
};

export default HeaderSectionFilter;
