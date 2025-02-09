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
exports.id = "pages/api/auth/spotify-access-token";
exports.ids = ["pages/api/auth/spotify-access-token"];
exports.modules = {

/***/ "(api)/./src/pages/api/auth/spotify-access-token.ts":
/*!****************************************************!*\
  !*** ./src/pages/api/auth/spotify-access-token.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Get user's Spotify access token from Clerk API\nasync function handler(req, res) {\n    const userId = req.query.userId;\n    try {\n        const response = await fetch(`https://api.clerk.com/v1/users/${userId}/oauth_access_tokens/oauth_spotify`, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`\n            }\n        });\n        const data = await response.json();\n        const token = data?.[0]?.token;\n        if (token) {\n            res.status(200).json({\n                token\n            });\n        } else {\n            res.status(404).json({\n                message: \"Token not found\"\n            });\n        }\n    } catch (error) {\n        res.status(500).json({\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvc3BvdGlmeS1hY2Nlc3MtdG9rZW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLGlEQUFpRDtBQUNsQyxlQUFlQSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsU0FBU0YsSUFBSUcsS0FBSyxDQUFDRCxNQUFNO0lBRS9CLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsK0JBQStCLEVBQUVILE9BQU8sa0NBQWtDLENBQUMsRUFDNUU7WUFDRUksUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJDLGVBQWUsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQVcsQ0FBQztZQUNuRTtRQUNGO1FBR0YsTUFBTUMsT0FBUSxNQUFNUixTQUFTUyxJQUFJO1FBQ2pDLE1BQU1DLFFBQVFGLE1BQU0sQ0FBQyxFQUFFLEVBQUVFO1FBRXpCLElBQUlBLE9BQU87WUFDVGIsSUFBSWMsTUFBTSxDQUFDLEtBQUtGLElBQUksQ0FBQztnQkFBRUM7WUFBTTtRQUMvQixPQUFPO1lBQ0xiLElBQUljLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7Z0JBQUVHLFNBQVM7WUFBa0I7UUFDcEQsQ0FBQztJQUNILEVBQUUsT0FBT0MsT0FBZ0I7UUFDdkJoQixJQUFJYyxNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDO1lBQUVHLFNBQVMsTUFBaUJBLE9BQU87UUFBQztJQUMzRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb29kdmllLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL3Nwb3RpZnktYWNjZXNzLXRva2VuLnRzP2ExZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuLy8gR2V0IHVzZXIncyBTcG90aWZ5IGFjY2VzcyB0b2tlbiBmcm9tIENsZXJrIEFQSVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB1c2VySWQgPSByZXEucXVlcnkudXNlcklkIGFzIHN0cmluZztcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuY2xlcmsuY29tL3YxL3VzZXJzLyR7dXNlcklkfS9vYXV0aF9hY2Nlc3NfdG9rZW5zL29hdXRoX3Nwb3RpZnlgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQ0xFUktfU0VDUkVUX0tFWSBhcyBzdHJpbmd9YCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIEFycmF5PHsgdG9rZW46IHN0cmluZyB9PjtcbiAgICBjb25zdCB0b2tlbiA9IGRhdGE/LlswXT8udG9rZW4gYXMgc3RyaW5nO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVG9rZW4gbm90IGZvdW5kXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJJZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIkNMRVJLX1NFQ1JFVF9LRVkiLCJkYXRhIiwianNvbiIsInRva2VuIiwic3RhdHVzIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/spotify-access-token.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/spotify-access-token.ts"));
module.exports = __webpack_exports__;

})();