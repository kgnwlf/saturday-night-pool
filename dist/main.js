/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nconst e = React.createElement;\n\nclass LikeButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { liked: false };\n  }\n\n  render() {\n    if (this.state.liked) {\n      return 'You liked this.';\n    }\n\n    return e(\n      'button',\n      { onClick: () => this.setState({ liked: true }) },\n      'Like'\n    );\n  }\n}\n\nconst domContainer = document.querySelector('#like_button_container');\nReactDOM.render(e(LikeButton), domContainer);\n\n//# sourceURL=webpack://saturday-night-pool/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;