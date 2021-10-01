const GQL = `edges {
    node {
        id
        count
        name
        categoryId
        description
        link
        ncTaxonomyMeta {
            color
            featuredImage {
                id
                sourceUrl
            }
        }
    }
}`;

const GQLtag = `edges {
    node {
        id
        count
        name
        tagId
        description
        link
        ncTaxonomyMeta {
            color
            featuredImage {
                id
                sourceUrl
            }
        }
    }
}`;

const TERMS_QUERY_FILTER__string = `
	query MyQuery(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = ""
		$before: String = ""
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) {
		${GQL}
		}
	}
`;

const TERMS_QUERY_SPECIFIC__string = `
	query MyQuery($termTaxonomId: [ID] = "") {
		categories(where: { termTaxonomId: $termTaxonomId }) {
            ${GQL}
		}
	}
`;

//
const TERMS_QUERY_FILTER_TAGS__string = `
	query MyQuery(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = ""
		$before: String = ""
		$first: Int = 10
		$last: Int = null
	) {
		tags(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) {
		${GQLtag}
		}
	}
`;

const TERMS_QUERY_SPECIFIC_TAGS__string = `
	query MyQuery($termTaxonomId: [ID] = "") {
		tags(where: { termTaxonomId: $termTaxonomId }) {
            ${GQLtag}
		}
	}
`;

export {
	TERMS_QUERY_FILTER__string,
	TERMS_QUERY_SPECIFIC__string,
	TERMS_QUERY_FILTER_TAGS__string,
	TERMS_QUERY_SPECIFIC_TAGS__string,
};
