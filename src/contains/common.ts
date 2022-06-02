export type ValueOfOptionFilterDataBy = "by_filter" | "by_specific";

export interface OptionFilterDataBy {
	label: string;
	value: ValueOfOptionFilterDataBy;
}

const OPTIONS_FILTER_DATA_BY: OptionFilterDataBy[] = [
	{ label: "Select posts by specific", value: "by_specific" },
	{ label: "Select posts by filter", value: "by_filter" },
];

export { OPTIONS_FILTER_DATA_BY };
