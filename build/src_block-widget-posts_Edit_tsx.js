"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_block-widget-posts_Edit_tsx"],{

/***/ "./src/block-widget-posts/Edit.tsx":
/*!*****************************************!*\
  !*** ./src/block-widget-posts/Edit.tsx ***!
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
/* harmony import */ var _components_InputSearchPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InputSearchPosts */ "./src/components/InputSearchPosts.tsx");
/* harmony import */ var _components_InputSearchCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputSearchCategories */ "./src/components/InputSearchCategories.tsx");
/* harmony import */ var _components_InputSearchTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputSearchTags */ "./src/components/InputSearchTags.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SelectOrderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SelectOrderBy */ "./src/components/SelectOrderBy.tsx");
/* harmony import */ var _components_SelectOrder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SelectOrder */ "./src/components/SelectOrder.tsx");
/* harmony import */ var _components_InputNumberPerPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/InputNumberPerPage */ "./src/components/InputNumberPerPage.tsx");
/* harmony import */ var _components_InputSearchAuthors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/InputSearchAuthors */ "./src/components/InputSearchAuthors.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _frontend_components_WidgetPosts_WidgetPosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../frontend-components/WidgetPosts/WidgetPosts */ "./src/frontend-components/WidgetPosts/WidgetPosts.tsx");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");
















function Edit(props) {
  var _data$posts;

  const {
    attributes,
    setAttributes,
    clientId
  } = props; //

  const {
    filterDataBy,
    posts,
    categories,
    tags,
    orderBy,
    order,
    numberPerPage,
    authors,
    //
    postCardName,
    heading,
    //
    graphQLvariables,
    graphQLData
  } = attributes; //

  let GQL_QUERY__string = "";
  let GQL_QUERY__string_xxx = "";
  let variables = {}; //

  if (filterDataBy === "by_specific") {
    variables = {
      // arr posts Slugs
      nameIn: (posts === null || posts === void 0 ? void 0 : posts.map(item => item.value)) || []
    };
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_13__.GQL_QUERY_GET_POSTS_BY_SPECIFIC;
    GQL_QUERY__string_xxx = "GQL_QUERY_GET_POSTS_BY_SPECIFIC";
  } else {
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_13__.GQL_QUERY_GET_POSTS_BY_FILTER;
    GQL_QUERY__string_xxx = "GQL_QUERY_GET_POSTS_BY_FILTER";
    variables = {
      // term IDs
      categoryIn: (categories === null || categories === void 0 ? void 0 : categories.map(item => item.value)) || [],
      tagIn: (tags === null || tags === void 0 ? void 0 : tags.map(item => item.value)) || [],
      authorIn: (authors === null || authors === void 0 ? void 0 : authors.map(item => item.value)) || [],
      order,
      field: orderBy,
      first: Number(numberPerPage)
    };
  } // =================== QUERY GRAPHQL ===================


  const gqlQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_14__.gql`
		${GQL_QUERY__string}
	`;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useQuery)(gqlQuery, {
    variables
  });
  const dataLists = (data === null || data === void 0 ? void 0 : (_data$posts = data.posts) === null || _data$posts === void 0 ? void 0 : _data$posts.edges) || []; // ---- SAVE graphQLvariables ----

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!data) return;
    setAttributes({
      graphQLvariables: filterDataBy !== "by_specific" ? {
        variables,
        queryString: GQL_QUERY__string_xxx
      } : {},
      graphQLData: filterDataBy === "by_specific" ? data : {}
    });
  }, [data]); //

  const renderFilterPostsContent = () => {
    if (filterDataBy === "by_specific") {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputSearchPosts__WEBPACK_IMPORTED_MODULE_3__["default"], {
        defaultValue: posts,
        onChange: posts => setAttributes({
          posts
        })
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-y-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputSearchCategories__WEBPACK_IMPORTED_MODULE_4__["default"], {
      defaultValue: categories,
      onChange: categories => setAttributes({
        categories
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputSearchTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultValue: tags,
      onChange: tags => setAttributes({
        tags
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputSearchAuthors__WEBPACK_IMPORTED_MODULE_11__["default"], {
      defaultValue: authors,
      onChange: authors => setAttributes({
        authors
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectOrderBy__WEBPACK_IMPORTED_MODULE_8__["default"], {
      defaultValue: orderBy,
      onChange: orderBy => setAttributes({
        orderBy
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectOrder__WEBPACK_IMPORTED_MODULE_9__["default"], {
      defaultValue: order,
      onChange: order => setAttributes({
        order
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputNumberPerPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      defaultValue: numberPerPage,
      onChange: numberPerPage => setAttributes({
        numberPerPage
      })
    }));
  };

  const renderGeneralSetting = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Choose type of post card", "ncmaz-core"),
      value: postCardName,
      options: [{
        label: "Post card 3",
        value: "card3"
      }, {
        label: "Post card 4",
        value: "card4"
      }, {
        label: "Post card 7",
        value: "card7"
      }, {
        label: "Post card 9",
        value: "card9"
      }, {
        label: "Post card 10",
        value: "card10"
      }, {
        label: "Post card 10V2",
        value: "card10V2"
      }, {
        label: "Post card 11",
        value: "card11"
      }, {
        label: "Post card 14",
        value: "card14"
      }, {
        label: "Post card 15-Podcast",
        value: "card15Podcast"
      }],
      onChange: postCardName => setAttributes({
        postCardName
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Heading", "ncmaz-core"),
      value: heading,
      type: "text",
      onChange: heading => setAttributes({
        heading
      })
    }));
  };

  const renderSidebarSetting = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-type": "ncmaz-core/sidebar-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, {
      header: "Section settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: "General Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, renderGeneralSetting())), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      initialOpen: false,
      title: "Filter data settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
      label: "Posts of the section",
      selected: filterDataBy,
      options: [{
        label: "Select posts by specific",
        value: "by_specific"
      }, {
        label: "Select posts by filter",
        value: "by_filter"
      }],
      onChange: filterDataBy => setAttributes({
        filterDataBy
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border-b border-gray-600 mt-2 mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, renderFilterPostsContent())))));
  };

  const renderPreview = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_WidgetPosts_WidgetPosts__WEBPACK_IMPORTED_MODULE_12__["default"], {
      heading: heading,
      postEdges: dataLists
    });
  }; //


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), renderSidebarSetting(), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null), error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
    className: "text-xs text-red-500"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(error))), renderPreview());
}

/***/ }),

/***/ "./src/components/InputNumberPerPage.tsx":
/*!***********************************************!*\
  !*** ./src/components/InputNumberPerPage.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






const InputNumberPerPage = _ref => {
  let {
    onChange,
    defaultValue = 6
  } = _ref;
  const [perPage, setPerPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange && onChange(perPage);
  }, [perPage]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-y-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number per page", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    onChange: e => {
      setPerPage(e || 6);
    },
    value: perPage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputNumberPerPage);

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

/***/ "./src/components/InputSearchCategories.tsx":
/*!**************************************************!*\
  !*** ./src/components/InputSearchCategories.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");








const InputSearchCategories = _ref => {
  var _data$categories;

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


  let GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_4__.GQL_QUERY_SEARCH_CATEGORIES;
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
  let categoriesList = (data === null || data === void 0 ? void 0 : (_data$categories = data.categories) === null || _data$categories === void 0 ? void 0 : _data$categories.edges) || [];

  if (categoriesList && categoriesList.length) {
    categoriesList = categoriesList.map(item => ({
      id: item.node.databaseId,
      slug: item.node.slug,
      value: item.node.databaseId,
      label: item.node.name,
      name: item.node.name
    }));
  } //


  const handleInputChange = lodash__WEBPACK_IMPORTED_MODULE_3___default().debounce(function (e) {
    setSearchContent(e);
  }, 200);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-y-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Type and select categories", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Select categories...",
    isMulti: true,
    onInputChange: handleInputChange,
    isLoading: loading,
    value: selected,
    onChange: hanleChangeSelect,
    options: categoriesList
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearchCategories);

/***/ }),

/***/ "./src/components/InputSearchPosts.tsx":
/*!*********************************************!*\
  !*** ./src/components/InputSearchPosts.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");








const InputSearchPosts = _ref => {
  var _data$posts;

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


  let GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_4__.GQL_QUERY_SEARCH_POSTS;
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
  let postsList = (data === null || data === void 0 ? void 0 : (_data$posts = data.posts) === null || _data$posts === void 0 ? void 0 : _data$posts.edges) || [];

  if (postsList && postsList.length) {
    postsList = postsList.map(item => ({
      value: item.node.slug,
      label: item.node.title
    }));
  } //


  const handleInputChange = lodash__WEBPACK_IMPORTED_MODULE_3___default().debounce(function (e) {
    setSearchContent(e);
  }, 200); //


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-y-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Type and select posts", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Select posts...",
    isMulti: true,
    onInputChange: handleInputChange,
    isLoading: loading,
    value: selected,
    onChange: hanleChangeSelect,
    options: postsList,
    styles: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearchPosts);

/***/ }),

/***/ "./src/components/InputSearchTags.tsx":
/*!********************************************!*\
  !*** ./src/components/InputSearchTags.tsx ***!
  \********************************************/
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");








const InputSearchTags = _ref => {
  var _data$tags;

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


  let GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_4__.GQL_QUERY_SEARCH_TAGS;
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
  let tagsList = (data === null || data === void 0 ? void 0 : (_data$tags = data.tags) === null || _data$tags === void 0 ? void 0 : _data$tags.edges) || [];

  if (tagsList && tagsList.length) {
    tagsList = tagsList.map(item => ({
      value: item.node.databaseId,
      label: item.node.name
    }));
  } //


  const handleInputChange = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (e) {
    setSearchContent(e);
  }, 200);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-y-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type and select tags", "ncmaz-core")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Select tags...",
    isMulti: true,
    onInputChange: handleInputChange,
    isLoading: loading,
    value: selected,
    onChange: hanleChangeSelect,
    options: tagsList
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearchTags);

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

/***/ "./src/components/SelectOrderBy.tsx":
/*!******************************************!*\
  !*** ./src/components/SelectOrderBy.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





const SelectOrderBy = _ref => {
  let {
    onChange,
    defaultValue = "date"
  } = _ref;
  const [orderBy, setOrderBy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange && onChange(orderBy);
  }, [orderBy]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Order By",
    value: orderBy,
    options: [{
      label: "AUTHOR",
      value: "AUTHOR"
    }, {
      label: "COMMENT_COUNT",
      value: "COMMENT_COUNT"
    }, {
      label: "FAVORITES_COUNT",
      value: "FAVORITES_COUNT"
    }, {
      label: "VIEWS_COUNT",
      value: "VIEWS_COUNT"
    }, {
      label: "IN",
      value: "IN"
    }, {
      label: "DATE",
      value: "DATE"
    }, {
      label: "MENU_ORDER",
      value: "MENU_ORDER"
    }, {
      label: "MODIFIED",
      value: "MODIFIED"
    }, {
      label: "NAME_IN",
      value: "NAME_IN"
    }, {
      label: "PARENT",
      value: "PARENT"
    }, {
      label: "SLUG",
      value: "SLUG"
    }, {
      label: "TITLE",
      value: "TITLE"
    }],
    onChange: value => setOrderBy(value)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectOrderBy);

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

/***/ "./src/frontend-components/Card3Small/Card3Small.tsx":
/*!***********************************************************!*\
  !*** ./src/frontend-components/Card3Small/Card3Small.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");





const Card3Small = _ref => {
  var _featuredImage$node;

  let {
    className = "h-full",
    post
  } = _ref;
  const {
    title,
    link,
    featuredImage
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`,
    "data-nc-id": "Card3Small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: " absolute inset-0",
    title: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative space-y-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meta: { ...post
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: " line-clamp-2",
    title: title
  }, title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    title: title,
    className: `block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0",
    className: "nc-will-change-transform object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$node = featuredImage.node) === null || _featuredImage$node === void 0 ? void 0 : _featuredImage$node.sourceUrl
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card3Small);

/***/ }),

/***/ "./src/frontend-components/NcImage/NcImage.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/NcImage/NcImage.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NcImage = _ref => {
  let {
    src,
    className = "w-full h-full object-cover",
    containerClassName = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ` bg-gray-400 ${containerClassName} `
  }, src && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: className,
    src: src,
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NcImage);

/***/ }),

/***/ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx":
/*!***************************************************************!*\
  !*** ./src/frontend-components/PostCardMeta/PostCardMeta.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");





const PostCardMeta = _ref => {
  var _author, _author2, _author3, _author4, _author4$avatar, _author5, _author6;

  let {
    className = "leading-none",
    meta,
    hiddenAvatar = false,
    size = "normal"
  } = _ref;
  let {
    date,
    author
  } = meta;
  author = (_author = author) === null || _author === void 0 ? void 0 : _author.node;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardMeta inline-flex items-center  text-neutral-800 dark:text-neutral-200 truncate ${size === "normal" ? "text-xs" : "text-base"} ${className}`,
    "data-nc-id": "PostCardMeta"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: ((_author2 = author) === null || _author2 === void 0 ? void 0 : _author2.url) + ((_author3 = author) === null || _author3 === void 0 ? void 0 : _author3.uri),
    className: "relative flex items-center space-x-2 truncate"
  }, !hiddenAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    radius: "rounded-full",
    sizeClass: size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl",
    imgUrl: (_author4 = author) === null || _author4 === void 0 ? void 0 : (_author4$avatar = _author4.avatar) === null || _author4$avatar === void 0 ? void 0 : _author4$avatar.url,
    userName: (_author5 = author) === null || _author5 === void 0 ? void 0 : _author5.username
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate py-1"
  }, (_author6 = author) === null || _author6 === void 0 ? void 0 : _author6.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(date))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardMeta);

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

/***/ "./src/frontend-components/WidgetPosts/WidgetPosts.tsx":
/*!*************************************************************!*\
  !*** ./src/frontend-components/WidgetPosts/WidgetPosts.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card3Small_Card3Small__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card3Small/Card3Small */ "./src/frontend-components/Card3Small/Card3Small.tsx");
/* harmony import */ var _WidgetHeading1_WidgetHeading1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WidgetHeading1/WidgetHeading1 */ "./src/frontend-components/WidgetHeading1/WidgetHeading1.tsx");





const WidgetPosts = _ref => {
  let {
    className = "bg-neutral-100 dark:bg-neutral-800",
    postEdges = [],
    heading = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-WidgetPosts rounded-3xl overflow-hidden ${className}`,
    "data-nc-id": "WidgetPosts"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WidgetHeading1_WidgetHeading1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: heading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
  }, postEdges.map((post, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card3Small_Card3Small__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700",
    key: index,
    post: post.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetPosts);

/***/ }),

/***/ "./src/utils/formatDate.ts":
/*!*********************************!*\
  !*** ./src/utils/formatDate.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ncFormatDate; }
/* harmony export */ });
function ncFormatDate(date) {
  // CAN LAM THEM PHAN DATE FOrMAT ---- get_option(date_format)
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  let mo = new Intl.DateTimeFormat("en", {
    month: "short"
  }).format(d);
  let da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  return `${mo} ${da}, ${ye}`;
}

/***/ })

}]);
//# sourceMappingURL=src_block-widget-posts_Edit_tsx.js.map