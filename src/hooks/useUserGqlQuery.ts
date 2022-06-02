import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
	GQL_QUERY_GET_USERS_BY_FILTER,
	GQL_QUERY_GET_USERS_BY_SPECIFIC,
} from "../contains/contants";
import { BlockUserAttributesCommon } from "../block-users-grid/Edit";

export interface ListUsersGQLResultData {
	users: Users;
}

export interface Users {
	edges: Edge[];
	__typename: string;
}
export interface Edge {
	node: AuthorNode;
	__typename: string;
}

// COPY tu ncmaz-frontend nen type nay co the khong chinh xac hoan toan
export interface AuthorNode {
	id: string;
	name: string;
	avatar?: any;
	ncUserMeta: any;
	url: string;
	uri: string;
	username: string;
	description?: string;
	userId: number;
	posts?: {
		pageInfo: {
			total: number;
		};
	};
}

export default function useUserGqlQuery(attributes: BlockUserAttributesCommon) {
	const {
		filterDataBy,
		numberPerPage,
		order,
		orderBy,
		userIds,
		roleIn,
	} = attributes;
	//
	let GQL_QUERY__string = "";
	let GQL_QUERY__string_text = "";
	let variables = {};
	//

	if (filterDataBy === "by_specific") {
		variables = { include: userIds.map((item) => item.value) };
		GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_SPECIFIC;
		GQL_QUERY__string_text = "GQL_QUERY_GET_USERS_BY_SPECIFIC";
	} else {
		GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_FILTER;
		GQL_QUERY__string_text = "GQL_QUERY_GET_USERS_BY_FILTER";
		variables = {
			first: numberPerPage,
			field: orderBy,
			order: order,
			roleIn: roleIn.map((item) => item.value),
		};
	}

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const { loading, error, data } = useQuery<ListUsersGQLResultData>(gqlQuery, {
		variables,
	});

	const dataLists = data?.users?.edges || [];

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
