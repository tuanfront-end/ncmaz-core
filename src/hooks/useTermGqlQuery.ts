import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
	GQL_QUERY_GET_CATEGORIES_BY_FILTER,
	GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
	GQL_QUERY_GET_TAGS_BY_FILTER,
	GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "../contains/contants";
import { BlockTermAttributesCommon } from "../block-terms-slider/Edit";

export interface ListTermsGQLResultData {
	categories?: ListTerms;
	tags?: ListTerms;
}

export interface ListTerms {
	edges: CategoriesEdge2[];
}

export interface CategoriesEdge2 {
	node: CategoriesNode3;
	__typename: string;
}

export interface CategoriesNode3 {
	id: string;
	link: string;
	name: string;
	uri: string;
	slug: string;
	count: number;
	categoryId: number;
	ncTaxonomyMeta: NcTaxonomyMeta;
	__typename: string;
}

export interface NcTaxonomyMeta {
	color?: string;
	featuredImage?: {
		id: string;
		sourceUrl: string;
	};
}

export default function useTermGqlQuery(attributes: BlockTermAttributesCommon) {
	const {
		filterDataBy,
		numberPerPage,
		order,
		orderBy,
		typeOfTerm,
		categories,
		tags,
	} = attributes;
	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_text = "";
	let variables = {};
	//

	// CATEGORIES
	if (typeOfTerm === "category") {
		if (filterDataBy === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(numberPerPage),
			};
			GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_FILTER;
			GQL_QUERY__string_text = "GQL_QUERY_GET_CATEGORIES_BY_FILTER";
		} else {
			variables = {
				termTaxonomId: (categories || []).map((item) => item.value),
			};
			GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
			GQL_QUERY__string_text = "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC";
		}
	}

	// TAGS;
	if (typeOfTerm === "tag") {
		if (filterDataBy === "by_filter") {
			variables = {
				order,
				orderby: orderBy,
				first: Number(numberPerPage),
			};
			GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_FILTER;
			GQL_QUERY__string_text = "GQL_QUERY_GET_TAGS_BY_FILTER";
		} else {
			variables = { termTaxonomId: (tags || []).map((item) => item.value) };
			GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_SPECIFIC;
			GQL_QUERY__string_text = "GQL_QUERY_GET_TAGS_BY_SPECIFIC";
		}
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery<ListTermsGQLResultData>(gqlQuery, {
		variables,
	});

	const dataLists = data?.tags?.edges || data?.categories?.edges || [];

	return {
		GQL_QUERY__string, // for debug
		GQL_QUERY__string_text,
		variables,
		loading,
		error,
		data,
		dataLists,
	};
}
