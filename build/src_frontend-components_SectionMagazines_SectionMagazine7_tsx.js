"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_frontend-components_SectionMagazines_SectionMagazine7_tsx"],{

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
//# sourceMappingURL=src_frontend-components_SectionMagazines_SectionMagazine7_tsx.js.map