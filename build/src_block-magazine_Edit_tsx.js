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
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _frontend_components_HeaderSectionFilter_HeaderSectionFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../frontend-components/HeaderSectionFilter/HeaderSectionFilter */ "./src/frontend-components/HeaderSectionFilter/HeaderSectionFilter.tsx");
/* harmony import */ var _frontend_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../frontend-components/Heading/Heading */ "./src/frontend-components/Heading/Heading.tsx");
/* harmony import */ var _frontend_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../frontend-components/EmptyState/EmptyState */ "./src/frontend-components/EmptyState/EmptyState.tsx");
/* harmony import */ var _hooks_usePostGqlQuery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/usePostGqlQuery */ "./src/hooks/usePostGqlQuery.ts");
/* harmony import */ var _contains_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../contains/common */ "./src/contains/common.ts");



















const SectionMagazine1Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine1_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine1 */ "./src/frontend-components/SectionMagazines/SectionMagazine1.tsx")));
const SectionMagazine2Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine2_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine2 */ "./src/frontend-components/SectionMagazines/SectionMagazine2.tsx")));
const SectionMagazine3Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine3_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine3 */ "./src/frontend-components/SectionMagazines/SectionMagazine3.tsx")));
const SectionMagazine4Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine4_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine4 */ "./src/frontend-components/SectionMagazines/SectionMagazine4.tsx")));
const SectionMagazine5Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine5_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine5 */ "./src/frontend-components/SectionMagazines/SectionMagazine5.tsx")));
const SectionMagazine6Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine6_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine6 */ "./src/frontend-components/SectionMagazines/SectionMagazine6.tsx")));
const SectionMagazine7Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine7_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine7 */ "./src/frontend-components/SectionMagazines/SectionMagazine7.tsx")));
const SectionMagazine8Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine8_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine8 */ "./src/frontend-components/SectionMagazines/SectionMagazine8.tsx")));
const SectionMagazine9Lazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionMagazine9_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionMagazine9 */ "./src/frontend-components/SectionMagazines/SectionMagazine9.tsx")));
const SectionLargeSliderLazy = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_frontend-components_SectionMagazines_SectionLargeSlider_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../frontend-components/SectionMagazines/SectionLargeSlider */ "./src/frontend-components/SectionMagazines/SectionLargeSlider.tsx")));
function BlockMagazineEdit(props) {
  const {
    attributes,
    setAttributes
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
    sectionName,
    showFilterTab,
    viewMoreHref,
    heading,
    subHeading,
    hasBackground
  } = attributes;
  const {
    GQL_QUERY__string,
    GQL_QUERY__string_text,
    variables,
    dataLists,
    error,
    loading,
    data,
    tabActiveId,
    handleClickTab
  } = (0,_hooks_usePostGqlQuery__WEBPACK_IMPORTED_MODULE_16__["default"])(attributes); // ---- SAVE graphQLvariables ----

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!data) return;
    setAttributes({
      graphQLvariables: {
        variables,
        queryString: GQL_QUERY__string_text
      },
      expectedNumberResults: dataLists.length || numberPerPage
    });
  }, [data]); //

  const handleChangeFilterDataBy = value => {
    if (value === "by_specific") {
      setAttributes({
        filterDataBy: value,
        showFilterTab: false,
        categories: [],
        tags: [],
        authors: []
      });
    } else {
      setAttributes({
        filterDataBy: value,
        showFilterTab: true,
        posts: []
      });
    }
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
      label: "",
      selected: filterDataBy,
      options: _contains_common__WEBPACK_IMPORTED_MODULE_17__.OPTIONS_FILTER_DATA_BY,
      onChange: handleChangeFilterDataBy
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border-b border-gray-600 mt-2 mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, renderFilterPostsContent())))));
  };

  const renderLayoutType = () => {
    switch (sectionName) {
      case "magazine-1":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine1Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-2":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine2Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }), " ");

      case "magazine-3":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine3Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-4":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine4Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-5":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine5Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-6":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine6Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-7":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine7Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-8":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine8Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "magazine-9":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine9Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      case "large-slider":
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionLargeSliderLazy, {
          isLoading: loading,
          activePosts: dataLists
        }));

      default:
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
          fallback: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SectionMagazine1Lazy, {
          isLoading: loading,
          activePosts: dataLists
        }));
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

/***/ "./src/hooks/usePostGqlQuery.ts":
/*!**************************************!*\
  !*** ./src/hooks/usePostGqlQuery.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePostGqlQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contains/contants */ "./src/contains/contants.ts");



function usePostGqlQuery(attributes) {
  var _data$posts;

  const {
    filterDataBy,
    posts,
    categories,
    tags,
    orderBy,
    order,
    numberPerPage,
    authors
  } = attributes; //

  const [tabActiveId, setTabActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1); //

  let GQL_QUERY__string = "";
  let GQL_QUERY__string_text = "";
  let variables = {};
  let variablesUseNow; //

  if (filterDataBy === "by_specific") {
    variablesUseNow = null;
    variables = {
      // arr posts Slugs
      nameIn: (posts === null || posts === void 0 ? void 0 : posts.map(item => item.value)) || []
    };
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_1__.GQL_QUERY_GET_POSTS_BY_SPECIFIC;
    GQL_QUERY__string_text = "GQL_QUERY_GET_POSTS_BY_SPECIFIC";
  } else {
    GQL_QUERY__string = _contains_contants__WEBPACK_IMPORTED_MODULE_1__.GQL_QUERY_GET_POSTS_BY_FILTER;
    GQL_QUERY__string_text = "GQL_QUERY_GET_POSTS_BY_FILTER";
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


  const gqlQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
		${GQL_QUERY__string}
	`;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(gqlQuery, {
    variables: variablesUseNow || variables
  });
  const dataLists = (data === null || data === void 0 ? void 0 : (_data$posts = data.posts) === null || _data$posts === void 0 ? void 0 : _data$posts.edges) || []; //

  const handleClickTab = tab => {
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
    GQL_QUERY__string,
    // for debug
    GQL_QUERY__string_text,
    variables,
    loading,
    error,
    data,
    dataLists,
    handleClickTab,
    tabActiveId
  };
}

/***/ })

}]);
//# sourceMappingURL=src_block-magazine_Edit_tsx.js.map