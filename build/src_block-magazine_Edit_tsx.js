"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_block-magazine_Edit_tsx"],{

/***/ "./src/block-magazine/Edit.tsx":
/*!*************************************!*\
  !*** ./src/block-magazine/Edit.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlockMagazineEdit; }
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _frontend_components_HeaderSectionFilter_HeaderSectionFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../frontend-components/HeaderSectionFilter/HeaderSectionFilter */ "./src/frontend-components/HeaderSectionFilter/HeaderSectionFilter.tsx");
/* harmony import */ var _frontend_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../frontend-components/Heading/Heading */ "./src/frontend-components/Heading/Heading.tsx");
/* harmony import */ var _frontend_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../frontend-components/EmptyState/EmptyState */ "./src/frontend-components/EmptyState/EmptyState.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine1 */ "./src/frontend-components/SectionMagazines/SectionMagazine1.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine2 */ "./src/frontend-components/SectionMagazines/SectionMagazine2.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine3 */ "./src/frontend-components/SectionMagazines/SectionMagazine3.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine4 */ "./src/frontend-components/SectionMagazines/SectionMagazine4.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine5 */ "./src/frontend-components/SectionMagazines/SectionMagazine5.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine6__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine6 */ "./src/frontend-components/SectionMagazines/SectionMagazine6.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine7__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine7 */ "./src/frontend-components/SectionMagazines/SectionMagazine7.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine8__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine8 */ "./src/frontend-components/SectionMagazines/SectionMagazine8.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionMagazine9__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionMagazine9 */ "./src/frontend-components/SectionMagazines/SectionMagazine9.tsx");
/* harmony import */ var _frontend_components_SectionMagazines_SectionLargeSlider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../frontend-components/SectionMagazines/SectionLargeSlider */ "./src/frontend-components/SectionMagazines/SectionLargeSlider.tsx");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");





























function BlockMagazineEdit(props) {
  var _data$posts;

  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const [tabActiveId, setTabActiveId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(-1); //

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
    sectionName,
    showFilterTab,
    viewMoreHref,
    heading,
    subHeading,
    hasBackground,
    //
    graphQLvariables,
    //
    graphQLData
  } = attributes; //

  let GQL_QUERY__string = "";
  let GQL_QUERY__string_xxx = "";
  let variables = {};
  let variablesUseNow; //

  if (filterDataBy === "by_specific") {
    variablesUseNow = null;
    variables = {
      // arr posts Slugs
      nameIn: (posts === null || posts === void 0 ? void 0 : posts.map(item => item.value)) || []
    };
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_26__.GQL_QUERY_GET_POSTS_BY_SPECIFIC;
    GQL_QUERY__string_xxx = "GQL_QUERY_GET_POSTS_BY_SPECIFIC";
  } else {
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_26__.GQL_QUERY_GET_POSTS_BY_FILTER;
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
    variablesUseNow = { ...variables,
      categoryIn: tabActiveId && tabActiveId !== -1 ? [tabActiveId] : (categories === null || categories === void 0 ? void 0 : categories.map(item => item.value)) || []
    };
  } // =================== QUERY GRAPHQL ===================


  const gqlQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_27__.gql`
		${GQL_QUERY__string}
	`;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_28__.useQuery)(gqlQuery, {
    variables: variablesUseNow || variables
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
  }, [data]);

  const handleClickTab = item => {
    if (item === -1) {
      setTabActiveId(item);
      return;
    }

    if (item.id === tabActiveId) {
      return;
    }

    setTabActiveId(item.id);
  }; //


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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Choose type of section", "ncmaz-core"),
      value: sectionName,
      options: [{
        label: "Magazine 1",
        value: "magazine-1"
      }, {
        label: "Magazine 2",
        value: "magazine-2"
      }, {
        label: "Magazine 3",
        value: "magazine-3"
      }, {
        label: "Magazine 4",
        value: "magazine-4"
      }, {
        label: "Magazine 5",
        value: "magazine-5"
      }, {
        label: "Magazine 6",
        value: "magazine-6"
      }, {
        label: "Magazine 7",
        value: "magazine-7"
      }, {
        label: "Magazine 8",
        value: "magazine-8"
      }, {
        label: "Magazine 9",
        value: "magazine-9"
      }, {
        label: "Large slider",
        value: "large-slider"
      }],
      onChange: sectionName => setAttributes({
        sectionName
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Heading", "ncmaz-core"),
      value: heading,
      type: "text",
      onChange: heading => setAttributes({
        heading
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sub heading", "ncmaz-core"),
      value: subHeading,
      type: "text",
      onChange: subHeading => setAttributes({
        subHeading
      })
    }), filterDataBy !== "by_specific" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-x-3 flex "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FormToggle, {
      checked: showFilterTab,
      onChange: () => setAttributes({
        showFilterTab: !showFilterTab
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show filter tab", "ncmaz-core")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show filter tab", "ncmaz-core"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("View more href", "ncmaz-core"),
      value: viewMoreHref,
      type: "url",
      onChange: viewMoreHref => setAttributes({
        viewMoreHref
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-x-3 flex "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FormToggle, {
      checked: hasBackground,
      onChange: () => setAttributes({
        hasBackground: !hasBackground
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Background", "ncmaz-core")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Background", "ncmaz-core"))));
  };

  const renderSidebarSetting = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "z-10 relative",
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

  const renderLayoutType = () => {
    switch (sectionName) {
      case "magazine-1":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine1__WEBPACK_IMPORTED_MODULE_16__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-2":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine2__WEBPACK_IMPORTED_MODULE_17__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-3":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine3__WEBPACK_IMPORTED_MODULE_18__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-4":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine4__WEBPACK_IMPORTED_MODULE_19__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-5":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine5__WEBPACK_IMPORTED_MODULE_20__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-6":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine6__WEBPACK_IMPORTED_MODULE_21__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-7":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine7__WEBPACK_IMPORTED_MODULE_22__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-8":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine8__WEBPACK_IMPORTED_MODULE_23__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "magazine-9":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine9__WEBPACK_IMPORTED_MODULE_24__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      case "large-slider":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionLargeSlider__WEBPACK_IMPORTED_MODULE_25__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });

      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionMagazines_SectionMagazine1__WEBPACK_IMPORTED_MODULE_16__["default"], {
          isLoading: loading,
          activePosts: dataLists
        });
    }
  };

  const renderContent = () => {
    const isBg = hasBackground;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `nc-FactoryBlockMagazine relative ${isBg ? "py-16" : ""}  `
    }, isBg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_12__["default"], null), showFilterTab ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_HeaderSectionFilter_HeaderSectionFilter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      tabActiveId: tabActiveId,
      tabs: categories,
      viewMoreHref: viewMoreHref,
      heading: heading,
      subHeading: subHeading,
      onClickTab: handleClickTab
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_14__["default"], {
      desc: subHeading
    }, heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null), error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
      className: "text-xs text-red-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(error))), !dataLists.length && !loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_15__["default"], null)), renderLayoutType());
  }; //


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), renderSidebarSetting(), renderContent());
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

/***/ "./src/frontend-components/Button/ButtonSecondary.tsx":
/*!************************************************************!*\
  !*** ./src/frontend-components/Button/ButtonSecondary.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/frontend-components/Button/Button.tsx");





const ButtonSecondary = _ref => {
  let {
    className = " ",
    ...args
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${className}`
  }, args));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonSecondary);

/***/ }),

/***/ "./src/frontend-components/Card10/Card10.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Card10/Card10.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardMeta_PostCardMetaV2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMetaV2 */ "./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx");
/* harmony import */ var _PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAction/PostCardLikeAction */ "./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx");







const Card10 = _ref => {
  let {
    className = "h-full",
    post,
    isSkeleton
  } = _ref;
  const {
    link,
    categories,
    ncPostMetaData,
    featuredImage
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card10 relative flex flex-col ${className}`,
    "data-nc-id": "Card10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-300"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute top-3 inset-x-3 flex justify-between items-start space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
    favoriteButtonShortcode: ncPostMetaData.favoriteButtonShortcode || ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMetaV2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "leading-none",
    meta: post
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card10);

/***/ }),

/***/ "./src/frontend-components/Card10/Card10V3.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/Card10/Card10V3.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _utils_getImgsFromNcmazGalleryImgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getImgsFromNcmazGalleryImgs */ "./src/utils/getImgsFromNcmazGalleryImgs.ts");








const Card10V3 = _ref => {
  let {
    className = "h-full",
    post,
    galleryType = 1,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    categories,
    postFormats,
    ncmazGalleryImgs,
    author,
    date,
    ncPostMetaData,
    featuredImage
  } = post;
  const galleryImgs = (0,_utils_getImgsFromNcmazGalleryImgs__WEBPACK_IMPORTED_MODULE_6__["default"])(ncmazGalleryImgs);

  const renderGallery2 = () => {
    if (!galleryImgs) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full h-full grid grid-cols-1 grid-rows-2 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-3 gap-2 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative col-span-2",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[0]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[1]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-3 gap-2 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[2]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative col-span-2",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[3]
    })));
  };

  const renderGallery = () => {
    if (!galleryImgs) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full h-full grid grid-cols-3 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[0]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 grid-rows-2 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[1]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[2]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[3]
    })));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card10V3 group relative flex flex-col ${className}`,
    "data-nc-id": "Card10V3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden"
  }, galleryType === 1 ? renderGallery() : renderGallery2(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute top-3 inset-x-3 flex justify-between items-start space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5 mt-4 px-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-1",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mt-3",
    author: author,
    hoverReadingTime: false,
    date: date,
    readingTimeShortcode: ncPostMetaData.readingTimeShortcode
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card10V3);

/***/ }),

/***/ "./src/frontend-components/Card11/Card11.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Card11/Card11.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");








const Card11 = _ref => {
  let {
    className = "h-full",
    post,
    hiddenAuthor = false,
    ratio = "aspect-w-4 aspect-h-3",
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    categories,
    date,
    ncPostMetaData,
    featuredImage
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`,
    "data-nc-id": "Card11"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden bg-gray-300 ${ratio}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute top-3 inset-x-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-4 h-full flex flex-col flex-grow"
  }, !hiddenAuthor ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    meta: post
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs text-neutral-500"
  }, date), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-end justify-between mt-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card11);

/***/ }),

/***/ "./src/frontend-components/Card12/Card12.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Card12/Card12.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");






const Card12 = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    excerpt,
    postFormats
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card12 group relative flex flex-col ${className}`,
    "data-nc-id": "Card12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0",
    src: isSkeleton ? "." : featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "absolute bottom-2 left-2",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug,
    wrapSize: "w-8 h-8",
    iconSize: "w-4 h-4"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " mt-8 pr-10 flex flex-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), excerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-2",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "mt-5",
    meta: post
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card12);

/***/ }),

/***/ "./src/frontend-components/Card13/Card13.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Card13/Card13.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");






const Card13 = _ref => {
  var _postFormats$edges$;

  let {
    className = "",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    excerpt,
    featuredImage,
    date,
    postFormats
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card13 relative flex justify-between ${className}`,
    "data-nc-id": "Card13"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col py-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `nc-card-title block font-semibold text-base`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), excerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-2",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mt-4 block sm:hidden text-sm text-neutral-500 "
  }, date), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-auto hidden sm:block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meta: { ...post
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: `block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0 rounded-xl sm:rounded-3xl",
    className: "object-cover w-full h-full rounded-xl sm:rounded-3xl",
    src: isSkeleton ? "." : featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "absolute bottom-2 left-2",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug,
    wrapSize: "w-8 h-8",
    iconSize: "w-4 h-4"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card13);

/***/ }),

/***/ "./src/frontend-components/Card15Podcast/Card15Podcast.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/Card15Podcast/Card15Podcast.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");




const Card15Podcast = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    postFormats,
    excerpt
  } = post;
  const postFormatName = (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug;

  const renderIcon = state => {
    switch (state) {
      case "loading":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-6 h-6",
          fill: "none",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
        }));

      case "playing":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-5 h-5",
          fill: "none",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M15.25 6.75V17.25"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M8.75 6.75V17.25"
        }));

      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-5 h-5",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
        }));
    }
  };

  const renderDefaultBtnListen = state => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200"
    }, renderIcon(state)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ml-3 text-sm font-medium"
    }, state === "playing" ? "Now playing" : "Listen now"));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`,
    "data-nc-id": "Card15Podcast"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-1/4 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: `block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg `
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0",
    className: "object-cover w-full h-full ",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col flex-grow ml-4 overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `nc-card-title block font-semibold text-lg`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-1",
    title: title
  }, title)), excerpt ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-1",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Card15Podcast);

/***/ }),

/***/ "./src/frontend-components/Card16Podcast/Card16Podcast.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/Card16Podcast/Card16Podcast.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");







const Card16Podcast = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    post,
    ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    categories,
    excerpt,
    featuredImage,
    postFormats
  } = post;
  const postFormatName = (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug;

  const renderIcon = state => {
    if (!state) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "ml-0.5 w-9 h-9",
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
      }));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: " w-9 h-9",
      fill: "none",
      viewBox: "0 0 24 24"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M15.25 6.75V17.25"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M8.75 6.75V17.25"
    }));
  };

  const renderListenButtonDefault = state => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer"
    }, renderIcon(state));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card16Podcast relative flex flex-col ${className}`,
    "data-nc-id": "Card16Podcast"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: `block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${ratio}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: isSkeleton ? "." : (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl) || "."
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bg-neutral-900 bg-opacity-30"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute top-3 inset-x-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-11/12 transform -mt-32 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-5 flex items-center space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-grow "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ncmazcoreJsData.img_musicWave_png,
    alt: "musicWave"
  })), (postFormatName === "post-format-video" || postFormatName === "post-format-audio") && renderListenButtonDefault()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-1",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-2",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-end justify-between mt-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card16Podcast);

/***/ }),

/***/ "./src/frontend-components/Card17Podcast/Card17Podcast.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/Card17Podcast/Card17Podcast.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");




const Card17Podcast = _ref => {
  var _postFormats$edges$;

  let {
    className = "",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    postFormats,
    excerpt
  } = post;
  const postFormatName = (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug;

  const renderIcon = state => {
    switch (state) {
      case "loading":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-6 h-6",
          fill: "none",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          fill: "currentColor",
          d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
        }));

      case "playing":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-6 h-6",
          fill: "none",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M15.25 6.75V17.25"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M8.75 6.75V17.25"
        }));

      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          className: "w-6 h-6",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
        }));
    }
  };

  const renderDefaultBtnListen = state => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer"
    }, renderIcon(state));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${className}`,
    "data-nc-id": "Card17Podcast"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "flex  items-center space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0",
    className: "object-cover w-full h-full ",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col flex-grow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `block font-semibold text-lg`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-1",
    title: title
  }, title)), excerpt ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-1",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })) : null)), (postFormatName === "post-format-video" || postFormatName === "post-format-audio") && renderDefaultBtnListen());
};

/* harmony default export */ __webpack_exports__["default"] = (Card17Podcast);

/***/ }),

/***/ "./src/frontend-components/Card2/Card2.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card2/Card2.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");









const Card2 = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    size = "normal",
    post,
    isSkeleton
  } = _ref;
  const {
    featuredImage,
    title,
    link,
    date,
    categories,
    excerpt,
    author,
    postFormats,
    ncPostMetaData
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`,
    "data-nc-id": "Card2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: "absolute inset-0",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "absolute bottom-2 left-2",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug,
    wrapSize: "w-8 h-8",
    iconSize: "w-4 h-4"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-4 sm:p-5 flex flex-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${size === "large" ? "text-lg sm:text-2xl" : "text-base"}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative my-4",
    date: date,
    author: author,
    readingTimeShortcode: ncPostMetaData.readingTimeShortcode,
    hoverReadingTime: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between mt-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card2);

/***/ }),

/***/ "./src/frontend-components/Card6/Card6.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card6/Card6.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");









const Card6 = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    categories,
    postFormats
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card6 relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`,
    "data-nc-id": "Card6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0 z-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col flex-grow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3 mb-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `block font-semibold text-base`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_7__["default"], {
    meta: { ...post
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center flex-wrap justify-between mt-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: `block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 `
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClassName: "absolute inset-0",
    className: "object-cover w-full h-full",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute bottom-1 left-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    wrapSize: "h-7 w-7",
    iconSize: "h-4 w-4",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card6);

/***/ }),

/***/ "./src/frontend-components/Card8/Card8.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card8/Card8.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");






const Card8 = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    post,
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    excerpt,
    categories,
    postFormats
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card8 group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`,
    "data-nc-id": "Card8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClassName: "absolute inset-0",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "absolute top-4 left-4",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug,
    wrapSize: "w-8 h-8",
    iconSize: "w-4 h-4"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-neutral-900 "
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hidden sm:block mt-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-300 text-sm line-clamp-1",
    dangerouslySetInnerHTML: {
      __html: excerpt
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card8);

/***/ }),

/***/ "./src/frontend-components/Card9/Card9.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card9/Card9.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");









const Card9 = _ref => {
  var _postFormats$edges$;

  let {
    className = "h-full",
    ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
    post,
    hoverClass = "",
    isSkeleton
  } = _ref;
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    postFormats
  } = post;

  const renderMeta = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-flex items-center text-xs text-neutral-300 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      className: "block relative overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "block text-lg font-semibold text-white "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-2",
      title: title
    }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex mt-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block text-neutral-200 hover:text-white font-medium truncate py-1"
    }, author === null || author === void 0 ? void 0 : author.node.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mx-[6px] font-medium"
    }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-normal flex-shrink-0"
    }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_7__["default"])(date)))));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`,
    "data-nc-id": "Card9"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex items-start relative w-full ${ratio}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClassName: "absolute inset-0 rounded-3xl",
    className: "object-cover w-full h-full rounded-3xl",
    src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "absolute top-3 left-3 group-hover:hidden",
    postType: (_postFormats$edges$ = postFormats.edges[0]) === null || _postFormats$edges$ === void 0 ? void 0 : _postFormats$edges$.node.slug,
    wrapSize: "w-7 h-7",
    iconSize: "w-4 h-4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  })), renderMeta()));
};

/* harmony default export */ __webpack_exports__["default"] = (Card9);

/***/ }),

/***/ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx":
/*!*************************************************************!*\
  !*** ./src/frontend-components/CardAuthor2/CardAuthor2.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");





const CardAuthor2 = _ref => {
  var _node$avatar;

  let {
    className = "",
    author,
    readingTimeShortcode = "",
    date,
    hoverReadingTime = true
  } = _ref;

  if (!author) {
    return null;
  }

  const {
    node
  } = author;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: node.url + node.uri,
    className: `nc-CardAuthor2 relative inline-flex items-center ${className}`,
    "data-nc-id": "CardAuthor2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sizeClass: "h-10 w-10 text-base",
    containerClassName: "flex-shrink-0 mr-3",
    radius: "rounded-full",
    imgUrl: (_node$avatar = node.avatar) === null || _node$avatar === void 0 ? void 0 : _node$avatar.url,
    userName: node.username
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium`
  }, node.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date)), readingTimeShortcode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hidden lg:inline mx-1 transition-opacity ${hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""}`
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hidden lg:inline transition-opacity ${hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""}`,
    dangerouslySetInnerHTML: {
      __html: readingTimeShortcode
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardAuthor2);

/***/ }),

/***/ "./src/frontend-components/CardLarge1/CardLarge1.tsx":
/*!***********************************************************!*\
  !*** ./src/frontend-components/CardLarge1/CardLarge1.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NextPrev/NextPrev */ "./src/frontend-components/NextPrev/NextPrev.tsx");









const CardLarge1 = _ref => {
  let {
    className = "",
    isShowing = true,
    post,
    isSkeleton,
    onClickNext = () => {},
    onClickPrev = () => {}
  } = _ref;
  const {
    featuredImage,
    title,
    date,
    categories,
    author,
    link
  } = post;
  if (!isShowing) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-CardLarge1 relative flex flex-col-reverse md:flex-row justify-end ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title text-xl sm:text-2xl font-semibold "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-2",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "relative",
    author: author,
    date: date
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between mt-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-4 sm:pt-8 sm:px-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_7__["default"], {
    btnClassName: "w-11 h-11 text-xl",
    onClickNext: onClickNext,
    onClickPrev: onClickPrev
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full md:w-4/5 lg:w-2/3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClassName: "aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative rounded-3xl",
    className: "absolute !w-full !h-full !inset-0 object-cover rounded-3xl",
    src: isSkeleton ? "." : (featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl) || "."
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardLarge1);

/***/ }),

/***/ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Badge_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Badge/Badge */ "./src/frontend-components/Badge/Badge.tsx");




const CategoryBadgeList = _ref => {
  let {
    className = "",
    itemClass = "",
    categories
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-CategoryBadgeList flow-root `,
    "data-nc-id": "CategoryBadgeList"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex flex-wrap space-x-2 -my-1 ${className}`
  }, categories.edges.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `relative my-1 ${itemClass}`,
    key: index,
    name: item.node.name,
    href: item.node.link
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryBadgeList);

/***/ }),

/***/ "./src/frontend-components/EmptyState/EmptyState.tsx":
/*!***********************************************************!*\
  !*** ./src/frontend-components/EmptyState/EmptyState.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const EmptyState = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `inline-flex flex-col items-center justify-center text-center  pb-10`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ncmazcoreJsData.img_empty_png,
    className: "w-36 sm:w-40",
    alt: "empty state"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-sm block text-neutral-500"
  }, "Nothing we found!"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyState);

/***/ }),

/***/ "./src/frontend-components/HeaderSectionFilter/HeaderSectionFilter.tsx":
/*!*****************************************************************************!*\
  !*** ./src/frontend-components/HeaderSectionFilter/HeaderSectionFilter.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Heading/Heading */ "./src/frontend-components/Heading/Heading.tsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav/Nav */ "./src/frontend-components/Nav/Nav.tsx");
/* harmony import */ var _NavItem_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavItem/NavItem */ "./src/frontend-components/NavItem/NavItem.tsx");
/* harmony import */ var _Button_ButtonSecondary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/ButtonSecondary */ "./src/frontend-components/Button/ButtonSecondary.tsx");







const HeaderSectionFilter = _ref => {
  let {
    tabActiveId = -1,
    tabs,
    subHeading = "",
    viewMoreHref = "#",
    heading = "🎈 Latest Articles",
    onClickTab
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col mb-8 relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    desc: subHeading
  }, heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "sm:space-x-2",
    containerClassName: "relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isActive: tabActiveId === -1,
    onClick: () => onClickTab(-1)
  }, "All"), tabs.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    isActive: tabActiveId === item.id,
    onClick: () => onClickTab(item)
  }, item.name))), viewMoreHref && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hidden sm:block flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button_ButtonSecondary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: viewMoreHref,
    className: "!leading-none"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "View all"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "ml-3 las la-arrow-right text-xl leading-none"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderSectionFilter);

/***/ }),

/***/ "./src/frontend-components/Heading/Heading.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/Heading/Heading.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NextPrev/NextPrev */ "./src/frontend-components/NextPrev/NextPrev.tsx");





const Heading = _ref => {
  let {
    children,
    desc = "Discover the most outstanding articles in all topics of life. ",
    className = "mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",
    isCenter = false,
    hasNextPrev = false,
    ...args
  } = _ref;
  if (!children && !desc) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: isCenter ? "text-center w-full max-w-2xl mx-auto " : "max-w-2xl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `!text-3xl md:!text-4xl !font-semibold !m-0`
  }, args), children || `Section Heading`), desc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"
  }, desc)), hasNextPrev && !isCenter && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClickNext: () => {},
    onClickPrev: () => {}
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./src/frontend-components/NavItem/NavItem.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/NavItem/NavItem.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NavItem = _ref => {
  let {
    className = "px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",
    radius = "rounded-full",
    children,
    onClick = () => {},
    isActive = false,
    renderX
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "nc-NavItem relative",
    "data-nc-id": "NavItem"
  }, renderX && renderX, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `block !leading-none font-medium ${className} ${radius} ${isActive ? "bg-secondary-900 text-secondary-50 " : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"} `,
    onClick: () => {
      onClick && onClick();
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./src/frontend-components/Nav/Nav.tsx":
/*!*********************************************!*\
  !*** ./src/frontend-components/Nav/Nav.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Nav = _ref => {
  let {
    containerClassName = "",
    className = "",
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: `nc-Nav ${containerClassName}`,
    "data-nc-id": "Nav"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `flex  ${className}`
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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

/***/ "./src/frontend-components/NextPrev/NextPrev.tsx":
/*!*******************************************************!*\
  !*** ./src/frontend-components/NextPrev/NextPrev.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const NextPrev = _ref => {
  let {
    containerClassName = "",
    onClickNext = () => {},
    onClickPrev = () => {},
    btnClassName = "w-10 h-10",
    onlyNext = false,
    onlyPrev = false
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${containerClassName}`,
    "data-nc-id": "NextPrev",
    "data-glide-el": "controls"
  }, !onlyNext && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${btnClassName} ${!onlyPrev ? "mr-[6px]" : ""} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,
    onClick: onClickPrev,
    title: "Prev",
    "data-glide-dir": "<"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "las la-angle-left"
  })), !onlyPrev && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,
    onClick: onClickNext,
    title: "Next",
    "data-glide-dir": ">"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "las la-angle-right"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NextPrev);

/***/ }),

/***/ "./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx":
/*!***************************************************************************!*\
  !*** ./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PostCardCommentBtn = _ref => {
  let {
    className = "flex px-3 h-8 text-xs",
    href,
    commentCount
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: href + "#comments",
    className: `nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${className} `,
    title: "Comments",
    "data-nc-id": "PostCardCommentBtn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1",
    d: "M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-1 text-neutral-900 dark:text-neutral-200"
  }, commentCount));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardCommentBtn);

/***/ }),

/***/ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx":
/*!*********************************************************************************!*\
  !*** ./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PostCardDropdownShare = () => {
  const renderButton = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M12 14.25L12 5"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M8.75 8.25L12 4.75L15.25 8.25"
    })));
  };

  return renderButton();
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardDropdownShare);

/***/ }),

/***/ "./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx":
/*!***************************************************************************!*\
  !*** ./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PostCardLikeAction = _ref => {
  let {
    favoriteButtonShortcode,
    className = "relative"
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: favoriteButtonShortcode
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardLikeAction);

/***/ }),

/***/ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx":
/*!***********************************************************************************!*\
  !*** ./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostCardCommentBtn_PostCardCommentBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostCardCommentBtn/PostCardCommentBtn */ "./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx");




const PostCardLikeAndComment = _ref => {
  var _postData$ncPostMetaD;

  let {
    className = "",
    itemClass = "px-3 h-8 text-xs",
    hiddenCommentOnMobile = true,
    postData,
    onClickLike = () => {}
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`,
    "data-nc-id": "PostCardLikeAndComment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: (postData === null || postData === void 0 ? void 0 : (_postData$ncPostMetaD = postData.ncPostMetaData) === null || _postData$ncPostMetaD === void 0 ? void 0 : _postData$ncPostMetaD.favoriteButtonShortcode) || ""
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardCommentBtn_PostCardCommentBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: postData.link,
    commentCount: postData.commentCount || 0,
    className: `${hiddenCommentOnMobile ? "hidden sm:flex" : "flex"}  ${itemClass}`
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardLikeAndComment);

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

/***/ "./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");





const PostCardMetaV2 = _ref => {
  var _author, _author2, _author2$avatar, _author3, _author4;

  let {
    className = "leading-none",
    meta,
    hiddenAvatar = false,
    size = "normal"
  } = _ref;
  let {
    date,
    author,
    title
  } = meta;
  author = (_author = author) === null || _author === void 0 ? void 0 : _author.node;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${size === "normal" ? "text-xs" : "text-sm"} ${className}`,
    "data-nc-id": "PostCardMetaV2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "relative flex items-center space-x-2"
  }, !hiddenAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    radius: "rounded-full",
    sizeClass: size === "normal" ? "h-9 w-9 text-base" : "h-10 w-10 text-xl",
    imgUrl: (_author2 = author) === null || _author2 === void 0 ? void 0 : (_author2$avatar = _author2.avatar) === null || _author2$avatar === void 0 ? void 0 : _author2$avatar.url,
    userName: (_author3 = author) === null || _author3 === void 0 ? void 0 : _author3.name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `block font-semibold ${size === "normal" ? "text-base" : "text-lg"}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-1"
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex mt-1.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
  }, (_author4 = author) === null || _author4 === void 0 ? void 0 : _author4.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 font-normal"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardMetaV2);

/***/ }),

/***/ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx":
/*!*******************************************************************************!*\
  !*** ./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PostTypeFeaturedIcon = _ref => {
  let {
    className = "",
    postType = "Standard",
    onClick = () => {},
    wrapSize = "w-11 h-11",
    iconSize = "w-6 h-6"
  } = _ref;

  const renderMediaIcon = () => {
    if (postType.includes('video')) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }

    if (postType.includes('audio')) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20.8398 16.8V12",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9.40039 9.5199L20.8404 6.3999",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }

    if (postType.includes('gallery')) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }

    return null;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostTypeFeaturedIcon ${className}`,
    "data-nc-id": "PostTypeFeaturedIcon",
    onClick: onClick
  }, !!postType && postType !== "Standard" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${wrapSize}`
  }, renderMediaIcon()));
};

/* harmony default export */ __webpack_exports__["default"] = (PostTypeFeaturedIcon);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionLargeSlider.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionLargeSlider.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardLarge1_CardLarge1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardLarge1/CardLarge1 */ "./src/frontend-components/CardLarge1/CardLarge1.tsx");




const SectionLargeSlider = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  const [indexActive, setIndexActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const handleClickNext = () => {
    setIndexActive(state => {
      if (state >= activePosts.length - 1) {
        return 0;
      }

      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive(state => {
      if (state === 0) {
        return activePosts.length - 1;
      }

      return state - 1;
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, activePosts.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardLarge1_CardLarge1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    isSkeleton: isLoading,
    isShowing: indexActive === index,
    onClickNext: handleClickNext,
    onClickPrev: handleClickPrev,
    post: item.node
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionLargeSlider);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine1.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine1.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card2_Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card2/Card2 */ "./src/frontend-components/Card2/Card2.tsx");
/* harmony import */ var _Card6_Card6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card6/Card6 */ "./src/frontend-components/Card6/Card6.tsx");





const SectionMagazine1 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    size: "large",
    post: activePosts[0].node
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-6 md:gap-8"
  }, activePosts.filter((_, i) => i < 4 && i > 0).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card6_Card6__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    key: index,
    post: item.node
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine1);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine2.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine2.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card11_Card11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card11/Card11 */ "./src/frontend-components/Card11/Card11.tsx");
/* harmony import */ var _Card2_Card2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card2/Card2 */ "./src/frontend-components/Card2/Card2.tsx");





const SectionMagazine2 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-6"
  }, activePosts.filter((_, i) => i < 3 && i > 0).map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card11_Card11__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isSkeleton: isLoading,
      ratio: "aspect-w-5 aspect-h-3",
      key: index,
      post: item.node
    });
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:col-span-2"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card2_Card2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    size: "large",
    post: activePosts[0].node
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1"
  }, activePosts.filter((_, i) => i < 5 && i >= 3).map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card11_Card11__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isSkeleton: isLoading,
      ratio: "aspect-w-5 aspect-h-3",
      key: index,
      post: item.node
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine2);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine3.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine3.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card2_Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card2/Card2 */ "./src/frontend-components/Card2/Card2.tsx");
/* harmony import */ var _Card9_Card9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card9/Card9 */ "./src/frontend-components/Card9/Card9.tsx");





const SectionMagazine3 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    size: "large",
    post: activePosts[0].node
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
  }, activePosts.filter((_, i) => i < 5 && i >= 1).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    ratio: "aspect-w-3 aspect-h-3",
    key: index,
    post: item.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine3);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine4.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine4.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card9_Card9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card9/Card9 */ "./src/frontend-components/Card9/Card9.tsx");
/* harmony import */ var _Card8_Card8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card8/Card8 */ "./src/frontend-components/Card8/Card8.tsx");





const SectionMagazine4 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card8_Card8__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    className: "sm:col-span-2",
    post: activePosts[0].node
  }), activePosts.filter((_, i) => i < 3 && i >= 1).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    key: index,
    post: item.node
  })), activePosts.filter((_, i) => i < 5 && i >= 3).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    key: index,
    post: item.node
  })), activePosts[5] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card8_Card8__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    className: "sm:col-span-2",
    post: activePosts[5].node
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine4);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine5.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine5.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card12_Card12__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card12/Card12 */ "./src/frontend-components/Card12/Card12.tsx");
/* harmony import */ var _Card13_Card13__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card13/Card13 */ "./src/frontend-components/Card13/Card13.tsx");





const SectionMagazine5 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card12_Card12__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    post: activePosts[0].node
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-5 md:gap-7"
  }, activePosts.filter((_, i) => i < 4 && i > 0).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card13_Card13__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    key: index,
    post: item.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine5);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine6.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine6.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");






const SectionMagazine6 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;

  const renderMain = () => {
    const {
      featuredImage,
      author,
      title,
      date,
      excerpt,
      link,
      ncPostMetaData
    } = activePosts[0].node;
    const subPosts = activePosts.filter((_, i) => i > 0);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
      className: "relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      containerClassName: "absolute inset-0",
      src: featuredImage === null || featuredImage === void 0 ? void 0 : featuredImage.node.sourceUrl
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      className: "line-clamp-2"
    }, title)), excerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "hidden lg:block text-base text-neutral-200 mt-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-2",
      dangerouslySetInnerHTML: {
        __html: excerpt
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-7"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hoverReadingTime: false,
      readingTimeShortcode: ncPostMetaData.readingTimeShortcode || "",
      date: date,
      author: author
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flow-root h-full w-full overflow-y-auto hiddenScrollbar"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700"
    }, subPosts.map((post, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      className: "block py-5 lg:py-7"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "nc-card-title text-base font-semibold"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: post.node.title,
      href: post.node.link,
      className: "line-clamp-2"
    }, post.node.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt-4",
      meta: post.node
    })))))));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, activePosts[0] && renderMain());
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine6);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine7.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine7.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card10/Card10V3 */ "./src/frontend-components/Card10/Card10V3.tsx");
/* harmony import */ var _Card10_Card10__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card10/Card10 */ "./src/frontend-components/Card10/Card10.tsx");





const SectionMagazine7 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid grid-cols-1 gap-6 md:gap-8`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2`
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    post: activePosts[0].node
  }), activePosts[1] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    galleryType: 2,
    post: activePosts[1].node
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3"
  }, activePosts.filter((_, i) => i > 1).map(post => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    key: post.node.id,
    post: post.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine7);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine8.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine8.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card16Podcast_Card16Podcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card16Podcast/Card16Podcast */ "./src/frontend-components/Card16Podcast/Card16Podcast.tsx");
/* harmony import */ var _Card17Podcast_Card17Podcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card17Podcast/Card17Podcast */ "./src/frontend-components/Card17Podcast/Card17Podcast.tsx");





const SectionMagazine8 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8`
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card16Podcast_Card16Podcast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    className: "sm:col-span-3 lg:col-span-2",
    post: activePosts[0].node
  }), activePosts[1] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card16Podcast_Card16Podcast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    className: "sm:col-span-3 lg:col-span-2",
    post: activePosts[1].node
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2"
  }, activePosts.filter((_, i) => i > 1 && i < 6).map(p => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card17Podcast_Card17Podcast__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    key: p.node.id,
    post: p.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine8);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine9.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine9.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card15Podcast_Card15Podcast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card15Podcast/Card15Podcast */ "./src/frontend-components/Card15Podcast/Card15Podcast.tsx");
/* harmony import */ var _Card9_Card9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card9/Card9 */ "./src/frontend-components/Card9/Card9.tsx");





const SectionMagazine9 = _ref => {
  let {
    activePosts,
    isLoading
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    ratio: "aspect-w-4 aspect-h-3 ",
    post: activePosts[0].node
  }), activePosts[1] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    ratio: "aspect-w-4 aspect-h-3 ",
    post: activePosts[1].node
  }), activePosts[2] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSkeleton: isLoading,
    ratio: "aspect-w-4 aspect-h-3 ",
    post: activePosts[2].node
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8`
  }, activePosts.filter((_, i) => i > 2).map(p => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card15Podcast_Card15Podcast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    key: p.node.id,
    post: p.node
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMagazine9);

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

/***/ }),

/***/ "./src/utils/getImgsFromNcmazGalleryImgs.ts":
/*!**************************************************!*\
  !*** ./src/utils/getImgsFromNcmazGalleryImgs.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function getImgsFromNcmazGalleryImgs(ncmazGalleryImgs) {
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  } = ncmazGalleryImgs;
  const arr = [(image1 || {}).sourceUrl, (image2 || {}).sourceUrl, (image3 || {}).sourceUrl, (image4 || {}).sourceUrl, (image5 || {}).sourceUrl, (image6 || {}).sourceUrl, (image7 || {}).sourceUrl, (image8 || {}).sourceUrl].filter(item => !!item);
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (getImgsFromNcmazGalleryImgs);

/***/ })

}]);
//# sourceMappingURL=src_block-magazine_Edit_tsx.js.map