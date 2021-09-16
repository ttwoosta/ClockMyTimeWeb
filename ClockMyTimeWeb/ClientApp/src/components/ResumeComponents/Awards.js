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
var Awards = /** @class */ (function (_super) {
    __extends(Awards, _super);
    function Awards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Awards.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "resume-section-content" },
                React.createElement("h2", { className: "mb-5" }, "Certifications"),
                React.createElement("ul", { className: "fa-ul mb-0" },
                    React.createElement("li", null,
                        React.createElement("span", { className: "fa-li" },
                            React.createElement("i", { className: "fas fa-trophy text-warning" })),
                        "ASP.NET Core Identity: Authentication Management Certificate (2020)"),
                    React.createElement("li", null,
                        React.createElement("span", { className: "fa-li" },
                            React.createElement("i", { className: "fas fa-trophy text-warning" })),
                        "Building Applications with Angular, ASP.NET Core, and Entity Framework Core Certificate(2020)"),
                    React.createElement("li", null,
                        React.createElement("span", { className: "fa-li" },
                            React.createElement("i", { className: "fas fa-trophy text-warning" })),
                        "Learning React.js (2019)")))));
    };
    return Awards;
}(React.PureComponent));
;
exports.default = react_redux_1.connect()(Awards);
//# sourceMappingURL=Awards.js.map