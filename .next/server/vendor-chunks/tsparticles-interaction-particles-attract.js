"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-particles-attract";
exports.ids = ["vendor-chunks/tsparticles-interaction-particles-attract"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attractor: () => (/* binding */ Attractor)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ParticlesInteractorBase.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass Attractor extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ParticlesInteractorBase {\n    constructor(container) {\n        super(container);\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact(p1) {\n        const container = this.container, distance = p1.retina.attractDistance ?? container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);\n        for (const p2 of query) {\n            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {\n                continue;\n            }\n            const pos2 = p2.getPosition(), { dx, dy } = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getDistances)(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1000), ay = dy / (rotate.y * 1000), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;\n            p1.velocity.x -= ax * p1Factor;\n            p1.velocity.y -= ay * p1Factor;\n            p2.velocity.x += ax * p2Factor;\n            p2.velocity.y += ay * p2Factor;\n        }\n    }\n    isEnabled(particle) {\n        return particle.options.move.attract.enable;\n    }\n    reset() {\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWF0dHJhY3QvZXNtL0F0dHJhY3Rvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEU7QUFDckUsd0JBQXdCLHVFQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLEVBQUUsZ0VBQVk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLXBhcnRpY2xlcy1hdHRyYWN0L2VzbS9BdHRyYWN0b3IuanM/NjAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJ0aWNsZXNJbnRlcmFjdG9yQmFzZSwgZ2V0RGlzdGFuY2VzLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBBdHRyYWN0b3IgZXh0ZW5kcyBQYXJ0aWNsZXNJbnRlcmFjdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgIH1cbiAgICBhc3luYyBpbnRlcmFjdChwMSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgZGlzdGFuY2UgPSBwMS5yZXRpbmEuYXR0cmFjdERpc3RhbmNlID8/IGNvbnRhaW5lci5yZXRpbmEuYXR0cmFjdERpc3RhbmNlLCBwb3MxID0gcDEuZ2V0UG9zaXRpb24oKSwgcXVlcnkgPSBjb250YWluZXIucGFydGljbGVzLnF1YWRUcmVlLnF1ZXJ5Q2lyY2xlKHBvczEsIGRpc3RhbmNlKTtcbiAgICAgICAgZm9yIChjb25zdCBwMiBvZiBxdWVyeSkge1xuICAgICAgICAgICAgaWYgKHAxID09PSBwMiB8fCAhcDIub3B0aW9ucy5tb3ZlLmF0dHJhY3QuZW5hYmxlIHx8IHAyLmRlc3Ryb3llZCB8fCBwMi5zcGF3bmluZykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9zMiA9IHAyLmdldFBvc2l0aW9uKCksIHsgZHgsIGR5IH0gPSBnZXREaXN0YW5jZXMocG9zMSwgcG9zMiksIHJvdGF0ZSA9IHAxLm9wdGlvbnMubW92ZS5hdHRyYWN0LnJvdGF0ZSwgYXggPSBkeCAvIChyb3RhdGUueCAqIDEwMDApLCBheSA9IGR5IC8gKHJvdGF0ZS55ICogMTAwMCksIHAxRmFjdG9yID0gcDIuc2l6ZS52YWx1ZSAvIHAxLnNpemUudmFsdWUsIHAyRmFjdG9yID0gMSAvIHAxRmFjdG9yO1xuICAgICAgICAgICAgcDEudmVsb2NpdHkueCAtPSBheCAqIHAxRmFjdG9yO1xuICAgICAgICAgICAgcDEudmVsb2NpdHkueSAtPSBheSAqIHAxRmFjdG9yO1xuICAgICAgICAgICAgcDIudmVsb2NpdHkueCArPSBheCAqIHAyRmFjdG9yO1xuICAgICAgICAgICAgcDIudmVsb2NpdHkueSArPSBheSAqIHAyRmFjdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICByZXR1cm4gcGFydGljbGUub3B0aW9ucy5tb3ZlLmF0dHJhY3QuZW5hYmxlO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-attract/esm/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-attract/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadParticlesAttractInteraction: () => (/* binding */ loadParticlesAttractInteraction)\n/* harmony export */ });\n/* harmony import */ var _Attractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attractor */ \"(ssr)/./node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js\");\n\nasync function loadParticlesAttractInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"particlesAttract\", (container) => new _Attractor__WEBPACK_IMPORTED_MODULE_0__.Attractor(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWF0dHJhY3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBQ2pDO0FBQ1Asc0VBQXNFLGlEQUFTO0FBQy9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLXBhcnRpY2xlcy1hdHRyYWN0L2VzbS9pbmRleC5qcz85NmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJhY3RvciB9IGZyb20gXCIuL0F0dHJhY3RvclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQYXJ0aWNsZXNBdHRyYWN0SW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwicGFydGljbGVzQXR0cmFjdFwiLCAoY29udGFpbmVyKSA9PiBuZXcgQXR0cmFjdG9yKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-attract/esm/index.js\n");

/***/ })

};
;