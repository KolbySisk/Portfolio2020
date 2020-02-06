webpackHotUpdate("static/development/pages/work/data-inc.js",{

/***/ "./components/work-banner/index.tsx":
/*!******************************************!*\
  !*** ./components/work-banner/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _work_banner_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-banner.styles */ "./components/work-banner/work-banner.styles.tsx");
var _jsxFileName = "/Users/kolbysisk/Projects/Portfolio2020/components/work-banner/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var WorkBanner = function WorkBanner(_ref) {
  var work = _ref.work;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_work_banner_styles__WEBPACK_IMPORTED_MODULE_2__["Work"], {
    color: work.color,
    patternPath: work.patternPath,
    initial: {
      backgroundPositionX: '0px'
    },
    animate: {
      backgroundPositionX: '-5000px'
    },
    exit: {},
    transition: {
      loop: Infinity,
      ease: 'linear',
      duration: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_work_banner_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, work.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkBanner);

/***/ }),

/***/ "./components/work-banner/work-banner.styles.tsx":
/*!*******************************************************!*\
  !*** ./components/work-banner/work-banner.styles.tsx ***!
  \*******************************************************/
/*! exports provided: Work, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles */ "./styles/index.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var Work =
/*#__PURE__*/
Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
  target: "ekkerfz0",
  label: "Work"
})(function (props) {
  var bgImage = __webpack_require__("./public/images sync recursive ^\\.\\/.*$")("./".concat(props.patternPath, ""));

  return [_styles__WEBPACK_IMPORTED_MODULE_1__["TitleFont"], {
    width: '100%',
    height: Object(_styles__WEBPACK_IMPORTED_MODULE_1__["spaced"])(36),
    fontSize: '36px',
    lineHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: "0 ".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_1__["spaced"])(4), "px"),
    backgroundColor: props.color,
    textShadow: "0 2px 4px rgba(0,0,0,.3)",
    textAlign: 'center',
    backgroundImage: "url(".concat(bgImage, ")")
  }];
}, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2xieXNpc2svUHJvamVjdHMvUG9ydGZvbGlvMjAyMC9jb21wb25lbnRzL3dvcmstYmFubmVyL3dvcmstYmFubmVyLnN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXlCIiwiZmlsZSI6Ii9Vc2Vycy9rb2xieXNpc2svUHJvamVjdHMvUG9ydGZvbGlvMjAyMC9jb21wb25lbnRzL3dvcmstYmFubmVyL3dvcmstYmFubmVyLnN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBUaXRsZUZvbnQsIHNwYWNlZCB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IFdvcms6IGFueSA9IHN0eWxlZChtb3Rpb24uZGl2KSgocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBiZ0ltYWdlID0gcmVxdWlyZShgLi4vLi4vcHVibGljL2ltYWdlcy8ke3Byb3BzLnBhdHRlcm5QYXRofT93ZWJwYCk7XG5cbiAgcmV0dXJuIFtcbiAgICBUaXRsZUZvbnQsXG4gICAge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogc3BhY2VkKDM2KSxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6IGAwICR7c3BhY2VkKDQpfXB4YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0U2hhZG93OiBgMCAycHggNHB4IHJnYmEoMCwwLDAsLjMpYCxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZ0ltYWdlfSlgLFxuICAgIH0sXG4gIF07XG59KTtcblxuZXhwb3J0IGNvbnN0IFRpdGxlOiBhbnkgPSBzdHlsZWQuaDEoKHByb3BzOiBhbnkpID0+IFtcbiAgVGl0bGVGb250LFxuICB7XG4gICAgZm9udFNpemU6ICc1MnB4JyxcbiAgICB0ZXh0U2hhZG93OiBgMCAycHggNHB4IHJnYmEoMCwwLDAsLjUpYCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG5dKTtcbiJdfQ== */");
var Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", {
  target: "ekkerfz1",
  label: "Title"
})(function (props) {
  return [_styles__WEBPACK_IMPORTED_MODULE_1__["TitleFont"], {
    fontSize: '52px',
    textShadow: "0 2px 4px rgba(0,0,0,.5)",
    textAlign: 'center',
    width: '100%'
  }];
}, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2xieXNpc2svUHJvamVjdHMvUG9ydGZvbGlvMjAyMC9jb21wb25lbnRzL3dvcmstYmFubmVyL3dvcmstYmFubmVyLnN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUIwQiIsImZpbGUiOiIvVXNlcnMva29sYnlzaXNrL1Byb2plY3RzL1BvcnRmb2xpbzIwMjAvY29tcG9uZW50cy93b3JrLWJhbm5lci93b3JrLWJhbm5lci5zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgVGl0bGVGb250LCBzcGFjZWQgfSBmcm9tICcuLi8uLi9zdHlsZXMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBXb3JrOiBhbnkgPSBzdHlsZWQobW90aW9uLmRpdikoKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgYmdJbWFnZSA9IHJlcXVpcmUoYC4uLy4uL3B1YmxpYy9pbWFnZXMvJHtwcm9wcy5wYXR0ZXJuUGF0aH0/d2VicGApO1xuXG4gIHJldHVybiBbXG4gICAgVGl0bGVGb250LFxuICAgIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6IHNwYWNlZCgzNiksXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiBgMCAke3NwYWNlZCg0KX1weGAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dFNoYWRvdzogYDAgMnB4IDRweCByZ2JhKDAsMCwwLC4zKWAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmdJbWFnZX0pYCxcbiAgICB9LFxuICBdO1xufSk7XG5cbmV4cG9ydCBjb25zdCBUaXRsZTogYW55ID0gc3R5bGVkLmgxKChwcm9wczogYW55KSA9PiBbXG4gIFRpdGxlRm9udCxcbiAge1xuICAgIGZvbnRTaXplOiAnNTJweCcsXG4gICAgdGV4dFNoYWRvdzogYDAgMnB4IDRweCByZ2JhKDAsMCwwLC41KWAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuXSk7XG4iXX0= */");

/***/ }),

/***/ "./pages/work/data-inc.tsx":
/*!*********************************!*\
  !*** ./pages/work/data-inc.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./styles/index.tsx");
/* harmony import */ var _components_work_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/work-banner */ "./components/work-banner/index.tsx");
/* harmony import */ var _components_skills_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/skills-banner */ "./components/skills-banner/index.tsx");
/* harmony import */ var _components_double_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/double-column */ "./components/double-column/index.tsx");
/* harmony import */ var _components_all_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/all-projects */ "./components/all-projects/index.tsx");
/* harmony import */ var _components_next_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/next-project */ "./components/next-project/index.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer */ "./components/footer/index.tsx");
/* harmony import */ var _components_animator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/animator */ "./components/animator/index.tsx");
/* harmony import */ var _components_contact_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/contact-section */ "./components/contact-section/index.tsx");
/* harmony import */ var _hooks_use_work__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-work */ "./hooks/use-work.tsx");
/* harmony import */ var _hooks_use_title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-title */ "./hooks/use-title.tsx");
var _jsxFileName = "/Users/kolbysisk/Projects/Portfolio2020/pages/work/data-inc.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useWork = Object(_hooks_use_work__WEBPACK_IMPORTED_MODULE_11__["useWork"])('data-inc'),
      work = _useWork.work,
      nextWork = _useWork.nextWork;

  Object(_hooks_use_title__WEBPACK_IMPORTED_MODULE_12__["useTitle"])("Kolby Sisk - ".concat(work === null || work === void 0 ? void 0 : work.title));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_work_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    work: work,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].darkGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "About")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "From 2014 to 2017 I worked at a small company called DATA, Inc. DATA specializes in Kentico - a CMS built for the Windows ecosystem using ASP.NET and SQL Server. DATA works primarily with government and commercial professionals in education, engineering, and medical sectors. During these 3 years I learned the Windows development ecosystem, worked on many Kentico sites, built and published mobile apps, and made some great friends.")), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].CenterBanner,
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].silver,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["FontColor"], {
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].darkGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["TextCenter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Challenge"))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Learn Kentico and the Windows ecosystem - ASP.NET, .NET Core, Entity Framework, SQL Server, IIS, Azure. Work with a small team using these technologies to build Kentico and .NET apps. Use mobile technologies like Ionic to build and publish mobile apps."))), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: work.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CEMM Library")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "CEMM, short for Airforce Center of Excellence for Medical Multimedia, is an initiative from the Office of the Surgeon General to supply multimedia to support education throughout the Military Health System. CEMM Library is a solution to centralize all of their multimedia content. With a 2 person team we built a Netflix style web app. My role on this project was the front-end dev. I used React and Redux to build the front-end. I also created API endpoints using .NET Core.")), __jsx("a", {
    href: "https://www.cemmlibrary.org",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLink"], {
    style: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), " View live project")), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    reverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].silver,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["FontColor"], {
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].darkGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Colorado Admissions Tool")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Colorado Admissions Tool is a tool that helps Coloradans determine which educational institution is the best fit for them. They start by going through a wizard that collects their education info such as GPA, ACT/SAT scores, class grades. Then with this information an algorithm determines which schools the user is likely to be accepted into, along with other useful information. My role on this project was the front-end dev, and I also created API endpoints. For this project I used Angular and .Net Core.")), __jsx("a", {
    href: "https://www.coadmissionstool.org",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLink"], {
    style: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " View live project"))), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: work.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "4A0X1")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "4A0X1 is an app made for the Airforce Center of Excellence for Medical Multimedia. The goal was to create an app that served as an informational management system used to share information to military personnel. I was tasked to build and publish the app. I developed the app using Ionic and then went through the publishing process for the Apple App Store, Google Play store, and Windows App store.")), __jsx("a", {
    href: "https://apps.apple.com/us/app/4a0x1/id996640605",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLink"], {
    style: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), " View live project")), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx(_components_skills_banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    skills: work.skills,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    reverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].silver,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["FontColor"], {
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].darkGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "ServSafe")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "ServSafe is a food and beverage safety training and certificate program administered by the National Restaurant Association. Sanitation certification is required by most restaurants as a basic credential for their management staff. The goal was to create a web app using Kentico that would help restaurants get certified. I was tasked with the front-end and Kentico development.")), __jsx("a", {
    href: "https://www.servsafe.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLink"], {
    style: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), " View live project"))), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ContentSquare,
    backgroundColor: work.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "NRA Show")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Every year the National Restaurant Association has a conference that features more than 40,000 restaurant industry executives. The goal was to create a web app using Kentico and Angular to help manage and display all of the conference data. I was tasked with the front-end development, Kentico development, and creating an API using ASP.NET.")), __jsx("a", {
    href: "https://www.nationalrestaurantshow.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLink"], {
    style: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), " View live project")), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].ImageSquare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx(_components_animator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    containerType: _components_animator__WEBPACK_IMPORTED_MODULE_9__["ContainerType"].CenterBanner,
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["Color"].darkGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ElementSpacing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["TextCenter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Results"))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "During my time at DATA I worked with an amazing group of engineers and learned a ton. I learned to develop apps and do devops in the Windows ecosystem. I built mobile apps using Ionic and went through the gruelling process of publishing apps to the app stores. But most importantly of all, I learned how to add Windows path environment variables.")), __jsx(_components_double_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_components_all_projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx(_components_next_project__WEBPACK_IMPORTED_MODULE_7__["default"], {
    work: nextWork,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx(_components_contact_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=data-inc.js.bf62272c021163de71db.hot-update.js.map