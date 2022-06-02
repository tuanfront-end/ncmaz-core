"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_block-widget-users_Edit_tsx"],{

/***/ "./src/block-widget-users/Edit.tsx":
/*!*****************************************!*\
  !*** ./src/block-widget-users/Edit.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SelectOrder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SelectOrder */ "./src/components/SelectOrder.tsx");
/* harmony import */ var _components_InputSearchAuthors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InputSearchAuthors */ "./src/components/InputSearchAuthors.tsx");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _frontend_components_WidgetAuthors_WidgetAuthors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frontend-components/WidgetAuthors/WidgetAuthors */ "./src/frontend-components/WidgetAuthors/WidgetAuthors.tsx");
/* harmony import */ var _hooks_useUserGqlQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useUserGqlQuery */ "./src/hooks/useUserGqlQuery.ts");
/* harmony import */ var _contains_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contains/common */ "./src/contains/common.ts");











function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props; //

  const {
    filterDataBy,
    numberPerPage,
    order,
    orderBy,
    userIds,
    roleIn,
    heading
  } = attributes; //

  const {
    GQL_QUERY__string_text,
    data,
    dataLists,
    error,
    loading,
    variables
  } = (0,_hooks_useUserGqlQuery__WEBPACK_IMPORTED_MODULE_8__["default"])(attributes);
  const usersList = dataLists; // ---- SAVE graphQLvariables ----

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!data) return;
    setAttributes({
      graphQLvariables: {
        variables,
        queryString: GQL_QUERY__string_text
      },
      expectedNumberResults: usersList.length || numberPerPage
    });
  }, [data]); //

  const handleChangeFilterDataBy = value => {
    setAttributes({
      filterDataBy: value
    });

    if (value === "by_filter") {
      setAttributes({
        userIds: []
      });
    }
  }; //


  const renderFilterPostsContent = () => {
    if (filterDataBy === "by_specific") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputSearchAuthors__WEBPACK_IMPORTED_MODULE_6__["default"], {
        defaultValue: userIds,
        onChange: userIds => setAttributes({
          userIds
        })
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-y-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-y-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Choose user role-in", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
      placeholder: "Select authors...",
      isMulti: true,
      value: roleIn,
      options: [{
        label: "ADMINISTRATOR",
        value: "ADMINISTRATOR"
      }, {
        label: "AUTHOR",
        value: "AUTHOR"
      }, {
        label: "CONTRIBUTOR",
        value: "CONTRIBUTOR"
      }, {
        label: "EDITOR",
        value: "EDITOR"
      }, {
        label: "SUBSCRIBER",
        value: "SUBSCRIBER"
      }],
      onChange: roleIn => setAttributes({
        roleIn
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("OrderBy", "ncmaz-core"),
      value: orderBy,
      options: [{
        label: "DISPLAY_NAME",
        value: "DISPLAY_NAME"
      }, {
        label: "EMAIL",
        value: "EMAIL"
      }, {
        label: "NICE_NAME",
        value: "NICE_NAME"
      }, {
        label: "REGISTERED",
        value: "REGISTERED"
      }],
      onChange: orderBy => setAttributes({
        orderBy
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectOrder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultValue: order,
      onChange: order => setAttributes({
        order
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-y-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number per page", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      onChange: numberPerPage => setAttributes({
        numberPerPage: numberPerPage
      }),
      min: 4,
      max: 30,
      value: numberPerPage
    })));
  };

  const renderGeneralSetting = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Heading", "ncmaz-core"),
      value: heading,
      type: "text",
      onChange: heading => setAttributes({
        heading
      })
    }));
  };

  const renderSidebarSettings = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-type": "ncmaz-core/sidebar-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
      header: "Section settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "General Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, renderGeneralSetting())), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      initialOpen: false,
      title: "Filter data settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
      label: "Users query by",
      selected: filterDataBy,
      options: _contains_common__WEBPACK_IMPORTED_MODULE_9__.OPTIONS_FILTER_DATA_BY,
      onChange: handleChangeFilterDataBy
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border-b border-gray-600 mt-3 mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, renderFilterPostsContent())))));
  };

  const renderPreviewContent = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_WidgetAuthors_WidgetAuthors__WEBPACK_IMPORTED_MODULE_7__["default"], {
      heading: heading,
      authors: usersList
    });
  }; //


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), renderSidebarSettings(), renderPreviewContent(), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null), error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
    className: "text-xs text-red-500"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(error))));
}

/***/ }),

/***/ "./src/components/InputSearchAuthors.tsx":
/*!***********************************************!*\
  !*** ./src/components/InputSearchAuthors.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");








const InputSearchAuthors = _ref => {
  var _data$users;

  let {
    onChange,
    defaultValue = []
  } = _ref;
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
  const [searchContent, setSearchContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange && onChange(selected);
  }, [selected]); //

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    searchContent && loadGreeting();
  }, [searchContent]);

  const hanleChangeSelect = selected => setSelected(selected); //


  let GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_4__.GQL_QUERY_SEARCH_USER;
  const gqlQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
		${GQL_QUERY__string}
	`;
  const [loadGreeting, {
    loading,
    error,
    data,
    called
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(gqlQuery, {
    variables: {
      search: searchContent
    }
  });
  let usersList = (data === null || data === void 0 ? void 0 : (_data$users = data.users) === null || _data$users === void 0 ? void 0 : _data$users.edges) || []; // CONVERT

  if (usersList && usersList.length) {
    usersList = usersList.map(item => ({
      value: item.node.userId,
      label: item.node.name
    }));
  }

  const handleInputChange = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (e) {
    setSearchContent(e);
  }, 200);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-y-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type and select authors", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Select authors...",
    isMulti: true,
    isLoading: loading,
    value: selected,
    onInputChange: handleInputChange,
    onChange: hanleChangeSelect,
    options: usersList
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearchAuthors);

/***/ }),

/***/ "./src/components/SelectOrder.tsx":
/*!****************************************!*\
  !*** ./src/components/SelectOrder.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





const SelectOrder = _ref => {
  let {
    onChange,
    defaultValue = "DESC"
  } = _ref;
  const [order, setOrder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange && onChange(order);
  }, [order]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Order",
    value: order,
    options: [{
      label: "DESC",
      value: "DESC"
    }, {
      label: "ASC",
      value: "ASC"
    }],
    onChange: setOrder
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectOrder);

/***/ }),

/***/ "./src/contains/common.ts":
/*!********************************!*\
  !*** ./src/contains/common.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTIONS_FILTER_DATA_BY": function() { return /* binding */ OPTIONS_FILTER_DATA_BY; }
/* harmony export */ });
const OPTIONS_FILTER_DATA_BY = [{
  label: "Select posts by specific",
  value: "by_specific"
}, {
  label: "Select posts by filter",
  value: "by_filter"
}];


/***/ }),

/***/ "./src/contains/contants.ts":
/*!**********************************!*\
  !*** ./src/contains/contants.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDGES_POST_COMMONT_FIELDS": function() { return /* reexport safe */ _contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS; },
/* harmony export */   "EDGES_TERMS_COMMONT_FIELDS": function() { return /* reexport safe */ _contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS; },
/* harmony export */   "EDGES_USER_COMMONT_FIELDS": function() { return /* reexport safe */ _contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_USER_COMMONT_FIELDS; },
/* harmony export */   "GQL_QUERY_GET_CATEGORIES_BY_FILTER": function() { return /* binding */ GQL_QUERY_GET_CATEGORIES_BY_FILTER; },
/* harmony export */   "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC": function() { return /* binding */ GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC; },
/* harmony export */   "GQL_QUERY_GET_POSTS_BY_FILTER": function() { return /* binding */ GQL_QUERY_GET_POSTS_BY_FILTER; },
/* harmony export */   "GQL_QUERY_GET_POSTS_BY_SPECIFIC": function() { return /* binding */ GQL_QUERY_GET_POSTS_BY_SPECIFIC; },
/* harmony export */   "GQL_QUERY_GET_TAGS_BY_FILTER": function() { return /* binding */ GQL_QUERY_GET_TAGS_BY_FILTER; },
/* harmony export */   "GQL_QUERY_GET_TAGS_BY_SPECIFIC": function() { return /* binding */ GQL_QUERY_GET_TAGS_BY_SPECIFIC; },
/* harmony export */   "GQL_QUERY_GET_USERS_BY_FILTER": function() { return /* binding */ GQL_QUERY_GET_USERS_BY_FILTER; },
/* harmony export */   "GQL_QUERY_GET_USERS_BY_SPECIFIC": function() { return /* binding */ GQL_QUERY_GET_USERS_BY_SPECIFIC; },
/* harmony export */   "GQL_QUERY_SEARCH_CATEGORIES": function() { return /* binding */ GQL_QUERY_SEARCH_CATEGORIES; },
/* harmony export */   "GQL_QUERY_SEARCH_POSTS": function() { return /* binding */ GQL_QUERY_SEARCH_POSTS; },
/* harmony export */   "GQL_QUERY_SEARCH_TAGS": function() { return /* binding */ GQL_QUERY_SEARCH_TAGS; },
/* harmony export */   "GQL_QUERY_SEARCH_USER": function() { return /* binding */ GQL_QUERY_SEARCH_USER; },
/* harmony export */   "avatarColors": function() { return /* reexport safe */ _contantsCommon__WEBPACK_IMPORTED_MODULE_0__.avatarColors; }
/* harmony export */ });
/* harmony import */ var _contantsCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contantsCommon */ "./src/contains/contantsCommon.ts");
/* harmony import */ var _contantsPLL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contantsPLL */ "./src/contains/contantsPLL.ts");


let GQL_QUERY_GET_POSTS_BY_FILTER = `
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR
    $order: OrderEnum = ASC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = ""
    $after: String = ""
  ) {
    posts(
      where: {
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;
let GQL_QUERY_GET_POSTS_BY_SPECIFIC = `
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC($nameIn: [String] = "") {
    posts(where: { nameIn: $nameIn,  orderby: {order: ASC, field: NAME_IN} }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS} }
  }
`; // ===================== USERS =================================================

let GQL_QUERY_GET_USERS_BY_FILTER = `query GQL_QUERY_GET_USERS_BY_FILTER(
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
	) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_USER_COMMONT_FIELDS} }
}`;
let GQL_QUERY_GET_USERS_BY_SPECIFIC = `query GQL_QUERY_GET_USERS_BY_SPECIFIC($include: [Int] = null) {
	users(where: { include: $include }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_USER_COMMONT_FIELDS} }
}`; // ===================== TERMS - TAGS | CATEGORIES =========================================

let GQL_QUERY_GET_CATEGORIES_BY_FILTER = `
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { order: $order, orderby: $orderby, hideEmpty: true  }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`;
let GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = `
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC($termTaxonomId: [ID] = "") {
		categories(where: { termTaxonomId: $termTaxonomId }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`; // TAGS

let GQL_QUERY_GET_TAGS_BY_FILTER = `
	query GQL_QUERY_GET_TAGS_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		tags(
			where: { order: $order, orderby: $orderby, hideEmpty: true }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`;
let GQL_QUERY_GET_TAGS_BY_SPECIFIC = `
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC($termTaxonomId: [ID] = "") {
		tags(where: { termTaxonomId: $termTaxonomId }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`; // SEARCH

let GQL_QUERY_SEARCH_POSTS = `
  query GQL_QUERY_SEARCH_POSTS($search: String = "") {
    posts(where: {search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS} }
  }
`;
let GQL_QUERY_SEARCH_USER = `
  query GQL_QUERY_SEARCH_USER($search: String = "") {
	users(where: {search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_USER_COMMONT_FIELDS} }
  }
`;
let GQL_QUERY_SEARCH_CATEGORIES = `
  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "") {
	categories(where: {search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
  }
`;
let GQL_QUERY_SEARCH_TAGS = `
  query GQL_QUERY_SEARCH_TAGS($search: String = "") {
	tags(where: {search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
  }
`; // CHECK ENABLE POLYLANG

let IS_ENABLE_PLL = !!window.ncmazcoreJsData.pll_current_language && !!window.ncmazcoreJsData.pll_themeoption_actived; //

if (IS_ENABLE_PLL) {
  GQL_QUERY_GET_POSTS_BY_FILTER = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER;
  GQL_QUERY_GET_POSTS_BY_SPECIFIC = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  GQL_QUERY_GET_CATEGORIES_BY_FILTER = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER;
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
  GQL_QUERY_GET_TAGS_BY_FILTER = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER;
  GQL_QUERY_GET_TAGS_BY_SPECIFIC = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC; //

  GQL_QUERY_SEARCH_POSTS = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_SEARCH_POSTS;
  GQL_QUERY_SEARCH_CATEGORIES = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_SEARCH_CATEGORIES;
  GQL_QUERY_SEARCH_TAGS = _contantsPLL__WEBPACK_IMPORTED_MODULE_1__.PLLs.PLL_GET__GQL_QUERY_SEARCH_TAGS;
}



/***/ }),

/***/ "./src/contains/contantsCommon.ts":
/*!****************************************!*\
  !*** ./src/contains/contantsCommon.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDGES_POST_COMMONT_FIELDS": function() { return /* binding */ EDGES_POST_COMMONT_FIELDS; },
/* harmony export */   "EDGES_TERMS_COMMONT_FIELDS": function() { return /* binding */ EDGES_TERMS_COMMONT_FIELDS; },
/* harmony export */   "EDGES_USER_COMMONT_FIELDS": function() { return /* binding */ EDGES_USER_COMMONT_FIELDS; },
/* harmony export */   "avatarColors": function() { return /* binding */ avatarColors; }
/* harmony export */ });
let avatarColors = ["#ffdd00", "#fbb034", "#ff4c4c", "#c1d82f", "#f48924", "#7ac143", "#30c39e", "#06BCAE", "#0695BC", "#037ef3", "#146eb4", "#8e43e7", "#ea1d5d", "#fc636b", "#ff6319", "#e01f3d", "#a0ac48", "#00d1b2", "#472f92", "#388ed1", "#a6192e", "#4a8594", "#7B9FAB", "#1393BD", "#5E13BD", "#E208A7"]; // ===================== POSTS =================================================

let EDGES_POST_COMMONT_FIELDS = ` edges {
  node {
    id
    link
    author {
      node {
        id
        avatar {
          url
        }
        url
        uri
        username
        name
        slug
        ncUserMeta {
          featuredImage {
            sourceUrl
          }
        }
      }
    }
    categories {
      edges {
        node {
          id
          link
          name
          uri
          slug
          count
          categoryId
          ncTaxonomyMeta {
            color
          }
        }
      }
    }
    commentCount
    date
    excerpt
    featuredImage {
      node {
        id
        altText
        caption
        sourceUrl
      }
    }
    postFormats {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    postId
    slug
    title
    ncmazVideoUrl {
      fieldGroupName
      videoUrl
    }
    ncmazAudioUrl {
      fieldGroupName
      audioUrl
    }
    ncPostMetaData {
      favoriteButtonShortcode
      readingTimeShortcode
      viewsCount
      fieldGroupName
    }
    ncmazGalleryImgs {
      fieldGroupName
      image1 {
        id
        sourceUrl
      }
      image2 {
        id
        sourceUrl
      }
      image3 {
        id
        sourceUrl
      }
      image4 {
        id
        sourceUrl
      }
      image5 {
        id
        sourceUrl
      }
      image6 {
        id
        sourceUrl
      }
      image7 {
        id
        sourceUrl
      }
      image8 {
        id
        sourceUrl
      }
    }
  }
}`; // ===================== USERS =================================================

let EDGES_USER_COMMONT_FIELDS = `edges {
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
    posts {
      pageInfo {
        total
      }
    }
	}
}`; // ===================== TERMS - TAGS | CATEGORIES =========================================

let EDGES_TERMS_COMMONT_FIELDS = `edges {
    node {
        id
        slug
        count
        name
        databaseId
        description
        link
        ncTaxonomyMeta {
            color                                     
            featuredImage {
                sourceUrl
            }
        }
    }
}`;


/***/ }),

/***/ "./src/contains/contantsPLL.ts":
/*!*************************************!*\
  !*** ./src/contains/contantsPLL.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLLs": function() { return /* binding */ PLLs; }
/* harmony export */ });
/* harmony import */ var _contantsCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contantsCommon */ "./src/contains/contantsCommon.ts");

const GQL_QUERY_GET_POSTS_BY_FILTER = `
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR
    $order: OrderEnum = ASC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = ""
    $after: String = ""
  ) {
    posts(
      where: {
        language: $language
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;
const GQL_QUERY_GET_POSTS_BY_SPECIFIC = `
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
    $nameIn: [String] = ""
    ) {
    posts(where: {
      language: $language
      nameIn: $nameIn
      orderby: {order: ASC, field: NAME_IN}
     }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS} }
  }
`; // ===================== TERMS - TAGS | CATEGORIES =========================================

const GQL_QUERY_GET_CATEGORIES_BY_FILTER = `
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { 
        language: $language,
        order: $order,
        orderby: $orderby 
      }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`;
const GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = `
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
    $termTaxonomId: [ID] = ""
    ) {
		categories(where: {
      language: $language
      termTaxonomId: $termTaxonomId
     }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`; // TAGS

const GQL_QUERY_GET_TAGS_BY_FILTER = `
	query GQL_QUERY_GET_TAGS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		tags(
			where: {
        language: $language 
        order: $order
        orderby: $orderby 
      }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`;
const GQL_QUERY_GET_TAGS_BY_SPECIFIC = `
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}
    $termTaxonomId: [ID] = ""
    ) {
		tags(where: {
      language: $language
      termTaxonomId: $termTaxonomId
    }) { ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
	}
`; // SEARCH

let GQL_QUERY_SEARCH_POSTS = `
  query GQL_QUERY_SEARCH_POSTS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {
    posts(where: {search: $search,  language: $language})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_POST_COMMONT_FIELDS} }
  }
`;
let GQL_QUERY_SEARCH_CATEGORIES = `
  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {
	categories(where: {language: $language, search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
  }
`;
let GQL_QUERY_SEARCH_TAGS = `
  query GQL_QUERY_SEARCH_TAGS($search: String = "", $language: LanguageCodeFilterEnum = ${window.ncmazcoreJsData.pll_current_language}) {
	tags(where: {language: $language, search: $search})
	{ ${_contantsCommon__WEBPACK_IMPORTED_MODULE_0__.EDGES_TERMS_COMMONT_FIELDS} }
  }
`;
const PLLs = {
  PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER: GQL_QUERY_GET_POSTS_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC: GQL_QUERY_GET_POSTS_BY_SPECIFIC,
  //
  PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER: GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC: GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER: GQL_QUERY_GET_TAGS_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC: GQL_QUERY_GET_TAGS_BY_SPECIFIC,
  //
  PLL_GET__GQL_QUERY_SEARCH_CATEGORIES: GQL_QUERY_SEARCH_CATEGORIES,
  PLL_GET__GQL_QUERY_SEARCH_TAGS: GQL_QUERY_SEARCH_TAGS,
  PLL_GET__GQL_QUERY_SEARCH_POSTS: GQL_QUERY_SEARCH_POSTS
};

/***/ }),

/***/ "./src/frontend-components/Avatar/Avatar.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Avatar/Avatar.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contains/contants */ "./src/contains/contants.ts");




const Avatar = _ref => {
  let {
    containerClassName = "ring-1 ring-white dark:ring-neutral-900",
    sizeClass = "h-6 w-6 text-sm",
    radius = "rounded-md",
    imgUrl,
    userName
  } = _ref;
  const url = imgUrl || "";
  const name = userName || "John Doe";

  const _setBgColor = name => {
    const backgroundIndex = Math.floor(name.charCodeAt(0) % _contains_contants__WEBPACK_IMPORTED_MODULE_2__.avatarColors.length);
    return _contains_contants__WEBPACK_IMPORTED_MODULE_2__.avatarColors[backgroundIndex];
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`,
    style: {
      backgroundColor: url ? undefined : _setBgColor(name)
    }
  }, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "absolute inset-0 w-full h-full object-cover",
    src: url,
    alt: name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wil-avatar__name"
  }, name[0]));
};

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/frontend-components/CardAuthor/CardAuthor.tsx":
/*!***********************************************************!*\
  !*** ./src/frontend-components/CardAuthor/CardAuthor.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");




const CardAuthor = _ref => {
  let {
    className = "",
    author
  } = _ref;

  if (!author) {
    return null;
  }

  const {
    avatar,
    id,
    name,
    ncUserMeta,
    url,
    uri,
    userId,
    username
  } = author;
  const {
    color,
    featuredImage,
    ncBio
  } = ncUserMeta;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url + uri,
    className: `nc-CardAuthor flex items-center ${className}`,
    "data-nc-id": "CardAuthor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sizeClass: "h-10 w-10 text-base",
    containerClassName: "flex-shrink-0 mr-4",
    radius: "rounded-full",
    imgUrl: avatar === null || avatar === void 0 ? void 0 : avatar.url,
    userName: username
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `text-base text-neutral-900 dark:text-neutral-100 font-semibold`
  }, name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`
  }, ncBio)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardAuthor);

/***/ }),

/***/ "./src/frontend-components/WidgetAuthors/WidgetAuthors.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/WidgetAuthors/WidgetAuthors.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardAuthor_CardAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardAuthor/CardAuthor */ "./src/frontend-components/CardAuthor/CardAuthor.tsx");
/* harmony import */ var _WidgetHeading1_WidgetHeading1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WidgetHeading1/WidgetHeading1 */ "./src/frontend-components/WidgetHeading1/WidgetHeading1.tsx");





const WidgetAuthors = _ref => {
  let {
    className = "bg-neutral-100 dark:bg-neutral-800",
    heading = "",
    authors
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-WidgetAuthors rounded-3xl overflow-hidden ${className}`,
    "data-nc-id": "WidgetAuthors"
  }, !!heading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WidgetHeading1_WidgetHeading1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: heading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flow-root"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
  }, authors.map((author, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor_CardAuthor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700",
    key: index,
    author: author === null || author === void 0 ? void 0 : author.node
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetAuthors);

/***/ }),

/***/ "./src/frontend-components/WidgetHeading1/WidgetHeading1.tsx":
/*!*******************************************************************!*\
  !*** ./src/frontend-components/WidgetHeading1/WidgetHeading1.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const WidgetHeading1 = _ref => {
  let {
    className = "",
    title,
    viewAllLabel,
    viewAllHref
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ${className}`,
    "data-nc-id": "WidgetHeading1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow"
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetHeading1);

/***/ }),

/***/ "./src/hooks/useUserGqlQuery.ts":
/*!**************************************!*\
  !*** ./src/hooks/useUserGqlQuery.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useUserGqlQuery; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");


function useUserGqlQuery(attributes) {
  var _data$users;

  const {
    filterDataBy,
    numberPerPage,
    order,
    orderBy,
    userIds,
    roleIn
  } = attributes; //

  let GQL_QUERY__string = "";
  let GQL_QUERY__string_text = "";
  let variables = {}; //

  if (filterDataBy === "by_specific") {
    variables = {
      include: userIds.map(item => item.value)
    };
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_0__.GQL_QUERY_GET_USERS_BY_SPECIFIC;
    GQL_QUERY__string_text = "GQL_QUERY_GET_USERS_BY_SPECIFIC";
  } else {
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_0__.GQL_QUERY_GET_USERS_BY_FILTER;
    GQL_QUERY__string_text = "GQL_QUERY_GET_USERS_BY_FILTER";
    variables = {
      first: numberPerPage,
      field: orderBy,
      order: order,
      roleIn: roleIn.map(item => item.value)
    };
  } // =================== QUERY GRAPHQL ===================


  const gqlQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
		${GQL_QUERY__string}
	`;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(gqlQuery, {
    variables
  });
  const dataLists = (data === null || data === void 0 ? void 0 : (_data$users = data.users) === null || _data$users === void 0 ? void 0 : _data$users.edges) || [];
  return {
    GQL_QUERY__string,
    // for debug
    GQL_QUERY__string_text,
    variables,
    loading,
    error,
    data,
    dataLists
  };
}

/***/ })

}]);
//# sourceMappingURL=src_block-widget-users_Edit_tsx.js.map