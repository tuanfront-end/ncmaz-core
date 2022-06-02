"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_frontend-components_SectionMagazines_SectionMagazine8_tsx"],{

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

/***/ })

}]);
//# sourceMappingURL=src_frontend-components_SectionMagazines_SectionMagazine8_tsx.js.map