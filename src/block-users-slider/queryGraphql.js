import { gql } from "@apollo/client";

const GQLcommon = `edges {
	node {
		id
		name
		username
		userId
		url
		uri
		ncUserMeta {
			color
			ncBio
			featuredImage {
				sourceUrl
				id
			}
			backgroundImage {
				sourceUrl
			}
		}
	}
}`;

const USERS_QUERY_FILTER__string = `query MyQuery(
	$after: String = ""
	$before: String = ""
	$first: Int = 10
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME
	$order: OrderEnum = ASC
	$roleIn: [UserRoleEnum] = []
) {
	users(
		where: { orderby: { field: $field, order: $order }, roleIn: $roleIn }
		last: $last
		first: $first
		before: $before
		after: $after
	) {
		${GQLcommon}
	}
}`;

const USERS_QUERY_SPECIFIC__string = `query MyQuery($include: [Int] = null) {
	users(where: { include: $include }) {
		${GQLcommon}
	}
}`;

export { USERS_QUERY_FILTER__string, USERS_QUERY_SPECIFIC__string };
