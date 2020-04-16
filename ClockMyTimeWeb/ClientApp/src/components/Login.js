"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./loginStyle.css");
var Login = function () { return (React.createElement("div", { className: "loginbox" },
    React.createElement("img", { src: "Images/Icons/building-line.png", className: "avatar" }),
    React.createElement("h1", null, "Login Here"),
    React.createElement("form", null,
        React.createElement("p", null, "Username"),
        React.createElement("input", { type: "text", name: "", placeholder: "Enter Username" }),
        React.createElement("p", null, "Password"),
        React.createElement("input", { type: "password", name: "", placeholder: "Enter Password" }),
        React.createElement("input", { type: "submit", name: "", value: "Login" }),
        React.createElement("a", { href: "#" }, "Lost your password?"),
        React.createElement("br", null),
        React.createElement("a", { href: "#" }, "Don't have an account?")))); };
exports.default = react_redux_1.connect()(Login);
//# sourceMappingURL=Login.js.map