"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/spotify-fetch-tracks";
exports.ids = ["pages/api/spotify-fetch-tracks"];
exports.modules = {

/***/ "(api)/./src/pages/api/spotify-fetch-tracks.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/spotify-fetch-tracks.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Fetch user's Spotify recently played tracks\nasync function handler(req, res) {\n    const token = req.query.token;\n    try {\n        const result = await fetch(\"https://api.spotify.com/v1/me/player/recently-played?limit=5\", {\n            method: \"GET\",\n            headers: {\n                Authorization: `Bearer ${token}`\n            }\n        });\n        const data = await result.json();\n        const tracks = data.items.map((item)=>{\n            const track = item.track;\n            return {\n                name: track.name,\n                artist: track.artists?.[0]?.name ?? \"Unknown Artist\",\n                id: track.id,\n                album: track.album.name ?? \"Unknown Album\",\n                image: track.album.images?.[0]?.url ?? `https://via.placeholder.com/200x300?text=${track.name}`\n            };\n        });\n        if (tracks) {\n            res.status(200).json(tracks);\n        }\n    } catch (error) {\n        res.status(500).json({\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nwb3RpZnktZmV0Y2gtdHJhY2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFnQkEsOENBQThDO0FBQy9CLGVBQWVBLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNQyxRQUFRRixJQUFJRyxLQUFLLENBQUNELEtBQUs7SUFFN0IsSUFBSTtRQUNGLE1BQU1FLFNBQVMsTUFBTUMsTUFDbkIsZ0VBQ0E7WUFDRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFQyxlQUFlLENBQUMsT0FBTyxFQUFFTixNQUFNLENBQUM7WUFBQztRQUM5QztRQUdGLE1BQU1PLE9BQVEsTUFBTUwsT0FBT00sSUFBSTtRQUUvQixNQUFNQyxTQUFTRixLQUFLRyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO1lBQ3RDLE1BQU1DLFFBQVFELEtBQUtDLEtBQUs7WUFDeEIsT0FBTztnQkFDTEMsTUFBTUQsTUFBTUMsSUFBSTtnQkFDaEJDLFFBQVFGLE1BQU1HLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRUYsUUFBUTtnQkFDcENHLElBQUlKLE1BQU1JLEVBQUU7Z0JBQ1pDLE9BQU9MLE1BQU1LLEtBQUssQ0FBQ0osSUFBSSxJQUFJO2dCQUMzQkssT0FDRU4sTUFBTUssS0FBSyxDQUFDRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUVDLE9BQ3pCLENBQUMseUNBQXlDLEVBQUVSLE1BQU1DLElBQUksQ0FBQyxDQUFDO1lBQzVEO1FBQ0Y7UUFFQSxJQUFJTCxRQUFRO1lBQ1ZWLElBQUl1QixNQUFNLENBQUMsS0FBS2QsSUFBSSxDQUFDQztRQUN2QixDQUFDO0lBQ0gsRUFBRSxPQUFPYyxPQUFnQjtRQUN2QnhCLElBQUl1QixNQUFNLENBQUMsS0FBS2QsSUFBSSxDQUFDO1lBQUVnQixTQUFTLE1BQWlCQSxPQUFPO1FBQUM7SUFDM0Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9vZHZpZS8uL3NyYy9wYWdlcy9hcGkvc3BvdGlmeS1mZXRjaC10cmFja3MudHM/Mjk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgdHlwZSBUcmFja0RhdGEgPSB7XG4gIGl0ZW1zOiB7XG4gICAgdHJhY2s6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGFydGlzdHM6IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICBhbGJ1bToge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGltYWdlczogeyB1cmw6IHN0cmluZyB9W107XG4gICAgICB9O1xuICAgIH07XG4gIH1bXTtcbn07XG5cbi8vIEZldGNoIHVzZXIncyBTcG90aWZ5IHJlY2VudGx5IHBsYXllZCB0cmFja3NcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgdG9rZW4gPSByZXEucXVlcnkudG9rZW4gYXMgc3RyaW5nO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9yZWNlbnRseS1wbGF5ZWQ/bGltaXQ9NVwiLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXN1bHQuanNvbigpKSBhcyBUcmFja0RhdGE7XG5cbiAgICBjb25zdCB0cmFja3MgPSBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgdHJhY2sgPSBpdGVtLnRyYWNrO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdHJhY2submFtZSxcbiAgICAgICAgYXJ0aXN0OiB0cmFjay5hcnRpc3RzPy5bMF0/Lm5hbWUgPz8gXCJVbmtub3duIEFydGlzdFwiLFxuICAgICAgICBpZDogdHJhY2suaWQsXG4gICAgICAgIGFsYnVtOiB0cmFjay5hbGJ1bS5uYW1lID8/IFwiVW5rbm93biBBbGJ1bVwiLFxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICB0cmFjay5hbGJ1bS5pbWFnZXM/LlswXT8udXJsID8/XG4gICAgICAgICAgYGh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MzAwP3RleHQ9JHt0cmFjay5uYW1lfWAsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYWNrcykge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odHJhY2tzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJxdWVyeSIsInJlc3VsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwianNvbiIsInRyYWNrcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInRyYWNrIiwibmFtZSIsImFydGlzdCIsImFydGlzdHMiLCJpZCIsImFsYnVtIiwiaW1hZ2UiLCJpbWFnZXMiLCJ1cmwiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/spotify-fetch-tracks.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/spotify-fetch-tracks.ts"));
module.exports = __webpack_exports__;

})();