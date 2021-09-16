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
var Education = /** @class */ (function (_super) {
    __extends(Education, _super);
    function Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Education.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "resume-section-content" },
                React.createElement("h2", { className: "mb-5" }, "Education"),
                React.createElement("div", { className: "d-flex flex-column flex-md-row justify-content-between mb-5" },
                    React.createElement("div", { className: "flex-grow-1" },
                        React.createElement("h3", { className: "mb-0" }, "Becker College"),
                        React.createElement("div", { className: "subheading mb-3" }, "Bachelor of Science"),
                        React.createElement("div", null, "Computer Science - Data Science"),
                        React.createElement("p", null, "GPA: 3.79")),
                    React.createElement("div", { className: "flex-shrink-0" },
                        React.createElement("span", { className: "text-primary" }, "August 2019 - Present"))),
                React.createElement("div", { className: "d-flex flex-column flex-md-row justify-content-between" },
                    React.createElement("div", { className: "flex-grow-1" },
                        React.createElement("h3", { className: "mb-0" }, "Quinsigamond Community College"),
                        React.createElement("div", { className: "subheading mb-3" }, "Associate's degree - Computer Programming/Programmer, Web Development"),
                        React.createElement("p", null, "GPA: 3.20")),
                    React.createElement("div", { className: "flex-shrink-0" },
                        React.createElement("span", { className: "text-primary" }, "August 2016 - May 2018"))))));
    };
    return Education;
}(React.PureComponent));
;
exports.default = react_redux_1.connect()(Education);
//# sourceMappingURL=Education.js.map