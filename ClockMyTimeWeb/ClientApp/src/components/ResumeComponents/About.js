"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "resume-section-content" },
                React.createElement("h1", { className: "mb-0" },
                    "Tu ",
                    React.createElement("span", { className: "text-primary" }, "Tong")),
                React.createElement("div", { className: "subheading mb-5" },
                    "Worcester, MA \u00B7",
                    React.createElement("a", { href: "mailto:ttong.2019@mymail.becker.edu" }, "ttong.2019@mymail.becker.edu"),
                    "\u00B7",
                    React.createElement("a", { href: "mailto:ttwoosta@gmail.com" }, "ttwoosta@gmail.com")),
                React.createElement("p", { className: "lead mb-5" }, "I'm a student at Becker College majoring in computer science - data science. I'm currently a full-stack software developer at Avatar Computing."),
                React.createElement("div", { className: "social-icons" },
                    React.createElement("a", { className: "social-icon", href: "https://www.linkedin.com/in/tu-tong-a440ab12a/" },
                        React.createElement("i", { className: "fab fa-linkedin-in" })),
                    React.createElement("a", { className: "social-icon", href: "https://github.com/ttwoosta" },
                        React.createElement("i", { className: "fab fa-github" })),
                    React.createElement("a", { className: "social-icon", href: "https://www.facebook.com/tony.tong.520125/" },
                        React.createElement("i", { className: "fab fa-facebook-f" }))))));
    };
    return About;
}(React.PureComponent));
;
exports.default = react_redux_1.connect()(About);
//# sourceMappingURL=About.js.map