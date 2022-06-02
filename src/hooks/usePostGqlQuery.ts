import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { BlockPostAttributesCommon } from "../block-magazine/Edit";
import {
	GQL_QUERY_GET_POSTS_BY_FILTER,
	GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "../contains/contants";
import { HeaderSectionFilterTabs } from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";

export interface ListPostsGQLResultData {
	posts: ListPosts;
}

export interface ListPosts {
	edges: Post[];
}

interface Post {
	node: PostNode;
}

export interface PostNode {
	id: string;
	link: string;
	status: string;
	author?: any;
	categories?: any;
	commentCount?: any;
	date?: string;
	excerpt?: string;
	featuredImage?: any;
	postFormats?: string;
	postId: number;
	slug: string;
	title: string;
	ncPostMetaData: {
		favoriteButtonShortcode?: string;
		readingTimeShortcode?: string;
		viewsCount?: number;
		fieldGroupName: "ncPostMetaData";
	};
	__typename: string;
}

export default function usePostGqlQuery(attributes: BlockPostAttributesCommon) {
	const {
		filterDataBy,
		posts,
		categories,
		tags,
		orderBy,
		order,
		numberPerPage,
		authors,
	} = attributes;
	//
	const [tabActiveId, setTabActiveId] = useState(-1);

	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_text = "";
	let variables = {};
	let variablesUseNow;
	//

	if (filterDataBy === "by_specific") {
		variablesUseNow = null;
		variables = {
			// arr posts Slugs
			nameIn: posts?.map((item) => item.value) || [],
		};
		GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
		GQL_QUERY__string_text = "GQL_QUERY_GET_POSTS_BY_SPECIFIC";
	} else {
		GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
		GQL_QUERY__string_text = "GQL_QUERY_GET_POSTS_BY_FILTER";
		variables = {
			// term IDs
			categoryIn: categories?.map((item) => item.value) || [],
			tagIn: tags?.map((item) => item.value) || [],
			authorIn: authors?.map((item) => item.value) || [],
			order,
			field: orderBy,
			first: Number(numberPerPage),
		};
		variablesUseNow = {
			...variables,
			categoryIn:
				tabActiveId && tabActiveId !== -1
					? [tabActiveId]
					: categories?.map((item) => item.value) || [],
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery<ListPostsGQLResultData>(gqlQuery, {
		variables: variablesUseNow || variables,
	});

	const dataLists = data?.posts?.edges || [];

	//
	const handleClickTab = (tab: -1 | HeaderSectionFilterTabs) => {
		if (tab === -1) {
			setTabActiveId(tab);
			return;
		}
		if (tab.id === tabActiveId) {
			return;
		}
		setTabActiveId(tab.id);
	};

	return {
		GQL_QUERY__string, // for debug
		GQL_QUERY__string_text,
		variables,
		loading,
		error,
		data,
		dataLists,
		handleClickTab,
		tabActiveId,
	};
}
