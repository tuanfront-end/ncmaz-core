"use strict";
(self["webpackChunkncmaz_core"] = self["webpackChunkncmaz_core"] || []).push([["src_block-newsletter_Edit_tsx"],{

/***/ "./src/block-newsletter/Edit.tsx":
/*!***************************************!*\
  !*** ./src/block-newsletter/Edit.tsx ***!
  \***************************************/
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
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frontend-components/Badge/Badge */ "./src/frontend-components/Badge/Badge.tsx");







function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props; //

  const {
    hasBackground,
    heading,
    subHeading,
    descLists,
    mediaUrl,
    mediaId,
    mediaSrcSet
  } = attributes;

  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
      mediaUrl: "",
      mediaSrcSet: ""
    });
  };

  const onSelectMedia = media => {
    var _media$sizes, _media$sizes$medium, _media$sizes2, _media$sizes2$full, _media$sizes3, _media$sizes3$large;

    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url,
      mediaSrcSet: `${media.url} 1297w, ${(_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$medium = _media$sizes.medium) === null || _media$sizes$medium === void 0 ? void 0 : _media$sizes$medium.url} 300w, ${(_media$sizes2 = media.sizes) === null || _media$sizes2 === void 0 ? void 0 : (_media$sizes2$full = _media$sizes2.full) === null || _media$sizes2$full === void 0 ? void 0 : _media$sizes2$full.url} 1024w, ${(_media$sizes3 = media.sizes) === null || _media$sizes3 === void 0 ? void 0 : (_media$sizes3$large = _media$sizes3.large) === null || _media$sizes3$large === void 0 ? void 0 : _media$sizes3$large.url} 768w`
    });
  };

  const renderSidebarSettings = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-type": "ncmaz-core/sidebar-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
      header: "Section settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      initialOpen: true,
      title: "General settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Heading",
      value: heading,
      onChange: heading => setAttributes({
        heading
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
      label: "Sub heading",
      value: subHeading,
      onChange: subHeading => setAttributes({
        subHeading
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
      value: descLists,
      suggestions: [],
      onChange: descLists => setAttributes({
        descLists
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: onSelectMedia,
      value: mediaId,
      allowedTypes: ["image"],
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: mediaId == 0 ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview",
          onClick: open
        }, mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Choose an image", "awp"), !!mediaUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: mediaUrl,
          className: "w-full"
        }));
      }
    })), mediaId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Replace image", "awp"),
      value: mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ["image"],
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: open
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Replace image", "awp"));
      }
    })), mediaId !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Remove image", "awp")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-x-3 flex "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
      checked: hasBackground,
      onChange: () => setAttributes({
        hasBackground: !hasBackground
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Background", "ncmaz-core")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Background", "ncmaz-core")))))))));
  };

  const renderPreviewContent = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: hasBackground ? "py-16" : ""
    }, hasBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center `,
      "data-nc-id": "SectionSubscribe2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-semibold text-4xl"
    }, heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block mt-6 text-neutral-500 dark:text-neutral-400"
    }, subHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "space-y-5 !mt-10"
    }, descLists.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "flex items-center space-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: index % 2 === 0 ? "pink" : "green",
      name: `0${index + 1}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-medium text-neutral-700 dark:text-neutral-300"
    }, item)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-10 relative max-w-sm"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
      template: [["core/shortcode", {}]],
      templateLock: "all"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-grow"
    }, mediaUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: mediaUrl,
      className: "w-full",
      alt: ""
    }))));
  }; //


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), renderSidebarSettings(), renderPreviewContent());
}

/***/ })

}]);
//# sourceMappingURL=src_block-newsletter_Edit_tsx.js.map