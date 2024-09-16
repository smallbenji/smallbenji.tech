"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-move-base";
exports.ids = ["vendor-chunks/tsparticles-move-base"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-move-base/esm/BaseMover.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-move-base/esm/BaseMover.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseMover: () => (/* binding */ BaseMover)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-move-base/esm/Utils.js\");\n\n\nconst diffFactor = 2;\nclass BaseMover {\n    constructor() {\n        this._initSpin = (particle) => {\n            const container = particle.container, options = particle.options, spinOptions = options.move.spin;\n            if (!spinOptions.enable) {\n                return;\n            }\n            const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinCenter = {\n                x: (spinPos.x / 100) * container.canvas.size.width,\n                y: (spinPos.y / 100) * container.canvas.size.height,\n            }, pos = particle.getPosition(), distance = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getDistance)(pos, spinCenter), spinAcceleration = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(spinOptions.acceleration);\n            particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;\n            particle.spin = {\n                center: spinCenter,\n                direction: particle.velocity.x >= 0 ? \"clockwise\" : \"counter-clockwise\",\n                angle: particle.velocity.angle,\n                radius: distance,\n                acceleration: particle.retina.spinAcceleration,\n            };\n        };\n    }\n    init(particle) {\n        const options = particle.options, gravityOptions = options.move.gravity;\n        particle.gravity = {\n            enable: gravityOptions.enable,\n            acceleration: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(gravityOptions.acceleration),\n            inverse: gravityOptions.inverse,\n        };\n        this._initSpin(particle);\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && particle.options.move.enable;\n    }\n    move(particle, delta) {\n        const particleOptions = particle.options, moveOptions = particleOptions.move;\n        if (!moveOptions.enable) {\n            return;\n        }\n        const container = particle.container, pxRatio = container.retina.pixelRatio, slowFactor = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getProximitySpeedFactor)(particle), baseSpeed = (particle.retina.moveSpeed ??= (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(moveOptions.speed) * pxRatio) *\n            container.retina.reduceFactor, moveDrift = (particle.retina.moveDrift ??= (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(particle.options.move.drift) * pxRatio), maxSize = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeMax)(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, moveSpeed = (baseSpeed * sizeFactor * slowFactor * (delta.factor || 1)) / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;\n        if (moveOptions.spin.enable) {\n            (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.spin)(particle, moveSpeed);\n        }\n        else {\n            (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.move)(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.applyDistance)(particle);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2VzbS9CYXNlTW92ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThFO0FBQ0Q7QUFDN0U7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0E7QUFDQSxhQUFhLDJDQUEyQywrREFBVyxzQ0FBc0MsaUVBQWE7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpRUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csK0RBQXVCLHVEQUF1RCxpRUFBYTtBQUM3TCxzRkFBc0YsaUVBQWEsb0RBQW9ELCtEQUFXO0FBQ2xLO0FBQ0EsWUFBWSw0Q0FBSTtBQUNoQjtBQUNBO0FBQ0EsWUFBWSw0Q0FBSTtBQUNoQjtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1tb3ZlLWJhc2UvZXNtL0Jhc2VNb3Zlci5qcz8wZmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERpc3RhbmNlLCBnZXRSYW5nZU1heCwgZ2V0UmFuZ2VWYWx1ZSwgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5pbXBvcnQgeyBhcHBseURpc3RhbmNlLCBnZXRQcm94aW1pdHlTcGVlZEZhY3RvciwgbW92ZSwgc3BpbiB9IGZyb20gXCIuL1V0aWxzXCI7XG5jb25zdCBkaWZmRmFjdG9yID0gMjtcbmV4cG9ydCBjbGFzcyBCYXNlTW92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbml0U3BpbiA9IChwYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFydGljbGUuY29udGFpbmVyLCBvcHRpb25zID0gcGFydGljbGUub3B0aW9ucywgc3Bpbk9wdGlvbnMgPSBvcHRpb25zLm1vdmUuc3BpbjtcbiAgICAgICAgICAgIGlmICghc3Bpbk9wdGlvbnMuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3BpblBvcyA9IHNwaW5PcHRpb25zLnBvc2l0aW9uID8/IHsgeDogNTAsIHk6IDUwIH0sIHNwaW5DZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogKHNwaW5Qb3MueCAvIDEwMCkgKiBjb250YWluZXIuY2FudmFzLnNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogKHNwaW5Qb3MueSAvIDEwMCkgKiBjb250YWluZXIuY2FudmFzLnNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfSwgcG9zID0gcGFydGljbGUuZ2V0UG9zaXRpb24oKSwgZGlzdGFuY2UgPSBnZXREaXN0YW5jZShwb3MsIHNwaW5DZW50ZXIpLCBzcGluQWNjZWxlcmF0aW9uID0gZ2V0UmFuZ2VWYWx1ZShzcGluT3B0aW9ucy5hY2NlbGVyYXRpb24pO1xuICAgICAgICAgICAgcGFydGljbGUucmV0aW5hLnNwaW5BY2NlbGVyYXRpb24gPSBzcGluQWNjZWxlcmF0aW9uICogY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvO1xuICAgICAgICAgICAgcGFydGljbGUuc3BpbiA9IHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHNwaW5DZW50ZXIsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBwYXJ0aWNsZS52ZWxvY2l0eS54ID49IDAgPyBcImNsb2Nrd2lzZVwiIDogXCJjb3VudGVyLWNsb2Nrd2lzZVwiLFxuICAgICAgICAgICAgICAgIGFuZ2xlOiBwYXJ0aWNsZS52ZWxvY2l0eS5hbmdsZSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IGRpc3RhbmNlLFxuICAgICAgICAgICAgICAgIGFjY2VsZXJhdGlvbjogcGFydGljbGUucmV0aW5hLnNwaW5BY2NlbGVyYXRpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpbml0KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLCBncmF2aXR5T3B0aW9ucyA9IG9wdGlvbnMubW92ZS5ncmF2aXR5O1xuICAgICAgICBwYXJ0aWNsZS5ncmF2aXR5ID0ge1xuICAgICAgICAgICAgZW5hYmxlOiBncmF2aXR5T3B0aW9ucy5lbmFibGUsXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IGdldFJhbmdlVmFsdWUoZ3Jhdml0eU9wdGlvbnMuYWNjZWxlcmF0aW9uKSxcbiAgICAgICAgICAgIGludmVyc2U6IGdyYXZpdHlPcHRpb25zLmludmVyc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2luaXRTcGluKHBhcnRpY2xlKTtcbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAhcGFydGljbGUuZGVzdHJveWVkICYmIHBhcnRpY2xlLm9wdGlvbnMubW92ZS5lbmFibGU7XG4gICAgfVxuICAgIG1vdmUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlT3B0aW9ucyA9IHBhcnRpY2xlLm9wdGlvbnMsIG1vdmVPcHRpb25zID0gcGFydGljbGVPcHRpb25zLm1vdmU7XG4gICAgICAgIGlmICghbW92ZU9wdGlvbnMuZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFydGljbGUuY29udGFpbmVyLCBweFJhdGlvID0gY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvLCBzbG93RmFjdG9yID0gZ2V0UHJveGltaXR5U3BlZWRGYWN0b3IocGFydGljbGUpLCBiYXNlU3BlZWQgPSAocGFydGljbGUucmV0aW5hLm1vdmVTcGVlZCA/Pz0gZ2V0UmFuZ2VWYWx1ZShtb3ZlT3B0aW9ucy5zcGVlZCkgKiBweFJhdGlvKSAqXG4gICAgICAgICAgICBjb250YWluZXIucmV0aW5hLnJlZHVjZUZhY3RvciwgbW92ZURyaWZ0ID0gKHBhcnRpY2xlLnJldGluYS5tb3ZlRHJpZnQgPz89IGdldFJhbmdlVmFsdWUocGFydGljbGUub3B0aW9ucy5tb3ZlLmRyaWZ0KSAqIHB4UmF0aW8pLCBtYXhTaXplID0gZ2V0UmFuZ2VNYXgocGFydGljbGVPcHRpb25zLnNpemUudmFsdWUpICogcHhSYXRpbywgc2l6ZUZhY3RvciA9IG1vdmVPcHRpb25zLnNpemUgPyBwYXJ0aWNsZS5nZXRSYWRpdXMoKSAvIG1heFNpemUgOiAxLCBtb3ZlU3BlZWQgPSAoYmFzZVNwZWVkICogc2l6ZUZhY3RvciAqIHNsb3dGYWN0b3IgKiAoZGVsdGEuZmFjdG9yIHx8IDEpKSAvIGRpZmZGYWN0b3IsIG1heFNwZWVkID0gcGFydGljbGUucmV0aW5hLm1heFNwZWVkID8/IGNvbnRhaW5lci5yZXRpbmEubWF4U3BlZWQ7XG4gICAgICAgIGlmIChtb3ZlT3B0aW9ucy5zcGluLmVuYWJsZSkge1xuICAgICAgICAgICAgc3BpbihwYXJ0aWNsZSwgbW92ZVNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUocGFydGljbGUsIG1vdmVPcHRpb25zLCBtb3ZlU3BlZWQsIG1heFNwZWVkLCBtb3ZlRHJpZnQsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBhcHBseURpc3RhbmNlKHBhcnRpY2xlKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/esm/BaseMover.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-move-base/esm/Utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles-move-base/esm/Utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyDistance: () => (/* binding */ applyDistance),\n/* harmony export */   applyPath: () => (/* binding */ applyPath),\n/* harmony export */   getProximitySpeedFactor: () => (/* binding */ getProximitySpeedFactor),\n/* harmony export */   move: () => (/* binding */ move),\n/* harmony export */   spin: () => (/* binding */ spin)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction applyDistance(particle) {\n    const initialPosition = particle.initialPosition, { dx, dy } = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getDistances)(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;\n    if (!hDistance && !vDistance) {\n        return;\n    }\n    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {\n        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);\n        if (hDistance) {\n            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;\n        }\n        if (vDistance) {\n            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;\n        }\n    }\n    else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {\n        particle.misplaced = false;\n    }\n    else if (particle.misplaced) {\n        const pos = particle.position, vel = particle.velocity;\n        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {\n            vel.x *= -(0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)();\n        }\n        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {\n            vel.y *= -(0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)();\n        }\n    }\n}\nfunction move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {\n    applyPath(particle, delta);\n    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -1 : 1;\n    if (moveDrift && moveSpeed) {\n        particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);\n    }\n    if (gravityOptions?.enable && moveSpeed) {\n        particle.velocity.y += (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);\n    }\n    const decay = particle.moveDecay;\n    particle.velocity.multTo(decay);\n    const velocity = particle.velocity.mult(moveSpeed);\n    if (gravityOptions?.enable &&\n        maxSpeed > 0 &&\n        ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||\n            (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed))) {\n        velocity.y = gravityFactor * maxSpeed;\n        if (moveSpeed) {\n            particle.velocity.y = velocity.y / moveSpeed;\n        }\n    }\n    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;\n    velocity.multTo(zVelocityFactor);\n    const { position } = particle;\n    position.addTo(velocity);\n    if (moveOptions.vibrate) {\n        position.x += Math.sin(position.x * Math.cos(position.y));\n        position.y += Math.cos(position.y * Math.sin(position.x));\n    }\n}\nfunction spin(particle, moveSpeed) {\n    const container = particle.container;\n    if (!particle.spin) {\n        return;\n    }\n    const updateFunc = {\n        x: particle.spin.direction === \"clockwise\" ? Math.cos : Math.sin,\n        y: particle.spin.direction === \"clockwise\" ? Math.sin : Math.cos,\n    };\n    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);\n    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);\n    particle.spin.radius += particle.spin.acceleration;\n    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);\n    if (particle.spin.radius > maxCanvasSize / 2) {\n        particle.spin.radius = maxCanvasSize / 2;\n        particle.spin.acceleration *= -1;\n    }\n    else if (particle.spin.radius < 0) {\n        particle.spin.radius = 0;\n        particle.spin.acceleration *= -1;\n    }\n    particle.spin.angle += (moveSpeed / 100) * (1 - particle.spin.radius / maxCanvasSize);\n}\nfunction applyPath(particle, delta) {\n    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;\n    if (!pathEnabled) {\n        return;\n    }\n    if (particle.lastPathTime <= particle.pathDelay) {\n        particle.lastPathTime += delta.value;\n        return;\n    }\n    const path = particle.pathGenerator?.generate(particle, delta);\n    if (path) {\n        particle.velocity.addTo(path);\n    }\n    if (pathOptions.clamp) {\n        particle.velocity.x = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.clamp)(particle.velocity.x, -1, 1);\n        particle.velocity.y = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.clamp)(particle.velocity.y, -1, 1);\n    }\n    particle.lastPathTime -= particle.pathDelay;\n}\nfunction getProximitySpeedFactor(particle) {\n    return particle.slow.inRange ? particle.slow.factor : 1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2VzbS9VdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUU7QUFDOUQ7QUFDUCx3REFBd0QsU0FBUyxFQUFFLGdFQUFZLHdGQUF3RixjQUFjO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBUztBQUMvQjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseURBQUs7QUFDbkMsOEJBQThCLHlEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1tb3ZlLWJhc2UvZXNtL1V0aWxzLmpzP2NhMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhbXAsIGdldERpc3RhbmNlcywgZ2V0UmFuZG9tLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseURpc3RhbmNlKHBhcnRpY2xlKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uID0gcGFydGljbGUuaW5pdGlhbFBvc2l0aW9uLCB7IGR4LCBkeSB9ID0gZ2V0RGlzdGFuY2VzKGluaXRpYWxQb3NpdGlvbiwgcGFydGljbGUucG9zaXRpb24pLCBkeEZpeGVkID0gTWF0aC5hYnMoZHgpLCBkeUZpeGVkID0gTWF0aC5hYnMoZHkpLCB7IG1heERpc3RhbmNlIH0gPSBwYXJ0aWNsZS5yZXRpbmEsIGhEaXN0YW5jZSA9IG1heERpc3RhbmNlLmhvcml6b250YWwsIHZEaXN0YW5jZSA9IG1heERpc3RhbmNlLnZlcnRpY2FsO1xuICAgIGlmICghaERpc3RhbmNlICYmICF2RGlzdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKChoRGlzdGFuY2UgJiYgZHhGaXhlZCA+PSBoRGlzdGFuY2UpIHx8ICh2RGlzdGFuY2UgJiYgZHlGaXhlZCA+PSB2RGlzdGFuY2UpKSAmJiAhcGFydGljbGUubWlzcGxhY2VkKSB7XG4gICAgICAgIHBhcnRpY2xlLm1pc3BsYWNlZCA9ICghIWhEaXN0YW5jZSAmJiBkeEZpeGVkID4gaERpc3RhbmNlKSB8fCAoISF2RGlzdGFuY2UgJiYgZHlGaXhlZCA+IHZEaXN0YW5jZSk7XG4gICAgICAgIGlmIChoRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnggPSBwYXJ0aWNsZS52ZWxvY2l0eS55IC8gMiAtIHBhcnRpY2xlLnZlbG9jaXR5Lng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZEaXN0YW5jZSkge1xuICAgICAgICAgICAgcGFydGljbGUudmVsb2NpdHkueSA9IHBhcnRpY2xlLnZlbG9jaXR5LnggLyAyIC0gcGFydGljbGUudmVsb2NpdHkueTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgoIWhEaXN0YW5jZSB8fCBkeEZpeGVkIDwgaERpc3RhbmNlKSAmJiAoIXZEaXN0YW5jZSB8fCBkeUZpeGVkIDwgdkRpc3RhbmNlKSAmJiBwYXJ0aWNsZS5taXNwbGFjZWQpIHtcbiAgICAgICAgcGFydGljbGUubWlzcGxhY2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRpY2xlLm1pc3BsYWNlZCkge1xuICAgICAgICBjb25zdCBwb3MgPSBwYXJ0aWNsZS5wb3NpdGlvbiwgdmVsID0gcGFydGljbGUudmVsb2NpdHk7XG4gICAgICAgIGlmIChoRGlzdGFuY2UgJiYgKChwb3MueCA8IGluaXRpYWxQb3NpdGlvbi54ICYmIHZlbC54IDwgMCkgfHwgKHBvcy54ID4gaW5pdGlhbFBvc2l0aW9uLnggJiYgdmVsLnggPiAwKSkpIHtcbiAgICAgICAgICAgIHZlbC54ICo9IC1nZXRSYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodkRpc3RhbmNlICYmICgocG9zLnkgPCBpbml0aWFsUG9zaXRpb24ueSAmJiB2ZWwueSA8IDApIHx8IChwb3MueSA+IGluaXRpYWxQb3NpdGlvbi55ICYmIHZlbC55ID4gMCkpKSB7XG4gICAgICAgICAgICB2ZWwueSAqPSAtZ2V0UmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW92ZShwYXJ0aWNsZSwgbW92ZU9wdGlvbnMsIG1vdmVTcGVlZCwgbWF4U3BlZWQsIG1vdmVEcmlmdCwgZGVsdGEpIHtcbiAgICBhcHBseVBhdGgocGFydGljbGUsIGRlbHRhKTtcbiAgICBjb25zdCBncmF2aXR5T3B0aW9ucyA9IHBhcnRpY2xlLmdyYXZpdHksIGdyYXZpdHlGYWN0b3IgPSBncmF2aXR5T3B0aW9ucz8uZW5hYmxlICYmIGdyYXZpdHlPcHRpb25zLmludmVyc2UgPyAtMSA6IDE7XG4gICAgaWYgKG1vdmVEcmlmdCAmJiBtb3ZlU3BlZWQpIHtcbiAgICAgICAgcGFydGljbGUudmVsb2NpdHkueCArPSAobW92ZURyaWZ0ICogZGVsdGEuZmFjdG9yKSAvICg2MCAqIG1vdmVTcGVlZCk7XG4gICAgfVxuICAgIGlmIChncmF2aXR5T3B0aW9ucz8uZW5hYmxlICYmIG1vdmVTcGVlZCkge1xuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS55ICs9IChncmF2aXR5RmFjdG9yICogKGdyYXZpdHlPcHRpb25zLmFjY2VsZXJhdGlvbiAqIGRlbHRhLmZhY3RvcikpIC8gKDYwICogbW92ZVNwZWVkKTtcbiAgICB9XG4gICAgY29uc3QgZGVjYXkgPSBwYXJ0aWNsZS5tb3ZlRGVjYXk7XG4gICAgcGFydGljbGUudmVsb2NpdHkubXVsdFRvKGRlY2F5KTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHBhcnRpY2xlLnZlbG9jaXR5Lm11bHQobW92ZVNwZWVkKTtcbiAgICBpZiAoZ3Jhdml0eU9wdGlvbnM/LmVuYWJsZSAmJlxuICAgICAgICBtYXhTcGVlZCA+IDAgJiZcbiAgICAgICAgKCghZ3Jhdml0eU9wdGlvbnMuaW52ZXJzZSAmJiB2ZWxvY2l0eS55ID49IDAgJiYgdmVsb2NpdHkueSA+PSBtYXhTcGVlZCkgfHxcbiAgICAgICAgICAgIChncmF2aXR5T3B0aW9ucy5pbnZlcnNlICYmIHZlbG9jaXR5LnkgPD0gMCAmJiB2ZWxvY2l0eS55IDw9IC1tYXhTcGVlZCkpKSB7XG4gICAgICAgIHZlbG9jaXR5LnkgPSBncmF2aXR5RmFjdG9yICogbWF4U3BlZWQ7XG4gICAgICAgIGlmIChtb3ZlU3BlZWQpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5LnkgPSB2ZWxvY2l0eS55IC8gbW92ZVNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHpJbmRleE9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLnpJbmRleCwgelZlbG9jaXR5RmFjdG9yID0gKDEgLSBwYXJ0aWNsZS56SW5kZXhGYWN0b3IpICoqIHpJbmRleE9wdGlvbnMudmVsb2NpdHlSYXRlO1xuICAgIHZlbG9jaXR5Lm11bHRUbyh6VmVsb2NpdHlGYWN0b3IpO1xuICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IHBhcnRpY2xlO1xuICAgIHBvc2l0aW9uLmFkZFRvKHZlbG9jaXR5KTtcbiAgICBpZiAobW92ZU9wdGlvbnMudmlicmF0ZSkge1xuICAgICAgICBwb3NpdGlvbi54ICs9IE1hdGguc2luKHBvc2l0aW9uLnggKiBNYXRoLmNvcyhwb3NpdGlvbi55KSk7XG4gICAgICAgIHBvc2l0aW9uLnkgKz0gTWF0aC5jb3MocG9zaXRpb24ueSAqIE1hdGguc2luKHBvc2l0aW9uLngpKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc3BpbihwYXJ0aWNsZSwgbW92ZVNwZWVkKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gcGFydGljbGUuY29udGFpbmVyO1xuICAgIGlmICghcGFydGljbGUuc3Bpbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZUZ1bmMgPSB7XG4gICAgICAgIHg6IHBhcnRpY2xlLnNwaW4uZGlyZWN0aW9uID09PSBcImNsb2Nrd2lzZVwiID8gTWF0aC5jb3MgOiBNYXRoLnNpbixcbiAgICAgICAgeTogcGFydGljbGUuc3Bpbi5kaXJlY3Rpb24gPT09IFwiY2xvY2t3aXNlXCIgPyBNYXRoLnNpbiA6IE1hdGguY29zLFxuICAgIH07XG4gICAgcGFydGljbGUucG9zaXRpb24ueCA9IHBhcnRpY2xlLnNwaW4uY2VudGVyLnggKyBwYXJ0aWNsZS5zcGluLnJhZGl1cyAqIHVwZGF0ZUZ1bmMueChwYXJ0aWNsZS5zcGluLmFuZ2xlKTtcbiAgICBwYXJ0aWNsZS5wb3NpdGlvbi55ID0gcGFydGljbGUuc3Bpbi5jZW50ZXIueSArIHBhcnRpY2xlLnNwaW4ucmFkaXVzICogdXBkYXRlRnVuYy55KHBhcnRpY2xlLnNwaW4uYW5nbGUpO1xuICAgIHBhcnRpY2xlLnNwaW4ucmFkaXVzICs9IHBhcnRpY2xlLnNwaW4uYWNjZWxlcmF0aW9uO1xuICAgIGNvbnN0IG1heENhbnZhc1NpemUgPSBNYXRoLm1heChjb250YWluZXIuY2FudmFzLnNpemUud2lkdGgsIGNvbnRhaW5lci5jYW52YXMuc2l6ZS5oZWlnaHQpO1xuICAgIGlmIChwYXJ0aWNsZS5zcGluLnJhZGl1cyA+IG1heENhbnZhc1NpemUgLyAyKSB7XG4gICAgICAgIHBhcnRpY2xlLnNwaW4ucmFkaXVzID0gbWF4Q2FudmFzU2l6ZSAvIDI7XG4gICAgICAgIHBhcnRpY2xlLnNwaW4uYWNjZWxlcmF0aW9uICo9IC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0aWNsZS5zcGluLnJhZGl1cyA8IDApIHtcbiAgICAgICAgcGFydGljbGUuc3Bpbi5yYWRpdXMgPSAwO1xuICAgICAgICBwYXJ0aWNsZS5zcGluLmFjY2VsZXJhdGlvbiAqPSAtMTtcbiAgICB9XG4gICAgcGFydGljbGUuc3Bpbi5hbmdsZSArPSAobW92ZVNwZWVkIC8gMTAwKSAqICgxIC0gcGFydGljbGUuc3Bpbi5yYWRpdXMgLyBtYXhDYW52YXNTaXplKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgocGFydGljbGUsIGRlbHRhKSB7XG4gICAgY29uc3QgcGFydGljbGVzT3B0aW9ucyA9IHBhcnRpY2xlLm9wdGlvbnMsIHBhdGhPcHRpb25zID0gcGFydGljbGVzT3B0aW9ucy5tb3ZlLnBhdGgsIHBhdGhFbmFibGVkID0gcGF0aE9wdGlvbnMuZW5hYmxlO1xuICAgIGlmICghcGF0aEVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFydGljbGUubGFzdFBhdGhUaW1lIDw9IHBhcnRpY2xlLnBhdGhEZWxheSkge1xuICAgICAgICBwYXJ0aWNsZS5sYXN0UGF0aFRpbWUgKz0gZGVsdGEudmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IHBhcnRpY2xlLnBhdGhHZW5lcmF0b3I/LmdlbmVyYXRlKHBhcnRpY2xlLCBkZWx0YSk7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgICAgcGFydGljbGUudmVsb2NpdHkuYWRkVG8ocGF0aCk7XG4gICAgfVxuICAgIGlmIChwYXRoT3B0aW9ucy5jbGFtcCkge1xuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS54ID0gY2xhbXAocGFydGljbGUudmVsb2NpdHkueCwgLTEsIDEpO1xuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS55ID0gY2xhbXAocGFydGljbGUudmVsb2NpdHkueSwgLTEsIDEpO1xuICAgIH1cbiAgICBwYXJ0aWNsZS5sYXN0UGF0aFRpbWUgLT0gcGFydGljbGUucGF0aERlbGF5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3hpbWl0eVNwZWVkRmFjdG9yKHBhcnRpY2xlKSB7XG4gICAgcmV0dXJuIHBhcnRpY2xlLnNsb3cuaW5SYW5nZSA/IHBhcnRpY2xlLnNsb3cuZmFjdG9yIDogMTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-move-base/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles-move-base/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadBaseMover: () => (/* binding */ loadBaseMover)\n/* harmony export */ });\n/* harmony import */ var _BaseMover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseMover */ \"(ssr)/./node_modules/tsparticles-move-base/esm/BaseMover.js\");\n\nasync function loadBaseMover(engine, refresh = true) {\n    await engine.addMover(\"base\", () => new _BaseMover__WEBPACK_IMPORTED_MODULE_0__.BaseMover(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1iYXNlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUNqQztBQUNQLDRDQUE0QyxpREFBUztBQUNyRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1tb3ZlLWJhc2UvZXNtL2luZGV4LmpzP2FmOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vdmVyIH0gZnJvbSBcIi4vQmFzZU1vdmVyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEJhc2VNb3ZlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZE1vdmVyKFwiYmFzZVwiLCAoKSA9PiBuZXcgQmFzZU1vdmVyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-base/esm/index.js\n");

/***/ })

};
;